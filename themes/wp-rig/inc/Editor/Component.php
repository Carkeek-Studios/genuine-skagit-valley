<?php
/**
 * WP_Rig\WP_Rig\Editor\Component class
 *
 * @package wp_rig
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
					'name'  => __( 'Primary', 'wp-rig' ),
					'slug'  => 'theme-primary',
					'color' => '#01a1b7',
				),
				array(
					'name'  => __( 'Secondary', 'wp-rig' ),
					'slug'  => 'theme-secondary',
					'color' => '#e1588d',
				),
				array(
					'name'  => __( 'Yellow', 'wp-rig' ),
					'slug'  => 'theme-yellow',
					'color' => '#f1c400',
				),
				array(
					'name'  => __( 'Light', 'wp-rig' ),
					'slug'  => 'theme-light',
					'color' => '#faf7f4',
				),
				array(
					'name'  => __( 'Grey Dark', 'wp-rig' ),
					'slug'  => 'theme-grey-dark',
					'color' => '454543',
				),

				array(
					'name'  => __( 'White', 'wp-rig' ),
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
					'name'      => __( 'Small', 'wp-rig' ),
					'shortName' => __( 'S', 'wp-rig' ),
					'size'      => 15,
					'slug'      => 'small',
				),
				array(
					'name'      => __( 'Medium', 'wp-rig' ),
					'shortName' => __( 'M', 'wp-rig' ),
					'size'      => 17,
					'slug'      => 'medium',
				),
				array(
					'name'      => __( 'Large', 'wp-rig' ),
					'shortName' => __( 'L', 'wp-rig' ),
					'size'      => 21,
					'slug'      => 'large',
				),
			)
		);

		register_block_pattern_category(
			'layout',
			array( 'label' => _x( 'Layouts', 'Block pattern category', 'wp-rig' ) )
		);
		register_block_pattern_category(
			'brayers',
			array( 'label' => _x( 'Brayers', 'Block pattern category', 'wp-rig' ) )
		);
		register_block_pattern_category(
			'elements',
			array( 'label' => _x( 'Elements', 'Block pattern category', 'wp-rig' ) )
		);

		register_block_pattern(
			'carkeek-blocks/centered-cta',
			array(
				'title'       => __( 'Centered CTA', 'wp-rig' ),
				'description' => _x( 'Centered CTA', 'Block pattern description', 'wp-rig' ),
				'categories'  => array( 'elements' ),
				'keywords'    => array( 'cta', 'button', 'links' ),
				'content'     => '<!-- wp:buttons {"contentJustification":"center"} -->
				<div class="wp-block-buttons is-content-justification-center"><!-- wp:button {"className":"is-style-arrow-cta"} -->
				<div class="wp-block-button is-style-arrow-cta"><a class="wp-block-button__link">See all classes</a></div>
				<!-- /wp:button --></div>
				<!-- /wp:buttons -->',
			)
		);

		register_block_pattern(
			'carkeek-blocks/partner-logos',
			array(
				'title'       => __( 'Partner Logos', 'wp-rig' ),
				'description' => _x( 'Add partner logos into a 5 column row', 'Block pattern description', 'wp-rig' ),
				'categories'  => array( 'layout' ),
				'keywords'    => array( 'partners', 'logo', 'links' ),
				'content'     => '<!-- wp:group {"align":"full","backgroundColor":"theme-white"} -->
				<div class="wp-block-group alignfull has-theme-white-background-color has-background"><div class="wp-block-group__inner-container"><!-- wp:heading {"textAlign":"center"} -->
				<h2 class="has-text-align-center">Public Sponsors</h2>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"align":"center"} -->
				<p class="has-text-align-center">short text here to come</p>
				<!-- /wp:paragraph -->

				<!-- wp:carkeek-blocks/widget-row {"innerBlockType":"core/image","allowItemsWrap":true,"itemsPerRow":5,"alignInnerBlocks":"center","align":"wide","className":"partner-logos vertical-align-center has-3-columns-mobile"} -->
				<div class="wp-block-carkeek-blocks-widget-row alignwide partner-logos vertical-align-center has-3-columns-mobile ck-columns ck-columns-wrap-true ck-columns-align-center has-5-columns"><div class="ck-columns__wrap"><!-- wp:image {"id":10,"sizeSlug":"large","linkDestination":"none"} -->
				<figure class="wp-block-image size-large"><img src="/wp-content/uploads/2021/02/PIP_Anchor_Logo.png" alt="" class="wp-image-10"/></figure>
				<!-- /wp:image --></div></div>
				<!-- /wp:carkeek-blocks/widget-row --></div></div>
				<!-- /wp:group -->',
			)
		);

		register_block_pattern(
			'carkeek-blocks/archive-with-intro',
			array(
				'title'       => __( 'Class List with Intro', 'wp-rig' ),
				'description' => _x( 'Header, Intro, Class List and Link', 'Block pattern description', 'wp-rig' ),
				'categories'  => array( 'layout' ),
				'content'     => '<!-- wp:group {"align":"full"} -->
				<div class="wp-block-group alignfull"><div class="wp-block-group__inner-container"><!-- wp:group -->
				<div class="wp-block-group"><div class="wp-block-group__inner-container"><!-- wp:heading {"textAlign":"center"} -->
				<h2 class="has-text-align-center">Classes</h2>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"align":"center"} -->
				<p class="has-text-align-center">Our Long-Distance Letterpress offerings deliver expert instruction—no matter where in the world you live.</p>
				<!-- /wp:paragraph --></div></div>
				<!-- /wp:group -->

				<!-- wp:carkeek-blocks/events-archive {"displayField1":"organizer","displayField2":"startdate","filterByCategory":true,"catTermsSelected":"27","featuredEvents":true,"align":"wide","className":"single-row"} /-->

				<!-- wp:buttons {"contentJustification":"center"} -->
				<div class="wp-block-buttons is-content-justification-center"><!-- wp:button {"className":"is-style-arrow-cta"} -->
				<div class="wp-block-button is-style-arrow-cta"><a class="wp-block-button__link" href="/classes-events?_sft_tribe_events_cat=class">See all classes</a></div>
				<!-- /wp:button --></div>
				<!-- /wp:buttons --></div></div>
				<!-- /wp:group -->',
			)
		);

		register_block_pattern(
			'carkeek-blocks/store-with-intro',
			array(
				'title'       => __( 'Store with Intro', 'wp-rig' ),
				'description' => _x( 'Header, Intro, Shop Products and Link', 'Block pattern description', 'wp-rig' ),
				'categories'  => array( 'layout' ),
				'content'     => '<!-- wp:group {"align":"full"} -->
				<div class="wp-block-group alignfull"><div class="wp-block-group__inner-container"><!-- wp:heading {"textAlign":"center"} -->
				<h2 class="has-text-align-center">Store</h2>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"align":"center"} -->
				<p class="has-text-align-center">Look good while doing good.</p>
				<!-- /wp:paragraph -->

				<!-- wp:woocommerce/all-products {"columns":3,"rows":1,"alignButtons":false,"contentVisibility":{"orderBy":false},"orderby":"date","layoutConfig":[["woocommerce/product-image"],["woocommerce/product-title"],["woocommerce/product-price"],["woocommerce/product-rating"],["woocommerce/product-button"]],"align":"wide","className":"hide-add-to-cart hide-pagination"} -->
				<div class="wp-block-woocommerce-all-products alignwide wc-block-all-products hide-add-to-cart hide-pagination" data-attributes="{&quot;align&quot;:&quot;wide&quot;,&quot;alignButtons&quot;:false,&quot;className&quot;:&quot;hide-add-to-cart hide-pagination&quot;,&quot;columns&quot;:3,&quot;contentVisibility&quot;:{&quot;orderBy&quot;:false},&quot;isPreview&quot;:false,&quot;layoutConfig&quot;:[[&quot;woocommerce/product-image&quot;],[&quot;woocommerce/product-title&quot;],[&quot;woocommerce/product-price&quot;],[&quot;woocommerce/product-rating&quot;],[&quot;woocommerce/product-button&quot;]],&quot;orderby&quot;:&quot;date&quot;,&quot;rows&quot;:1}"></div>
				<!-- /wp:woocommerce/all-products -->

				<!-- wp:buttons {"contentJustification":"center"} -->
				<div class="wp-block-buttons is-content-justification-center"><!-- wp:button {"className":"is-style-arrow-cta"} -->
				<div class="wp-block-button is-style-arrow-cta"><a class="wp-block-button__link" href="/store/">Browse the Store</a></div>
				<!-- /wp:button --></div>
				<!-- /wp:buttons --></div></div>
				<!-- /wp:group -->',
			)
		);

		register_block_pattern(
			'carkeek-blocks/instagram-with-intro',
			array(
				'title'       => __( 'Instagram with Intro', 'wp-rig' ),
				'description' => _x( 'Instagram, Intro, Shop Products and Link', 'Block pattern description', 'wp-rig' ),
				'categories'  => array( 'layout' ),
				'content'     => '<!-- wp:group {"align":"wide"} -->
				<div class="wp-block-group alignwide"><div class="wp-block-group__inner-container"><!-- wp:heading {"textAlign":"center","align":"wide"} -->
				<h2 class="alignwide has-text-align-center">Follow Along</h2>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"align":"center"} -->
				<p class="has-text-align-center">PiP’s Instagram feed is the place to get your analog fix.&nbsp;&nbsp;&nbsp;</p>
				<!-- /wp:paragraph -->

				<!-- wp:shortcode -->
				[instagram-feed]
				<!-- /wp:shortcode --></div></div>
				<!-- /wp:group -->',
			)
		);

		register_block_pattern(
			'carkeek-blocks/programs',
			array(
				'title'       => __( 'Program Module', 'wp-rig' ),
				'description' => _x( 'Section Header, Intro Text, Link and Image', 'Block pattern description', 'wp-rig' ),
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
				'title'       => __( 'News Item', 'wp-rig' ),
				'description' => _x( 'Image, linked headline and text', 'Block pattern description', 'wp-rig' ),
				'categories'  => array( 'layout' ),
				'content'     => '<!-- wp:columns {"align":"wide","className":"pip-news"} -->
				<div class="wp-block-columns alignwide pip-news"><!-- wp:column {"width":"33.33%"} -->
				<div class="wp-block-column" style="flex-basis:33.33%"><!-- wp:carkeek-blocks/fixed-image {"id":73} -->
				<figure class="wp-block-carkeek-blocks-fixed-image size-large"><div class="ck-fixed-image-wrap"><img src="https://partnersinprint.sitedistrict.com/wp-content/uploads/2021/02/long-distance-letterpress-daredevil-typesetting.jpg" alt="" class="wp-image-73"/></div></figure>
				<!-- /wp:carkeek-blocks/fixed-image --></div>
				<!-- /wp:column -->

				<!-- wp:column {"width":"66.66%"} -->
				<div class="wp-block-column" style="flex-basis:66.66%"><!-- wp:paragraph {"placeholder":"Add Link..."} -->
				<p></p>
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
				'title'       => __( 'Brayer Yellow (Left)', 'wp-rig' ),
				'description' => _x( 'Group Block with Brayer Background', 'Block pattern description', 'wp-rig' ),
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
				'title'       => __( 'Brayer Yellow (Right)', 'wp-rig' ),
				'description' => _x( 'Group Block with Brayer Background', 'Block pattern description', 'wp-rig' ),
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
				'title'       => __( 'Brayer Pink (Right)', 'wp-rig' ),
				'description' => _x( 'Group Block with Brayer Background', 'Block pattern description', 'wp-rig' ),
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
				'title'       => __( 'Brayer Pink (Left)', 'wp-rig' ),
				'description' => _x( 'Group Block with Brayer Background', 'Block pattern description', 'wp-rig' ),
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
				'title'       => __( 'Brayer Blue (Left)', 'wp-rig' ),
				'description' => _x( 'Group Block with Brayer Background', 'Block pattern description', 'wp-rig' ),
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
				'title'       => __( 'Brayer Blue (Right)', 'wp-rig' ),
				'description' => _x( 'Group Block with Brayer Background', 'Block pattern description', 'wp-rig' ),
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
