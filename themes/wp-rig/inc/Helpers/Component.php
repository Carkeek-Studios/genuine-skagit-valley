<?php
/**
 * WP_Rig\WP_Rig\Helpers\Component class
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
		add_filter( 'get_the_terms', array( $this, 'hide_categories_terms' ), 10, 3 );
		add_filter( 'excerpt_more', array( $this, 'my_theme_excerpt_more' ) );
		add_filter( 'carkeek_block_custom_post_layout', array( $this, 'carkeek_block_custom_post_layout' ), 11, 3 );
		add_action( 'init', array( $this, 'sitefooter_add_custom_shortcode' ) );
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
			'get_social_links'        => array( $this, 'get_social_links' ),
			'get_random_thumbnail'    => array( $this, 'get_random_thumbnail' ),
			'get_random_images_array' => array( $this, 'get_random_images_array' ),
			'get_custom_excerpt'      => array( $this, 'get_custom_excerpt' ),
			'make_social_share_links' => array( $this, 'make_social_share_links' ),
		);
	}

	/**
	 * Get Social links as defined in the Theme options
	 *
	 * @param string $styles Optional. Css classes to add to component.
	 * @return string Whether the AMP plugin is active and the current request is for an AMP endpoint.
	 */
	public function get_social_links( $styles = null ) {
		if ( ! function_exists( 'get_field' ) ) {
			return;
		}
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



	/**
	 * Hide the blog category when getting terms
	 *
	 * @param array $terms array of terms to filter.
	 * @param array $post_id id of current post.
	 * @param array $taxonomy id of current taxonomy.
	 * @return array $terms updated terms list.
	 */
	public function hide_categories_terms( $terms, $post_id, $taxonomy ) {
		if ( 'category' !== $taxonomy ) {
			return $terms;
		}

		$term_keys = array_map(
			function( $t ) {
				return $t->slug;
			},
			$terms
		);

		// get term to exclude by name, by id or maybe by slug.
		$exclude = array( 'blog' );
		if ( ! is_admin() ) {
			foreach ( $term_keys as $i => $key ) {
				if ( in_array( $key, $exclude ) ) {
					unset( $terms[ $i ] );
				}
			}
		}
		return $terms;
	}

	/** Get Random Images
	 *
	 * Can be used to generate a random from a group if needed.
	 */
	public function get_random_images_array() {
		if ( ! function_exists( 'get_field' ) ) {
			return;
		}
		$images = get_field( 'placeholder_images', 'options' );
		$nbrs   = range( 0, count( $images ) - 1 );
		shuffle( $nbrs );
		return $nbrs;
	}

	/**
	 * Get a randomized image from the collection - use when blog post has no image
	 *
	 * @param string  $size desired image size.
	 * @param boolean $object whether to return just url or full object.
	 * @param integer $nbr tracks random number from index.
	 * @return array  $url of image.
	 * TODO Backup image as default;
	 */
	public function get_random_thumbnail( $size = 'large', $object = false, $nbr = null ) {
		if ( ! function_exists( 'get_field' ) ) {
			return;
		}
		$images = get_field( 'placeholder_images', 'options' );
		if ( empty( $images ) || 0 == count( $images ) ) {
			return;
		}

		if ( is_numeric( $nbr ) ) {
			$random = $nbr;
		} else {
			$random = rand( 0, count( $images ) - 1 );
		}

		$feat_image = $images[ $random ];

		if ( $object ) {

			return $feat_image;

		} else {
			$feat_image_url = $feat_image['sizes'][ $size ];

			return $feat_image_url;
		}

	}
	/**
	 * Customize the length of an excerpt
	 *
	 * @param integer $limit the number of words to return.
	 */
	public function get_custom_excerpt( $limit ) {
		$excerpt = explode( ' ', get_the_excerpt(), $limit );
		if ( count( $excerpt ) >= $limit ) {
			array_pop( $excerpt );
			$excerpt = implode( ' ', $excerpt ) . '...';
		} else {
			$excerpt = implode( ' ', $excerpt );
		}
		$excerpt = preg_replace( '`[[^]]*]`', '', $excerpt );
		return $excerpt;
	}

	/**
	 * Customize excerpt more ending
	 *
	 * @param string $more current value.
	 */
	public function my_theme_excerpt_more( $more ) {
		return '&hellip;';
	}

	/**
	 * Make New Window Script
	 */
	private function make_new_window() {
		return "onclick=\"javascript:window.open(this.href, '_blank', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;\"";
	}

	/**
	 * Make FB Links
	 *
	 * @param string $text optional text before the icon.
	 */
	private function make_fb_button( $text = null ) {
		$url = get_the_permalink();

		$fb_link = '<a class="share-link" href="https://www.facebook.com/sharer/sharer.php?u=' . urlencode( $url ) . '"' . $this->make_new_window() . ' title="Share on Facebook"><i class="icon-facebook" aria-hidden="true"></i> ' . $text . '</a>';
		return $fb_link;
	}

	/**
	 * Make Twttter Links
	 *
	 * @param string $text optional text before the icon.
	 */
	private function make_twitter_button( $text = null ) {
		$url   = get_the_permalink();
		$title = get_the_title();
		$tweet = '<a class="share-link" href="http://twitter.com/intent/tweet?text=' . $title . '&url=' . $url . '"' . $this->make_new_window() . ' title="Share on Twitter"><i class="icon-twitter" aria-hidden="true"></i>' . $text . '</a>';
		return $tweet;
	}

	/**
	 * Make Email Links
	 *
	 * @param string $text optional text before the icon.
	 */
	private function make_email_button( $text = null ) {
		$url   = get_the_permalink();
		$title = get_the_title();
		$email = '<a class="share-link" href="mailto:?subject=' . $title . '&body=' . urlencode( $url ) . '" title="Share Via Email"><i class="icon-mail"  aria-hidden="true"></i> ' . $text . '</a>';
		return $email;
	}

	/**
	 * Make Social Links
	 */
	public function make_social_share_links( $echo = false ) {
		$links = '<ul class="social-share-links list-inline">
		<li class="list-inline-item social-share-links__label">Share: </li>
		<li class="list-inline-item">' . $this->make_fb_button() . '</li>
		<li class="list-inline-item">' . $this->make_twitter_button() . '</li>
		<li class="list-inline-item">' . $this->make_email_button() . '</li>
	</ul>';
		if ( $echo ) {
			echo wp_kses_post( $links );
		} else {
			return $links;
		}
	}


	/**
	 * Carkeek Blocks Custom Post Type templates
	 *
	 * @param string $post_html - existing content.
	 * @param object $post current post.
	 * @param array  $attributes as passed to block.
	 */
	public function carkeek_block_custom_post_layout( $post_html, $post, $attributes ) {
		$post_type = $attributes['postTypeSelected'];
		$layout    = $post_type . '_' . $attributes['postLayout'];
		switch ( $layout ) {
			case 'post_grid':
			case 'post_list':
				ob_start();
					get_template_part( 'template-parts/content/entry', get_post_type() );
				return ob_get_clean();
			case 'tribe_events_list':
				ob_start();
				get_template_part( 'template-parts/content/entry', 'tribe_events' );
				return ob_get_clean();
			default:
				return $post_html;
		}
	}

	/**
	 * Put the @Copyright in a shortcode so we can put all footer copy in the widgets
	 * Optionally include the site name to override the default
	 *
	 * [site_copy][/site_copy]
	 */

	public function sitefooter_add_custom_shortcode() {
		add_shortcode( 'site_copy', array( $this, 'site_footer_do_custom_shortcode' ) );
	}

	/**
	 * Put the @Copyright in a shortcode so we can put all footer copy in the widgets
	 * Optionally include the site name to override the default
	 *
	 * @param array  $atts attributes to pass - credits true or false default true.
	 * @param string $content Content will override site name.
	 */
	public function site_footer_do_custom_shortcode( $atts, $content ) {
		$atts    = shortcode_atts(
			array(
				'credits' => true,
			),
			$atts,
			'site_copy'
		);
		$content = empty( $content ) ? get_bloginfo( 'name' ) . '. All Rights Reserved.' : $content;
		$html    = '&copy; ' . esc_attr( gmdate( 'Y' ) ) . ' ' . $content;
		if ( true == $atts['credits'] ) {
				$html .= ' <a class="info-popover" href="#" data-popover="site-credit-pop">Site Credits</a>.
								<div class="gpopover no-list" id="site-credit-pop">
									<ul class="no-list">
										<li class="contact-info">Website Design: <a href="http://beansnrice.com" target="_blank">Beans n\' Rice</a></li>
										<li class="contact-info">Website Development: <a href="https://carkeekstudios.com"  target="_blank">Carkeek Studios</a></li>
									</ul>
								</div>
							</li>';
		}
		return $html;
	}
}
