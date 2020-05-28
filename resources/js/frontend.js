function setupSideDrawer() {

  const $body = $('body');
  const $mainContent = $('.js-main-content');
  const $navbar = $('.navbar');
  const $navbarCollapse = $('.navbar-collapse');
  const $navbarToggler = $('.navbar-toggler');
  const headerHeight = $navbar
      .innerHeight();

  resetSideDrawerConfig();

  if (window.innerWidth > getThemeVariables().breakpoints.md) {

    return;
  }

  $navbarCollapse.css('margin-top', `${ headerHeight }px`);

  function resetSideDrawerConfig() {

    $navbarCollapse.css('margin-top', '');
    $navbarCollapse.removeClass('show');
    $mainContent.removeClass('show-backdrop');
    $body.removeClass('overflow-hidden');
  }

  function navbarToggleHandler() {

    $navbarCollapse.toggleClass('show');
    $mainContent.toggleClass('show-backdrop');
    $body.toggleClass('overflow-hidden');
  }

  $navbarToggler.click(navbarToggleHandler);
}

function scrollTop(){
  $(window).scroll(function () {

    let x = $(window).scrollTop();
    $('.js-bol').css({'transform': 'translate(-50%, -50%) rotate(' + x + 'deg)'});
    console.log(x + 'px');
  });
}

$(function () {
  function scrollHorizontally(e) {
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    document.getElementById('custom-container').scrollLeft -= (delta*40); // Multiplied by 40
    e.preventDefault();
  }
  if (document.getElementById('custom-container').addEventListener) {
    // IE9, Chrome, Safari, Opera
    document.getElementById('custom-container').addEventListener("mousewheel", scrollHorizontally, false);
    // Firefox
    document.getElementById('custom-container').addEventListener("DOMMouseScroll", scrollHorizontally, false);
  } else {
    // IE 6/7/8
    document.getElementById('custom-container').attachEvent("onmousewheel", scrollHorizontally);
  }
  scrollTop();

  //setupSideDrawer();
});

window.addEventListener('load', function () {

  // setupInfiniteScroll();
});
