$(function() {
  window.onscroll = function() {
    stickyNav();
  };
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  var iframe = document.getElementById("iframe_wrapper");

  function stickyNav() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky_nav");
      iframe.classList.add("iframe_dont_move");
    } else {
      navbar.classList.remove("sticky_nav");
      iframe.classList.remove("iframe_dont_move");
    }
  }
});
