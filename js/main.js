var scroll_position = 0;
var popup_menu = false;
var navbar = document.getElementById('navbar');
var navbar_menu = document.getElementById('navbar_menu');

function toggleNavbar(event, display) {
  event.preventDefault();
  navbar_menu.className = 'u-pull-right Navbar__Links';
  if (display) {
    navbar.className = 'Navbar';
    navbar_menu.className = 'Navbar__Links Navbar__Links--show';
  }
  popup_menu = display;
}

window.onscroll = function() {
  var top = window.pageYOffset;
  if (scroll_position > top && top > 0 && !popup_menu) {
    navbar.className = 'Navbar Navbar--show';
  } else {
    navbar.className = 'Navbar';
  }
  scroll_position = top;
};
