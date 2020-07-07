import jQuery from 'jquery';
import './slick.js';
import "./style.scss";

( function( $ ) {
    $(document).ready(function(){
        $('.wp-block-carkeek-blocks-slider__slide-wrapper').each(function(){
            //wrap each inner block in a div so as not to mess with the block styling

            //collect slider settings
            const autoPlay = $(this).data('autoplay');
            const speed = $(this).data('speed');
            const type = $(this).data('type');
            const slides = $(this).data('slides');
            const scroll = $(this).data('slides');
            let options = {};
            if (true == autoPlay) {
                options.autoplay = true;
                options.autoplaySpeed = speed;
            }
            if (type == 'carousel') {
                options.slidesToShow = slides;
                options.slidesToScroll = scroll;
            }
            $(this).children().each(function(){
                $(this).wrap('<div class="slide-' +  type + '"></div>');
            });
            $(this).slick(options);
        });

        $('.section-slider').each(function(){
            $(this).slick({
                autoplay: true,
                autoplaySpeed: 3000,
            });
        });
    });
}( jQuery ) );




