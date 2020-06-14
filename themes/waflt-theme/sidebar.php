<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package waflt_theme
 */

namespace WP_Rig\WP_Rig;

if ( ! waflt_theme()->is_primary_sidebar_active() ) {
	return;
}

waflt_theme()->print_styles( 'waflt-theme-sidebar', 'waflt-theme-widgets' );

?>
<aside id="secondary" class="primary-sidebar widget-area">
	<?php waflt_theme()->display_primary_sidebar(); ?>
</aside><!-- #secondary -->
