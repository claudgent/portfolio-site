function pageScroll($) {
  // jQuery for page scrolling feature
  $('.scroll').on('click', (event) => {
    const $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top),
    }, 1000, 'easeInOutCirc');
    event.preventDefault();
  });
}

// start hamburger menu animation
function changeShape(x) {
  x.classList.toggle('change');
}

function showMenuContent() {
  document.getElementById('dropdown-container')
    .classList
    .toggle('show');
}

function dropDown(x) {
  showMenuContent();
  changeShape(x);
}

pageScroll(jQuery);
