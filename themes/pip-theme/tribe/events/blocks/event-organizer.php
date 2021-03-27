<?php
/**
 * Block: Event Organizer
 *
 * Override this template in your own theme by creating a file at:
 * [your-theme]/tribe/events/blocks/event-organizer.php
 *
 * See more documentation about our Blocks Editor templating system.
 *
 * @link http://evnt.is/1aiy
 *
 * @version 5.0.1
 *
 */

$organizer = $this->attr( 'organizer' );

if ( ! $organizer ) {
	return;
}

$phone   = tribe_get_organizer_phone( $organizer );
$website = tribe_get_organizer_website_link( $organizer );
$email   = tribe_get_organizer_email( $organizer );
?>
<div class="tribe-block tribe-block-details tribe-block__organizer__details tribe-clearfix">
	<?php echo __('with', 'pip-theme') . ' ' . tribe_get_organizer( $organizer ); ?>
</div>
