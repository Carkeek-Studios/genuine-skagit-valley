import "./style.scss";
import jQuery from 'jquery';
import "./style.scss";

( function( $ ) {
    var accordionButtons = $('.carkeek-blocks-accordion .ckb-accordion-label button');
    function checkOthers(elem) {
        for (var i=0; i<accordionButtons.length; i++) {
          if (accordionButtons[i] != elem) {
            if (($(accordionButtons[i]).attr('aria-expanded')) == 'true') {
              $(accordionButtons[i]).attr('aria-expanded', 'false');
              const content = $(accordionButtons[i]).attr('aria-controls');
              $('#' + content).attr('aria-hidden', 'true');
              $('#' + content).slideToggle();
            }
          }
        }
      };
   function setUpAccordions() {
       $('.carkeek-blocks-accordion').each(function(){
           //convert labels to buttons
           $('.ckb-accordion-label', $(this)).each(function(){
               const label = $(this).text();
               const id = $(this).attr('id');
               const $controls = $('.ckb-accordion-panel[aria-labellledby='+ id +']');
               const button = '<button aria-controls="' + $controls.attr('id') + '" aria-expanded="false">' + label + '</button>';
               //add button control
               $(this).html(button);
               $controls.attr('aria-hidden', true);
           });

       });
   }
    $(function(){

    if ($('.carkeek-blocks-accordion').length > 0) {
        setUpAccordions();
    }

    $('.carkeek-blocks-accordion .ckb-accordion-label button').on('click', function(e) {

        const $control = $(this);

        const accordionContent = $control.attr('aria-controls');
        if ($(this).parents('.carkeek-blocks-accordion').data('accordion') == true){
            checkOthers($control[0]);
        }

        const isAriaExp = $control.attr('aria-expanded');
        const newAriaExp = (isAriaExp == "false") ? "true" : "false";
        $control.attr('aria-expanded', newAriaExp);

        const isAriaHid = $('#' + accordionContent).attr('aria-hidden');
        console.log(isAriaHid);
        if (isAriaHid == "true") {
            $('#' + accordionContent).attr('aria-hidden', "false");
        } else {
            $('#' + accordionContent).attr('aria-hidden', "true");
        }
        $('#' + accordionContent).slideToggle();
    });

});
}( jQuery ) );