$(function() {
  window.onscroll = function() {
    stickyNav();
  };
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  function stickyNav() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky_nav");
    } else {
      navbar.classList.remove("sticky_nav");
    }
  }
});
