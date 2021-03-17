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
	 * Need this function even though its empty
	 */
	public function initialize() {
		add_filter( 'pip_theme_js_files', array( $this, 'woocommerce_js_file' ) );
		add_filter( 'body_class', array( $this, 'woocommerce_body_classes' ) );
		add_action( 'widgets_init', array( $this, 'woocommerce_register_sidebars' ) );

		add_action( 'woocommerce_single_product_summary', array( $this, 'woocommerce_product_title' ), 9 ); // somehow this is missing

		remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_price', 10 );
		remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 20 );
		// simply re-order these
		add_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_price', 20 );
		add_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 10 );

		add_filter( 'woocommerce_output_related_products_args', array( $this, 'woocommerce_related_args' ) );
		add_filter( 'woocommerce_product_related_products_heading', array( $this, 'woocommerce_related_title' ) );
		add_filter( 'woocommerce_product_loop_end', array( $this, 'woocommerce_loop_end' ) );

		add_action( 'woocommerce_after_shop_loop', array( $this, 'woocommerce_add_shop_footer' ), 40 );

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

	/** WooCommerce shop page - add body classes */

	function woocommerce_body_classes( $classes ) {
		if ( is_shop() ) {
			return array_merge( $classes, array( 'woocommerce-shop' ) );
		} else {
			return $classes;
		}
	}



	/** Place the Title within the WC Product content */
	public function woocommerce_product_title() {
		echo the_title( '<h1 class="product_title entry-title">', '</h1>' );
	}

	/** Add our Js File */
	public function woocommerce_js_file( $js_files ) {
		if ( is_shop() || is_product_category() || is_product() ) {
			$js_files['pip-theme-woocommerce'] = array(
				'file'         => 'woo.min.js',
				'dependencies' => array( 'jquery' ),
				'in_footer'    => true,
			);
		}
		return $js_files;
	}

	/** Change related products to 3 */
	public function woocommerce_related_args( $args ) {
		$args = array(
			'posts_per_page' => 3,
			'columns'        => 3,
			'orderby'        => 'rand', // @codingStandardsIgnoreLine.
		);

		return $args;
	}

	/** Header on Related Products */
	public function woocommerce_related_title( $title ) {
		$title = 'More in Store';
		return $title;
	}

	/** End of product loop add link to store */

	public function woocommerce_loop_end() {
		if (is_shop()) {
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

	/** add shop footer sidebar */
	public function woocommerce_add_shop_footer() {
		dynamic_sidebar( 'shop-page-footer' );

	}

}


