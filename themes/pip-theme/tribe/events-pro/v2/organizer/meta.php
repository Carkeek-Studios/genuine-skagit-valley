<?php
/**
 * View: Organizer meta
 *
 * Override this template in your own theme by creating a file at:
 * [your-theme]/tribe/events-pro/v2/organizer/meta.php
 *
 * See more documentation about our views templating system.
 *
 * @link https://evnt.is/1aiy
 *
 * @version 5.0.0
 *
 * @var WP_Post $organizer The organizer post object.
 *
 */

$classes = [ 'tribe-events-pro-organizer__meta' ];

$content = tribe_get_the_content( null, false, $organizer->ID );
$url     = tribe_get_organizer_website_url( $organizer->ID );
$email   = tribe_get_organizer_email( $organizer->ID );
$phone   = tribe_get_organizer_phone( $organizer->ID );

$image = get_the_post_thumbnail( $organizer->ID, 'large' );

$has_content = ! empty( $content );
$has_details = ! empty( $url ) || ! empty( $email ) || ! empty( $phone );
$has_image   = ! empty( $image );

?>
<div <?php tribe_classes( $classes ); ?>>
	<div class="tribe-organizer_header">
	<a href="/who-we-are/">Who We Are</a>
	<h1 class="h2 tribe-events-pro-organizer__meta-title tribe-common-h3">
		<?php echo tribe_get_organizer( $organizer->ID ); ?>
	</h1>
	<?php
	$role = get_post_meta( $organizer->ID, 'organizers_role', true );
	if ( ! empty( $role ) ) {
		echo wp_kses_post( '<div class="ck-item-organizer_role">' . $role . '</div>' );
	}
	?>
	</div>
	<div class="tribe-organizer_content">
	<?php if ( $has_image ) : ?>

<div class="tribe-events-pro-organizer__featured-image aspect-ratio-thumbnail">
	<div class="wrap">
	<?php echo wp_kses_post($image); ?>
	</div>
</div>
<?php endif; ?>
	<?php if ( $has_content ) : ?>

		<div class="tribe-events-pro-organizer__info">

		<?php echo $content; ?>

		</div>

	<?php endif; ?>
	</div>
</div>
