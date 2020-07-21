<?php
/**
 * View: List View
 *
 * Override this template in your own theme by creating a file at:
 * [your-theme]/tribe/events/v2/list.php
 *
 * See more documentation about our views templating system.
 *
 * @link {INSERT_ARTCILE_LINK_HERE}
 *
 * @version 5.0.2
 *
 * @var array    $events               The array containing the events.
 * @var string   $rest_url             The REST URL.
 * @var string   $rest_nonce           The REST nonce.
 * @var int      $should_manage_url    int containing if it should manage the URL.
 * @var bool     $disable_event_search Boolean on whether to disable the event search.
 * @var string[] $container_classes    Classes used for the container of the view.
 * @var array    $container_data       An additional set of container `data` attributes.
 * @var string   $breakpoint_pointer   String we use as pointer to the current view we are setting up with breakpoints.
 */
namespace WP_Rig\WP_Rig;

waflt_theme()->print_styles( 'waflt-theme-events' );

$header_classes = array( 'tribe-events-header' );
if ( empty( $disable_event_search ) ) {
	$header_classes[] = 'tribe-events-header--has-event-search';
}
$events_count = count( $events );
$events_break = 3;
// TODO If event count is zero

// If events count is greater than 3, the last 3 are displayed differently
if ( $events_count > 3 ) {
	$events_break = $events_count - $events_break;
}
?>
<?php get_template_part( './template-parts/content/page_header', 'events' ); ?>
<?php if ( ! empty( $events ) ) { ?>
<div
	<?php tribe_classes( $container_classes ); ?>
	data-js="tribe-events-view"
	data-view-rest-nonce="<?php echo esc_attr( $rest_nonce ); ?>"
	data-view-rest-url="<?php echo esc_url( $rest_url ); ?>"
	data-view-manage-url="<?php echo esc_attr( $should_manage_url ); ?>"
	<?php foreach ( $container_data as $key => $value ) : ?>
		data-view-<?php echo esc_attr( $key ); ?>="<?php echo esc_attr( $value ); ?>"
	<?php endforeach; ?>
	<?php if ( ! empty( $breakpoint_pointer ) ) : ?>
		data-view-breakpoint-pointer="<?php echo esc_attr( $breakpoint_pointer ); ?>"
	<?php endif; ?>
>

	<div class="wfl-events-list">
		<?php $this->template( 'components/loader', array( 'text' => __( 'Loading...', 'the-events-calendar' ) ) ); ?>

		<?php $this->template( 'components/json-ld-data' ); ?>

		<?php $this->template( 'components/data' ); ?>

		<?php $this->template( 'components/before' ); ?>

		<div class="tribe-events-calendar-list">

			<?php foreach ( $events as $count => $event ) : ?>
				<?php $this->setup_postdata( $event ); ?>
				<?php
				if ( $count === $events_break ) {
					?>
					<div class="wfl-events-more-wrapper">
						<div class="wfl-events-more">
							<div class="h5 is-style-highlight wfl-events-more__headline">More Events</div>
							<div class="wfl-events-more-row">


					<?php
				}
						$this->template( 'list/event', array( 'event' => $event ) );
				if ( $events_count > 3 && $count === $events_count - 1 ) {
					echo '</div></div></div>';
				}
				?>

			<?php endforeach; ?>

		</div>

	</div>

</div>
<?php } else { ?>
		<div class="page-content">
		<div class="wp-block-custom-content">
		<?php the_field( 'events_no_events_content', 'options' ); ?>

		</div>
		</div>

			<?php } ?>
<?php $this->template( 'components/breakpoints' ); ?>
