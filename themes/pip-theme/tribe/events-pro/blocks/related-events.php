<?php
/**
 * Block: Related Events
 *
 * Override this template in your own theme by creating a file at:
 * [your-theme]/tribe/events-pro/blocks/related-events.php
 *
 * See more documentation about our Blocks Editor templating system.
 *
 * @link https://evnt.is/1ajx
 *
 * @version 4.6.1
 */
$events = $this->get( 'events', null );

if ( ! is_array( $events ) || empty( $events ) ) {
	return;
}
?>
<div class="ck-tribe-related-events-wrapper">
	<?php $this->template( 'blocks/related-events/title' ); ?>

	<ul class="ck-tribe-related-events tribe-clearfix">
		<?php foreach ( $events as $event ) : ?>
			<?php $this->template( 'blocks/related-events/event', array( 'event' => $event ) ); ?>
		<?php endforeach; ?>
	</ul>
	<div class="textaligncenter"><a href="/classes-events/" class="is-style-arrow-cta">See more <span class="screen-reader-text">Classes & Events</span></a></div>

</div>
