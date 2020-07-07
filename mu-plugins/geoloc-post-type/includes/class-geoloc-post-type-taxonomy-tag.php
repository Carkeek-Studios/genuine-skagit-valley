<?php
/**
 * Geoloc Post Type
 *
 * @package   Geoloc_Post_Type
 * @author    Devin Price
 * @author    Gary Jones
 * @license   GPL-2.0+
 * @link      http://wptheming.com/geoloc-post-type/
 * @copyright 2011 Devin Price, Gary Jones
 */

/**
 * Geoloc tag taxonomy.
 *
 * @package Geoloc_Post_Type
 * @author  Devin Price
 * @author  Gary Jones
 */
class Geoloc_Post_Type_Taxonomy_Tag {
	/**
	 * Taxonomy ID.
	 *
	 * @since 1.0.0
	 *
	 * @type string
	 */
	protected $taxonomy = 'geoloc_tag';

	/**
	 * Return taxonomy default arguments.
	 *
	 * @since 1.0.0
	 *
	 * @return array Taxonomy default arguments.
	 */
	protected function default_args() {
		$labels = array(
			'name'                       => __( 'Geoloc Tags', 'geoloc-post-type' ),
			'singular_name'              => __( 'Geoloc Tag', 'geoloc-post-type' ),
			'menu_name'                  => __( 'Geoloc Tags', 'geoloc-post-type' ),
			'edit_item'                  => __( 'Edit Geoloc Tag', 'geoloc-post-type' ),
			'update_item'                => __( 'Update Geoloc Tag', 'geoloc-post-type' ),
			'add_new_item'               => __( 'Add New Geoloc Tag', 'geoloc-post-type' ),
			'new_item_name'              => __( 'New Geoloc Tag Name', 'geoloc-post-type' ),
			'parent_item'                => __( 'Parent Geoloc Tag', 'geoloc-post-type' ),
			'parent_item_colon'          => __( 'Parent Geoloc Tag:', 'geoloc-post-type' ),
			'all_items'                  => __( 'All Geoloc Tags', 'geoloc-post-type' ),
			'search_items'               => __( 'Search Geoloc Tags', 'geoloc-post-type' ),
			'popular_items'              => __( 'Popular Geoloc Tags', 'geoloc-post-type' ),
			'separate_items_with_commas' => __( 'Separate geoloc tags with commas', 'geoloc-post-type' ),
			'add_or_remove_items'        => __( 'Add or remove geoloc tags', 'geoloc-post-type' ),
			'choose_from_most_used'      => __( 'Choose from the most used geoloc tags', 'geoloc-post-type' ),
			'not_found'                  => __( 'No geoloc tags found.', 'geoloc-post-type' ),
			'items_list_navigation'      => __( 'Geoloc tags list navigation', 'geoloc-post-type' ),
			'items_list'                 => __( 'Geoloc tags list', 'geoloc-post-type' ),
		);

		$args = array(
			'labels'            => $labels,
			'public'            => true,
			'show_in_nav_menus' => true,
			'show_ui'           => true,
			'show_tagcloud'     => true,
			'hierarchical'      => false,
			'rewrite'           => array( 'slug' => 'geoloc_tag' ),
			'show_admin_column' => true,
			'query_var'         => true,
			'show_in_rest'      => true,
		);

		return apply_filters( 'geolocposttype_tag_args', $args );
	}
}
