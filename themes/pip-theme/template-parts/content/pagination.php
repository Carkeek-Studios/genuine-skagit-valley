<?php
/**
 * Template part for displaying a pagination
 *
 * @package pip_theme
 */

namespace WP_Rig\WP_Rig;

the_posts_pagination(
	array(
		'mid_size'           => 2,
		'prev_text'          => _x( 'Previous', 'previous set of search results', 'pip-theme' ),
		'next_text'          => _x( 'Next', 'next set of search results', 'pip-theme' ),
		'screen_reader_text' => __( 'Page navigation', 'pip-theme' ),
	)
);
