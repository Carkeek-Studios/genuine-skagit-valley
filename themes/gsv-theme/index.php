<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package gsv_theme
 */

namespace WP_Rig\WP_Rig;

get_header();

gsv_theme()->print_styles( 'gsv-theme-content' );
?>
	<main id="primary" class="site-main">
		<?php
		if ( have_posts() ) {

				get_template_part( 'template-parts/content/page_header' );

			if ( ! is_singular() ) {
				?>
				<div class="archive-wrapper">
				<?php
			}
			while ( have_posts() ) {
				the_post();

				if ( ! is_singular() ) {
					get_template_part( 'template-parts/content/entry', get_post_type() );
				} else {
					get_template_part( 'template-parts/content/single', get_post_type() );
				}
			}

			if ( ! is_singular() ) {
				?>
				<!-- end .archive-wrapper -->
			</div>
				<?php
				get_template_part( 'template-parts/content/pagination' );
			}
		} else {
			get_template_part( 'template-parts/content/error' );
		}
		?>
	</main><!-- #primary -->
<?php

get_footer();