const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', function ()  {
    navLink.classList.toggle('hide');
});
