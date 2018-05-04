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
    // feature for dropdown TODO: COMBINE FUNCTIONS
    $('.dropdown a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top)
        }, 1000, 'easeInOutCirc');
        event.preventDefault();
    });
})(jQuery);

function dropDown(x) {
    showMenuContent();
    changeShape(x);
}

// start hamburger menu animation
function changeShape(x) {
    x.classList.toggle("change");
}

function showMenuContent() {
    document.getElementById("dropdown-container")
    .classList
    .toggle("show");
}
