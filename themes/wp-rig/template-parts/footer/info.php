<?php
/**
 * Template part for displaying the footer info
 *
 * @package wp_rig
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
				<div class="footer-nav footer-social"><?php wp_nav_menu( array( 'menu_id' => 'footer-nav' ) ); ?></div>
					<div class="colophon">
						<ul class="colophon-info no-list">
							<li class="copyright">&copy; <?php echo esc_attr( gmdate( 'Y' ) ); ?> <?php bloginfo( 'name' ); ?>. All Rights Reserved.
							<a class="info-popover" href="#" data-popover="site-credit-pop">Site Credits</a>.
								<div class="gpopover no-list" id="site-credit-pop">
									<ul class="no-list">
										<li class="contact-info">Website Design: <a href="http://beansnrice.com" target="_blank">Beans n' Rice</a></li>
										<li class="contact-info">Wesbite Development: <a href="https://carkeekstudios.com"  target="_blank">Carkeek Studios</a></li>
									</ul>
								</div>
							</li>
							<ll> PIP is based in Seattle, WA </li>
						</ul>
				</div>
				<?php if ( is_active_sidebar( 'sidebar-footer-bottom' ) ) { ?>
			<div class="widget_wrapper footer-bottom-widgets">
				<?php dynamic_sidebar( 'sidebar-footer-bottom' ); ?>
			</div>
			<?php } ?>
			</div>

		</section>

</footer>
