<?php
/**
 * WP_Rig\WP_Rig\AMP\Component class
 *
 * @package pip_theme
 */

namespace WP_Rig\WP_Rig\Events_Calendar;

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
		return 'events_calendar';
	}

	/**
	 * Need this function even though its empty
	 */
	public function initialize() {
		add_action( 'init', array( $this, 'register_additional_tax' ) );
		add_filter( 'tribe_events_event_schedule_details_formatting', array( $this, 'tribe_events_schedule_details' ) );
		add_filter( 'tribe_get_region', array( $this, 'tribe_get_region' ), 11, 2 );
	}

	/**
	 * Gets template tags to expose as methods on the Template_Tags class instance, accessible through `pip_theme()`.
	 *
	 * @return array Associative array of $method_name => $callback_info pairs. Each $callback_info must either be
	 *               a callable or an array with key 'callable'. This approach is used to reserve the possibility of
	 *               adding support for further arguments in the future.
	 */
	public function template_tags() : array {
		return array(

		);
	}


	/**
	 * Register Taxonomy for Organizers
	**/

	public function register_additional_tax() {
		$labels = array(
			'name'          => _x( 'Organizer Categories', 'Taxonomy General Name', 'pip-theme' ),
			'singular_name' => _x( 'Organizer Category', 'Taxonomy Singular Name', 'pip-theme' ),
			'menu_name'     => __( 'Organizer Categories', 'pip-theme' ),
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

		register_taxonomy( 'organizer_cats', array( 'tribe_organizer' ), $args );
	}


	/**
	 * Customize date view on event list
	 *
	 * @param array $settings current settings.
	 */

	 public function tribe_events_schedule_details( $settings ) {
		$settings['time'] = false;
		return $settings;
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

}


