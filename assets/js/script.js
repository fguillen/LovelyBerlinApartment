
(function($){
    "use strict";
    // filter type and show
    $('.gallery').on('click', function() {
        event.preventDefault();
        $('.gallery').removeClass('active-btn');
        $(this).addClass('active-btn');
        var type = $(this).attr('data-group');
        if (type == 'all') {
            $('.gallery-image').slideDown(600);
        }else{
            $('.gallery-image').fadeOut(300);
            $('.' + type).slideDown(600);
        }
    })
})(jQuery);