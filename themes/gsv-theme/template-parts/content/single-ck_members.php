<?php
/**
 * Template part for displaying a post
 *
 * @package gsv_theme
 */

namespace WP_Rig\WP_Rig;

$member_directory = get_field( 'member_directory_page', 'options' );
?>
<div class="page-header page-header-solid">
	<div class="entry-title">
		<span><?php echo wp_kses_post( wp_sprintf( '<a href="%1s">%2s</a>', $member_directory, __( 'Our Members', 'gsv-theme' ) ) ); ?></span>
		<h1><?php the_title(); ?></h1>
	</div>
</div>
<?php if ( has_post_thumbnail() ) { ?>
	<div class="member-logo"><?php the_post_thumbnail( 'medium' ); ?></div>
<?php } ?>
<article id="post-<?php the_ID(); ?>" <?php post_class( 'entry member' ); ?>>

	<div class="page-content">
		<?php get_template_part( 'template-parts/members/member-details' ); ?>
		<?php
		the_content();
		?>
	</div><!-- .entry-content -->
</article><!-- #post-<?php the_ID(); ?> -->

<?php
