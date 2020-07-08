import jQuery from 'jquery';
import "./style.scss";

( function( $ ) {
    $(document).ready(function(){
        $('.wp-block-carkeek-blocks-expand-section__header').click(function(){
            let openMe = true;
            const accordion = $(this).parents('.wp-block-carkeek-blocks-expand-collapse').attr('data-accordion');
            //if accordion we only open one at a time
            if ('true' == accordion) {
                if ($(this).parent().hasClass('open')) {
                    openMe = false;
                }
                $('.wp-block-carkeek-blocks-expand-collapse-section').removeClass('open');
                $('.wp-block-carkeek-blocks-expand-section__content').slideUp().attr('aria-expanded', false);
            }
            if (openMe) {
                $(this).parent().toggleClass('open');
                if ($(this).parent().hasClass('open')) {
                    $(this).siblings().slideDown().attr('aria-expanded', true);
                } else {
                    $(this).siblings().slideUp().attr('aria-expanded', false);
                }
            }
        });

    });
}( jQuery ) );




