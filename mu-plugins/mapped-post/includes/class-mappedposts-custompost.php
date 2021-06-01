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
			'name'              => _x( 'Listing Categories', 'taxonomy general name', 'textdomain' ),
			'singular_name'     => _x( 'Listing Category', 'taxonomy singular name', 'textdomain' ),
			'search_items'      => __( 'Search Listing Categories', 'textdomain' ),
			'all_items'         => __( 'All Listing Categories', 'textdomain' ),
			'parent_item'       => __( 'Parent Listing Category', 'textdomain' ),
			'parent_item_colon' => __( 'Parent Listing Category:', 'textdomain' ),
			'edit_item'         => __( 'Edit Listing Category', 'textdomain' ),
			'update_item'       => __( 'Update Listing Category', 'textdomain' ),
			'add_new_item'      => __( 'Add New Listing Category', 'textdomain' ),
			'new_item_name'     => __( 'New Listing Category Name', 'textdomain' ),
			'menu_name'         => __( 'Listing Category', 'textdomain' ),
		);

		$args = array(
			'hierarchical'      => true,
			'labels'            => $labels,
			'show_ui'           => true,
			'show_admin_column' => true,
			'query_var'         => true,
			'rewrite'           => array( 'slug' => 'listing-category' ),
			'show_in_rest'      => true,
		);

		register_taxonomy( 'ck_listing_category', array( 'ck_members' ), $args );
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

				<!-- wp:carkeek-blocks/lightbox-gallery {"title":"GSV Member Gallery","displayAs":"gallery","columns":3,"imageLayout":"square","limitView":true,"viewLimit":3,"mobileScroll":true,"hideTitle":true,"sizeSlugThumbs":"large","align":"wide"} -->
<div class="wp-block-carkeek-blocks-lightbox-gallery alignwide"><ul class="ck-blocks-gallery-grid columns-3 fixed-images fixed-images-square mobile-scroll" data-title="GSV Member Gallery" id="wrappergallery-gsv-member-gallery"></ul></div>
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
	 * Return div that we add the data to from the front end app
	 */
	public function carkeek_blocks_render_custom_posttype_archive( $attributes ) {
		// this is an array, but we are only accepting single value, in the future that may change.
		$tax_urls = array();
		$taxes    = array();
		$base_url = get_rest_url() . 'wp/v2/';
		// ck_members?per_page=100&_fields=id,link,title,excerpt,ck_business_type,acf.member_address`
		// ${baseUrl}ck_business_type?per_page=100&_fields=id,count,name,slug,parent
		if ( ! empty( $attributes['taxonomySelected'] ) ) {
			if ( is_array( $attributes['taxonomySelected'] ) ) {
				foreach ( $attributes['taxonomySelected'] as $tax ) {
					$taxes[]    = $tax;
					$rest_url   = $base_url . $tax . '?per_page=100&_fields=id,count,name,slug,parent';
					$tax_urls[] = $rest_url;
				}
			} else {
				$tax        = $attributes['taxonomySelected'];
				$taxes[]    = $tax;
				$rest_url   = $base_url . $tax . '?per_page=100&_fields=id,count,name,slug,parent';
				$tax_urls[] = $rest_url;
			}
		}
		$tax_urls      = apply_filters( 'ck_maparchive_taxurl', $tax_urls, $attributes );
		$tax_rest_urls = implode( '|', $tax_urls );
		$data_taxes    = implode( ',', $taxes );

		$data_url = $base_url . $attributes['postTypeSelected'] . '?per_page=100&categories&_fields=id,link,title,excerpt,acf.member_address,' . $data_taxes;
		// TODO make this a setting;
		$include   = get_term_by( 'slug', 'places-to-visit', 'ck_listing_category' );
		$data_url .= '&ck_listing_category=' . $include->term_id;
		$data_url  = apply_filters( 'ck_maparchive_dataurl', $data_url, $attributes );
		$classname = 'wp-block-carkeek-map-archive';
		if ( isset( $attributes['align'] ) && ! empty( $attributes['align'] ) ) {
			$classname .= ' align' . $attributes['align'];
		}

		return '<div class="' . $classname . '"><div id="mapped-posts-map"
		data-post="' . $attributes['postTypeSelected'] . '"
		data-thumb="' . $attributes['popupImage'] . '"
		data-taxonomy="' . $data_taxes . '"
		data-taxurl="' . $tax_rest_urls . '"
		data-items="' . $data_url . '"
		data-address="' . $attributes['latFieldSelected'] . '"></div></div>';
	}

}

MappedPosts_CustomPost::register();


