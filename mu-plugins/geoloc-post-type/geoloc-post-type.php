<?php
/**
 * Farm Post Type
 *
 * @package   Farm_Post_Type
 * @author    Patty O'Hara
 * @license   GPL-2.0+
 * @copyright 2020 Patty O'Hara
 *
 * @wordpress-plugin
 * Plugin Name: Farm Post Type
 * Description: Enables a farm post type, with location, map and taxonomies.
 * Version:     1.0.0
 * Author:      Patty O'Hara
 * Author URI:  https://www.carkeekstudios.com
 * Text Domain: farm
 * License:     GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Domain Path: /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

// Required files for registering the post type and taxonomies.
require plugin_dir_path( __FILE__ ) . 'includes/class-geoloc-post-type.php';
require plugin_dir_path( __FILE__ ) . 'includes/class-geoloc-post-type-post-type.php';
require plugin_dir_path( __FILE__ ) . 'includes/class-geoloc-post-type-taxonomy-category.php';
require plugin_dir_path( __FILE__ ) . 'includes/class-geoloc-post-type-taxonomy-tag.php';
require plugin_dir_path( __FILE__ ) . 'includes/class-geoloc-post-type-registrations.php';

// Instantiate registration class, so we can add it as a dependency to main plugin class.
$geoloc_post_type_registrations = new Geoloc_Post_Type_Registrations();

// Instantiate main plugin file, so activation callback does not need to be static.
$geoloc_post_type = new Geoloc_Post_Type( $geoloc_post_type_registrations );

// Register callback that is fired when the plugin is activated.
register_activation_hook( __FILE__, array( $geoloc_post_type, 'activate' ) );

// Initialise registrations for post-activation requests.
$geoloc_post_type_registrations->init();

add_action( 'init', 'geoloc_post_type_init', 100 );
/**
 * Adds styling to the dashboard for the post type and adds geoloc posts
 * to the "At a Glance" metabox.
 *
 * Adds custom taxonomy body classes to geoloc posts on the front end.
 *
 * @since 0.8.3
 */
function geoloc_post_type_init() {
	if ( is_admin() ) {
		global $geoloc_post_type_admin, $geoloc_post_type_registrations;
		require plugin_dir_path( __FILE__ ) . 'includes/class-geoloc-post-type-admin.php';
		$geoloc_post_type_admin = new Geoloc_Post_Type_Admin( $geoloc_post_type_registrations );
		$geoloc_post_type_admin->init();
	} else {
		// Loads for users viewing the front end
		if ( apply_filters( 'geolocposttype_add_taxonomy_terms_classes', true ) ) {
			$geoloc_post_type_body_classes->init( 'geoloc' );
		}
	}
}
