<?php
/**
 * Template part for displaying the page header of the currently displayed page
 *
 * @package gsv_theme
 */

namespace WP_Rig\WP_Rig;

if ( is_404() ) {
	?>
	<header class="page-header">
		<h1 class="page-title">
			<?php esc_html_e( 'Oops! That page can&rsquo;t be found.', 'gsv-theme' ); ?>
		</h1>
	</header><!-- .page-header -->
	<?php
} elseif ( is_home() && ! have_posts() ) {
	?>
	<header class="page-header">
		<h1 class="page-title">
			<?php esc_html_e( 'Nothing Found', 'gsv-theme' ); ?>
		</h1>
	</header><!-- .page-header -->
	<?php
} elseif ( is_home() && ! is_front_page() ) {
	?>
	<header class="archive-header">
		<div class="entry-title">
			<h1 class="page-title">

				<?php single_post_title(); ?>
			</h1>
		</div>
		<?php if ( is_active_sidebar( 'blog-archive-intro' ) ) { ?>
			<div class="widget_wrapper">
				<?php dynamic_sidebar( 'blog-archive-intro' ); ?>
			</div>
		<?php } ?>
		<?php get_template_part( 'template-parts/content/blogs-category-select' ); ?>
	</header><!-- .page-header -->
	<?php
} elseif ( is_search() ) {
	?>
	<header class="page-header">
		<h1 class="page-title">
			<?php
			printf(
				/* translators: %s: search query */
				esc_html__( 'Search Results for: %s', 'gsv-theme' ),
				'<span>' . get_search_query() . '</span>'
			);
			?>
		</h1>
	</header><!-- .page-header -->
	<?php
} elseif ( is_archive() ) {
	?>
	<header class="archive-header">
		<div class="entry-title">
		<?php
		the_archive_title( '<h1 class="page-title">', '</h1>' );
		?>
		</div>
		<?php
		the_archive_description( '<div class="archive-description">', '</div>' );
		?>
		<?php get_template_part( 'template-parts/content/blogs-category-select' ); ?>
	</header><!-- .page-header -->
	<?php
} elseif ( is_singular( 'post' ) ) {
	$hide_title   = filter_var( get_post_meta( $post->ID, '_carkeekblocks_title_hidden', true ), FILTER_VALIDATE_BOOLEAN );
	$hide_image   = filter_var( get_post_meta( $post->ID, '_carkeekblocks_featuredimage_hidden', true ), FILTER_VALIDATE_BOOLEAN );
	$iframe       = get_field( 'blog_video_link' );
	$header_class = '';

	if ( ! empty( $iframe ) ) {
		$has_video     = true;
		$header_class .= 'has-post-video';

	} elseif ( true !== $hide_image && has_post_thumbnail() ) {
		$header_class .= 'has-post-thumbnail';
	}
	?>

	<header class="page-header <?php echo esc_attr( $header_class ); ?>">
	<?php
	if ( true === $has_slider ) {
		get_template_part( 'template-parts/content/entry_slider', get_post_type() );
	} elseif ( true == $has_video ) {
		// Use preg_match to find iframe src.
		preg_match( '/src="(.+?)"/', $iframe, $matches );
		$src = $matches[1];

		// Add extra parameters to src and replcae HTML.
		// rel = 0 makes it so related videos come from same source.
		$params  = array(
			'rel' => 0,
		);
		$new_src = add_query_arg( $params, $src );
		$iframe  = str_replace( $src, $new_src, $iframe );

		// Add extra attributes to iframe HTML.
		$attributes = 'frameborder="0"';
		$iframe     = str_replace( '></iframe>', ' ' . $attributes . '></iframe>', $iframe );

		// Display customized HTML.
		echo wp_kses_post( $iframe );

	} elseif ( true !== $hide_image && has_post_thumbnail() ) {
		get_template_part( 'template-parts/content/entry_thumbnail', get_post_type() );
	}
	?>
	</header>

	<?php
} elseif ( ! is_front_page() && ! is_singular( 'product' ) && ! is_singular( 'ck_members' ) ) {
	$hide_title = filter_var( get_post_meta( $post->ID, '_carkeekblocks_title_hidden', true ), FILTER_VALIDATE_BOOLEAN );
	$hide_image = filter_var( get_post_meta( $post->ID, '_carkeekblocks_featuredimage_hidden', true ), FILTER_VALIDATE_BOOLEAN );

	$header_class   = '';
	$header_content = '';
	if ( true !== $hide_image && has_post_thumbnail() ) {
		$header_class .= 'has-post-thumbnail';
	}
	if ( ( true !== $hide_image && true !== $hide_title ) ) {
		?>
	<header class="page-header <?php echo esc_attr( $header_class ); ?>">
		<?php
		if ( true !== $hide_image && has_post_thumbnail() ) {
			get_template_part( 'template-parts/content/entry_thumbnail', get_post_type() );
		}
		if ( true !== $hide_title ) {
			?>
		<div class="entry-title">
			<?php
			if ( 0 !== $post->post_parent && ! empty( $post->post_parent ) ) {
				echo '<span>' . wp_kses_post( get_the_title( $post->post_parent ) ) . '</span>';
			}
			the_title( '<h1>', '</h1>' );
			?>
		</div>
			<?php
		}
		?>
		</header><!-- .page-header -->
		<?php
	}
	?>
	<?php
}
