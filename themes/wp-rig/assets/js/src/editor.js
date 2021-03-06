/** Register custom styles for the button, remove the outline style */

wp.domReady( function() {
	// Add Arrow Button.
	wp.blocks.registerBlockStyle( 'core/button', {
		name: 'arrow-cta',
		label: 'Arrow Link',
		isDefault: true,
	} );

	wp.blocks.registerBlockStyle( 'core/heading', {
		name: 'heading-alt',
		label: 'Veneer Heading',
	} );

	wp.blocks.registerBlockStyle( 'core/heading', {
		name: 'heading-underline',
		label: 'Heading w Bottom Border',
	} );

	// Add Column Styles
	wp.blocks.registerBlockStyle( 'core/columns', {
		name: 'vertical-centered',
		label: 'Vertical Centered',
	} );

	wp.blocks.registerBlockStyle( 'core/media-text', {
		name: 'inline-style',
		label: 'Inline - reduced Margins',
	} );

	wp.blocks.registerBlockStyle( 'core/image', {
		name: 'left-aligned-captions',
		label: 'Left Aligned Captions',
	} );

	wp.blocks.registerBlockStyle( 'core/media-text', {
		name: 'square-image',
		label: 'Square Image - crop image to equal height and width',
	} );

	// wp.blocks.registerBlockStyle( 'core/media-text', {
	// 	name: 'small-image',
	// 	label: 'Small Image',
	// } );

	// wp.blocks.registerBlockStyle( 'core/media-text', {
	// 	name: 'round-image',
	// 	label: 'Round Image',
	// } );

	wp.blocks.registerBlockStyle( 'core/media-text', {
		name: 'vertical-center-text',
		label: 'Vertically Center Text',
	} );

	wp.blocks.registerBlockStyle( 'core/media-text', {
		name: 'include-padding-text',
		label: 'Add padding around text',
	} );

	wp.blocks.registerBlockStyle( 'core/list', {
		name: 'no-bullets',
		label: 'No Bullets',
	} );

	// Remove Core Button Style.
	wp.blocks.unregisterBlockStyle( 'core/button', 'outline' );

	// Remove Core HR Style.
	wp.blocks.unregisterBlockStyle( 'core/separator', 'dots' );
	// Remove Core HR Style.
	wp.blocks.unregisterBlockStyle( 'core/separator', 'wide' );

	// Add Column Styles
	wp.blocks.registerBlockStyle( 'core/separator', {
		name: 'no-margin',
		label: 'No Margin',
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
			[ 'core/paragraph', { align: 'center' } ],
		],
		attributes: { className: 'is-page-intro' },
		scope: [ 'inserter' ],
		keywords: [ 'intro', 'page' ],
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
	} else if ( name === 'core/buttons' ) {
		if ( settings.supports ) {
			settings.supports.align = [ 'wide', 'full', 'left', 'center', 'right' ];
		} else {
			settings.supports = {
				align: [ 'wide', 'full', 'left', 'center', 'right' ],
			};
		}
	} else if ( name === 'core/media-text' ) {
		settings.attributes.align.default = '';
	}

	return settings;
}

wp.hooks.addFilter(
	'blocks.registerBlockType',
	'wprig-theme',
	setBlockDefaults
);

