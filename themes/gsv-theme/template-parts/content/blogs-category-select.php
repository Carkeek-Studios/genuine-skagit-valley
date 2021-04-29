<?php
  $terms       = get_terms( 'category', array( 'hide_empty' => 1 ) );
  $current     = get_query_var( 'cat' );
  $active      = empty( $current ) ? 'active' : '';
  $aria_active = empty( $current ) ? 'aria-current=page' : '';
?>
<div class="category-list-wrapper">
  <ul class="toggle-target list-inline" id="cat_list">
	  <?php $page_for_posts = get_option( 'page_for_posts' ); ?>

	  <li class="category-select-item <?php echo esc_attr( $active ); ?>" <?php echo esc_attr( $aria_active ); ?> ><a href="<?php the_permalink( $page_for_posts ); ?>">All Posts</a></li>
	<?php

	foreach ( $terms as $term ) {
		if ( 'blog' !== $term->slug ) {
			$active      = $current == $term->term_id ? 'active' : '';
			$aria_active = $current == $term->term_id ? 'aria-current=page' : '';
			?>
			<li class="category-select-item <?php echo esc_attr( $active ); ?>" <?php echo esc_attr( $aria_active ); ?>>
			<?php
			if ( 'active' == $active ) {
				echo esc_html( $term->name );
			} else {
				echo wp_sprintf( '<a href="%1s">%2s</a>', esc_url( get_category_link( $term, ) ), esc_html( $term->name ) );
			}
			?>
			  </li>
	<?php } ?>
	<?php } ?>
  </ul>
</div>
