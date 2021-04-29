<?php
/**
 * Render your site front page, whether the front page displays the blog posts index or a static page.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#front-page-display
 *
 * @package gsv_theme
 */

namespace WP_Rig\WP_Rig;

get_header();

gsv_theme()->print_styles( 'gsv-theme-content', 'gsv-theme-front-page' );

if ( is_shop() || is_cart() || is_checkout() ) {
	gsv_theme()->print_styles( 'gsv-theme-woocommerce' );
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
