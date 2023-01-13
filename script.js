const body = document.querySelector('body');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.getElementById('navmenu');
const navItems = document.querySelectorAll(".nav-item");
const homeMenuItem = document.querySelector('.home-menu-item');
const aboutMenuItem = document.querySelector('.about-menu-item');

hamburger.addEventListener('click', () => {
  navMenu.className = 'display-menu-popup';
  body.style.overflowY = 'hidden';
  aboutMenuItem.style.display = 'none';
  homeMenuItem.style.display = 'flex';
});

function closeMenu(){
  navMenu.className = '';
  navMenu.classList.add('collapse', 'navbar-collapse');
  body.style.overflowY = 'scroll';
  aboutMenuItem.style.display = 'flex';
  homeMenuItem.style.display = 'none';
}

document.querySelector('.close-menu').addEventListener('click', () => {
  closeMenu();
});

navItems.forEach((item) => {
  item.addEventListener("click",closeMenu);
});
