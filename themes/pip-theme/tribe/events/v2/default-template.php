<?php
/**
 * View: Default Template for Events
 *
 * Override this template in your own theme by creating a file at:
 * [your-theme]/tribe/events/v2/default-template.php
 *
 * See more documentation about our views templating system.
 *
 * @link http://evnt.is/1aiy
 *
 * @version 5.0.0
 */

use Tribe\Events\Views\V2\Template_Bootstrap;
use WP_Rig\WP_Rig;





get_header();
WP_Rig\pip_theme()->print_styles( 'pip-theme-content' );
echo tribe( Template_Bootstrap::class )->get_view_html();
get_footer();
