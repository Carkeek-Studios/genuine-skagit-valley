<?php
/**
 * WP_Rig\WP_Rig\Editor\Component class
 *
 * @package pip_theme
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
		add_filter( 'editorskit_block_editor_classnames', array( $this, 'editorskit_classnames' ) );
		add_action( 'wp_print_styles', array( $this, 'deregister_block_styles' ), 100 );
	}

		/**
		 * Dont use core block styles
		 */
	public function deregister_block_styles() {
		// wp_dequeue_style( 'wp-block-library' );
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
					'name'  => __( 'Primary', 'pip-theme' ),
					'slug'  => 'theme-primary',
					'color' => '#00acc4',
				),
				array(
					'name'  => __( 'Secondary', 'pip-theme' ),
					'slug'  => 'theme-secondary',
					'color' => '#e1588d',
				),
				array(
					'name'  => __( 'Yellow', 'pip-theme' ),
					'slug'  => 'theme-yellow',
					'color' => '#f1c400',
				),
				array(
					'name'  => __( 'Light', 'pip-theme' ),
					'slug'  => 'theme-light',
					'color' => '#faf7f4',
				),
				array(
					'name'  => __( 'Grey Dark', 'pip-theme' ),
					'slug'  => 'theme-grey-dark',
					'color' => '454543',
				),

				array(
					'name'  => __( 'White', 'pip-theme' ),
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
					'name'      => __( 'Small', 'pip-theme' ),
					'shortName' => __( 'S', 'pip-theme' ),
					'size'      => 15,
					'slug'      => 'small',
				),
				array(
					'name'      => __( 'Medium', 'pip-theme' ),
					'shortName' => __( 'M', 'pip-theme' ),
					'size'      => 17,
					'slug'      => 'medium',
				),
				array(
					'name'      => __( 'Large', 'pip-theme' ),
					'shortName' => __( 'L', 'pip-theme' ),
					'size'      => 21,
					'slug'      => 'large',
				),
			)
		);

		register_block_pattern_category(
			'layout',
			array( 'label' => _x( 'Layouts', 'Block pattern category', 'pip-theme' ) )
		);
		register_block_pattern_category(
			'brayers',
			array( 'label' => _x( 'Brayers', 'Block pattern category', 'pip-theme' ) )
		);

		register_block_pattern(
			'carkeek-blocks/brayer-yellow-left',
			array(
				'title'       => __( 'Brayer Yellow (Left)', 'pip-theme' ),
				'description' => _x( 'Group Block with Brayer Background', 'Block pattern description', 'pip-theme' ),
				'categories'  => array( 'brayers' ),
				'content'     => '<!-- wp:group {"align":"full","className":"has-background has-brayer-background brayer-background-yellow"} -->
				<div class="wp-block-group alignfull has-background has-brayer-background brayer-background-yellow"><div class="wp-block-group__inner-container"><!-- wp:heading {"textAlign":"center"} -->
				<h2 class="has-text-align-center">Our Mission</h2>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"align":"center"} -->
				<p class="has-text-align-center">We bring people together by using old printing presses to amplify new voices, share knowledge, and spark creativity.</p>
				<!-- /wp:paragraph -->

				<!-- wp:buttons {"contentJustification":"center"} -->
				<div class="wp-block-buttons is-content-justification-center"><!-- wp:button {"className":"is-style-arrow-cta"} -->
				<div class="wp-block-button is-style-arrow-cta"><a class="wp-block-button__link" href="http://partners-in-print.local/">Learn More</a></div>
				<!-- /wp:button --></div>
				<!-- /wp:buttons --></div></div>
				<!-- /wp:group -->',
			)
		);
		register_block_pattern(
			'carkeek-blocks/brayer-yellow-right',
			array(
				'title'       => __( 'Brayer Yellow (Right)', 'pip-theme' ),
				'description' => _x( 'Group Block with Brayer Background', 'Block pattern description', 'pip-theme' ),
				'categories'  => array( 'brayers' ),
				'content'     => '<!-- wp:group {"align":"full","className":"has-background has-brayer-background brayer-background-yellow brayer-background-right"} -->
				<div class="wp-block-group alignfull has-background has-brayer-background brayer-background-yellow brayer-background-right"><div class="wp-block-group__inner-container"><!-- wp:heading {"textAlign":"center"} -->
				<h2 class="has-text-align-center">Our Mission</h2>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"align":"center"} -->
				<p class="has-text-align-center">We bring people together by using old printing presses to amplify new voices, share knowledge, and spark creativity.</p>
				<!-- /wp:paragraph -->

				<!-- wp:buttons {"contentJustification":"center"} -->
				<div class="wp-block-buttons is-content-justification-center"><!-- wp:button {"className":"is-style-arrow-cta"} -->
				<div class="wp-block-button is-style-arrow-cta"><a class="wp-block-button__link" href="http://partners-in-print.local/">Learn More</a></div>
				<!-- /wp:button --></div>
				<!-- /wp:buttons --></div></div>
				<!-- /wp:group -->',
			)
		);
		register_block_pattern(
			'carkeek-blocks/brayer-pink-right',
			array(
				'title'       => __( 'Brayer Pink (Right)', 'pip-theme' ),
				'description' => _x( 'Group Block with Brayer Background', 'Block pattern description', 'pip-theme' ),
				'categories'  => array( 'brayers' ),
				'content'     => '<!-- wp:group {"align":"full","className":"has-background has-brayer-background brayer-background-pink brayer-background-right"} -->
				<div class="wp-block-group alignfull has-background has-brayer-background brayer-background-pink brayer-background-right"><div class="wp-block-group__inner-container"><!-- wp:heading {"textAlign":"center"} -->
				<h2 class="has-text-align-center">Our Mission</h2>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"align":"center"} -->
				<p class="has-text-align-center">We bring people together by using old printing presses to amplify new voices, share knowledge, and spark creativity.</p>
				<!-- /wp:paragraph -->

				<!-- wp:buttons {"contentJustification":"center"} -->
				<div class="wp-block-buttons is-content-justification-center"><!-- wp:button {"className":"is-style-arrow-cta"} -->
				<div class="wp-block-button is-style-arrow-cta"><a class="wp-block-button__link" href="http://partners-in-print.local/">Learn More</a></div>
				<!-- /wp:button --></div>
				<!-- /wp:buttons --></div></div>
				<!-- /wp:group -->',
			)
		);
		register_block_pattern(
			'carkeek-blocks/brayer-pink-left',
			array(
				'title'       => __( 'Brayer Pink (Left)', 'pip-theme' ),
				'description' => _x( 'Group Block with Brayer Background', 'Block pattern description', 'pip-theme' ),
				'categories'  => array( 'brayers' ),
				'content'     => '<!-- wp:group {"align":"full","className":"has-background has-brayer-background brayer-background-pink"} -->
				<div class="wp-block-group alignfull has-background has-brayer-background brayer-background-pink"><div class="wp-block-group__inner-container"><!-- wp:heading {"textAlign":"center"} -->
				<h2 class="has-text-align-center">Our Mission</h2>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"align":"center"} -->
				<p class="has-text-align-center">We bring people together by using old printing presses to amplify new voices, share knowledge, and spark creativity.</p>
				<!-- /wp:paragraph -->

				<!-- wp:buttons {"contentJustification":"center"} -->
				<div class="wp-block-buttons is-content-justification-center"><!-- wp:button {"className":"is-style-arrow-cta"} -->
				<div class="wp-block-button is-style-arrow-cta"><a class="wp-block-button__link" href="http://partners-in-print.local/">Learn More</a></div>
				<!-- /wp:button --></div>
				<!-- /wp:buttons --></div></div>
				<!-- /wp:group -->',
			)
		);
		register_block_pattern(
			'carkeek-blocks/brayer-blue-left',
			array(
				'title'       => __( 'Brayer Blue (Left)', 'pip-theme' ),
				'description' => _x( 'Group Block with Brayer Background', 'Block pattern description', 'pip-theme' ),
				'categories'  => array( 'brayers' ),
				'content'     => '<!-- wp:group {"align":"full","className":"has-background has-brayer-background brayer-background-blue"} -->
				<div class="wp-block-group alignfull has-background has-brayer-background brayer-background-blue"><div class="wp-block-group__inner-container"><!-- wp:heading {"textAlign":"center"} -->
				<h2 class="has-text-align-center">Our Mission</h2>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"align":"center"} -->
				<p class="has-text-align-center">We bring people together by using old printing presses to amplify new voices, share knowledge, and spark creativity.</p>
				<!-- /wp:paragraph -->

				<!-- wp:buttons {"contentJustification":"center"} -->
				<div class="wp-block-buttons is-content-justification-center"><!-- wp:button {"className":"is-style-arrow-cta"} -->
				<div class="wp-block-button is-style-arrow-cta"><a class="wp-block-button__link" href="http://partners-in-print.local/">Learn More</a></div>
				<!-- /wp:button --></div>
				<!-- /wp:buttons --></div></div>
				<!-- /wp:group -->',
			)
		);
		register_block_pattern(
			'carkeek-blocks/brayer-blue-right',
			array(
				'title'       => __( 'Brayer Blue (Right)', 'pip-theme' ),
				'description' => _x( 'Group Block with Brayer Background', 'Block pattern description', 'pip-theme' ),
				'categories'  => array( 'brayers' ),
				'content'     => '<!-- wp:group {"align":"full","className":"has-background has-brayer-background brayer-background-blue brayer-background-right"} -->
				<div class="wp-block-group alignfull has-background has-brayer-background brayer-background-blue brayer-background-right"><div class="wp-block-group__inner-container"><!-- wp:heading {"textAlign":"center"} -->
				<h2 class="has-text-align-center">Our Mission</h2>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"align":"center"} -->
				<p class="has-text-align-center">We bring people together by using old printing presses to amplify new voices, share knowledge, and spark creativity.</p>
				<!-- /wp:paragraph -->

				<!-- wp:buttons {"contentJustification":"center"} -->
				<div class="wp-block-buttons is-content-justification-center"><!-- wp:button {"className":"is-style-arrow-cta"} -->
				<div class="wp-block-button is-style-arrow-cta"><a class="wp-block-button__link" href="http://partners-in-print.local/">Learn More</a></div>
				<!-- /wp:button --></div>
				<!-- /wp:buttons --></div></div>
				<!-- /wp:group -->',
			)
		);

	}

	/**
	 * Add classname suggestions
	 *
	 * @param array $classes default classnames.
	 * @return array Add theme utility classes.
	 */
	public function editorskit_classnames( $classes ) {
		$theme_classes = array(
			'h1',
			'h2',
			'h3',
			'h3',
			'h5',
			'h6',
			'no - top - margin',
			'no - bottom - margin',
			'is - style - arrow - cta',
			'is - style - small - image',
			'is - page - header',
			'is - crop - form',
			'add - top - margin - small',
			'add - top - margin',
			'add - bottom - margin',
			'add - bottom - margin - small',
			'anchor - top',
			'anchor - bottom',
			'no - padding',
			'no - padding - top',
			'no - padding - right',
			'no - padding - bottom',
			'no - padding - left',
		);

		return $theme_classes;
	}


}
