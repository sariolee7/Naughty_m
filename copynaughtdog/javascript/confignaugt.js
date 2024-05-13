const mobileMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('.ul1.nav');

mobileMenu.addEventListener('click', function() {
  nav.classList.toggle('active');
});