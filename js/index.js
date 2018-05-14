$( () => {
  // Event listener for page scrolling feature

  $('.scroll').on('click', function (event) {
    const $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top),
    }, 1000, 'easeInOutCirc');
    event.preventDefault();
  });

  // Activate animations after page has loaded

  $('#top-border').addClass('grow-border');
  $('.animate').addClass('fadeIn');

  // Add Animations for DropDown Menu
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
});
