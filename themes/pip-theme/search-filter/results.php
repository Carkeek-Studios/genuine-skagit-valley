<?php
/**
 * Search & Filter Pro
 *
 * Sample Results Template
 *
 * @package   Search_Filter
 * @author    Ross Morsali
 * @link      https://searchandfilter.com
 * @copyright 2018 Search & Filter
 *
 * Note: these templates are not full page templates, rather
 * just an encaspulation of the your results loop which should
 * be inserted in to other pages by using a shortcode - think
 * of it as a template part
 *
 * This template is an absolute base example showing you what
 * you can do, for more customisation see the WordPress docs
 * and using template tags -
 *
 * http://codex.wordpress.org/Template_Tags
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( $query->have_posts() ) {
	?>
	<div class="sf-results-grid ck-columns has-3-columns ck-columns-wrap-true">
		<div class="ck-columns__wrap ">
	<?php
	while ( $query->have_posts() ) {
		$query->the_post();
		$posttype = get_post_type();
		?>
		<div id="post-<?php the_ID(); ?>" <?php post_class( 'sf-result-item' ); ?>>
		<?php
		if ( has_post_thumbnail() ) {
			?>
					<div class="sf-item-thumbnail aspect-ratio-thumbnail"><a href="<?php the_permalink(); ?>">
					<?php the_post_thumbnail( 'small' ); ?>
					</a></div>
					<?php
		}
		?>
			<h2 class="sf-item-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
			<?php if ( 'tribe_events' === $posttype ) { ?>
				<p class="sf-item-date"><?php echo tribe_get_start_date( $post, false, 'F j' ); ?></date>
			<?php } else { ?>
			<p><?php the_excerpt(); ?></p>
			<?php } ?>
		</div>
		<?php
	}
	?>
	</div>

	</div>
	<?php
} else {
	?>
	<span data-search-filter-action='infinite-scroll-end'>No more results</span>
	<div class="sf-results-grid no-results">No Results Found, please adjust your filters</div>
	<?php
}
?>
