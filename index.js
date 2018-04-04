(function($) {
    "use strict";

    // jQuery for page scrolling feature
    $('.menu a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top)
        }, 1000, 'easeInOutCirc');
        event.preventDefault();
    });
})(jQuery);
