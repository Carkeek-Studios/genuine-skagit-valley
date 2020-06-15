<?php
/**
 * WP_Rig\WP_Rig\AMP\Component class
 *
 * @package wp_rig
 */

namespace WP_Rig\WP_Rig\Helpers;

use WP_Rig\WP_Rig\Component_Interface;
use WP_Rig\WP_Rig\Templating_Component_Interface;

/**
 * Class for template helpers
 *
 * Exposes template tags:
 * * `wp_rig()->get_social_links()`
 *
 * @link https://wordpress.org/plugins/amp/
 */
class Component implements Component_Interface, Templating_Component_Interface {

	/**
	 * Gets the unique identifier for the theme component.
	 *
	 * @return string Component slug.
	 */
	public function get_slug() : string {
		return 'helpers';
	}

	/**
	 * Need this function even though its empty
	 */
	public function initialize() {

	}

	/**
	 * Gets template tags to expose as methods on the Template_Tags class instance, accessible through `wp_rig()`.
	 *
	 * @return array Associative array of $method_name => $callback_info pairs. Each $callback_info must either be
	 *               a callable or an array with key 'callable'. This approach is used to reserve the possibility of
	 *               adding support for further arguments in the future.
	 */
	public function template_tags() : array {
		return array(
			'get_social_links'  => array( $this, 'get_social_links' ),
			'get_accreditation' => array( $this, 'get_accreditation' ),
		);
	}

	/**
	 * Get Social links as defined in the Theme options
	 *
	 * @param string $styles Optional. Css classes to add to component.
	 * @return string Whether the AMP plugin is active and the current request is for an AMP endpoint.
	 */
	public function get_social_links( $styles = null ) : string {
		$social = get_field( 'social_icons', 'option' );
		$html   = '';
		if ( ! empty( $social ) ) {
			$html = '<ul class="no-list social-links ' . $styles . '">';
			foreach ( $social as $soc ) {
				if ( ! empty( $soc['link'] ) ) {
					$html .= '<li><a href="' . $soc['link'] . '" title="' . $soc['link_title'] . '" target="_blank"><i class="icon-' . $soc['type'] . '"></i></a></li>';
				}
			}
			$html .= '</ul>';
		}
		return $html;
	}

	public function get_accreditation( $styles = null ) : string {
		$accs = get_field( 'accreditation', 'option' );
		$html = '';
		if ( ! empty( $accs ) ) {
			$html = '<ul class="no-list accreditation ' . $styles . '">';
			foreach ( $accs as $acc ) {
				if ( ! empty( $acc['image'] ) ) {
					$html .= '<li>';
					$img   = '<img src="' . $acc['image']['url'] . '" alt="' . $acc['link_title'] . '" />';
					if ( ! empty( $acc['link'] ) ) {
						$html .= '<a href="' . $acc['link'] . '" target="_blank">' . $img . '</a>';
					} else {
						$html .= $img;
					}
					$html .= '</li>';
				}
			}
			$html .= '</ul>';
		}
		return $html;
	}
}
