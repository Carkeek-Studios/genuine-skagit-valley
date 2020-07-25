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
		if ( ! wp_is_post_revision( $post_id ) && 'protected_farms' === get_post_type( $post_id )) {

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

}

return new MappedPosts_Post_Meta();
