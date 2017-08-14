/* ====================================
   Onload functions
   ==================================== */

$(function() {
    $('.toggle-listing').click(function() {
        $(this).toggleClass('is-active');
        $(this).siblings(".category-listing").slideToggle('');
    });
});