<?php
/**
 * Template part for displaying a post
 *
 * @package pip_theme
 */

namespace WP_Rig\WP_Rig;

$location = get_post_meta( $post->ID, 'mappedposts_location', true );
$date     = get_post_meta( $post->ID, 'mappedposts_date', true );
$acreage  = get_post_meta( $post->ID, 'mappedposts_acreage', true )
?>

<article id="post-<?php the_ID(); ?>" <?php post_class( 'entry' ); ?>>
<div class="entry-content page-content">
	<div class="entry-title">
		<span>Protected Farms</span>
		<?php the_title( '<h1>', '</h1>' ); ?>
	</div>
	<div class="farm-meta">
		<?php if ( ! empty( $location ) ) { ?>
		<div class="farm-meta_location">Location: <?php echo esc_html( $location ); ?></div>
		<?php } ?>
		<?php if ( ! empty( $date ) ) { ?>
		<div class="farm-meta_date">Date Protected: <?php echo esc_html( $date ); ?></div>
		<?php } ?>
		<?php if ( ! empty( $acreage ) ) { ?>
		<div class="farm-meta_acreage">Acres: <?php echo esc_html( $acreage ); ?></div>
		<?php } ?>
	</div>
	<?php the_content(); ?>
	<?php
	$reuse_block_id = get_field( 'protected_farms_programs_block', 'options' );
	$show_block     = false;
	if ( ! empty( $reuse_block_id ) ) {
		$reuse_block = get_post( $reuse_block_id ); // Where $reuse_block_id is the post id of the programs reusable block
		if ( ! is_wp_error( $reuse_block ) && 'wp_block' == $reuse_block->post_type ) {
			$reuse_block_content = apply_filters( 'the_content', $reuse_block->post_content );
			$show_block          = true;
			echo $reuse_block_content;
		}
	}
	if ( ! $show_block ) {
		echo '<div class="wp-block-spacer"></div>';
	}
	?>
</div>
</article><!-- #post-<?php the_ID(); ?> -->

