<?php
/**
 * Template part for displaying the header branding
 *
 * @package waflt_theme
 */

namespace WP_Rig\WP_Rig;

?>

<div class="site-branding">
	<?php the_custom_logo(); ?>

	<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>

	<?php
	$waflt_theme_description = get_bloginfo( 'description', 'display' );
	if ( $waflt_theme_description || is_customize_preview() ) {
		?>
		<p class="site-description">
			<?php echo $waflt_theme_description; /* phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped */ ?>
		</p>
		<?php
	}
	?>
</div><!-- .site-branding -->
