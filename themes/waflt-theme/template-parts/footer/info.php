<?php
/**
 * Template part for displaying the footer info
 *
 * @package waflt_theme
 */

namespace WP_Rig\WP_Rig;

?>

<footer class="footer-main">
	<?php if ( is_active_sidebar( 'sidebar-footer' ) ) { ?>
		<section class="footer-section footer-upper">
			<div class="widget_wrapper">
				<?php dynamic_sidebar( 'sidebar-footer' ); ?>
			</div>
		</section>
	<?php } ?>

		<hr/>
		<section class="footer-section footer-lower">
		<?php if ( is_active_sidebar( 'sidebar-footer-lower' ) ) { ?>
			<div class="widget_wrapper">
				<?php dynamic_sidebar( 'sidebar-footer-lower' ); ?>
			</div>
			<?php } ?>
			<div class="colophon">
				<ul class="colophon-info no-list">
					<li class="copyright">Washington Farmland Trust is a 501(c)(3) nonprofit, accredited land trust. &copy; <?php echo esc_attr( gmdate( 'Y' ) ); ?> <?php bloginfo( 'name' ); ?>. All Rights Reserved.
					<a class="info-popover" href="#" data-popover="site-credit-pop">Site Credits</a>.
						<div class="gpopover no-list" id="site-credit-pop">
							<ul class="no-list">
								<li class="contact-info">Design: <a href="http://beansnrice.com" target="_blank">Beans n' Rice</a></li>
								<li class="contact-info">Development: <a href="https://carkeekstudios.com"  target="_blank">Carkeek Studios</a></li>
							</ul>
						</div>
					</li>
				</ul>
				<div class="footer-social">
				<?php echo wp_kses_post( waflt_theme()->get_social_links() ); ?>
			</div>
			<div class="footer-accreditation">
				<?php echo wp_kses_post( waflt_theme()->get_accreditation() ); ?>
			</div>
			</div>

		</section>

</footer>
