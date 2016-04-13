/* global jQuery, document, window */
(function($) {
    window.wrg = {
        setWidthResult: function () {
            $('.one-line-group').each(function(indx, element) {
                var widthSubmit,
                    widthBlock,
                    resultTextField;

                widthBlock = $(element).width();
                widthSubmit = $(element).find('.submit-button').outerWidth();
                resultTextField = widthBlock - widthSubmit - 65;
                
                $(element).find('.text-field').width(resultTextField);
            });
        },
        initTask: function() {
            this.setWidthResult();
        }
    };
    
    wrg.initTask();

    $(window).resize(function () {
        wrg.setWidthResult();
    });
    
})(jQuery);