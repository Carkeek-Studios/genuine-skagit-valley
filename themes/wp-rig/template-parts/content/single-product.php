<?php
/**
 * Template part for displaying a post
 *
 * @package wp_rig
 */

namespace WP_Rig\WP_Rig;

wp_rig()->print_styles( 'wp-rig-woocommerce' );

?>
<div class="page-header page-header-solid">
	<div class="entry-title">
		<span><?php echo wp_kses_post( wp_sprintf( '<a href="%1s">%2s</a>', wc_get_page_permalink( 'shop' ), __( 'Shop', 'wp-rig' ) ) ); ?></span>
		<h1><?php the_title(); ?></h1>
	</div>
</div>
<article id="post-<?php the_ID(); ?>" <?php post_class( 'entry product' ); ?>>

	<div class="entry-content">

		<?php
		the_content();
		?>
	</div><!-- .entry-content -->
</article><!-- #post-<?php the_ID(); ?> -->

<?php
