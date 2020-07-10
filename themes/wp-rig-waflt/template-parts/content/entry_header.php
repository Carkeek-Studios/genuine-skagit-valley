<?php
/**
 * Template part for displaying a post's header
 *
 * @package wp_rig
 */

namespace WP_Rig\WP_Rig;

?>

<div class="entry-title">
	<?php get_template_part( 'template-parts/content/entry_taxonomies', get_post_type() ); ?>
	<?php if (is_archive() || is_home()) {
		the_title( '<h2>', '</h2>' );
	} else {
		the_title( '<h1>', '</h1>' );
	}
	?>
	<div class="postdate"><?php the_date( 'F j, Y' ); ?></div>
	<?php
	if ( function_exists( 'sharing_display' ) ) {
		sharing_display( '', true );
	}

	if ( class_exists( 'Jetpack_Likes' ) ) {
		$custom_likes = new \Jetpack_Likes();
		echo $custom_likes->post_likes( '' );
	}
	?>
</div>
