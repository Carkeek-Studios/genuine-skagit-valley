<?php
/**
 * Render your site front page, whether the front page displays the blog posts index or a static page.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#front-page-display
 *
 * @package wp_rig
 */

namespace WP_Rig\WP_Rig;

get_header();

wp_rig()->print_styles( 'wp-rig-content', 'wp-rig-front-page' );

if ( is_shop() || is_cart() || is_checkout() ) {
	wp_rig()->print_styles( 'wp-rig-woocommerce' );
}

?>
	<main id="primary" class="site-main">
		<?php
		get_template_part( 'template-parts/content/page_header' );
		while ( have_posts() ) {
			the_post();

			get_template_part( 'template-parts/content/entry_page' );
		}

		get_template_part( 'template-parts/content/pagination' );
		?>
	</main><!-- #primary -->
<?php
get_footer();
