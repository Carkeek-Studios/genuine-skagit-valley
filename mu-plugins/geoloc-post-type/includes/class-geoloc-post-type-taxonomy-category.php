<?php
/**
 * Geoloc Post Type
 *
 * @package   Geoloc_Post_Type
 * @author    Devin Price
 * @author    Gary Jones
 * @license   GPL-2.0+
 * @link      http://wptheming.com/portfolio-post-type/
 * @copyright 2011 Devin Price, Gary Jones
 */

/**
 * Geoloc category taxonomy.
 *
 * @package Geoloc_Post_Type
 * @author  Devin Price
 * @author  Gary Jones
 */
class Geoloc_Post_Type_Taxonomy_Category {
	/**
	 * Taxonomy ID.
	 *
	 * @since 1.0.0
	 *
	 * @type string
	 */
	protected $taxonomy = 'portfolio_category';

	/**
	 * Return taxonomy default arguments.
	 *
	 * @since 1.0.0
	 *
	 * @return array Taxonomy default arguments.
	 */
	protected function default_args() {
		$labels = array(
			'name'                       => __( 'Geoloc Categories', 'portfolio-post-type' ),
			'singular_name'              => __( 'Geoloc Category', 'portfolio-post-type' ),
			'menu_name'                  => __( 'Geoloc Categories', 'portfolio-post-type' ),
			'edit_item'                  => __( 'Edit Geoloc Category', 'portfolio-post-type' ),
			'update_item'                => __( 'Update Geoloc Category', 'portfolio-post-type' ),
			'add_new_item'               => __( 'Add New Geoloc Category', 'portfolio-post-type' ),
			'new_item_name'              => __( 'New Geoloc Category Name', 'portfolio-post-type' ),
			'parent_item'                => __( 'Parent Geoloc Category', 'portfolio-post-type' ),
			'parent_item_colon'          => __( 'Parent Geoloc Category:', 'portfolio-post-type' ),
			'all_items'                  => __( 'All Geoloc Categories', 'portfolio-post-type' ),
			'search_items'               => __( 'Search Geoloc Categories', 'portfolio-post-type' ),
			'popular_items'              => __( 'Popular Geoloc Categories', 'portfolio-post-type' ),
			'separate_items_with_commas' => __( 'Separate portfolio categories with commas', 'portfolio-post-type' ),
			'add_or_remove_items'        => __( 'Add or remove portfolio categories', 'portfolio-post-type' ),
			'choose_from_most_used'      => __( 'Choose from the most used portfolio categories', 'portfolio-post-type' ),
			'not_found'                  => __( 'No portfolio categories found.', 'portfolio-post-type' ),
			'items_list_navigation'      => __( 'Geoloc categories list navigation', 'portfolio-post-type' ),
			'items_list'                 => __( 'Geoloc categories list', 'portfolio-post-type' ),
		);

		$args = array(
			'labels'            => $labels,
			'public'            => true,
			'show_in_nav_menus' => true,
			'show_ui'           => true,
			'show_tagcloud'     => true,
			'hierarchical'      => true,
			'rewrite'           => array( 'slug' => 'portfolio_category' ),
			'show_admin_column' => true,
			'query_var'         => true,
			'show_in_rest'      => true,
		);

		return apply_filters( 'portfolioposttype_category_args', $args );
	}
}
