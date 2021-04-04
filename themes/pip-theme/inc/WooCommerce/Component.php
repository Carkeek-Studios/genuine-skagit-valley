<?php
/**
 * WP_Rig\WP_Rig\AMP\Component class
 *
 * @package pip_theme
 */

namespace WP_Rig\WP_Rig\WooCommerce;

use Tribe__Template;
use WP_Rig\WP_Rig\Component_Interface;
use WP_Rig\WP_Rig\Templating_Component_Interface;

/**
 * Class for template helpers
 *
 * Exposes template tags:
 * * `pip_theme()->get_social_links()`
 *
 * @link https://wordpress.org/plugins/amp/
 */
class Component implements Component_Interface, Templating_Component_Interface {

	/**
	 * Gets the unique identifier for the theme component.
	 *
	 * @return string Component slug.
	 */
	public function get_slug() : string {
		return 'woocommerce';
	}

	/**
	 * Need this function even though its empty.
	 */
	public function initialize() {
		add_filter( 'pip_theme_js_files', array( $this, 'woocommerce_js_file' ) );
		add_filter( 'body_class', array( $this, 'woocommerce_body_classes' ) );
		add_action( 'widgets_init', array( $this, 'woocommerce_register_sidebars' ) );

		add_action( 'woocommerce_single_product_summary', array( $this, 'woocommerce_product_title' ), 9 ); // somehow this is missing.

		remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_price', 10 );
		remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 20 );
		// simply re-order these.
		add_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_price', 20 );
		add_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 10 );

		add_filter( 'woocommerce_output_related_products_args', array( $this, 'woocommerce_related_args' ) );
		add_filter( 'woocommerce_product_related_products_heading', array( $this, 'woocommerce_related_title' ) );
		add_filter( 'woocommerce_product_loop_end', array( $this, 'woocommerce_loop_end' ) );

		add_action( 'woocommerce_after_shop_loop', array( $this, 'woocommerce_add_shop_footer' ), 40 );

		// Dont show heading in description box on product page.
		add_filter( 'woocommerce_product_description_heading', '__return_false' );

		// Qty box on cart.
		add_filter( 'woocommerce_cart_item_quantity', array( $this, 'woocommerce_cart_qty' ) );

		add_filter( 'event_tickets_woo_should_default_ticket_sku', '__return_false' );

		add_action( 'save_post', array( $this, 'woocommerce_update_product_skus' ), 200, 2 );

		add_action( 'woocommerce_new_product_variation', array( $this, 'woocommerce_update_product_variation_skus' ), 200, 2 );

		add_action( 'pre_get_posts', array( $this, 'hide_tickets_from_search' ), 200, 2 );
	}

	/**
	 * Gets template tags to expose as methods on the Template_Tags class instance, accessible through `pip_theme()`.
	 *
	 * @return array Associative array of $method_name => $callback_info pairs. Each $callback_info must either be
	 *               a callable or an array with key 'callable'. This approach is used to reserve the possibility of
	 *               adding support for further arguments in the future.
	 */
	public function template_tags() : array {
		return array();
	}

	/** WooCommerce shop page - add body classes
	 *
	 * @param array $classes Array of current body classes.
	 */
	public function woocommerce_body_classes( $classes ) {
		if ( is_shop() ) {
			return array_merge( $classes, array( 'woocommerce-shop' ) );
		} else {
			return $classes;
		}
	}

	/** Place the Title within the WC Product content */
	public function woocommerce_product_title() {
		echo the_title( '<h1 class="product_title entry-title">', '</h1>' ); // phpcs:ignore
	}

	/** Add our Js File only on WC pages.
	 *
	 * @param array $js_files Array of existing js files to load.
	 */
	public function woocommerce_js_file( $js_files ) {
		if ( is_shop() || is_product_category() || is_product() || is_cart() ) {
			$js_files['pip-theme-woocommerce'] = array(
				'file'         => 'woo.min.js',
				'dependencies' => array( 'jquery' ),
				'in_footer'    => true,
			);
		}
		return $js_files;
	}

	/** Change related products to 3
	 *
	 * @param array $args Array a current query args.
	 */
	public function woocommerce_related_args( $args ) {
		$args = array(
			'posts_per_page' => 3,
			'columns'        => 3,
			'orderby'        => 'rand', // @codingStandardsIgnoreLine.
		);

		return $args;
	}

	/** Header on Related Products
	 *
	 * @param string $title Current Title.
	 */
	public function woocommerce_related_title( $title ) {
		$title = 'More in Store';
		return $title;
	}

	/** End of product loop add link to store */
	public function woocommerce_loop_end() {
		if ( is_shop() ) {
			return '</ul>';
		} else {
			$shop_page_url = wc_get_page_permalink( 'shop' );
			return '</ul><div class="woocommerce-loop-end"><a class="button is-style-cta" href="' . $shop_page_url . '">See all items</a></div>';
		}
	}

	/** Add sidebar to use on shop */
	public function woocommerce_register_sidebars() {
		register_sidebar(
			array(
				'name'          => esc_html__( 'Shop Page Footer', 'pip-theme' ),
				'id'            => 'shop-page-footer',
				'description'   => esc_html__( 'Displayed on the shop page', 'pip-theme' ),
				'before_widget' => '<div id="%1$s" class="shop-footer-widget widget %2$s">',
				'after_widget'  => '</div>',
				'before_title'  => '<h2 class="widget-title">',
				'after_title'   => '</h2>',
			)
		);
	}

	/** Add shop footer sidebar */
	public function woocommerce_add_shop_footer() {
		dynamic_sidebar( 'shop-page-footer' );

	}

	/** Set up qty on cart - doing it here to handle ajax
	 *
	 * @param string $quantity Html passed from template.
	 */
	public function woocommerce_cart_qty( $quantity ) {
		if ( strpos( $quantity, 'hidden' ) !== false ) {
			return '<div class="number-input number-input-fixed">' . $quantity . '</div>';
		} else {
			return '<div class="number-input number-input-variable"><button class="quantity-button minus">-<span class="screen-reader-text">Subtract 1</span></button>' . $quantity . '<button class="quantity-button plus">+<span class="screen-reader-text">Add 1</span></button></div>';
		}
	}

	/** Update SKUS on post save
	 *
	 * @param string $post_id ID of post.
	 * @param object $post current post object.
	 */
	public function woocommerce_update_product_skus( $post_id, $post ) {
		// return if autosave.
		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
			return;
		}
		if ( 'AUTO-DRAFT' === strtoupper( $post->post_title ) ) {
			return;
		}

		if ( 'product' === $post->post_type ) {
			$sku = get_post_meta( $post_id, '_sku', true );
			if ( empty( $sku ) ) {
				$str = strtoupper( $post->post_title );
				$sku = 'MERCH-PIP-' . str_replace( ' ', '-', $str );
				update_post_meta( $post_id, '_sku', $sku );
			} elseif ( strpos( $sku, 'CLASS-PIP' ) !== false ) {
				// putting this here because it does not work in the the create ticket hook.
					$cat = get_term_by( 'slug', 'class', 'product_cat' );
				if ( ! empty( $cat ) && ! is_wp_error( ( $cat ) ) ) {
					wp_set_post_terms( $post_id, $cat->term_id, 'product_cat', true );
				}
			}
		}

	}

	/** Update SKUS on post save
	 *
	 * @param string $post_id ID of post.
	 * @param object $product current product object.
	 */
	public function woocommerce_update_product_variation_skus( $post_id, $product ) {
		$var = get_post( $post_id );
		$str = strtoupper( $var->post_name );
		$sku = 'MERCH-PIP-' . str_replace( ' ', '-', $str );
		update_post_meta( $post_id, '_sku', $sku );
	}

	/**
	 * Hide Tickets from search
	 * Tickets automatically get set to hidden when created, we need to make sure that hidden items do not show up in search.
	 */
	public function hide_tickets_from_search( $query = false ) {
		if ( ! is_admin() && is_search() ) {
			$query->set(
				'tax_query',
				array(
					array(
						'taxonomy' => 'product_visibility',
						'terms'    => array( 'exclude-from-search' ),
						'field'    => 'slug',
						'operator' => 'NOT IN',
					),
				)
			);
		}
	}




}


