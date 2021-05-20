<?php
/**
 * Load assets for our blocks.
 *
 * @package   MappedPosts
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
class MappedPosts_CustomPost {

	/**
	 * This plugin's instance.
	 *
	 * @var MappedPosts_CustomPost
	 */
	private static $instance;

	/**
	 * Registers the plugin.
	 */
	public static function register() {
		if ( null === self::$instance ) {
			self::$instance = new MappedPosts_CustomPost();
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
		add_action( 'init', array( $this, 'register_custompost' ) );
		add_action( 'init', array( $this, 'register_custompost_template' ), 9999 );
		add_action( 'acf/init', array( $this, 'my_acf_init' ) );
		add_filter( 'rest_prepare_ck_members', array( $this, 'acf_to_rest_api' ), 10, 3 );
		add_action( 'acf/save_post', array( $this, 'acf_save_post' ) );
	}

	/**
	 * Register post type
	 */
	public function register_custompost() {
		register_post_type(
			'ck_members',
			array(
				'labels'       => array(
					'name'          => __( 'Members', 'textdomain' ),
					'singular_name' => __( 'Members', 'textdomain' ),
					'menu_name'     => __( 'GSV Members', 'textdomain' ),
				),
				'public'       => true,
				'has_archive'  => false,
				'rewrite'      => array(
					'slug'       => 'members',
					'with_front' => false,
				),
				'menu_icon'    => 'dashicons-carrot',
				'supports'     => array( 'title', 'editor', 'thumbnail', 'page-attributes', 'excerpt', 'custom-fields' ),
				'show_in_rest' => true,
				'map_meta_cap' => true,
			)
		);

		// Add new taxonomy, make it hierarchical (like categories)
		$labels = array(
			'name'              => _x( 'Member Types', 'taxonomy general name', 'textdomain' ),
			'singular_name'     => _x( 'Member Type', 'taxonomy singular name', 'textdomain' ),
			'search_items'      => __( 'Search Member Types', 'textdomain' ),
			'all_items'         => __( 'All Member Types', 'textdomain' ),
			'parent_item'       => __( 'Parent Member Type', 'textdomain' ),
			'parent_item_colon' => __( 'Parent Member Type:', 'textdomain' ),
			'edit_item'         => __( 'Edit Member Type', 'textdomain' ),
			'update_item'       => __( 'Update Member Type', 'textdomain' ),
			'add_new_item'      => __( 'Add New Member Type', 'textdomain' ),
			'new_item_name'     => __( 'New Member Type Name', 'textdomain' ),
			'menu_name'         => __( 'Member Type', 'textdomain' ),
		);

		$args = array(
			'hierarchical'      => true,
			'labels'            => $labels,
			'show_ui'           => true,
			'show_admin_column' => true,
			'query_var'         => true,
			'rewrite'           => array( 'slug' => 'type' ),
			'show_in_rest'      => true,
		);

		register_taxonomy( 'ck_members_type', array( 'ck_members' ), $args );

		// Add new taxonomy, make it hierarchical (like categories)
		$labels = array(
			'name'              => _x( 'Business Types', 'taxonomy general name', 'textdomain' ),
			'singular_name'     => _x( 'Business Type', 'taxonomy singular name', 'textdomain' ),
			'search_items'      => __( 'Search Business Types', 'textdomain' ),
			'all_items'         => __( 'All Business Types', 'textdomain' ),
			'parent_item'       => __( 'Parent Business Type', 'textdomain' ),
			'parent_item_colon' => __( 'Parent Business Type:', 'textdomain' ),
			'edit_item'         => __( 'Edit Business Type', 'textdomain' ),
			'update_item'       => __( 'Update Business Type', 'textdomain' ),
			'add_new_item'      => __( 'Add New Business Type', 'textdomain' ),
			'new_item_name'     => __( 'New Business Type Name', 'textdomain' ),
			'menu_name'         => __( 'Business Type', 'textdomain' ),
		);

		$args = array(
			'hierarchical'      => true,
			'labels'            => $labels,
			'show_ui'           => true,
			'show_admin_column' => true,
			'query_var'         => true,
			'rewrite'           => array( 'slug' => 'business-type' ),
			'show_in_rest'      => true,
		);

		register_taxonomy( 'ck_business_type', array( 'ck_members' ), $args );
	}

	/**
	 * Add Blocks to Custom Post Template
	 */
	public function register_custompost_template() {
		$post_type_object           = get_post_type_object( 'ck_members' );
		$post_type_object->template = array(
			array( 'core/paragraph' ),
			array(
				'carkeek-blocks/lightbox-gallery',
				array(
					'title'       => 'GSV Member Gallery',
					'displayAs'   => 'gallery',
					'limitView'   => true,
					'hideTitle'   => true,
					'align'       => 'wide',
					'columns'     => 3,
					'imageLayout' => 'square',
					'viewLimit'   => 3,
				),
			),
		);

		// use the same template as a pattern for imported items

		register_block_pattern_category(
			'members',
			array( 'label' => __( 'Members', 'ck_members' ) )
		);
		register_block_pattern(
			'ck_members/members-pattern',
			array(
				'title'       => __( 'Member Page Template', 'member-page-template' ),

				'description' => _x( 'Includes details block, space for paragraph text and an image.', 'Block pattern description', 'ck_members' ),

				'content'     => '<!-- wp:paragraph -->
				<p></p>
				<!-- /wp:paragraph -->

				<!-- wp:carkeek-blocks/lightbox-gallery {"title":"GSV Member Gallery","displayAs":"gallery","columns":3,"imageLayout":"square","limitView":true,"viewLimit":3,"hideTitle":true,"blockId":"1bba0d66-55d7-4c3f-a0b5-3861b5e66b0e","align":"wide"} -->
				<div class="wp-block-carkeek-blocks-lightbox-gallery alignwide"><ul class="ck-blocks-gallery-grid columns-3 fixed-images fixed-images-square" data-title="GSV Member Gallery" id="wrappergallery-gsv-member-gallery"></ul></div>
				<!-- /wp:carkeek-blocks/lightbox-gallery -->',

				'categories'  => array( 'members' ),
			)
		);
	}
	/**
	 * Google Maps API Key for ACF
	 *
	 * TO DO ADD to Site Settings
	 */
	function my_acf_init() {

		acf_update_setting( 'google_api_key', 'AIzaSyC-DdEqDUuz3utdKfW_mk8b13H9tjlixo0' );

		// Check function exists.
		if ( function_exists( 'acf_register_block_type' ) ) {
			// Register a testimonial block.
			acf_register_block_type(
				array(
					'name'            => 'member_contact',
					'title'           => __( 'Member Location & Contact Details' ),
					'description'     => __( 'Contact details for the member.' ),
					'render_template' => plugin_dir_path( dirname( __FILE__ ) ) . 'templates/member-details.php',
					'category'        => 'widgets',
					'icon'            => 'location',
					'keywords'        => array( 'member', 'contact', 'address' ),
				)
			);
		}

	}

	/**
	 * Pass ACF Fields to rest API
	 */
	public function acf_to_rest_api( $response, $post, $request ) {
		$featured_image_id  = $response->data['featured_media']; // get featured image id
		$featured_image_url = wp_get_attachment_image_src( $featured_image_id, 'original' ); // get url of the original size

		if ( $featured_image_url ) {
			$response->data['featured_image_url'] = $featured_image_url[0];
		}

		if ( ! function_exists( 'get_fields' ) ) {
			return $response;
		}

		if ( isset( $post ) ) {
			$acf                   = get_fields( $post->id );
			$response->data['acf'] = $acf;
		}
		return $response;
	}

	/** Get the excerpt with a limit
	 *
	 * @param int $limit number of words to limit  the excerpt
	 */
	public static function excerpt( $limit ) {
		$excerpt = explode( ' ', get_the_excerpt(), $limit );
		if ( count( $excerpt ) >= $limit ) {
			array_pop( $excerpt );
			$excerpt = implode( ' ', $excerpt ) . '...';
		} else {
			$excerpt = implode( ' ', $excerpt );
		}
		$excerpt = preg_replace( '`[[^]]*]`', '', $excerpt );
		return $excerpt;
	}

	/**
	 * Recursively sort an array of taxonomy terms hierarchically. Child categories will be
	 * placed under a 'children' member of their parent term.
	 *
	 * @param Array   $cats     taxonomy term objects to sort
	 * @param Array   $into     result array to put them in
	 * @param integer $parent_id the current parent ID to put them in
	 */
	public static function sort_terms_hierarchically( array &$cats, array &$into, $parent_id = 0 ) {
		foreach ( $cats as $i => $cat ) {
			if ( $cat->parent === $parent_id ) {
				$into[] = $cat;
				unset( $cats[ $i ] );
			}
		}

		foreach ( $into as $top_cat ) {
			$top_cat->children = array();
			self::sort_terms_hierarchically( $cats, $top_cat->children, $top_cat->term_id );
		}
	}



	/**
	 * Build the list for the terms from the hierarchical list
	 * child terms are in the 'children' items
	 *
	 * @param Array $cats     hierarchical list of term objects
	 */
	public static function build_terms_list( $cats, $tax ) {
		$html = '<ul>';
		foreach ( $cats as $i => $cat ) {
			$term_id = $tax . '-' . $cat->slug;
			$html   .= '<li data-id="' . $cat->term_id . '"><input type="checkbox" value="' . $cat->slug . '" id="' . $term_id . '"><label for="' . $term_id . '">' . $cat->name . '</label>';
			if ( ! empty( $cat->children ) ) {
				$html .= self::build_terms_list( $cat->children, $tax );
			}
			$html .= '</li>';
		}
		$html .= '</ul>';

		return $html;
	}

	/**
	 * Render Custom Post Type Archive
	 *
	 * @param array $attributes Attributes passed to callback.
	 * @return string HTML of dynamic content.
	 */
	public function carkeek_blocks_render_custom_posttype_archive_old( $attributes ) {
		if ( empty( $attributes['postTypeSelected'] ) ) {
			return;
		}

		var_dump( $attributes );
		$args  = array(
			'posts_per_page' => -1,
			'post_type'      => $attributes['postTypeSelected'],
			'orderby'        => 'title',
			'order'          => 'ASC',
		);
		$query = new WP_Query( $args );
		$posts = '';

		if ( empty( $attributes['latFieldSelected'] ) || empty( $attributes['lngFieldSelected'] ) ) {
			return 'You need to select the location fields in order to display posts on a map, edit the page and select the fields in the block settings';
		}

		$taxonomies = $attributes['taxonomySelected'];
		$taxfilters = '';
		if ( ( true == $attributes['mapAddFilter'] ) && ! empty( $taxonomies ) ) {
			$form = '';
			foreach ( $taxonomies as $tax ) {
				$categories         = get_terms( $tax, array( 'hide_empty' => true ) );
				$category_hierarchy = array();
				self::sort_terms_hierarchically( $categories, $category_hierarchy );
				$form .= self::build_terms_list( $category_hierarchy, $tax );
			}
			// want to make this flexible for future if we have levels of hierarchy...
			$taxfilters  = '<div id="mapped-post-filters">';
			$taxfilters .= $form;
			$taxfilters .= '</div>';
		}

		if ( $query->have_posts() ) {

			$posts .= '<div class="wp-block-mapped-posts-archive"><div id="mapped-posts-map"></div><div id="mapped-posts-content"><ol id="mapped-posts-data">';
			$count  = 1;
			while ( $query->have_posts() ) {
				$query->the_post();
				global $post;

				$lat            = get_post_meta( $post->ID, $attributes['latFieldSelected'], true );
				$lat            = is_array( $lat ) && isset( $lat['lat'] ) ? $lat['lat'] : $lat;
				$lng            = get_post_meta( $post->ID, $attributes['lngFieldSelected'], true );
				$lng            = is_array( $lng ) && isset( $lng['lng'] ) ? $lng['lng'] : $lng;
				$featured_image = '';
				$post_title     = '';
				$class_pre      = 'wp-block-mapped-posts-archive__';

				if ( ! empty( $lat ) && ! empty( $lng ) ) {

					$featured_image = '';
					if ( has_post_thumbnail() && true == $attributes['popupImage'] ) {
						$featured_image = '<div class="post-thumb">' . get_the_post_thumbnail( null, 'medium_large' ) . '</div>';
					}
					$title_class = '';
					if ( false == $attributes['popupTitle'] ) {
						$title_class = 'hidden';
					}
					$post_title = '<h2 class="post-title" class="' . $title_class . '"><a href="' . get_the_permalink() . '">' . get_the_title() . '</a></h2>';
					$excerpt    = '';
					if ( true == $attributes['popupExcerpt'] ) {
						$limit   = $attributes['excerptLength'];
						$excerpt = '<div class="post-excerpt">' . self::excerpt( $limit ) . '</div>';
					}
					$my_taxes = '';
					if ( ! empty( $taxonomies ) ) {
						foreach ( $taxonomies as $taxonomy ) {
							$my_terms  = get_the_terms( $post, $taxonomy );
							$add_terms = array();
							if ( false !== $my_terms ) {
								foreach ( $my_terms as $my_term ) {
									$add_terms [] = $my_term->slug;
								}
							}
							if ( ! empty( $add_terms ) ) {
								$my_taxes .= 'data-' . $taxonomy . '="' . implode( ',', $add_terms ) . '"';
							}
						}
					}

					$learn_more = wp_sprintf( '<a href="%1s">Learn More <span class="screen-reader-text">%2s</span></a>', get_the_permalink(), get_the_title() );

					$posts .= '<li data-id="' . $post->ID . '" data-lat="' . $lat . '" data-lng="' . $lng . '" data-count="' . $count . '"' . $my_taxes . '>' . $featured_image . '<div class="' . $class_pre . 'content-wrap">' . $post_title . $excerpt . $learn_more . '</div></li>';
					$count++;
				}
			}
			$posts .= '</ol></div>' . $taxfilters . '</div>';
			wp_reset_postdata();
			return $posts;
		} else {
			return '<div>' . __( 'No Posts Found', 'carkeek-blocks' ) . '</div>';
		}
	}
	/**
	 * Return div that we add the data to from the front end app
	 */
	public function carkeek_blocks_render_custom_posttype_archive( $attributes ) {
		$taxonomies = '';
		if ( ! empty( $attributes['taxonomySelected'] ) ) {
			$taxonomies = implode( ',', $attributes['taxonomySelected'] );
		}
		$classname = 'wp-block-carkeek-map-archive';
		if ( isset( $attributes['align'] ) && ! empty( $attributes['align'] ) ) {
			$classname .= ' align' . $attributes['align'];
		}
		return '<div class="' . $classname . '"><div id="mapped-posts-map"
		data-post="' . $attributes['postTypeSelected'] . '"
		data-thumb="' . $attributes['popupImage'] . '"
		data-taxonomies="' . $taxonomies . '"
		data-address="' . $attributes['latFieldSelected'] . '"></div></div>';
	}

}

MappedPosts_CustomPost::register();


