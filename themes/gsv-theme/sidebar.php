<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package gsv_theme
 */

namespace WP_Rig\WP_Rig;

if ( ! gsv_theme()->is_primary_sidebar_active() ) {
	return;
}

gsv_theme()->print_styles( 'gsv-theme-sidebar', 'gsv-theme-widgets' );

?>
<aside id="secondary" class="primary-sidebar widget-area">
	<?php gsv_theme()->display_primary_sidebar(); ?>
</aside><!-- #secondary -->
