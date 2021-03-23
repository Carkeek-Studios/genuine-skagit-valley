<?php
/**
 * WP_Rig\WP_Rig\AMP\Component class
 *
 * @package wp_rig
 */

namespace WP_Rig\WP_Rig\Events_Calendar;

use Tribe__Template;
use WP_Rig\WP_Rig;
use WP_Rig\WP_Rig\Component_Interface;
use WP_Rig\WP_Rig\Templating_Component_Interface;

/**
 * Class for template helpers
 *
 * Exposes template tags:
 * * `wp_rig()->get_social_links()`
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
		return 'events_calendar';
	}

	/**
	 * Need this function even though its empty
	 */
	public function initialize() {
		add_action( 'init', array( $this, 'register_additional_tax' ) );
		add_filter( 'tribe_get_region', array( $this, 'tribe_get_region' ), 11, 2 );
		add_action( 'admin_menu', array( $this, 'add_organizers_to_menu' ) );
		add_filter( 'register_post_type_args', array( $this, 'custom_post_type_args' ), 20, 2 );

		// Change the display location for the share links.
		remove_action( 'tribe_events_single_event_after_the_content', array( 'Tribe__Events__iCal', 'single_event_links' ) ); // This doesnt acutally work.
		add_action( 'wp_rig_tribe_events_single_event_after_the_meta', array( 'Tribe__Events__iCal', 'single_event_links' ) );

		// filter the results of the ical function
		add_filter( 'tribe_events_ical_single_event_links', array( $this, 'tribe_events_ical_single_event_links' ) );

		add_filter( 'tribe_get_ticket_label_plural', array( $this, 'tribe_get_ticket_label_plural' ), 10, 2 );

		add_filter( 'sf_edit_query_args', array( $this, 'filter_sf_results' ), 20, 2 );

	}

	/**
	 * Gets template tags to expose as methods on the Template_Tags class instance, accessible through `wp_rig()`.
	 *
	 * @return array Associative array of $method_name => $callback_info pairs. Each $callback_info must either be
	 *               a callable or an array with key 'callable'. This approach is used to reserve the possibility of
	 *               adding support for further arguments in the future.
	 */
	public function template_tags() : array {
		return array();
	}


	/**
	 * Register Taxonomy for Organizers
	 **/

	public function register_additional_tax() {
		$labels = array(
			'name'          => _x( 'Organizer Categories', 'Taxonomy General Name', 'wp-rig' ),
			'singular_name' => _x( 'Organizer Category', 'Taxonomy Singular Name', 'wp-rig' ),
			'menu_name'     => __( 'Organizer Categories', 'wp-rig' ),
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
			'show_in_menu'      => true,
		);

		register_taxonomy( 'organizer_cats', array( 'tribe_organizer' ), $args );

	}
	/**
	 * Add Taxonomy to menu
	 */
	public function add_organizers_to_menu() {
		// create a submenu under Events
		add_submenu_page( 'edit.php?post_type=tribe_events', 'Organizer Categories', 'Organizer Categories', 'manage_options', 'edit-tags.php?taxonomy=organizer_cats&post_type=tribe_events', '', 20 );
	}



	/**
	 * Return Abbreviated State
	 */
	public function tribe_get_region( $output, $venue_id ) {
		if ( 'Washington' === $output ) {
			$output = 'WA';
		}
		return $output;
	}

	/**
	 * Make Organizers available to the rest API.
	 * We dont want events in the REST API because the block editor for events doesnt work so good.
	 * So we turn it off at the core level and just turn it on for organizers so we can use our block to display them.
	 *
	 * @param  array  $args post_type args.
	 * @param  string $post_type current post type.
	 */
	public function custom_post_type_args( $args, $post_type ) {
		if ( $post_type == 'tribe_organizer' ) {
			$args['show_in_rest'] = true;
		}

		return $args;
	}

	/**
	 * tribe_events_ical_single_event_links.
	 */
	public function tribe_events_ical_single_event_links( $links ) {
		$html  = '<div class="share-save-links">';
		$html .= WP_Rig\wp_rig()->make_social_share_links();
		$html .= '<div class="ical-links">Add to Calendar<button class="icon icon-calendar info-popover" data-toggle="popover" data-popover="cal-links"></button>';
		$html .= '<div class="gpopover" id="cal-links">' . $links . '</div>';
		$html .= '</div></div>';

		return $html;
	}

	/**
	 * Tickets label should be register
	 */

	public function tribe_get_ticket_label_plural( $label, $context ) {
		return __( 'Register', 'wp-rig' );
	}

	 /**
	  * Search and Filter Query
	  */
	function filter_sf_results( $query_args, $sfid ) {

		if ( 'tribe_events' == $query_args['post_type'] ) {
			$query_args['meta_query'] = array(
				'_EventStartDate' => array(
					'value'   => date( 'Y-m-d H:i:s' ), // Compare against today's date.
					'compare' => '>=', // Get events that are set to the value's date or in the future.
					'type'    => 'DATE', // This is a date query.
				),
			);
		}

		return $query_args;
	}


}


