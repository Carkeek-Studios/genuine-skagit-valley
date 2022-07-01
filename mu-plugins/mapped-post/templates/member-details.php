<?php

/**
 * Member Details Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$block_id = 'ck_members-' . $block['id'];
if ( ! empty( $block['anchor'] ) ) {
	$block_id = $block['anchor'];
}
$class_name = 'wp-block-ck-member-details';
$address    = $block['data']['member_address'];
$site_url   = $block['data']['member_website'];

$social     = get_field( 'member_social' );
$soc_links  = '';

$directions_link = '';
if ( isset( $address['address'] ) && ! empty( $address['address'] ) ) {
	$directions_link = wp_sprintf( '<a href="https://maps.google.com/?daddr=%1s" target="_blank">Directions</a>', $address['address'] );
}
foreach ( $social as $name => $value ) {
	if ( ! empty( $value ) ) {
		$soc_links .= wp_sprintf( '<li><a href="%1s"><span class="screen-reader-text">%2s</span><i class="icon-%3s" aria-hidden="true"></i></a></li>', $value, $name, $name );
	}
}
?>
<div id="<?php echo esc_attr( $block_id ); ?>" class="<?php echo esc_attr( $class_name ); ?>">
	<dl>
		<dt>Location:</dt>
		<dd><address><?php echo esc_html( $address['name'] ); ?><br/>
		<?php echo esc_html( $address['city'] . ', ' . $address['state_short'] ); ?>
		</address>
		<?php echo wp_kses_post( $directions_link ); ?>
		</dd>
		<?php if ( ! empty( $block['data']['member_phone'] ) ) { ?>
		<dt>Phone:</dt>
		<dd><?php echo esc_html( $block['data']['member_phone'] ); ?></dd>
		<?php } ?>
	</dl>
	<dl>
		<?php if ( ! empty( $site_url ) ) { ?>
		<dd><?php echo wp_kses_post( wp_sprintf( '<a href="%1s" target="_blank">%2s</a>', $site_url, 'Website' ) ); ?></dd>
		<?php } ?>
		<?php if ( ! empty( $block['data']['member_email'] ) ) { ?>
		<dt>Email:</dt>
		<dd><?php echo wp_kses_post( wp_sprintf( '<a href="%1s">%2s</a>', 'mailto:' . $block['data']['member_email'], $block['data']['member_email'] ) ); ?></dd>
		<?php } ?>
		<?php if ( ! empty( $soc_links ) ) { ?>
			<dt class="screen-reader-text">Social:</dt>
			<dd><?php echo wp_kses_post( wp_sprintf( '<ul class="list-inline social-links">%1s</ul>', $soc_links ) ); ?></dd>
		<?php } ?>
	</dl>
</div>
