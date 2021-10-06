<?php
/**
 * Template part for displaying a post's footer
 *
 * @package wp_rig
 */

namespace WP_Rig\WP_Rig;

$tax_args = array(
	'tax' => array( 'post_tag' ),
);
?>
<footer class="entry-footer">
<?php get_template_part( 'template-parts/content/entry_taxonomies', get_post_type(), $tax_args ); ?>
</footer><!-- .entry-footer -->
