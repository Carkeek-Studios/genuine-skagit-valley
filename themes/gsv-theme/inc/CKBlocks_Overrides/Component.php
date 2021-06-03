<?php
/**
 * WP_Rig\WP_Rig\AMP\Component class
 *
 * @package gsv_theme
 */

namespace WP_Rig\WP_Rig\CKBlocks_Overrides;

use Tribe__Template;
use WP_Rig\WP_Rig\Component_Interface;
use WP_Rig\WP_Rig\Templating_Component_Interface;

/**
 * Class for template helpers
 *
 * Exposes template tags:
 * * `gsv_theme()->get_social_links()`
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
		add_filter( 'carkeek_block_custom_post_layout_tribe_organizer__query_args', array( $this, 'set_organizers_sort' ), 10, 1 );
		add_filter( 'ck_custom_archive_ck_members__featured_image', array( $this, 'ck_members_featured_image' ), 10, 3 );
		add_filter( 'ck_custom_archive_ck_members__link', array( $this, 'ck_members_farmstand_fresh_link' ), 10, 3 );
		add_filter( 'ck_custom_archive_ck_members__excerpt', array( $this, 'ck_members_farmstand_fresh_excerpt' ), 10, 3 );
		add_filter( 'ck_custom_archive_layout__meta_before_title', array( $this, 'ck_members_farmstand_fresh_before_title' ), 10, 2 );
		add_action( 'ck_custom_archive_layout__after_excerpt', array( $this, 'ck_members_farmstand_after_excerpt' ), 10, 1 );
	}

	/**
	 * Gets template tags to expose as methods on the Template_Tags class instance, accessible through `gsv_theme()`.
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
			$organizers = tribe_get_organizer_ids( $post->ID );
			$org_names  = array();
			foreach ( $organizers as $organizer_id ) {

				$org_names[] = tribe_get_organizer( $organizer_id );
			}
			echo wp_kses_post( '<div class="ck-item-event_org">' . implode( ', ', $org_names ) . '</div>' );
		}
	}

	/**Hide Custom Links from Menu */
	public function remove_menu_items() {

			remove_menu_page( 'edit.php?post_type=custom_link' );

	}

	/** Sort Organizers by Last Name
	 *
	 * @param array $args query args generated by selections.
	 */
	public function set_organizers_sort( $args ) {

		$args['orderby']  = 'meta_value';
		$args['meta_key'] = 'organizers_last_name';
		$args['order']    = 'ASC';

		return $args;

	}

	/** Set Default Image
	 *
	 * @param string $featured_image;
	 */
	public function ck_members_featured_image( $featured_image, $post_id, $data ) {
		if ( $data->displayFeaturedImage && empty( $featured_image ) ) {
			$default = get_field( 'member_directory_default_image', 'options' );
			if ( ! empty( $default ) ) {
				return wp_get_attachment_image( $default, 'medium' );
			}
		} else {
			return $featured_image;
		}
	}

	/** Set Default Image
	 *
	 * @param string $featured_image;
	 */
	public function ck_members_farmstand_fresh_link( $permalink, $post_id, $data ) {
		if ( 'farmstand-fresh-list' == $data->className || 'farmstand-fresh-chefs' == $data->className ) {
			$permalink = get_field( 'member_website', $post_id );
		}
		return $permalink;
	}

	public static function make_directions_link( $post_id ) {
		$address         = get_field( 'member_address', $post_id );
		$directions_link = '';
		if ( isset( $address['place_id'] ) && ! empty( $address['place_id'] ) ) {
			$directions_link = wp_sprintf( '<a href="https://www.google.com/maps/place/?q=place_id:%1s" target="_blank" class="directions-link">Directions</a>', $address['place_id'] );
		} elseif ( isset( $address['address'] ) && ! empty( $address['address'] ) ) {
			$directions_link = wp_sprintf( '<a href="https://www.google.com/maps/search/?api=1&query=%1s" target="_blank" class="directions-link">Directions</a>', $address['address'] );
		}
		return $directions_link;
	}

	public function ck_members_farmstand_after_excerpt( $data ) {
		global $post;
		if ( 'farmstand-fresh-list' == $data->className ) {
			$directions = self::make_directions_link( $post->ID );
			$hours      = get_field( 'hours', $post->ID );
			if ( ! empty( $hours ) ) {
				echo '<div class="farmstand-hours">' . $hours . '</div>';
			}
			echo wp_kses_post( $directions );
		}
	}

	public function ck_members_farmstand_fresh_excerpt( $excerpt, $post_id, $data ) {
		if ( 'farmstand-fresh-list' == $data->className || 'farmstand-fresh-chefs' == $data->className ) {
			$alt = get_field( 'farmstand_fresh_description', $post_id );
			if ( ! empty( $alt ) ) {
				$excerpt = $alt;
			}
		}
		return $excerpt;
	}

	public function ck_members_farmstand_fresh_before_title( $before, $data ) {
		if ( 'farmstand-fresh-chefs' == $data->className ) {
			$chef = get_field( 'farmstand_fresh_chef' );
		}
		if ( ! empty( $chef ) ) {
			$before = '<div class="farmstand-fresh-chef">' . $chef . '</div>';
		}
		return $before;
	}

}


