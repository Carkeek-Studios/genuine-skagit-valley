import jQuery from 'jquery';
import "./style.scss";

( function( $ ) {
    $(document).ready(function(){
        //make the elements focusable
        $('.wp-block-carkeek-blocks-rollover-image').each(function(){
            $(this).attr('tabindex', '0');
            //save original default to outer element so we can get it back;
            if ($(this).hasClass('venn-default')) {
                const src = $(this).find('.image-01 img').attr('src');
                $(this).attr('data-default', src);
            }
        });
        $('.wp-block-carkeek-blocks-rollover-image').on("mouseenter focus touchstart", function(){
            const content = $(this).find('.image-rollover__hover_text').html();
            const $parent = $(this).parents('.wp-block-carkeek-blocks-rollover-images')
            $parent.find('.rollover-images__default-content').hide();
            $parent.find('.rollover-images__hover-content').html(content).show();

            if ($parent.hasClass('venn-diagram')) {
                const currentImage = $(this).find('.image-01 img').attr('src');
                $parent.find('.venn-default .image-01 img').attr('src', currentImage);
            }


        });
        $( ".wp-block-carkeek-blocks-rollover-images" ).mouseout(function() {
            $(this).find('.rollover-images__hover-content').hide();
            $(this).find('.rollover-images__default-content').show();
            if ($(this).hasClass('venn-diagram')) {
                const defaultImg = $(this).find('.venn-default').attr('data-default');
                $(this).find('.venn-default .image-01 img').attr('src', defaultImg);
            }
        });
    });
}( jQuery ) );
