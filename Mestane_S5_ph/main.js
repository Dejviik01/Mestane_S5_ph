// main.js
const menuIcon = document.getElementById('menu-icon');
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('close-menu');
const overlay = document.getElementById('overlay');

function openMenu() {
    sideMenu.classList.add('open');
    overlay.style.display = 'block';
    menuIcon.style.display = 'none';
}

function closeMenuFunc() {
    sideMenu.classList.remove('open');
    overlay.style.display = 'none';
    menuIcon.style.display = 'block';
}

menuIcon.addEventListener('click', openMenu);
closeMenu.addEventListener('click', closeMenuFunc);
overlay.addEventListener('click', closeMenuFunc);
