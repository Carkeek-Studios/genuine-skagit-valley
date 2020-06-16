/** Register custom styles for the button, remove the outline style */

wp.domReady( function() {
	const icons = {
		intro: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 17h18v2H3zm16-5v1H5v-1h14m2-2H3v5h18v-5zM3 6h18v2H3z" /></svg>',
	};
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

	// Remove Core Button Style.
	wp.blocks.unregisterBlockStyle( 'core/button', 'outline' );

	// Remove Core HR Style.
	wp.blocks.unregisterBlockStyle( 'core/separator', 'dots' );

	// Add Column Styles
	wp.blocks.registerBlockStyle( 'core/separator', {
		name: 'with-margin',
		label: 'With Margin',
	} );

	//unregister pullquute in favor of cover/group with quote for consistency
	wp.blocks.unregisterBlockType( 'core/pullquote' );

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
		attributes: { align: 'full', className: 'is-group-quote' },
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
