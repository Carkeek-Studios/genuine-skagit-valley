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

		add_action( 'plugins_loaded', array( $this, 'alter_tribe_hooks' ) );
		// setup the default template.
		// add_filter( 'tribe_events_editor_default_template', array( $this, 'tribe_events_editor_default_template' ), 11, 60 );
		// Can't get remove_action to work so run our own function after theirs that setup our template.
		add_action( 'admin_init', array( $this, 'setup_tribe_events_block_editor' ), 30 );

		add_action( 'acf/init', array( $this, 'tribe_acf_block_types' ) );

		// CLASSIC EDITOR TEMPLATE.
		// Change the display location for the share links.
		add_action( 'wp_rig_tribe_events_single_event_after_the_meta', array( 'Tribe__Events__iCal', 'single_event_links' ) );

		// Filter the results of the ical function.
		add_filter( 'tribe_events_ical_single_event_links', array( $this, 'tribe_events_ical_single_event_links' ) );

		add_filter( 'tribe_get_ticket_label_plural', array( $this, 'tribe_get_ticket_label_plural' ), 10, 2 );

		add_filter( 'sf_edit_query_args', array( $this, 'filter_sf_results' ), 20, 2 );

	}

	/**
	 * Alter hooks after loaded. Cant figure out how to make these work...
	 */
	public function alter_tribe_hooks() {
		remove_action( 'admin_init', array( 'Tribe__Tickets__Editor', 'add_tickets_block_in_editor' ) ); // remove default action so we can add in correct order
		remove_action( 'tribe_events_single_event_after_the_content', array( 'Tribe__Events__iCal', 'single_event_links' ) ); // This doesnt acutally work.

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

	/**
	 * Customize block order on the events template
	 *
	 * @param array $template default template, each item represents a block.
	 */
	public function tribe_events_editor_default_template() {
		$template = array(

			array( 'tribe/event-organizer' ),
			array( 'tribe/event-datetime' ),
			array( 'tribe/event-price' ),
			array( 'tribe/event-venue' ),
			array( 'tribe/event-website' ),
			array( 'tribe/event-links' ),

			array(
				'tribe/tickets',
			),
			array(
				'core/heading',
				array(
					'level'   => 2,
					'content' => 'Why you should take this class',
				),
			),
			array(
				'core/paragraph',
				array(
					'placeholder' => __( 'Add Description...', 'wp-rig' ),
				),
			),
			array(
				'core/heading',
				array(
					'level'   => 2,
					'content' => 'What you’ll learn',
				),
			),
			array(
				'core/paragraph',
				array(
					'placeholder' => __( 'Add Description...', 'wp-rig' ),
				),
			),
			array(
				'core/heading',
				array(
					'level'   => 3,
					'content' => 'Prerequisites',
				),
			),
			array(
				'core/paragraph',
				array(
					'placeholder' => __( 'Add Description...', 'wp-rig' ),
				),
			),
			array(
				'core/heading',
				array(
					'level'   => 3,
					'content' => 'Who should take this class?',
				),
			),
			array(
				'core/paragraph',
				array(
					'placeholder' => __( 'Add Description...', 'wp-rig' ),
				),
			),
			array(
				'acf/instructor-details',
			),
			array(
				'tribe/related-events',
				array(
					'title' => __( 'More Classes &amp; Events', 'wp-rig' ),
				),
			),
		);
		return $template;
	}

	/**
	 * This runs after tribe has done their template mods, we only want ours in there.
	 * Want the ticket block to show up in the correct order.
	 */
	public function setup_tribe_events_block_editor() {
		// Post types where the block shouldn't be displayed by default
		if ( ! class_exists( 'Tribe__Events__Main' ) ) {
			return;
		}

		$post_type_object = get_post_type_object( 'tribe_events' );

		$template = $this->tribe_events_editor_default_template();

		$post_type_object->template = $template;
	}

	/** Create a block to show the Instructor on the Events Page */

	function tribe_acf_block_types() {

		// Check function exists.
		if ( function_exists( 'acf_register_block_type' ) ) {

			// register a testimonial block.
			acf_register_block_type(
				array(
					'name'            => 'instructor-details',
					'title'           => __( 'Class Instructor', 'wp-rig' ),
					'description'     => __( 'Customize Instructor Details.', 'wp-rig' ),
					'render_template' => 'template-parts/blocks/acf_tribe/instructor.php',
					'category'        => 'events',
					'icon'            => 'welcome-learn-more',
					'keywords'        => array( 'events', 'instructor' ),
				)
			);
		}
	}


}


