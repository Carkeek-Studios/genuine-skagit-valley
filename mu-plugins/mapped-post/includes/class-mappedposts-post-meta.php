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

}

return new MappedPosts_Post_Meta();