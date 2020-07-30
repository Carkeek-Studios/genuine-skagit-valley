<?php
/**
 * Template Name: Capital Campaign
 *
 * Render your site front page, whether the front page displays the blog posts index or a static page.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#front-page-display
 *
 * @package wp_rig
 */

namespace WP_Rig\WP_Rig;

get_header();

wp_rig()->print_styles( 'wp-rig-content' );

?>
	<main id="primary" class="site-main">
	<?php
	while ( have_posts() ) {
			the_post();

			get_template_part( 'template-parts/content/page-campaign' );
	}
	?>

	</main><!-- #primary -->
<?php
get_footer();
