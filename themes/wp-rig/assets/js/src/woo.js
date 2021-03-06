
( function( $ ) {
	function setUpQty() {
		const plus = '<button type="button" class="quantity-button plus">+<span class="screen-reader-text">Add 1</span></button>';
		const minus = '<button type="button" class="quantity-button minus">-<span class="screen-reader-text">Subtract 1</span></button>';

		$( '.quantity input[type=number]' ).wrap( '<div class="number-input"></div>' );
		$( minus ).insertBefore( '.quantity input[type=number]' );
		$( plus ).insertAfter( '.quantity input[type=number]' );
	}

	$( function() {
		//handled on cart page via woocommerce filters to suppor ajax update
		if ( $( 'body' ).hasClass( 'single-product' ) ) {
			setUpQty();
		}

		//trigger refresh on cart images
		$( 'body' ).bind( 'wc_fragments_refreshed', function() {
			$( window ).trigger( 'resize' );
		} );

		$( 'th.product-name' ).text( '' );
		$( 'td.product-name' ).attr( 'data-title', 'Item' );
		$( 'th.product-remove' ).text( 'Item' );

		$( '.quantity-button' ).on( 'click', function( e ) {
			e.preventDefault();
			const $input = $( this ).parent( '.number-input' ).find( '.input-text.qty' )[ 0 ];
			if ( $( this ).hasClass( 'plus' ) ) {
				$input.stepUp();
			} else {
				$input.stepDown();
			}
			$( 'button[name=update_cart]' ).prop( 'disabled', false ).trigger( 'click' );
		} );
	} );
}( jQuery ) );
