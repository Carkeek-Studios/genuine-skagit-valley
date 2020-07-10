<?php

/**
 * @package Jetpack_Test
 * @version 1.0
 */
/*
Plugin Name: Jetpack Test
Description: Allows certain Jetpack modules that would otherwise require a connection to WordPress.com to be run in a local development environment.
Author: Del Putnam
Version: 1.0
*/

/**
 * Modify Jetpack module properties for testing/development
 *
 * @param array $mod Module to look at modifying the properties of.
 * @return boolean
 */
function jp_amp_module_override( $mod ) {
	switch ( $mod['name'] ) {
		case 'Related posts':
			$mod['requires_connection'] = false;
			break;
	}
	return $mod;
}
add_filter( 'jetpack_get_module', 'jp_amp_module_override' );

/**
 * Return post meta so that Jetpack related posts display
 *
 * @param type $metadata
 * @param type $object_id
 * @param type $meta_key
 * @param type $single
 * @return array
 */
function jp_amp_related_posts_meta( $metadata, $object_id, $meta_key, $single ) {
	if ( isset( $meta_key ) && '_jetpack_related_posts_cache' === $meta_key ) {
		$body      = array(
			'size'   => 3,
			'filter' => array( 'and' => array( 0 => array( 'term' => array( 'post_type' => 'post' ) ) ) ),
		);
		$cache_key = md5( serialize( $body ) );
		$metadata  = array();

		$args        = array(
			'posts_per_page'   => 3,
			'offset'           => 0,
			'orderby'          => 'date',
			'order'            => 'DESC',
			'post_type'        => 'post',
			'post_status'      => 'publish',
			'suppress_filters' => true,
		);
		$posts_array = get_posts( $args );

		$payload = array();
		foreach ( $posts_array as $post ) {
			$payload[] = array( 'id' => $post->ID );
		}
		$metadata[0][ $cache_key ] = array(
			'expires' => time() + 1000,
			'payload' => $payload,
		);

		return $metadata;
	}
	return $metadata;
}
add_filter( 'get_post_metadata', 'jp_amp_related_posts_meta', 100, 4 );

/**
 * Set the Jetpack 'enabled' option to true so we can test it.
 *
 * @param  array $options The list of Jetpack's Related Post options.
 * @return array          The modified options list.
 */
function jp_amp_relatedposts_options_override( $options ) {
	$options['enabled'] = true;
	return $options;
}
add_filter( 'jetpack_relatedposts_filter_options', 'jp_amp_relatedposts_options_override' );
