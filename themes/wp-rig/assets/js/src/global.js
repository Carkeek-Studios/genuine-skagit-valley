( function( $ ) {
	$( document ).ready( function() {
		$( '.info-popover' ).gpopover();

		$( '#gform_submit_button_1' ).on( 'click', function( e ) {
			e.preventDefault();
			const email = $( '#input_1_1' ).val();
			const url = $( '#input_1_2' ).val();
			window.location.href = url + '&MERGE0=' + email;
		} );

		if ( document.location.hash ) {
			setTimeout( function() {
				window.scrollTo( window.scrollX, window.scrollY - 50 );
			}, 10 );
		}

		// Select all links with hashes
		$( 'a[href*="#"]' )
		// Remove links that don't actually link to anything
			.not( '[href="#"]' )
			.not( '[href="#0"]' )
			.click( function( event ) {
				// On-page links
				if (
					location.pathname.replace( /^\//, '' ) === this.pathname.replace( /^\//, '' ) && location.hostname === this.hostname
				) {
					// Figure out element to scroll to
					let target = $( this.hash );
					target = target.length ? target : $( '[name=' + this.hash.slice( 1 ) + ']' );
					// Does a scroll target exist?
					if ( target.length ) {
						// Only prevent default if animation is actually gonna happen
						event.preventDefault();
						$( 'html, body' ).animate( {
							scrollTop: target.offset().top - 50,
						}, 1000, function() {
							// Callback after animation
							// Must change focus!
							const $target = $( target );
							$target.focus();
							if ( $target.is( ':focus' ) ) { // Checking if the target was focused
								return false;
							}
							$target.attr( 'tabindex', '-1' ); // Adding tabindex for elements not focusable
							$target.focus(); // Set focus again
						} );
					}
				}
			} );
	} );
}( jQuery ) );
