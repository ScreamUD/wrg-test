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
        checkCheckedCheckboxes: function () {
            var aChecked = [],
                foundIndex;

            var that = this;

            if($.cookie("checkboxCookie")) {
                aChecked = $.cookie("checkboxCookie").split(',');

                for (var i = 0; i < aChecked.length; i++) {
                    $(aChecked[i]).prop("checked", true);
                }
            }

            $('input[type="checkbox"]').click(function() {

                var checkboxId = '#' + this.id;

                if(!$(checkboxId).is(":checked")) {

                    foundIndex = that.findValueInArray(aChecked, checkboxId);
                    aChecked.splice(foundIndex, 1);

                } else {

                    if (aChecked.length >= 3) {
                        $(aChecked[0]).prop("checked", false);
                        aChecked.splice(0, 1);
                    }

                    aChecked[aChecked.length] = checkboxId;

                }

                //console.log(aChecked);

                $.cookie("checkboxCookie", aChecked);
            });
        },
        findValueInArray: function(array, value) {
            for (var i = 0; i < array.length; i++) {
                if (array[i] == value) return i;
            }

            return -1;
        },
        doResizeTasks: function() {
            this.setWidthResult('.one-line-group');
            this.setViewportHeightToCheckoxBlock('#chekboxes-block');
        },
        init: function() {
            this.doResizeTasks();
            this.appendCheckboxes('#chekboxes-block');
            this.checkCheckedCheckboxes();
        }
    };

    wrg.init();

    $(window).resize(function () {
        wrg.doResizeTasks();
    });
    
})(jQuery);