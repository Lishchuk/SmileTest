define([
  "jquery",
  "jquery/ui",
  "js/lib/slick.min"
], function($) {
    'use strict';

    
  $.widget( "car.select", {

    _create: function() {

      var element = $(this.element);

      // element.addClass('responsive');

      element.slick(this.options);
    }
});

  return $.car.select;

});

