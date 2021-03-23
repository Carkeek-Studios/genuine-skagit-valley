<?php
/**
 * Single Event Template
 * A single event. This displays the event title, description, meta, and
 * optionally, the Google map for the event.
 *
 * Override this template in your own theme by creating a file at [your-theme]/tribe-events/single-event.php
 *
 * @package TribeEventsCalendar
 * @version 4.6.19
 */

use WP_Rig\WP_Rig;

if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
}

$events_label_singular = tribe_get_event_label_singular();
$events_label_plural   = tribe_get_event_label_plural();

$event_id = get_the_ID();


WP_Rig\pip_theme()->print_styles( 'pip-theme-content', 'pip-theme-front-page' );

?>

<div id="tribe-events-content" class="tribe-events-single">


<?php get_template_part( 'template-parts/content/page_header' ); ?>
	<div class="page-content">
	<!-- Notices -->
	<?php tribe_the_notices(); ?>


	<?php

	while ( have_posts() ) :
		the_post();
		?>
		<div id="post-<?php the_ID(); ?>" <?php post_class( 'events-custom-content' ); ?>>
		<?php
		echo tribe_get_event_categories(
			get_the_id(),
			[
				'before'       => '',
				'sep'          => ' ',
				'after'        => '',
				'label'        => null, // An appropriate plural/singular label will be provided
				'label_before' => '<div class="tribe-events-event-categories-label">',
				'label_after'  => '</div>',
				'wrap_before'  => '<div class="tribe-event-categories">',
				'wrap_after'   => '</div>',
			]
		);
		?>

		<?php the_title( '<h1 class="h3 tribe-events-single-event-title">', '</h1>' ); ?>

		<?php
		$organizer_ids   = tribe_get_organizer_ids();
		$organizer_names = array_map(
			function( $id ) {
				return tribe_get_organizer( $id );
			},
			$organizer_ids
		);
		?>


		<?php
		if ( ! empty( $organizer_names ) ) {
			?>
		<div class="tribe-events-organizers"><?php echo __( 'with', 'pip-theme' ) . ' ' . implode( ', ', $organizer_names ); ?></div>
		<?php } ?>
		<div class="tribe-events-schedule tribe-clearfix">
			<?php echo tribe_events_event_schedule_details( $event_id, '<div>', '</div>' ); ?>

		</div>
		<?php if ( tribe_get_cost() ) : ?>
				<div class="tribe-events-cost"><?php echo tribe_get_cost( null, true ); ?></div>
			<?php endif; ?>
			<?php tribe_get_template_part( 'modules/meta/venue' ); ?>
			<?php do_action( 'pip_theme_tribe_events_single_event_after_the_meta' ); ?>

			<!-- Event content -->
			<?php do_action( 'tribe_events_single_event_before_the_content' ); ?>
			<div class="tribe-events-single-event-description tribe-events-content">
				<?php the_content(); ?>
			</div>
			<!-- .tribe-events-single-event-description -->
			<?php // do_action( 'tribe_events_single_event_after_the_content' ); ?>
			<?php
			if ( ! empty( $organizer_ids ) ) {
				$label = count( $organizer_ids ) > 1 ? __( 'About the instructors', 'pip-theme' ) : __( 'About the instructor', 'pip-theme' );
				?>
				<h2 class="h4"><?php echo $label; ?></h2>
				<?php
				foreach ( $organizer_ids as $organizer ) {
					?>
					<div class="tribe-instructor">
						<?php echo get_the_post_thumbnail( $organizer, 'medium' ); ?>
						<div class="tribe-instructor_title"><?php echo tribe_get_organizer( $id ); ?></div>
						<div class="tribe-instructor_sub"><?php the_field( 'organizers_role', $organizer ); ?></div>
						<div class="tribe-instructor_details"><?php echo get_the_content( null, true, $organizer ); ?></div>

					</div>
					<?php
				}
			}
			?>
			<?php //do_action( 'tribe_events_single_event_before_the_meta' ); ?>
			<?php //do_action( 'tribe_events_single_event_after_the_meta' ); ?>

		</div> <!-- #post-x -->
		<div class="tribe-single-related-events alignwide ck-columns has-3-columns">
		<?php tribe_single_related_events(); ?>
		</div>
	<?php endwhile; ?>

	<!-- #tribe-events-footer -->
		</div><!-- #article -->
</div><!-- #tribe-events-content -->
