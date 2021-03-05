<?php
/**
 * Template part for displaying the header branding
 *
 * @package pip_theme
 */

namespace WP_Rig\WP_Rig;

?>

<div class="site-branding">
	<?php the_custom_logo(); ?>

	<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>

	<?php
	$pip_theme_description = get_bloginfo( 'description', 'display' );
	if ( $pip_theme_description || is_customize_preview() ) {
		?>
		<p class="site-description">
			<?php echo $pip_theme_description; /* phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped */ ?>
		</p>
		<?php
	}
	?>
</div><!-- .site-branding -->
