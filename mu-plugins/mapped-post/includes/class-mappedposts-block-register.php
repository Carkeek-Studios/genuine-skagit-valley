<?php
/**
 * Load assets for our blocks.
 *
 * @package   MappedPosts
 * @author    Patty O'Hara
 * @link      https://carkeekstudios.com
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Load general assets for our blocks.
 *
 * @since 1.0.0
 */
class MappedPosts_Block_Register {

	/**
	 * This plugin's instance.
	 *
	 * @var MappedPosts_Block_Register
	 */
	private static $instance;

	/**
	 * Registers the plugin.
	 */
	public static function register() {
		if ( null === self::$instance ) {
			self::$instance = new MappedPosts_Block_Register();
		}
	}

	/**
	 * The Plugin slug.
	 *
	 * @var string $slug
	 */
	private $slug;

	/**
	 * The Constructor.
	 */
	private function __construct() {
		$this->slug = 'mapped-posts';

		add_action( 'init', array( $this, 'register_blocks' ), 9999 );
		add_filter( 'block_categories', array( $this, 'myblock_categories' ), 10, 2 );
	}

	/**
	 * Register Blocks.
	 */
	public function register_blocks() {
		$blocks = array(
			'mappedpost-meta',
			'mappedpost-links',
			'mappedpost-details',
			'detail',
		);

		foreach ( $blocks as $block ) {
			$this->register_block( $block );
		}

		/** archive does some server side rendering */
		$this->register_block(
			'archive',
			array(
				'render_callback' => array( 'MappedPosts_CustomPost', 'carkeek_blocks_render_custom_posttype_archive' ),
				'attributes'      => array(
					'popupImage'    => array(
						'type'    => 'boolean',
						'default' => true,
					),
					'popupTitle'        => array(
						'type'    => 'boolean',
						'default' => true,
					),
					'popupExcerpt'      => array(
						'type'    => 'boolean',
						'default' => true,
					),
					'excerptLength' => array(
						'type'    => 'number',
						'default' => 25,
					),
				),
			)
		);
	}

	/**
	 * Register the blocks.
	 *
	 * @param string $block Block slug.
	 * @param array  $options Options array.
	 */
	public function register_block( $block, $options = array() ) {
		register_block_type(
			'mapped-posts/' . $block,
			array_merge(
				array(
					'editor_script' => $this->slug . '-editor-script',
					'editor_style'  => $this->slug . '-editor-style',
					'style'         => $this->slug . '-style',
				),
				$options
			)
		);
	}

	/**
	 * Register the categories
	 *
	 * @param array $categories the categories array.
	 * @param array $post post optional.
	 */
	public function myblock_categories( $categories, $post ) {
		return array_merge(
			$categories,
			array(
				array(
					'slug'  => 'mapped-posts',
					'title' => __( 'Farm Blocks', 'carkeek-blocks' ),
					'icon'  => 'carrot',
				),
			)
		);
	}

}

MappedPosts_Block_Register::register();
