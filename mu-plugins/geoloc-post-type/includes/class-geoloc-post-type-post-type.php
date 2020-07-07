<?php
/**
 * Portfolio Post Type
 *
 * @package   Portfolio_Post_Type
 * @author    Devin Price
 * @author    Gary Jones
 * @license   GPL-2.0+
 * @link      http://wptheming.com/geoloc-post-type/
 * @copyright 2011 Devin Price, Gary Jones
 */

/**
 * Portfolio post type.
 *
 * @package Portfolio_Post_Type
 * @author  Devin Price
 * @author  Gary Jones
 */
class Portfolio_Post_Type_Post_Type {
	/**
	 * Post type ID.
	 *
	 * @since 1.0.0
	 *
	 * @type string
	 */
	protected $post_type = 'geoloc';

	/**
	 * Return post type default arguments.
	 *
	 * @since 1.0.0
	 *
	 * @return array Post type default arguments.
	 */
	protected function default_args() {
		$labels = array(
			'name'                  => __( 'Portfolio', 'geoloc-post-type' ),
			'singular_name'         => __( 'Portfolio Item', 'geoloc-post-type' ),
			'menu_name'             => _x( 'Portfolio', 'admin menu', 'geoloc-post-type' ),
			'name_admin_bar'        => _x( 'Portfolio Item', 'add new on admin bar', 'geoloc-post-type' ),
			'add_new'               => __( 'Add New Item', 'geoloc-post-type' ),
			'add_new_item'          => __( 'Add New Portfolio Item', 'geoloc-post-type' ),
			'new_item'              => __( 'Add New Portfolio Item', 'geoloc-post-type' ),
			'edit_item'             => __( 'Edit Portfolio Item', 'geoloc-post-type' ),
			'view_item'             => __( 'View Item', 'geoloc-post-type' ),
			'all_items'             => __( 'All Portfolio Items', 'geoloc-post-type' ),
			'search_items'          => __( 'Search Portfolio', 'geoloc-post-type' ),
			'parent_item_colon'     => __( 'Parent Portfolio Item:', 'geoloc-post-type' ),
			'not_found'             => __( 'No geoloc items found', 'geoloc-post-type' ),
			'not_found_in_trash'    => __( 'No geoloc items found in trash', 'geoloc-post-type' ),
			'filter_items_list'     => __( 'Filter geoloc items list', 'geoloc-post-type' ),
			'items_list_navigation' => __( 'Portfolio items list navigation', 'geoloc-post-type' ),
			'items_list'            => __( 'Portfolio items list', 'geoloc-post-type' ),
		);

		$supports = array(
			'title',
			'editor',
			'excerpt',
			'thumbnail',
			'comments',
			'author',
			'custom-fields',
			'revisions',
		);

		$args = array(
			'labels'          => $labels,
			'supports'        => $supports,
			'public'          => true,
			'capability_type' => 'post',
			'rewrite'         => array( 'slug' => 'geoloc' ), // Permalinks format
			'menu_position'   => 5,
			'menu_icon'       => ( version_compare( $GLOBALS['wp_version'], '3.8', '>=' ) ) ? 'dashicons-geoloc' : false,
			'has_archive'     => true,
			'show_in_rest'    => true,
		);

		return apply_filters( 'geolocposttype_args', $args );
	}

	/**
	 * Return post type updated messages.
	 *
	 * @since 1.0.0
	 *
	 * @return array Post type updated messages.
	 */
	public function messages() {
		$post             = get_post();
		$post_type        = get_post_type( $post );
		$post_type_object = get_post_type_object( $post_type );

		$messages = array(
			0  => '', // Unused. Messages start at index 1.
			1  => __( 'Portfolio item updated.', 'geoloc-post-type' ),
			2  => __( 'Custom field updated.', 'geoloc-post-type' ),
			3  => __( 'Custom field deleted.', 'geoloc-post-type' ),
			4  => __( 'Portfolio item updated.', 'geoloc-post-type' ),
			/* translators: %s: date and time of the revision */
			5  => isset( $_GET['revision'] ) ? sprintf( __( 'Portfolio item restored to revision from %s', 'geoloc-post-type' ), wp_post_revision_title( (int) $_GET['revision'], false ) ) : false,
			6  => __( 'Portfolio item published.', 'geoloc-post-type' ),
			7  => __( 'Portfolio item saved.', 'geoloc-post-type' ),
			8  => __( 'Portfolio item submitted.', 'geoloc-post-type' ),
			9  => sprintf(
				__( 'Portfolio item scheduled for: <strong>%1$s</strong>.', 'geoloc-post-type' ),
				/* translators: Publish box date format, see http://php.net/date */
				date_i18n( __( 'M j, Y @ G:i', 'geoloc-post-type' ), strtotime( $post->post_date ) )
			),
			10 => __( 'Portfolio item draft updated.', 'geoloc-post-type' ),
		);

		if ( $post_type_object->publicly_queryable ) {
			$permalink         = get_permalink( $post->ID );
			$preview_permalink = add_query_arg( 'preview', 'true', $permalink );

			$view_link    = sprintf( ' <a href="%s">%s</a>', esc_url( $permalink ), __( 'View geoloc item', 'geoloc-post-type' ) );
			$preview_link = sprintf( ' <a target="_blank" href="%s">%s</a>', esc_url( $preview_permalink ), __( 'Preview geoloc item', 'geoloc-post-type' ) );

			$messages[1]  .= $view_link;
			$messages[6]  .= $view_link;
			$messages[9]  .= $view_link;
			$messages[8]  .= $preview_link;
			$messages[10] .= $preview_link;
		}

		return $messages;
	}
}
