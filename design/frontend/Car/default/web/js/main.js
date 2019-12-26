define([
  'jquery',
  'js/hideTable',
  'domReady!'
], function($) {

  //  SHOW FORM REVIEWS
  $('.btn-add-reviews').click(function (e) {
    e.preventDefault();

    var reviews = $('.block.review-list'),
        addReview = $('.block.review-add');

    addReview.toggleClass('show');
    reviews.toggleClass('hide');
  });


  //  HIDE TABLE
  $('.additional-attributes-wrapper.table-wrapper').hideTable({
    "elementToHide":".table.additional-attributes tr",
    "elementQty":"7",
    "btnHide": ".table-hide"
  });


  // Scroll to reviews
  $('.reviews-actions').on('click', function (e) {
    e.preventDefault();
        $('html, body').animate({
          scrollTop: $('.items.review-items').offset().top - 50
        }, 1000);
  });

  //  HIDE DESCRIPTION
   $('.description-btn').on('click', function (e) {
     e.preventDefault();

     var descHide = $(this).parent('.product.attribute.description').find('.value');
     $(descHide).toggleClass('open');
   });

});

