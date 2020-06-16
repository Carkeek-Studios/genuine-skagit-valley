<?php
/**
 * WP_Rig\WP_Rig\Editor\Component class
 *
 * @package waflt_theme
 */

namespace WP_Rig\WP_Rig\Editor;

use WP_Rig\WP_Rig\Component_Interface;
use function add_action;
use function add_theme_support;

/**
 * Class for integrating with the block editor.
 *
 * @link https://wordpress.org/gutenberg/handbook/extensibility/theme-support/
 */
class Component implements Component_Interface {

	/**
	 * Gets the unique identifier for the theme component.
	 *
	 * @return string Component slug.
	 */
	public function get_slug() : string {
		return 'editor';
	}

	/**
	 * Adds the action and filter hooks to integrate with WordPress.
	 */
	public function initialize() {
		add_action( 'after_setup_theme', array( $this, 'action_add_editor_support' ) );
	}

	/**
	 * Adds support for various editor features.
	 */
	public function action_add_editor_support() {
		// Add support for editor styles.
		add_theme_support( 'editor-styles' );

		// Add support for default block styles.
		add_theme_support( 'wp-block-styles' );

		// Add support for responsive embeds.
		add_theme_support( 'responsive-embeds' );

		// Add support for wide-aligned images.
		add_theme_support( 'align-wide' );

		// Disable custom colors in the color picker.
		add_theme_support( 'disable-custom-colors' );

		// Disable custom gradients.
		add_theme_support( '__experimental-disable-custom-gradients' );

		// Disable gradients.
		add_theme_support( '__experimental-editor-gradient-presets', array() );

		/**
		 * Add support for color palettes.
		 *
		 * To preserve color behavior across themes, use these naming conventions:
		 * - Use primary and secondary color for main variations.
		 * - Use `theme-[color-name]` naming standard for standard colors (red, blue, etc).
		 * - Use `custom-[color-name]` for non-standard colors.
		 *
		 * Add the line below to disable the custom color picker in the editor.
		 * add_theme_support( 'disable-custom-colors' );
		 * --color-theme-black: #1c2833;
		 */

		add_theme_support(
			'editor-color-palette',
			array(
				array(
					'name'  => __( 'Green', 'waflt-theme' ),
					'slug'  => 'theme-green',
					'color' => '#637d36',
				),
				array(
					'name'  => __( 'Yellow', 'waflt-theme' ),
					'slug'  => 'theme-yellow',
					'color' => '#CAB44B',
				),
				array(
					'name'  => __( 'Orange', 'waflt-theme' ),
					'slug'  => 'theme-orange',
					'color' => '#bc8a24',
				),
				array(
					'name'  => __( 'Blue', 'waflt-theme' ),
					'slug'  => 'theme-blue',
					'color' => '#a2c6d2',
				),
				array(
					'name'  => __( 'Red', 'waflt-theme' ),
					'slug'  => 'theme-red',
					'color' => '#a55525',
				),
				array(
					'name'  => __( 'Green Light', 'waflt-theme' ),
					'slug'  => 'theme-green-light',
					'color' => '#959b27',
				),
				array(
					'name'  => __( 'Grey', 'waflt-theme' ),
					'slug'  => 'theme-grey',
					'color' => '#6b6b6b',
				),
				array(
					'name'  => __( 'Grey Light', 'waflt-theme' ),
					'slug'  => 'theme-grey-light',
					'color' => '#e0e0e0',
				),
				array(
					'name'  => __( 'Black', 'waflt-theme' ),
					'slug'  => 'theme-black',
					'color' => '#383838',
				),
				array(
					'name'  => __( 'White', 'waflt-theme' ),
					'slug'  => 'theme-white',
					'color' => '#fff',
				),
			)
		);

		/*
		 * Add support custom font sizes.
		 *
		 * Add the line below to disable the custom color picker in the editor.
		 * add_theme_support( 'disable-custom-font-sizes' );
		 */
		add_theme_support(
			'editor-font-sizes',
			array(
				array(
					'name'      => __( 'Small', 'waflt-theme' ),
					'shortName' => __( 'S', 'waflt-theme' ),
					'size'      => 16,
					'slug'      => 'small',
				),
				array(
					'name'      => __( 'Medium', 'waflt-theme' ),
					'shortName' => __( 'M', 'waflt-theme' ),
					'size'      => 18,
					'slug'      => 'medium',
				),
				array(
					'name'      => __( 'Large', 'waflt-theme' ),
					'shortName' => __( 'L', 'waflt-theme' ),
					'size'      => 31,
					'slug'      => 'large',
				),
				array(
					'name'      => __( 'Larger', 'waflt-theme' ),
					'shortName' => __( 'XL', 'waflt-theme' ),
					'size'      => 39,
					'slug'      => 'larger',
				),
			)
		);
	}
}
