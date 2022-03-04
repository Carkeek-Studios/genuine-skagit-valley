<?php
/**
 * Template part for displaying the header navigation menu
 *
 * @package gsv_theme
 */

namespace WP_Rig\WP_Rig;

if ( ! gsv_theme()->is_secondary_nav_menu_active() ) {
	return;
}

?>

<nav id="top-navigation" class="top-navigation " aria-label="<?php esc_attr_e( 'Top menu', 'gsv-theme' ); ?>">
<div class="header-top">

<?php if ( is_active_sidebar( 'header-top' ) ) { ?>

				<?php dynamic_sidebar( 'header-top' ); ?>


	<?php } ?>
</div>
	<div class="top-menu-container">
		<?php gsv_theme()->display_secondary_nav_menu( array( 'menu_id' => 'secondary' ) ); ?>
	</div>
</nav><!-- #site-navigation -->
