const body = document.querySelector('body');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.getElementById('navmenu');
const homeMenuItem = document.querySelector('.home-menu-item');
const aboutMenuItem = document.querySelector('.about-menu-item');

hamburger.addEventListener('click', () => {
  navMenu.className = 'display-menu-popup';
  body.style.overflowY = 'hidden';
  aboutMenuItem.style.display = 'none';
  homeMenuItem.style.display = 'flex';
});

document.querySelector('.close-menu').addEventListener('click', () => {
  navMenu.className = '';
  navMenu.classList.add('collapse', 'navbar-collapse');
  body.style.overflowY = 'scroll';
  aboutMenuItem.style.display = 'flex';
  homeMenuItem.style.display = 'none';
});