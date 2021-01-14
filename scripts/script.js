// JavaScript Document
var hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', showMenu);

function showMenu() {
  var nav = document.querySelector('nav');
  nav.classList.toggle('show-menu');
}
