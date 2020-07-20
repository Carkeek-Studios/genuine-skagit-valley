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
 * @link {INSERT_ARTCILE_LINK_HERE}
 *
 * @version 4.7
 *
 */
namespace WP_Rig\WP_Rig;
waflt_theme()->print_styles( 'waflt-theme-events' );

$event_id = $this->get( 'post_id' );

$is_recurring = '';

if ( ! empty( $event_id ) && function_exists( 'tribe_is_recurring_event' ) ) {
	$is_recurring = tribe_is_recurring_event( $event_id );
}
?>
<?php get_template_part( './template-parts/content/page_header', get_post_type() ); ?>
<div id="tribe-events-content" class="tribe-events-single tribe-blocks-editor">
	<div class="events-title page-content">
		<?php $this->template( 'single-event/notices' ); ?>
		<div class="entry-title">
			<?php get_template_part( 'template-parts/content/entry_taxonomies', get_post_type() ); ?>
			<?php $this->template( 'single-event/title' ); ?>
		</div>
		<?php if ( $is_recurring ) { ?>
			<?php $this->template( 'single-event/recurring-description' ); ?>
		<?php } ?>
	</div>
	<?php $this->template( 'single-event/content' ); ?>

</div>
