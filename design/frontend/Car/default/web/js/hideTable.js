define([
        "jquery",
        "jquery/ui"
    ], function($) {
        'use strict';

        $.widget( "cars.hideTable", {
            _create: function() {

                var mainWrapper = $(this.element),
                    elementToHide = mainWrapper.find(this.options.elementToHide),
                    elementQty = this.options.elementQty,
                    btnHide = this.options.btnHide,
                    isShow = false;

                if(elementToHide.length > elementQty) {
                    elementToHide.each(function (i, elem) {
                        if (i >= elementQty) {
                            $(elem).addClass('more-tabs').hide();
                        }
                    });
                    isShow = false;
                } else {
                    $(btnHide).hide();
                }

                $(btnHide).on('click', function(e) {
                    e.preventDefault();
                    if(isShow) {
                        $('.more-tabs').hide();
                        isShow = false;
                    } else {
                        $('.more-tabs').show();
                        isShow = true;
                    }
                });
            }
        });

        return $.cars.hideTable;
    }
);