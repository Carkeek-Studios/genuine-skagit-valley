
<!-- WOOCOMMERCE BASKET -->
<?php
if ( in_array( 'woocommerce/woocommerce.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) ) {
	$count = WC()->cart->cart_contents_count;
	?>
<a class="cart-contents icon-basket" href="<?php echo wc_get_cart_url(); ?>" title="<?php _e( 'View your shopping cart' ); ?>">
	<?php
	if ( $count > 0 ) {
		?>
	<span class="cart-contents-count"><?php echo esc_html( $count ); ?></span>
		<?php
	}
	?>
	</a>
<?php } ?>