<?php
/**
 * Template part for displaying a post's taxonomy terms
 *
 * @package gsv_theme
 */

namespace WP_Rig\WP_Rig;

$args = wp_parse_args(
	$args,
	array(
		'tax' => array( 'category' ),
	)
);

?>
<div class="entry-taxonomies">
	<?php
	// Show terms for all taxonomies associated with the post.
	foreach ( $args['tax'] as $taxonomy ) { // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited

		/* translators: separator between taxonomy terms */
		$separator = _x( ' &bull; ', 'list item separator', 'gsv-theme' );

		switch ( $taxonomy ) {
			case 'category':
				$class = 'category-links term-links';
				$list  = get_the_category_list( esc_html( $separator ), '', $post->ID );
				break;
			case 'post_tag':
				$class = 'tag-links term-links';
				$list  = get_the_tag_list( '', esc_html( $separator ), '', $post->ID );
				break;
			default:
				$class = str_replace( '_', '-', $taxonomy->name ) . '-links term-links';
				$list  = get_the_term_list( $post->ID, $taxonomy->name, '', esc_html( $separator ), '' );
		}

		if ( empty( $list ) ) {
			continue;
		}
		?>
		<span class="<?php echo esc_attr( $class ); ?>">
			<?php
			echo wp_kses_post( $list );
			?>
		</span>
		<?php
	}
	?>
</div><!-- .entry-taxonomies -->
