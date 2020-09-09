<?php // mu-plugins/load.php
// require WPMU_PLUGIN_DIR.'/acf-field-selector-field/trunk/acf-field_selector.php';
require WPMU_PLUGIN_DIR . '/carkeek-blocks/plugin.php';
require WPMU_PLUGIN_DIR . '/mapped-post/plugin.php';

function mysite_recovery_mode_email( $email ) {
	$email['to'] = 'patty.ohara@gmail.com';

	return $email;
}
add_filter( 'recovery_mode_email', 'mysite_recovery_mode_email' );
