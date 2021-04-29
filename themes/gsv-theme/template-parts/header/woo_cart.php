<?php
/**
 * Template part for displaying the cart in the header
 *
 * @package gsv_theme
 */

if ( in_array( 'woocommerce/woocommerce.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) ) {
	$count = WC()->cart->cart_contents_count;
	?>
<a class="cart-contents icon-basket" href="<?php echo esc_url( wc_get_cart_url() ); ?>" title="<?php esc_html_e( 'View your shopping cart', 'gsv-theme' ); ?>">
	<?php
	if ( $count > 0 ) {
		?>
	<span class="cart-contents-count"><?php echo esc_html( $count ); ?></span>
		<?php
	}
	?>
	</a>
<?php } ?>
