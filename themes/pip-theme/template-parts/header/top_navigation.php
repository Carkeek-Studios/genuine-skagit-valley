<?php
/**
 * Template part for displaying the header navigation menu
 *
 * @package pip_theme
 */

namespace WP_Rig\WP_Rig;

if ( ! pip_theme()->is_secondary_nav_menu_active() ) {
	return;
}

?>

<nav id="top-navigation" class="top-navigation " aria-label="<?php esc_attr_e( 'Top menu', 'pip-theme' ); ?>">
	<div class="top-menu-container">
		<?php pip_theme()->display_secondary_nav_menu( array( 'menu_id' => 'secondary' ) ); ?>
	</div>
</nav><!-- #site-navigation -->
