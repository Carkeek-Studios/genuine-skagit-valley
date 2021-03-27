<?php
/**
 * Block: Event Links
 *
 * Override this template in your own theme by creating a file at:
 * [your-theme]/tribe/events/blocks/event-links.php
 *
 * See more documentation about our Blocks Editor templating system.
 *
 * @link http://evnt.is/1aiy
 *
 * @version 4.7
 *
 */

 use WP_Rig\WP_Rig;
// don't show on password protected posts
if ( post_password_required() ) {
	return;
}

$has_google_cal = $this->attr( 'hasGoogleCalendar' );
$has_ical       = $this->attr( 'hasiCal' );

$should_render = $has_google_cal || $has_ical;

remove_filter( 'the_content', 'do_blocks', 9 );

if ( $should_render ) :
?>

<div class="share-save-links">
	<?php echo WP_Rig\pip_theme()->make_social_share_links(); ?>
	<div class="ical-links">Add to Calendar<button class="icon icon-calendar info-popover" data-toggle="popover" data-popover="cal-links"></button>
		<div class="gpopover" id="cal-links">

				<?php if ( $has_google_cal ) : ?>
					<div class="tribe-block__btn--link tribe-block__events-gcal">
						<a
							href="<?php echo Tribe__Events__Main::instance()->esc_gcal_url( tribe_get_gcal_link() ); ?>"
							title="<?php esc_attr_e( 'Add to Google Calendar', 'pip-theme' ); ?>"
							target="_blank"
						>
							<?php echo esc_html( $this->attr( 'googleCalendarLabel' ) ) ?>
						</a>
					</div>
				<?php endif; ?>
				<?php if ( $has_ical ) : ?>
					<div class="tribe-block__btn--link tribe-block__-events-ical">
						<a
							href="<?php echo esc_url( tribe_get_single_ical_link() ); ?>"
							title="<?php esc_attr_e( 'Download .ics file', 'pip-theme' ); ?>"
							target="_blank"
						>
							<?php echo esc_html( $this->attr( 'iCalLabel' ) ) ?>
						</a>
					</div>
				<?php endif; ?>
		</div>
	</div>
</div>
<?php endif; ?>

<?php add_filter( 'the_content', 'do_blocks', 9 );
