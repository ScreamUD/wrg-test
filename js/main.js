/* global jQuery, document, window */
(function($) {
    window.wrg = {
        resizeFormFields: function () {

        },
        getThirtyPercentViewport: function() {
            return $(window).height() * 30 / 100;
        },
        setWidthResult: function (block) {
            $(block).each(function(indx, element) {
                var widthSubmit,
                    widthBlock,
                    resultTextField;

                widthBlock = $(element).width();
                widthSubmit = $(element).find('.submit-button').outerWidth();
                resultTextField = widthBlock - widthSubmit - 65;

                $(element).find('.text-field').width(resultTextField);
            });
        },
        setViewportHeightToCheckoxBlock: function(block) {
            var viewportHeight;

            viewportHeight = this.getThirtyPercentViewport();

            $(block).height(viewportHeight);
        },
        appendCheckboxes: function(block) {
            var i;

            for (i = 1; i <= 100; i++) {
                var checkboxes = $('<label />').html('Опция ' + i)
                    .prepend($('<input/>').attr({ type: 'checkbox', id: 'check-' + i}));

                $(block).append(checkboxes);
            }
        },
        initTask: function() {
            this.setWidthResult('.one-line-group');
            this.setViewportHeightToCheckoxBlock('#chekboxes-block');
        },
        createDOMandTasks: function() {
            this.initTask();
            this.appendCheckboxes('#chekboxes-block');
        }
    };

    wrg.createDOMandTasks();

    $(window).resize(function () {
        wrg.initTask();
    });
    
})(jQuery);