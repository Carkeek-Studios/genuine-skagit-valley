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
class MappedPosts_Block_Assets {

	/**
	 * This plugin's instance.
	 *
	 * @var MappedPosts_Block_Assets
	 */
	private static $instance;

	/**
	 * Registers the plugin.
	 */
	public static function register() {
		if ( null === self::$instance ) {
			self::$instance = new MappedPosts_Block_Assets();
		}
	}

	/**
	 * The Plugin slug.
	 *
	 * @var string $slug
	 */
	private $slug;

	/**
	 * The base URL path (without trailing slash).
	 *
	 * @var string $url
	 */
	private $url;

	/**
	 * The Plugin version.
	 *
	 * @var string $version
	 */
	private $version;

	/**
	 * The Plugin directory.
	 *
	 * @var string $dir
	 */
	private $dir;


	/**
	 * The Constructor.
	 */
	private function __construct() {
		$this->slug = 'mapped-posts';
		$this->url  = untrailingslashit( plugins_url( '/', dirname( __FILE__ ) ) );
		$this->dir  = plugin_dir_path( dirname( __FILE__ ) );

		add_action( 'init', array( $this, 'register_assets' ), 9999 );
		add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_assets' ) );

		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_frontend_assets' ) );
	}

	/**
	 * Enqueue block editor JS & CSS
	 */
	public function enqueue_assets() {
		$plugins_js_path = 'dist/plugins_editor.js';
		wp_enqueue_script(
			$this->slug . '-plugins-js',
			$this->url . '/' . $plugins_js_path,
			array( 'wp-data', 'wp-plugins', 'wp-edit-post', 'wp-i18n', 'wp-components' ),
			filemtime( $this->dir . $plugins_js_path ),
			true
		);
	}

	/**
	 * Enqueue block frontend JS & CSS
	 */
	public function enqueue_frontend_assets() {
			$frontend_js_path = 'dist/script.js';
			$style_path       = 'dist/style.css';

			// Register editor only styles.
			wp_enqueue_script(
				$this->slug . '-script',
				$this->url . '/' . $frontend_js_path,
				array( 'jquery', 'wp-element', 'wp-blocks' ),
				filemtime( $this->dir . $frontend_js_path ),
				true
			);

			$mp_vars = array(
				'rest_api' => get_rest_url(),
			);

			wp_localize_script( $this->slug . '-script', 'mapped_post', $mp_vars );

			//Register frontend styles. Include block style file in editor if you want backend styles.
			wp_enqueue_style(
			$this->slug . '-style',
			$this->url . '/' . $style_path,
			array(),
			filemtime( $this->dir . $style_path ),
			);
	}
	/**
	 * Enqueue block frontend/backend JS & CSS
	 */
	public function register_assets() {
		// Make paths variables so we don't write em twice ;).
		$editor_js_path    = 'dist/editor.js';
		$editor_style_path = 'dist/editor.css';

		// Register the bundled block JS file.
		wp_register_script(
			$this->slug . '-editor-script',
			$this->url . '/' . $editor_js_path,
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components', 'lodash', 'wp-blob', 'wp-data', 'wp-html-entities', 'wp-compose', 'wp-edit-post', 'wp-core-data' ),
			filemtime( $this->dir . $editor_js_path ),
			true
		);

		// Register editor only styles.
		wp_register_style(
			$this->slug . '-editor-style',
			$this->url . '/' . $editor_style_path,
			array( 'wp-edit-blocks' ),
			filemtime( $this->dir . $editor_style_path ),
		);

	}
}

MappedPosts_Block_Assets::register();




