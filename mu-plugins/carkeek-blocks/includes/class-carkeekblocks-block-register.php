<?php
/**
 * Load assets for our blocks.
 *
 * @package   CarkeekBlocks
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
class CarkeekBlocks_Block_Register {

	/**
	 * This plugin's instance.
	 *
	 * @var CarkeekBlocks_Block_Register
	 */
	private static $instance;

	/**
	 * Registers the plugin.
	 */
	public static function register() {
		if ( null === self::$instance ) {
			self::$instance = new CarkeekBlocks_Block_Register();
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
		$this->slug = 'carkeek-blocks';

		add_action( 'init', array( $this, 'carkeek_blocks_register_blocks' ), 9999 );
		add_filter( 'block_categories', array( $this, 'carkeek_blocks_categories' ), 10, 2 );
	}

	/**
	 * Register Blocks.
	 */
	public function carkeek_blocks_register_blocks() {
		$blocks = array(
			'team-member',
			'link-tile',
			'link-gallery',
			'slider',
			'expand-collapse-section',
		);

		foreach ( $blocks as $block ) {
			$this->carkeek_blocks_register_block( $block );
		}

		$this->carkeek_blocks_register_block(
			'custom-archive',
			array(
				'render_callback' => array( 'CarkeekBlocks_CustomPost', 'carkeek_blocks_render_custom_posttype_archive' ),
				'attributes'      => array(
					'numberOfPosts'           => array(
						'type'    => 'number',
						'default' => 3,
					),
					'displayFeaturedImage'    => array(
						'type'    => 'boolean',
						'default' => true,
					),
					'displayPostTitle'        => array(
						'type'    => 'boolean',
						'default' => true,
					),
					'postLayout'              => array(
						'type'    => 'string',
						'default' => 'grid',
					),
					'displayPostContent'      => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'displayPostContentRadio' => array(
						'type'    => 'string',
						'default' => 'excerpt',
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
	public function carkeek_blocks_register_block( $block, $options = array() ) {
		register_block_type(
			'carkeek-blocks/' . $block,
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
	public function carkeek_blocks_categories( $categories, $post ) {
		return array_merge(
			$categories,
			array(
				array(
					'slug'  => 'carkeek-category',
					'title' => __( 'Carkeek Blocks', 'carkeek-blocks' ),
					'icon'  => 'wordpress',
				),
			)
		);
	}

}

CarkeekBlocks_Block_Register::register();