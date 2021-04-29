<?php
/**
 * WP_Rig\WP_Rig\Editor\Component class
 *
 * @package gsv_theme
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
					'name'  => __( 'Primary', 'gsv-theme' ),
					'slug'  => 'theme-primary',
					'color' => '#cc5d1b',
				),
				array(
					'name'  => __( 'Secondary', 'gsv-theme' ),
					'slug'  => 'theme-secondary',
					'color' => '#62902c',
				),
				array(
					'name'  => __( 'Black', 'gsv-theme' ),
					'slug'  => 'theme-black',
					'color' => '#000',
				),
				array(
					'name'  => __( 'Grey Dark', 'gsv-theme' ),
					'slug'  => 'theme-grey-dark',
					'color' => '#242830',
				),
				array(
					'name'  => __( 'Grey', 'gsv-theme' ),
					'slug'  => 'theme-grey',
					'color' => '##888',
				),
				array(
					'name'  => __( 'White', 'gsv-theme' ),
					'slug'  => 'theme-white',
					'color' => '#fff',
				),
				array(
					'name'  => __( 'Transparent', 'gsv-theme' ),
					'slug'  => 'theme-transparent',
					'color' => 'rgba(36,40,48,0.2)',
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
					'name'      => __( 'Small', 'gsv-theme' ),
					'shortName' => __( 'S', 'gsv-theme' ),
					'size'      => 15,
					'slug'      => 'small',
				),
				array(
					'name'      => __( 'Medium', 'gsv-theme' ),
					'shortName' => __( 'M', 'gsv-theme' ),
					'size'      => 17,
					'slug'      => 'medium',
				),
				array(
					'name'      => __( 'Large', 'gsv-theme' ),
					'shortName' => __( 'L', 'gsv-theme' ),
					'size'      => 21,
					'slug'      => 'large',
				),
			)
		);

		register_block_pattern_category(
			'layout',
			array( 'label' => _x( 'Layouts', 'Block pattern category', 'gsv-theme' ) )
		);
		register_block_pattern_category(
			'elements',
			array( 'label' => _x( 'Elements', 'Block pattern category', 'gsv-theme' ) )
		);

		register_block_pattern(
			'carkeek-blocks/centered-cta',
			array(
				'title'       => __( 'Centered CTA', 'gsv-theme' ),
				'description' => _x( 'Centered CTA', 'Block pattern description', 'gsv-theme' ),
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
				'title'       => __( 'Partner Logos', 'gsv-theme' ),
				'description' => _x( 'Add partner logos into a 5 column row', 'Block pattern description', 'gsv-theme' ),
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
				'title'       => __( 'Class List with Intro', 'gsv-theme' ),
				'description' => _x( 'Header, Intro, Class List and Link', 'Block pattern description', 'gsv-theme' ),
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
				'title'       => __( 'Store with Intro', 'gsv-theme' ),
				'description' => _x( 'Header, Intro, Shop Products and Link', 'Block pattern description', 'gsv-theme' ),
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

	}


}
