<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package pip_theme
 */

namespace WP_Rig\WP_Rig;

if ( ! pip_theme()->is_primary_sidebar_active() ) {
	return;
}

pip_theme()->print_styles( 'pip-theme-sidebar', 'pip-theme-widgets' );

?>
<aside id="secondary" class="primary-sidebar widget-area">
	<?php pip_theme()->display_primary_sidebar(); ?>
</aside><!-- #secondary -->
