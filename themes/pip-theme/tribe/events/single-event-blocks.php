<?php
/**
 * Single Event Template
 *
 * A single event complete template, divided in smaller template parts.
 *
 * Override this template in your own theme by creating a file at:
 * [your-theme]/tribe/events/single-event-blocks.php
 *
 * See more documentation about our Blocks Editor templating system.
 *
 * @link http://evnt.is/1aiy
 *
 * @version 4.7
 *
 */

use WP_Rig\WP_Rig;

WP_Rig\pip_theme()->print_styles( 'pip-theme-content' );

$event_id = $this->get( 'post_id' );

$is_recurring = '';

if ( ! empty( $event_id ) && function_exists( 'tribe_is_recurring_event' ) ) {
	$is_recurring = tribe_is_recurring_event( $event_id );
}
?>
<?php get_template_part( 'template-parts/content/page_header' ); ?>
<div id="tribe-events-content" class="tribe-events-single tribe-blocks-editor">
	<?php $this->template( 'single-event/notices' ); ?>
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
	<?php if ( $is_recurring ) { ?>
		<?php $this->template( 'single-event/recurring-description' ); ?>
	<?php } ?>
	<?php $this->template( 'single-event/content' ); ?>
</div>
