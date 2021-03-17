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

		// Remove core block patterns.
		remove_theme_support( 'core-block-patterns' );

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
					'color' => '#01a1b7',
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
			'carkeek-blocks/archive-with-intro',
			array(
				'title'       => __( 'Post List with Intro', 'pip-theme' ),
				'description' => _x( 'Header, Intro, Post List and Link', 'Block pattern description', 'pip-theme' ),
				'categories'  => array( 'layout' ),
				'content'     => '<!-- wp:group {"align":"full"} -->
				<div class="wp-block-group alignfull"><div class="wp-block-group__inner-container"><!-- wp:group -->
				<div class="wp-block-group"><div class="wp-block-group__inner-container"><!-- wp:heading {"textAlign":"center"} -->
				<h2 class="has-text-align-center">Classes</h2>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"align":"center"} -->
				<p class="has-text-align-center">Our Long-Distance Letterpress offerings are nearly as satisfying as the real thing, delivering expert instruction—no matter where in the world you live.</p>
				<!-- /wp:paragraph --></div></div>
				<!-- /wp:group -->

				<!-- wp:carkeek-blocks/custom-archive {"postTypeSelected":"tribe_events","align":"wide"} /-->

				<!-- wp:buttons {"contentJustification":"center"} -->
				<div class="wp-block-buttons is-content-justification-center"><!-- wp:button {"className":"is-style-arrow-cta"} -->
				<div class="wp-block-button is-style-arrow-cta"><a class="wp-block-button__link">See all classes</a></div>
				<!-- /wp:button --></div>
				<!-- /wp:buttons --></div></div>
				<!-- /wp:group -->',
			)
		);

		register_block_pattern(
			'carkeek-blocks/programs',
			array(
				'title'       => __( 'Program Module', 'pip-theme' ),
				'description' => _x( 'Section Header, Intro Text, Link and Image', 'Block pattern description', 'pip-theme' ),
				'categories'  => array( 'layout' ),
				'content'     => '<!-- wp:group {"align":"full"} -->
				<div class="wp-block-group alignfull"><div class="wp-block-group__inner-container"><!-- wp:group -->
				<div class="wp-block-group"><div class="wp-block-group__inner-container"><!-- wp:heading {"textAlign":"center"} -->
				<h2 class="has-text-align-center">Program TItle</h2>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"align":"center"} -->
				<p class="has-text-align-center">Etiam nec elementum turpis. Integer lorem dui, pellentesque sit amet ipsum sed, ultrices venenatis erat.</p>
				<!-- /wp:paragraph --></div></div>
				<!-- /wp:group -->

				<!-- wp:buttons {"contentJustification":"center"} -->
				<div class="wp-block-buttons is-content-justification-center"><!-- wp:button {"className":"is-style-arrow-cta"} -->
				<div class="wp-block-button is-style-arrow-cta"><a class="wp-block-button__link">Learn about this program</a></div>
				<!-- /wp:button --></div>
				<!-- /wp:buttons -->

				<!-- wp:image {"align":"full","id":72,"sizeSlug":"large","linkDestination":"none"} -->
				<figure class="wp-block-image alignfull size-large"><img src="http://partners-in-print.local/wp-content/uploads/2021/02/broadside-project-1024x684.jpg" alt="" class="wp-image-72"/></figure>
				<!-- /wp:image --></div></div>
				<!-- /wp:group -->',
			)
		);

		register_block_pattern(
			'carkeek-blocks/news-item',
			array(
				'title'       => __( 'News Item', 'pip-theme' ),
				'description' => _x( 'Image, linked headline and text', 'Block pattern description', 'pip-theme' ),
				'categories'  => array( 'layout' ),
				'content'     => '<!-- wp:columns {"align":"wide"} -->
				<div class="wp-block-columns alignwide"><!-- wp:column {"width":"33.33%"} -->
				<div class="wp-block-column" style="flex-basis:33.33%"><!-- wp:carkeek-blocks/fixed-image {"id":73} -->
				<figure class="wp-block-carkeek-blocks-fixed-image size-large"><div class="ck-fixed-image-wrap"><img src="https://partnersinprint.sitedistrict.com/wp-content/uploads/2021/02/long-distance-letterpress-daredevil-typesetting.jpg" alt="" class="wp-image-73"/></div></figure>
				<!-- /wp:carkeek-blocks/fixed-image --></div>
				<!-- /wp:column -->

				<!-- wp:column {"width":"66.66%"} -->
				<div class="wp-block-column" style="flex-basis:66.66%"><!-- wp:paragraph {"placeholder":"Add Link..."} -->
				<p><a href="/">News Item Block </a></p>
				<!-- /wp:paragraph -->

				<!-- wp:paragraph {"placeholder":"Add content..."} -->
				<p>This is a News Item Block. Its a pattern using columns. Images are a fixed size and will be cropped to 4:6 ratio. You can use the focal point picker to adjust the image if needed. </p>
				<!-- /wp:paragraph --></div>
				<!-- /wp:column --></div>
				<!-- /wp:columns -->',
			)
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
				<div class="wp-block-button is-style-arrow-cta"><a class="wp-block-button__link" href="">Learn More</a></div>
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
				<div class="wp-block-button is-style-arrow-cta"><a class="wp-block-button__link" href="">Learn More</a></div>
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
				<div class="wp-block-button is-style-arrow-cta"><a class="wp-block-button__link" href="">Learn More</a></div>
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
				<div class="wp-block-button is-style-arrow-cta"><a class="wp-block-button__link" href="">Learn More</a></div>
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
				<div class="wp-block-button is-style-arrow-cta"><a class="wp-block-button__link" href="">Learn More</a></div>
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
				<div class="wp-block-button is-style-arrow-cta"><a class="wp-block-button__link" href="">Learn More</a></div>
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
