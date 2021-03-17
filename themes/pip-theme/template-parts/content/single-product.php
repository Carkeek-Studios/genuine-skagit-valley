<?php
/**
 * Template part for displaying a post
 *
 * @package pip_theme
 */

namespace WP_Rig\WP_Rig;

pip_theme()->print_styles( 'pip-theme-woocommerce' );
?>

<article id="post-<?php the_ID(); ?>" <?php post_class( 'entry product' ); ?>>

	<div class="entry-content page-content">

		<?php
		the_content();
		?>
	</div><!-- .entry-content -->
</article><!-- #post-<?php the_ID(); ?> -->

<?php
