<?php
/**
 * WP_Rig\WP_Rig\AMP\Component class
 *
 * @package pip_theme
 */

namespace WP_Rig\WP_Rig\CKBlocks_Overrides;

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
		return 'overrides';
	}

	/**
	 * Need this function even though its empty
	 */
	public function initialize() {
		add_action( 'ck_custom_archive_layout__after_title', array( $this, 'ck_blocks_custom_archive_after_title' ), 10, 1 );
		add_action( 'admin_menu', array( $this, 'remove_menu_items' ) );
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

	/**
	 * Override to custom archive item
	 * place content after the title
	 *
	 * @param object $data holds the block properties.
	 */
	public function ck_blocks_custom_archive_after_title( $data ) {
		global $post;
		if ( 'tribe_organizer' === $post->post_type ) {
			$role = get_post_meta( $post->ID, 'organizers_role', true );
			if ( ! empty( $role ) ) {
				echo wp_kses_post( '<div class="ck-item-organizer_role">' . $role . '</div>' );
			}
		} elseif ( 'tribe_events' === $post->post_type ) {
			echo wp_kses_post( '<div class="ck-item-event_date>Start Date</div>' );
		}
	}

	/**Hide Custom Links from Menu */
	public function remove_menu_items() {

			remove_menu_page( 'edit.php?post_type=custom_link' );

	}


}


