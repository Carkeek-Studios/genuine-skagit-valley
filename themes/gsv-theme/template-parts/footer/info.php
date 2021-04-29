<?php
/**
 * Template part for displaying the footer info
 *
 * @package gsv_theme
 */

namespace WP_Rig\WP_Rig;

$footer_top_bg_image = get_theme_mod( 'wprig_footertop_bg_image' );
$footer_style        = '';
if ( ! empty( $footer_top_bg_image ) ) {
	$footer_style = 'has-background-image';
}
?>

<footer class="footer-main">
	<?php if ( is_active_sidebar( 'sidebar-footer' ) ) { ?>
		<section class="footer-section footer-upper <?php echo esc_attr( $footer_style ); ?>">
			<div class="widget_wrapper">
				<?php dynamic_sidebar( 'sidebar-footer' ); ?>
			</div>
		</section>
	<?php } ?>
	<?php if ( is_active_sidebar( 'sidebar-footer-lower' ) ) { ?>
		<section class="footer-section footer-lower">

			<div class="widget_wrapper footer-lower-widgets">
				<?php dynamic_sidebar( 'sidebar-footer-lower' ); ?>
			</div>
		</section>
	<?php } ?>
	<?php if ( is_active_sidebar( 'sidebar-footer-bottom' ) ) { ?>

			<div class="colophon-wrapper">
				<div class="widget_wrapper footer-bottom-widgets">
					<?php dynamic_sidebar( 'sidebar-footer-bottom' ); ?>
				</div>
			</div>

			<?php } ?>
</footer>
