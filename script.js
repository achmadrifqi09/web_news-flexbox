const menuToggle = document.querySelector('.menu-toggle input');
const navbar = document.querySelector('.navbar .navbar-nav');
const bg_low = document.querySelector('body .content');
menuToggle.addEventListener('click', function () {
    navbar.classList.toggle('slide');
    bg_low.classList.toggle('bg-low');

})