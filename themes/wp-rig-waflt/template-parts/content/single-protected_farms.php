<?php
/**
 * Template part for displaying a post
 *
 * @package wp_rig
 */

namespace WP_Rig\WP_Rig;

$location = get_post_meta( $post->ID, 'mappedposts_location', true );
$date     = get_post_meta( $post->ID, 'mappedposts_date', true );
$acreage  = get_post_meta( $post->ID, 'mappedposts_acreage', true )
?>

<article id="post-<?php the_ID(); ?>" <?php post_class( 'entry' ); ?>>
<div class="entry-content">
	<div class="entry-title">
		<span>Protected Farms</span>
		<?php the_title( '<h1>', '</h1>' );?>
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
</div>
</article><!-- #post-<?php the_ID(); ?> -->

