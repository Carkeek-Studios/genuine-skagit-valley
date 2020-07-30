<?php
/**
 * Register post meta.
 *
 * @package   MappedPosts
 * @author    Patty O'Hara from MappedPosts
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * MappedPosts_Post_Meta Class
 *
 * @since 1.6.0
 */
class MappedPosts_Post_Meta {

	/**
	 * Constructor
	 */
	public function __construct() {
		add_filter( 'init', array( $this, 'register_meta' ) );
		add_action( 'save_post', array( $this, 'set_farm_excerpt' ) );
		add_action( 'rest_api_init', array( $this, 'pass_metafields_to_restapi' ) );
	}

	/**
	 * Register meta.
	 */
	public function register_meta() {
		register_post_meta(
			'protected_farms',
			'mappedposts_location',
			array(
				'show_in_rest' => true,
				'single'       => true,
				'type'         => 'string',
			)
		);

		register_post_meta(
			'protected_farms',
			'mappedposts_acreage',
			array(
				'show_in_rest' => true,
				'single'       => true,
				'type'         => 'number',

			)
		);

		register_post_meta(
			'protected_farms',
			'mappedposts_date',
			array(
				'show_in_rest' => true,
				'single'       => true,
				'type'         => 'number',

			)
		);

		register_post_meta(
			'protected_farms',
			'mappedposts_maponly',
			array(
				'show_in_rest' => true,
				'single'       => true,
				'type'         => 'boolean',

			)
		);

	}

	function set_farm_excerpt( $post_id ) {
		if ( ! wp_is_post_revision( $post_id ) && 'protected_farms' === get_post_type( $post_id ) ) {

			// unhook this function so it doesn't loop infinitely.
			remove_action( 'save_post', array( $this, 'set_farm_excerpt' ) );

			$acreage  = get_post_meta( $post_id, 'mappedposts_acreage', true );
			$location = get_post_meta( $post_id, 'mappedposts_location', true );
			$update   = array(
				'ID'           => $post_id,
				'post_excerpt' => $acreage . ' acres in ' . $location,
			);
			wp_update_post( $update );

			// re-hook this function.
			add_action( 'save_post', array( $this, 'set_farm_excerpt' ) );
		}
	}

	public function pass_metafields_to_restapi() {
		register_rest_field(
			'type',
			'metafields',
			array(
				'get_callback' => function( $postype_arr ) {
					$post_type = $postype_arr['slug'];
					$meta_fields = $this->getFieldsForPostType( $post_type );
					return $meta_fields;
				},
				'schema'       => array(
					'description' => __( 'Meta Fields for Post Type' ),
					'type'        => 'array',
				),
			)
		);
	}

		/**
		 * Get all custom fields associated with a post type
		 *
		 * @param string post_type
		 * @return array
		 */
	public function getFieldsForPostType( $post_type, $show_hidden = false ) {
		global $wpdb;
		$post_table = $wpdb->prefix . 'posts';
		$meta_table = $wpdb->prefix . 'postmeta';
		if ( $show_hidden ) {
			$sql = "SELECT DISTINCT meta_key FROM $post_table AS p LEFT JOIN $meta_table AS m ON m.post_id = p.id WHERE p.post_type = '$post_type' AND meta_key NOT LIKE ''";
		} else {
			$sql = "SELECT DISTINCT meta_key FROM $post_table AS p LEFT JOIN $meta_table AS m ON m.post_id = p.id WHERE p.post_type = '$post_type' AND meta_key NOT LIKE '\_%'";
		}
		$results = $wpdb->get_results( $sql );
		return $results;
	}

}

return new MappedPosts_Post_Meta();
