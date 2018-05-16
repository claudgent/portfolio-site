$( () => {
  // Event listener for page scrolling feature

  $('.scroll').on('click', function (event) {
    const $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top),
    }, 1000, 'easeInOutCirc');
    event.preventDefault();
  });

  // Activate animations classes after page has loaded

  $('#top-border').addClass('grow-border');
  $('.animate').addClass('fadeIn');

  // Toggle animation classes for DropDown Menu
  $('.dropdown').on('click', (event) => {
    event.currentTarget.classList.toggle('change');
    document.getElementById('dropdown-container').classList.toggle('show');
  });
});
