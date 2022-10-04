const menuMobile = document.getElementById('menu-mobile');
const iconHamburguer = document.getElementById('icon-hamburger');
const iconClose = document.getElementById('icon-close');
const lista = document.querySelectorAll(".lista");

lista.forEach((item) => {
    item.addEventListener('click', () => {
        menuMobile.classList.toggle('active');
    });
});

iconHamburguer.addEventListener('click', () => {
    menuMobile.classList.toggle('active');
});

iconClose.addEventListener('click', () => {
    menuMobile.classList.toggle('active');
});