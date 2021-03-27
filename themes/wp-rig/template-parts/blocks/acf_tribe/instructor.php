<?php

/**
 * Instructor Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'tribe_instructor-' . $block['id'];
if ( ! empty( $block['anchor'] ) ) {
	$id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'tribe-instructor-block';
if ( ! empty( $block['className'] ) ) {
	$className .= ' ' . $block['className'];
}
if ( ! empty( $block['align'] ) ) {
	$className .= ' align' . $block['align'];
}

// Load values and assign defaults.
$headline = get_field( 'headline' ) ?: __('About the Instructor', 'wp-rig');

if ( get_field( 'select_instructor' ) && 'select' === get_field( 'display' ) ) {
	$organizers = array( get_field( 'select_instructor' ) );
} else {
	$organizers = tribe_get_organizer_ids();
}

?>
<div id="<?php echo esc_attr( $id ); ?>" class="<?php echo esc_attr( $className ); ?>">
	<h2><?php echo $headline; ?></h2>

	<?php foreach ( $organizers as $organizer ) { ?>
		<div class ="tribe-instructor">
		<?php echo get_the_post_thumbnail( $organizer, 'medium' );?>
		<div class="tribe-instructor_title"><?php echo tribe_get_organizer( $id ); ?></div>
		<div class="tribe-instructor_sub"><?php the_field( 'organizers_role', $organizer ); ?></div>
		<div class="tribe-instructor_details"><?php echo get_the_content( null, true, $organizer ); ?></div>

		</div>
	<?php } ?>

</div>
