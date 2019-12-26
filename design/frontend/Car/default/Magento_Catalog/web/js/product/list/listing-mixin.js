define([
    'jquery',
    'jquery/ui',
    'slick'
], function ($) {
    'use strict';
    var mixin = {
        sliderInitialization: function() {
            $('.block-viewed-products-grid .product-items').slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: false,
                nextArrow: "<button class=\"next\"></button>",
                prevArrow: "<button class=\"previous\"></button>",
                dots: false,
                speed: 300,
                responsive: [
                    {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1
                        }
                    }
                 ]
            });
        }
    };

    return function (target) {
        return target.extend(mixin);
    };

});
