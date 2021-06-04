<?php
/**
 * Template part for displaying the member details.
 *
 * @package gsv_theme
 */

namespace WP_Rig\WP_Rig;

$class_name = 'wp-block-ck-member-details';
$address    = get_field( 'member_address' );
$site_url   = get_field( 'member_website' );
$open       = get_field( 'open_to_the_public' );
$hours      = get_field( 'hours' );
$site       = rtrim( preg_replace( '(^https?://)', '', $site_url ), '/' );
$social     = get_field( 'member_social' );
$soc_links  = '';

$directions_link = '';
if ( isset( $address['place_id'] ) && ! empty( $address['place_id'] ) ) {
	$directions_link = wp_sprintf( '<a href="https://www.google.com/maps/place/?q=place_id:%1s" target="_blank" class="directions-link">Directions</a>', $address['place_id'] );
} elseif ( isset( $address['address'] ) && ! empty( $address['address'] ) ) {
	$directions_link = wp_sprintf( '<a href="https://www.google.com/maps/search/?api=1&query=%1s" target="_blank" class="directions-link">Directions</a>', $address['address'] );
}
$display_address = '';
// if open to the public we show the address.
if ( true == $open && ! empty( $address['street_number'] ) && ! empty( $address['street_name'] ) ) {
	$display_address = $address['street_number'] . ' ' . $address['street_name'] . '<br/>';
}
// if we have the name, we show that (in the case of Skagit Valley).
if ( empty( $address['city'] ) && ! empty( $address['name'] ) && ! empty( $address['state_short'] ) ) {
	$display_address .= $address['name'] . ', ' . $address['state_short'];
}
// if we have the city, show that.
if ( ! empty( $address['city'] ) && ! empty( $address['state_short'] ) ) {
	$display_address .= $address['city'] . ', ' . $address['state_short'];
}


if ( ! empty( $display_address ) && true == $open ) {
	$display_address .= $directions_link;
}

foreach ( $social as $name => $value ) {
	if ( ! empty( $value ) ) {
		$soc_links .= wp_sprintf( '<li><a href="%1s"><span class="screen-reader-text">%2s</span><i class="icon-%3s" aria-hidden="true"></i></a></li>', $value, $name, $name );
	}
}
?>
<div class="<?php echo esc_attr( $class_name ); ?>">
	<dl>
		<?php if ( ! empty( $display_address ) ) { ?>
		<dt>Location:</dt>
		<dd>
			<address><?php echo wp_kses_post( $display_address ); ?></address>
		</dd>
		<?php } ?>
		<?php if ( ! empty( $hours ) ) { ?>
		<dt>Hours:</dt>
		<dd>
			<?php echo esc_html( $hours ); ?>
		</dd>
		<?php } ?>

	</dl>
	<dl>
		<?php if ( ! empty( get_field( 'member_phone' ) ) ) { ?>
		<dt>Phone:</dt>
		<dd><?php echo esc_html( get_field( 'member_phone' ) ); ?></dd>
		<?php } ?>
		<?php if ( ! empty( $site_url ) ) { ?>
		<dt>Website:</dt>
		<dd><?php echo wp_kses_post( wp_sprintf( '<a href="%1s" target="_blank">%2s</a>', $site_url, $site ) ); ?></dd>
		<?php } ?>
		<?php if ( ! empty( get_field( 'member_email' ) ) ) { ?>
		<dt>Email:</dt>
		<dd><?php echo wp_kses_post( wp_sprintf( '<a href="%1s">%2s</a>', 'mailto:' . get_field( 'member_email' ), get_field( 'member_email' ) ) ); ?></dd>
		<?php } ?>
		<?php if ( ! empty( $soc_links ) ) { ?>
			<dt class="screen-reader-text">Social:</dt>
			<dd><?php echo wp_kses_post( wp_sprintf( '<ul class="list-inline social-links">%1s</ul>', $soc_links ) ); ?></dd>
		<?php } ?>
	</dl>
</div>
