const menuIcon = document.getElementById("menu-icon");
const sideMenu = document.getElementById("side-menu");
const closeMenu = document.getElementById("close-menu");
const overlay = document.getElementById("overlay");

let menuOpen = false;
const isTouch = window.matchMedia("(hover: none)").matches;

function openMenu() {
    sideMenu.style.left = "0";
    overlay.style.display = "block";
    menuOpen = true;
}

function closeMenuFn() {
    sideMenu.style.left = "-280px";
    overlay.style.display = "none";
    menuOpen = false;
}

/* PC – hover */
if (!isTouch) {
    menuIcon.addEventListener("mouseenter", openMenu);
    sideMenu.addEventListener("mouseleave", closeMenuFn);
}

/* Mobil – klik */
menuIcon.addEventListener("click", () => {
    if (menuOpen) {
        closeMenuFn();
    } else {
        openMenu();
    }
});

closeMenu.addEventListener("click", closeMenuFn);
overlay.addEventListener("click", closeMenuFn);
