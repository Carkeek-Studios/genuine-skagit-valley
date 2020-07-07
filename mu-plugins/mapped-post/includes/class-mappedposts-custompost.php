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
		add_filter( 'rest_prepare_protected_farms', array( $this, 'acf_to_rest_api' ), 10, 3 );
	}

	/**
	 * Register post type
	 */
	public function register_custompost() {
		register_post_type(
			'protected_farms',
			array(
				'labels'       => array(
					'name'          => __( 'Farms', 'textdomain' ),
					'singular_name' => __( 'Farm', 'textdomain' ),
					'menu_name'     => __( 'Protected Farms', 'textdomain' ),
				),
				'public'       => true,
				'has_archive'  => false,
				'rewrite'      => array( 'slug' => 'our-work/protected-farms' ),
				'menu_icon'    => 'dashicons-carrot',
				'supports'     => array( 'title', 'editor', 'thumbnail', 'page-attributes', 'excerpt', 'custom-fields' ),
				'show_in_rest' => true,
				'map_meta_cap' => true,
			)
		);
	}

	/**
	 * Add Blocks to Custom Post Template
	 */
	public function register_custompost_template() {
		$post_type_object           = get_post_type_object( 'protected_farms' );
		$post_type_object->template = array(
			array( 'mapped-posts/mappedpost-meta' ),
			array( 'mapped-posts/mappedpost-links' ),
			array(
				'core/heading',
				array(
					'level'     => '2',
					'className' => 'h6',
					'content'   => 'Current Farmer:',
				),
			),
			array( 'core/paragraph' ),
			array(
				'core/heading',
				array(
					'level'     => '2',
					'className' => 'h6',
					'content'   => 'Project Background:',
				),
			),
			array( 'core/paragraph' ),
			array(
				'core/heading',
				array(
					'level'     => '2',
					'className' => 'h6',
					'content'   => 'Property Description:',
				),
			),
			array( 'core/paragraph' ),
			array(
				'core/heading',
				array(
					'level'     => '2',
					'className' => 'h6',
					'content'   => 'Farm Products:',
				),
			),
			array( 'core/paragraph' ),
		);
	}
	/**
	 * Google Maps API Key for ACF
	 *
	 * TO DO ADD to Site Settings
	 */
	function my_acf_init() {

		acf_update_setting( 'google_api_key', 'AIzaSyC-DdEqDUuz3utdKfW_mk8b13H9tjlixo0' );
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
			$acf = get_fields( $post->id );
			error_log( print_r( $acf, true ) );
			$response->data['acf'] = $acf;
		}
		return $response;
	}

	/**
	 * Render Custom Post Type Archive
	 *
	 * @param array $attributes Attributes passed to callback.
	 * @return string HTML of dynamic content.
	 */
	public function carkeek_blocks_render_custom_posttype_archive( $attributes ) {
		if ( empty( $attributes['postTypeSelected'] ) ) {
			return;
		}
		$args  = array(
			'posts_per_page' => -1,
			'post_type'      => $attributes['postTypeSelected'],
		);
		$query = new WP_Query( $args );
		$posts = '';

		if ( $query->have_posts() ) {
			$posts .= '<div class="wp-block-mapped-posts-archive"><ul>';
			while ( $query->have_posts() ) {
				$query->the_post();
				global $post;
				$featured_image = '';
				$post_title     = '';
				$post_content   = '';
				$class_pre      = 'wp-block-mapped-posts-archive__';
				$class_excerpt  = '';
				$loc            = get_post_meta( $post->ID, 'lookup_location', true );
				if ( ! empty( $loc ) ) {

					// if ( true == $attributes['popupImage'] ) {
					// 	$featured_image  = '<a href="' . esc_url( get_the_permalink() ) . '" class="' . $class_pre . 'image-link">';
					// 	$featured_image .= get_the_post_thumbnail( null, 'medium_large' );
					// 	$featured_image .= '</a>';
					// }

					if ( true == $attributes['popupTitle'] ) {
						$post_title = '';
						if ( true !== get_post_meta( $post->ID, 'mappedposts_maponly', true ) ) {
							$post_title = '<a href="' . esc_url( get_the_permalink() ) . '" class="' . $class_pre . 'text-link">';
						}
						$post_title .= get_the_title();
						if ( true !== get_post_meta( $post->ID, 'mappedposts_maponly', true ) ) {
							$post_title .= '</a>';
						}
					}

					//if ( true == $attributes['popupExcerpt'] ) {
						$acres = get_post_meta( $post->ID, 'mappedposts_acreage', true );
						$location = get_post_meta( $post->ID, 'mappedposts_location', true );
						$post_content   = $acres . ' acres in ' . $location;
						$class_excerpt .= 'excerpt';
						$post_content   = '<div class="' . $class_pre . $class_excerpt . '">' . $post_content . '</div>';
					//}

					$posts .= '<li data-id="' . $post->ID . '" data-lat="' . $loc['lat'] . '" data-lng="' . $loc['lng'] . '">' . $featured_image . '<div class="' . $class_pre . 'content-wrap">' . $post_title . $post_content . '</div></li>';
				}
			}
			$posts .= '</ul></div>';
			wp_reset_postdata();
			return $posts;
		} else {
			return '<div>' . __( 'No Posts Found', 'carkeek-blocks' ) . '</div>';
		}
	}

}

MappedPosts_CustomPost::register();


