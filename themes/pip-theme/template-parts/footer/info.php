<?php
/**
 * Template part for displaying the footer info
 *
 * @package pip_theme
 */

namespace WP_Rig\WP_Rig;

?>

<footer class="footer-main">
	<?php if ( is_active_sidebar( 'sidebar-footer' ) ) { ?>
		<section class="footer-section footer-upper has-brayer-background brayer-background-blue brayer-background-right">
			<div class="widget_wrapper">
				<?php dynamic_sidebar( 'sidebar-footer' ); ?>
			</div>
		</section>
	<?php } ?>
		<section class="footer-section footer-lower">
		<?php if ( is_active_sidebar( 'sidebar-footer-lower' ) ) { ?>
			<div class="widget_wrapper footer-lower-widgets">
				<?php dynamic_sidebar( 'sidebar-footer-lower' ); ?>
			</div>
			<?php } ?>

			<div class="colophon-wrapper">
			<?php if ( is_active_sidebar( 'sidebar-footer-bottom' ) ) { ?>
				<div class="widget_wrapper footer-bottom-widgets">
					<?php dynamic_sidebar( 'sidebar-footer-bottom' ); ?>
				</div>
			<?php } ?>
			</div>

		</section>

</footer>
