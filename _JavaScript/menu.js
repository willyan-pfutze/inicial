let btnMenu = document.querySelector(".btn-abrir-menu");
let menu = document.querySelector(".menu-mobile");
let overlay = document.querySelector(".overlay-menu");

btnMenu.addEventListener('click', ()=> {
    menu.classList.add("abrir-menu");
});

menu.addEventListener('click', ()=> {
    menu.classList.remove("abrir-menu");
});
overlay.addEventListener('click', ()=> {
    menu.classList.remove("abrir-menu");
});

