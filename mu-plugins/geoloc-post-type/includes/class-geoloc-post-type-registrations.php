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
 * Register post types and taxonomies.
 *
 * @package Geoloc_Post_Type
 * @author  Devin Price
 * @author  Gary Jones
 */
class Geoloc_Post_Type_Registrations {

	public $post_type;

	public $taxonomies;

	public function init() {
		// Add the geoloc post type and taxonomies
		add_action( 'init', array( $this, 'register' ) );
	}

	/**
	 * Initiate registrations of post type and taxonomies.
	 */
	public function register() {
		global $geoloc_post_type_post_type, $geoloc_post_type_taxonomy_category, $geoloc_post_type_taxonomy_tag;

		$geoloc_post_type_post_type = new Geoloc_Post_Type();
		$geoloc_post_type_post_type->register();
		$this->post_type = $geoloc_post_type_post_type->get_post_type();

		$geoloc_post_type_taxonomy_category = new Geoloc_Post_Type_Taxonomy_Category();
		$geoloc_post_type_taxonomy_category->register();
		$this->taxonomies[] = $geoloc_post_type_taxonomy_category->get_taxonomy();
		register_taxonomy_for_object_type(
			$geoloc_post_type_taxonomy_category->get_taxonomy(),
			$geoloc_post_type_post_type->get_post_type()
		);

		$geoloc_post_type_taxonomy_tag = new Geoloc_Post_Type_Taxonomy_Tag();
		$geoloc_post_type_taxonomy_tag->register();
		$this->taxonomies[] = $geoloc_post_type_taxonomy_tag->get_taxonomy();
		register_taxonomy_for_object_type(
			$geoloc_post_type_taxonomy_tag->get_taxonomy(),
			$geoloc_post_type_post_type->get_post_type()
		);
	}

	/**
	 * Unregister post type and taxonomies registrations.
	 */
	public function unregister() {
		global $geoloc_post_type_post_type, $geoloc_post_type_taxonomy_category, $geoloc_post_type_taxonomy_tag;
		$geoloc_post_type_post_type->unregister();
		$this->post_type = null;

		$geoloc_post_type_taxonomy_category->unregister();
		unset( $this->taxonomies[ $geoloc_post_type_taxonomy_category->get_taxonomy() ] );

		$geoloc_post_type_taxonomy_tag->unregister();
		unset( $this->taxonomies[ $geoloc_post_type_taxonomy_tag->get_taxonomy() ] );
	}
}
