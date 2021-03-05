<?php
/**
 * Load assets for our blocks.
 *
 * @package   CarkeekBlocks
 * @author    Patty O'Hara
 * @link      https://carkeekstudios.com
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Load general assets for our blocks.
 *
 * @since 1.0.0
 */
class CarkeekBlocks_CustomPost {

	/**
	 * This plugin's instance.
	 *
	 * @var CarkeekBlocks_CustomPost
	 */
	private static $instance;

	/**
	 * Registers the plugin.
	 */
	public static function register() {
		if ( null === self::$instance ) {
			self::$instance = new CarkeekBlocks_CustomPost();
		}
	}

	/**
	 * The Plugin slug.
	 *
	 * @var string $slug
	 */
	private $slug;

	/**
	 * The base URL path (without trailing slash).
	 *
	 * @var string $url
	 */
	private $url;

	/**
	 * The Plugin version.
	 *
	 * @var string $version
	 */
	private $version;

	/**
	 * The Constructor.
	 */
	private function __construct() {
		add_action( 'init', array( $this, 'carkeek_blocks_register_customlinks' ) );
		add_filter( 'rest_post_collection_params', array( $this, 'ckb_prefix_add_rest_orderby_params' ), 10, 1 );
	}

	/**
	 * Register post type - TODO Admin Screen whether to activate or not
	 */
	public function carkeek_blocks_register_customlinks() {
		$labels = array(
			'name'                  => _x( 'Custom Links', 'Post Type General Name', 'text_domain' ),
			'singular_name'         => _x( 'Custom Link', 'Post Type Singular Name', 'text_domain' ),
			'menu_name'             => __( 'Custom Link', 'text_domain' ),
			'name_admin_bar'        => __( 'Custom Link', 'text_domain' ),
			'archives'              => __( 'Link Archives', 'text_domain' ),
			'attributes'            => __( 'Link Attributes', 'text_domain' ),
			'parent_item_colon'     => __( 'Parent Link:', 'text_domain' ),
			'all_items'             => __( 'All Links', 'text_domain' ),
			'add_new_item'          => __( 'Add New Link', 'text_domain' ),
			'add_new'               => __( 'Add New', 'text_domain' ),
			'new_item'              => __( 'New Link', 'text_domain' ),
			'edit_item'             => __( 'Edit Link', 'text_domain' ),
			'update_item'           => __( 'Update Link', 'text_domain' ),
			'view_item'             => __( 'View Link', 'text_domain' ),
			'view_items'            => __( 'View Links', 'text_domain' ),
			'search_items'          => __( 'Search Link', 'text_domain' ),
			'not_found'             => __( 'Not found', 'text_domain' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'text_domain' ),
			'featured_image'        => __( 'Featured Image', 'text_domain' ),
			'set_featured_image'    => __( 'Set featured image', 'text_domain' ),
			'remove_featured_image' => __( 'Remove featured image', 'text_domain' ),
			'use_featured_image'    => __( 'Use as featured image', 'text_domain' ),
			'insert_into_item'      => __( 'Insert into item', 'text_domain' ),
			'uploaded_to_this_item' => __( 'Uploaded to this item', 'text_domain' ),
			'items_list'            => __( 'Links list', 'text_domain' ),
			'items_list_navigation' => __( 'Links list navigation', 'text_domain' ),
			'filter_items_list'     => __( 'Filter items list', 'text_domain' ),
		);
		$args   = array(
			'label'               => __( 'Custom Link', 'wp-rig' ),
			'description'         => __( 'Add Custom Links to create dynamic lists of links', 'wp-rig' ),
			'labels'              => $labels,
			'supports'            => array( 'title', 'page-attributes' ),
			'hierarchical'        => false,
			'public'              => true,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'menu_position'       => 5,
			'menu_icon'           => 'dashicons-admin-links',
			'show_in_admin_bar'   => false,
			'show_in_nav_menus'   => true,
			'can_export'          => true,
			'has_archive'         => false,
			'exclude_from_search' => true,
			'publicly_queryable'  => true,
			'capability_type'     => 'page',
			'show_in_rest'        => true,
			'rest_base'           => 'custom-links',
		);
		register_post_type( 'custom_link', $args );

		$labels = array(
			'name'          => _x( 'Link List Categories', 'Taxonomy General Name', 'wp-rig' ),
			'singular_name' => _x( 'Link List Category', 'Taxonomy Singular Name', 'wp-rig' ),
			'menu_name'     => __( 'Link List Categories', 'wp-rig' ),
		);
		$args   = array(
			'labels'            => $labels,
			'hierarchical'      => true,
			'public'            => true,
			'show_ui'           => true,
			'show_admin_column' => true,
			'show_in_nav_menus' => true,
			'show_tagcloud'     => true,
			'show_in_rest'      => true,
		);
		register_taxonomy( 'link_list', array( 'custom_link' ), $args );

	}

	/**
	 * Allow for random in the REST API
	 *
	 * * @param array $params Attributes passed to callback.
	 */
	public function ckb_prefix_add_rest_orderby_params( $params ) {
		$params['orderby']['enum'][] = 'rand';

		return $params;
	}
	/**
	 * Render Custom Post Type Archive
	 *
	 * @param array $attributes Attributes passed to callback.
	 * @return string HTML of dynamic content.
	 */
	public function carkeek_blocks_render_custom_posttype_archive( $attributes ) {
		$ck_blocks_template_loader = new Carkeek_Blocks_Template_Loader();

		if ( empty( $attributes['postTypeSelected'] ) ) {
			return;
		}
		$layout = $attributes['postLayout'];
		$args   = array(
			'posts_per_page' => $attributes['numberOfPosts'],
			'post_type'      => $attributes['postTypeSelected'],
			'order'          => $attributes['order'],
			'orderby'        => $attributes['sortBy'],
		);

		if ( true === $attributes['filterByTaxonomy'] && ! empty( $attributes['taxonomySelected'] ) && ! empty( $attributes['taxTermsSelected'] ) ) {
			$args['tax_query'] = array(
				array(
					'taxonomy' => $attributes['taxonomySelected'],
					'field'    => 'term_id',
					'terms'    => explode( ',', $attributes['taxTermsSelected'] ),
				),
			);
		}

		$args  = apply_filters( 'carkeek_block_custom_post_layout_' . $attributes['postTypeSelected'] . '__query_args', $args, $attributes );
		$query = new WP_Query( $args );
		$posts = '';

		$class_pre         = 'wp-block-carkeek-blocks-custom-archive';
		$css_classes_outer = array(
			$class_pre,
			'is-' . $attributes['postLayout'],
			'post-type-' . $attributes['postTypeSelected'],
			'align' . $attributes['align'],
		);

		$css_classes_outer = apply_filters( 'carkeek_block_custom_post_layout__css_classes_outer', $css_classes_outer, $attributes );
		$block_start       = '<div class="' . implode( ' ', $css_classes_outer ) . '">';
		if ( ! empty( $attributes['headline'] ) ) {
			$tag_name     = 'h' . $attributes['headlineLevel'];
			$block_start .= '<' . $tag_name . ' class="' . $class_pre . '__headline">' . $attributes['headline'] . '</' . $tag_name . '>';
		}
		if ( $query->have_posts() ) {
			$posts           .= $block_start;
			$css_classes_list = array(
				$class_pre . '__list',
			);
			if ( 'link-tile' === $layout ) {
				$css_classes_list[] = 'wp-block-carkeek-blocks-link-tiles';
				$css_classes_list[] = 'wp-block-columns';
			}

			$css_classes_list = apply_filters( 'carkeek_block_custom_post_layout__css_classes_list', $css_classes_list, $attributes );
			$posts           .= '<div class="' . implode( ' ', $css_classes_list ) . '">';
			$count            = 0;
			while ( $query->have_posts() ) {
				$query->the_post();
				global $post;

				$css_classes_item = array(
					$class_pre . '__item',
				);
				if ( 'link-tile' === $layout ) {
					$css_classes_item[] = 'wp-block-carkeek-blocks-link-tile';
					$css_classes_item[] = 'wp-block-column';
					$css_classes_item[] = 'has-' . CarkeekBlocks_Post_Meta::get_selected_or_random_color( $post->ID, $count ) . '-background-color';
				}

				$css_classes_list = apply_filters( 'carkeek_block_custom_post_layout__css_classes_item', $css_classes_item, $attributes );

				$post_title     = get_the_title();
				$featured_image = get_the_post_thumbnail_url( null, 'medium_large' );
				$excerpt        = '';

				if ( true == $attributes['displayPostExcerpt'] ) {
					$excerpt = get_the_excerpt();
					$limit   = $attributes['excerptLength'];
					if ( str_word_count( $excerpt, 0 ) > $limit ) {
						$words   = str_word_count( $excerpt, 2 );
						$pos     = array_keys( $words );
						$excerpt = substr( $excerpt, 0, $pos[ $limit ] );
					}
				}
				$permalink = apply_filters( 'carkeek_block_custom_post_' . $attributes['postTypeSelected'] . '__link', get_permalink(), $post->ID, $attributes );
				if ( 'tribe_organizer' == $attributes['postTypeSelected'] ) {
					ob_start();
					//TODO name the files by post type check for content by post type and if empty go to the fallback below (which can be cleaned up)
					$ck_blocks_template_loader->get_template_part( 'custom-archive/tribe_organizer_item' );
					$post_html = ob_get_clean();
					var_dump($post_html);
				} else {
					$post_html = '<div class="' . implode( ' ', $css_classes_item ) . '">';
					if ( 'link-tile' == $attributes['postLayout'] ) {
						$post_html .= '<a class="wp-block-carkeek-blocks-link-tile__link wp-block-carkeek-blocks-link-tile__inner" href="' . esc_url( $permalink ) . '">
										<div style="background-image:url(' . $featured_image . ')"
											class="wp-block-carkeek-blocks-link-tile__img wp-block-carkeek-blocks-link-tile__inner"
											>
											<span class="link-tile__title">' . $post_title . '</span>
										</div>
										<span class="link-tile__hover_title">' . $excerpt . '</span>
										</a>';
					} else {

						$post_html .= '<a class="' . $class_pre . '__image_link" href="' . esc_url( $permalink ) . '">
										<img src="' . $featured_image . '"/>
									</a>
									<div class="' . $class_pre . '__content-wrap">
										<a class="' . $class_pre . '__title_link" href="' . esc_url( $permalink ) . '"><h2>' . $post_title . '</h2></a>';
						if ( ! empty( $excerpt ) ) {
								$post_html .= '<div class="' . $class_pre . '__excerpt">' . $excerpt . '</div>';
						}
						$post_html .= '</div>';
					}
					$post_html .= '</div>';
				}
				$posts     .= apply_filters( 'carkeek_block_custom_post_layout', $post_html, $post, $attributes );
				$count++;

				$posts .= '</div></div>';
			}
			wp_reset_postdata();
			return $posts;
		} else {
			if ( false === $attributes['hideIfEmpty'] ) {
				$block_content = '<div class="' . $class_pre . '__list empty">' . $attributes['emptyMessage'] . '</div>';
				return $block_start . $block_content . '</div>';
			} else {
				return;
			}
		}
	}

	public static function make_custom_link( $link ) {

		$href = get_field( 'cl_external_link', $link->ID );
		if ( ! empty( $href ) ) {
			$link_type = 'external';
		} else {
			$href = get_field( 'cl_pdf_link', $link->ID );
			if ( ! empty( $href ) ) {
				$link_type = 'pdf';
			} else {
				$href      = get_field( 'cl_page_link', $link->ID );
				$link_type = 'page';
			}
		}
		if ( empty( $href ) ) {
			$item = $link->post_title;
		} else {
			$item = '<a href="' . esc_url( $href ) . '">' . $link->post_title . '</a>';
		}

		$notes = get_field( 'cl_notes', $link->ID );

		if ( ! empty( $notes ) ) {
			$item .= '<div class="cll-notes">(' . $notes . ')</div>';
		}
		return '<li>' . $item . '</li>';

	}

	public function carkeek_blocks_render_custom_linklist( $attributes ) {
		if ( empty( $attributes['listSelected'] ) ) {
			return;
		}
		$layout    = $attributes['postLayout'];
		$args      = array(
			'numberposts' => -1,
			'post_type'   => 'custom_link',
			'order'       => $attributes['order'],
			'post_status' => 'publish',
			'orderby'     => $attributes['sortBy'],
		);
		$post_args = $args;

		// first get all posts with no sub cat selected

		$subcats           = get_term_children( $attributes['listSelected'], 'link_list' );
		$args['tax_query'] = array(
			'relation' => 'AND',
			array(
				'taxonomy' => 'link_list',
				'field'    => 'term_id',
				'terms'    => explode( ',', $attributes['listSelected'] ),
			),
			array(
				'taxonomy' => 'link_list',
				'field'    => 'term_id',
				'terms'    => $subcats,
				'operator' => 'NOT IN',
			),
		);

		$links      = get_posts( $args );
		$list_style = '';
		if ( true == $attributes['makeCollapsible'] ) {
			$list_style .= ' carkeek-blocks-accordion mini';
		}
		$block_content = '<div class="wp-block-carkeek-custom-link-list' . esc_attr( $list_style ) . '">';

		if ( ! empty( $attributes['headline'] ) ) {
			$tag_name       = 'h' . $attributes['headlineLevel'];
			$block_content .= '<' . $tag_name . ' class="cll-headline">' . $attributes['headline'] . '</' . $tag_name . '>';
		}

		if ( ! empty( $links ) ) {
			$block_content .= '<ul class="cll-list no-bullets">';
			foreach ( $links as $link ) {
				$block_content .= self::make_custom_link( $link );
			}
			$block_content .= '</ul>';
		}

		if ( ! empty( $subcats ) ) {
			foreach ( $subcats as $cat ) {
				$term                   = get_term( $cat, 'link_list' );
				$post_args['tax_query'] = array(
					array(
						'taxonomy' => 'link_list',
						'field'    => 'term_id',
						'terms'    => explode( ',', $cat ),
					),
				);
				$sub_links              = get_posts( $post_args );
				if ( ! empty( $sub_links ) ) {
					$list_style = '';
					$list_id    = 'link_list_' . esc_attr( $attributes['listSelected'] ) . '_' . esc_attr( $term->term_id );
					$list_label = 'link_list_label_' . esc_attr( $attributes['listSelected'] ) . '_' . esc_attr( $term->term_id );

					$block_content .= '<div class="cll-label ckb-accordion-label" id="' . esc_attr( $list_label ) . '">' . $term->name . '</div>';
					$block_content .= '<ul class="cll-list ckb-accordion-panel no-bullets" id="' . esc_attr( $list_id ) . '" aria-labellledby="' . esc_attr( $list_label ) . '">';
					foreach ( $sub_links as $sub ) {
						$block_content .= self::make_custom_link( $sub );
					}
					$block_content .= '</ul>';
				}
			}
		}

		$block_content .= '</div>';
		return $block_content;

	}

}

CarkeekBlocks_CustomPost::register();


