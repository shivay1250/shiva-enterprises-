// Mobile menu: show/hide the navigation when the Menu button is tapped
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('#site-nav');

menuBtn.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', isOpen);
});
