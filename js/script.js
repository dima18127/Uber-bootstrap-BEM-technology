const burger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu')
const menuitem = document.querySelectorAll('.menu_item')

burger.addEventListener ("click", function () {
    console.log('click!');
    burger.classList.toggle('hamburger_active');
    menu.classList.toggle('menu_active');
})
menuitem.forEach (function(item) {
item.addEventListener ("click", function () {
    burger.classList.toggle('hamburger_active');
    menu.classList.toggle('menu_active');
})
})