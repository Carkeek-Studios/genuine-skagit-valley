<?php
/**
 * Template Name: Capital Campaign
 *
 * Render your site front page, whether the front page displays the blog posts index or a static page.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#front-page-display
 *
 * @package pip_theme
 */

namespace WP_Rig\WP_Rig;

get_header();

pip_theme()->print_styles( 'pip-theme-campaign' );

?>
	<main id="primary" class="site-main page-content">
	<?php
	while ( have_posts() ) {
			the_post();

			the_content();
	}
	?>
	<div class="campaign-template-footer">
		<ul class="colophon">
			<li><strong>WA Farmland Trust</strong></li>
			<li>Copyright &copy; <?php echo date("Y"); ?> - All Rights Reserved</li>
		</ul>

		<?php pip_theme()->display_campaign_footer_nav_menu( array( 'menu_id' => 'campaign_footer' ) ); ?>
</div>
	</main><!-- #primary -->
<?php
get_footer();
