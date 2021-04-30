<?php
/**
 * Template part for displaying a post's summary
 *
 * @package wp_rig
 */

namespace WP_Rig\WP_Rig;

?>

<div class="entry-summary">
	<?php echo wp_kses_post( get_the_excerpt() ); ?>
	<p class="entry-summary-link"><a class="arrow-link" href="<?php the_permalink(); ?>"><?php echo esc_html( __( 'Continue Reading', 'wp-rig' ) ); ?></a></p>
</div><!-- .entry-summary -->
