<?php
/**
 * Template part for displaying a post's content
 *
 * @package gsv_theme
 */

namespace WP_Rig\WP_Rig;

?>


<div class="entry-content">
	<?php get_template_part( 'template-parts/content/entry_header', get_post_type() ); ?>
	<?php
	the_content(
		sprintf(
			wp_kses(
				/* translators: %s: Name of current post. Only visible to screen readers */
				__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'gsv-theme' ),
				array(
					'span' => array(
						'class' => array(),
					),
				)
			),
			get_the_title()
		)
	);

	wp_link_pages(
		array(
			'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'gsv-theme' ),
			'after'  => '</div>',
		)
	);
	?>
</div><!-- .entry-content -->
