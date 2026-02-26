const button = document.querySelector('.hamburger');
const navUL = document.querySelector('nav ul');

button.addEventListener("click", function() {
    navUL.classList.toggle(`nav-active`);
    button.classList.toggle(`nav-active`);
});