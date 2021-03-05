<?php
/**
 * Template part for displaying the header navigation menu
 *
 * @package pip_theme
 */

namespace WP_Rig\WP_Rig;

if ( ! pip_theme()->is_primary_nav_menu_active() ) {
	return;
}

?>

<nav id="site-navigation" class="main-navigation nav--toggle-sub nav--toggle-small" aria-label="<?php esc_attr_e( 'Main menu', 'pip-theme' ); ?>"
	<?php
	if ( pip_theme()->is_amp() ) {
		?>
		[class]=" siteNavigationMenu.expanded ? 'main-navigation nav--toggle-sub nav--toggle-small nav--toggled-on' : 'main-navigation nav--toggle-sub nav--toggle-small' "
		<?php
	}
	?>
>
	<?php
	if ( pip_theme()->is_amp() ) {
		?>
		<amp-state id="siteNavigationMenu">
			<script type="application/json">
				{
					"expanded": false
				}
			</script>
		</amp-state>
		<?php
	}
	?>

	<button class="header-toggle menu-toggle hamburger hamburger--spring" aria-label="<?php esc_attr_e( 'Open menu', 'pip-theme' ); ?>" id="primary-menu-toggle" data-toggleoff="search-toggle" aria-controls="primary-menu" aria-expanded="false"
		<?php
		if ( pip_theme()->is_amp() ) {
			?>
			on="tap:AMP.setState( { siteNavigationMenu: { expanded: ! siteNavigationMenu.expanded } } )"
			[aria-expanded]="siteNavigationMenu.expanded ? 'true' : 'false'"
			<?php
		}
		?>
	>
		<span class="menu-toggle-label"><?php esc_html_e( 'Menu', 'pip-theme' ); ?></span>
		<span class="hamburger-box"><span class="hamburger-inner"></span></span>
	</button>

	<div class="primary-menu-container">
		<?php pip_theme()->display_primary_nav_menu( array( 'menu_id' => 'primary-menu' ) ); ?>
	</div>
</nav><!-- #site-navigation -->
