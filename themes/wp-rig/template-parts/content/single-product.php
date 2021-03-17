<?php
/**
 * Template part for displaying a post
 *
 * @package wp_rig
 */

namespace WP_Rig\WP_Rig;

wp_rig()->print_styles( 'wp-rig-woocommerce' );
?>

<article id="post-<?php the_ID(); ?>" <?php post_class( 'entry product' ); ?>>

	<div class="entry-content page-content">

		<?php
		the_content();
		?>
	</div><!-- .entry-content -->
</article><!-- #post-<?php the_ID(); ?> -->

<?php
