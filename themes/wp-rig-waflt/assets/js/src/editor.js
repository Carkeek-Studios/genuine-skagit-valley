/** Register custom styles for the button, remove the outline style */

wp.domReady( function() {
	// Add Arrow Button.
	wp.blocks.registerBlockStyle( 'core/button', {
		name: 'arrow-cta',
		label: 'Arrow Link',
	} );

	// Add Column Styles
	wp.blocks.registerBlockStyle( 'core/columns', {
		name: 'vertical-centered',
		label: 'Vertical Centered',
	} );

	wp.blocks.registerBlockStyle( 'core/heading', {
		name: 'highlight',
		label: 'Highlight',
	} );

	wp.blocks.registerBlockStyle( 'core/media-text', {
		name: 'small-image',
		label: 'Small Image',
	} );

	// Remove Core Button Style.
	wp.blocks.unregisterBlockStyle( 'core/button', 'outline' );

	// Remove Core HR Style.
	wp.blocks.unregisterBlockStyle( 'core/separator', 'dots' );
	// Remove Core HR Style.
	wp.blocks.unregisterBlockStyle( 'core/separator', 'wide' );

	// Add Column Styles
	wp.blocks.registerBlockStyle( 'core/separator', {
		name: 'with-margin',
		label: 'With Margin',
	} );

	wp.blocks.registerBlockVariation( 'core/cover', {
		name: 'page-header-cover',
		title: 'Page Header',
		icon: 'format-image',
		innerBlocks: [
			[ 'core/heading', { align: 'center', level: 1, placeholder: 'Page Title' } ],
		],
		attributes: { align: 'full', className: 'is-page-header', dimRatio: 0 },
		scope: [ 'inserter' ],
		keywords: [ 'cover', 'page', 'header' ],
	} );

	wp.blocks.registerBlockVariation( 'core/cover', {
		name: 'quote-image-bg',
		title: 'Pullquote with Image',
		icon: 'format-image',
		innerBlocks: [
			[ 'core/quote', { } ],
		],
		attributes: { align: 'full', className: 'is-cover-quote', dimRatio: 0 },
		scope: [ 'inserter' ],
		keywords: [ 'cover', 'quote', 'image' ],
	} );

	wp.blocks.registerBlockVariation( 'core/group', {
		name: 'quote-color-bg',
		title: 'Pullquote with Background-color',
		icon: 'format-quote',
		innerBlocks: [
			[ 'core/quote', { } ],
		],
		attributes: { align: 'full', className: 'is-group-quote', backgroundColor: 'theme-orange', textColor: 'theme-white' },
		scope: [ 'inserter' ],
		keywords: [ 'cover', 'quote', 'background' ],
	} );

	wp.blocks.registerBlockVariation( 'core/group', {
		name: 'page-intro',
		title: 'Page Intro',
		icon: 'editor-aligncenter',
		innerBlocks: [
			[ 'core/paragraph', { align: 'center', fontSize: 'medium' } ],
		],
		attributes: { align: 'full', className: 'is-page-intro' },
		scope: [ 'inserter' ],
		keywords: [ 'intro', 'page' ],
	} );

	wp.blocks.registerBlockVariation( 'core/group', {
		name: 'single-column-centered',
		title: 'Single Column',
		icon: 'format-image',
		innerBlocks: [
			[ 'core/paragraph', { align: 'center' } ],
		],
		attributes: { align: 'full', className: 'is-single-column' },
		scope: [ 'inserter' ],
		keywords: [ 'column', 'centered', 'single' ],
	} );
} );

//Set the default dimratio on the cover block to 0.
function setBlockDefaults( settings, name ) {
	if ( name === 'core/cover' ) {
		if ( settings.attributes && settings.attributes.dimRatio ) {
			settings.attributes.dimRatio.default = 0;
		}
	} else if ( name === 'core/separator' ) {
		if ( settings.supports ) {
			settings.supports.align = [ 'wide', 'full' ];
		} else {
			settings.supports = {
				align: [ 'wide', 'full' ],
			};
		}
	}

	return settings;
}

wp.hooks.addFilter(
	'blocks.registerBlockType',
	'wprig-theme',
	setBlockDefaults
);

//Set the default dimratio on the cover block to 0.
// function setMediaTextDefaults( settings, name ) {
// 	if ( name !== 'core/cover' ) {
// 		return settings;
// 	}

// 	if ( settings.attributes && settings.attributes.dimRatio ) {
// 		settings.attributes.dimRatio.default = 0;
// 	}
// 	return settings;
// }

// wp.hooks.addFilter(
// 	'blocks.registerBlockType',
// 	'wprig-theme',
// 	setMediaTextDefaults
// );
