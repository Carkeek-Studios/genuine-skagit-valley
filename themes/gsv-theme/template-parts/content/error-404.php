<?php
/**
 * Template part for displaying the page content when a 404 error has occurred
 *
 * @package gsv_theme
 */

namespace WP_Rig\WP_Rig;

?>
<section class="error">


	<div class="page-content">
		<h1 style="margin-top: 3rem">Looks like we're out of sorts!</h1>
		<p>
			<?php esc_html_e( 'Please try a different search term or use the navigation menu.', 'gsv-theme' ); ?>
		</p>

		<?php
		get_search_form();
		?>
	</div><!-- .page-content -->
</section><!-- .error -->
