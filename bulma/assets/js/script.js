const toggle = document.querySelector('.theme-toggle');
const burger = document.querySelector('.navbar-burger');
const menu = document.querySelector('#menu');
const savedTheme = localStorage.getItem('portfolio-theme');

if (savedTheme === 'dark') document.body.classList.add('dark-mode');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('portfolio-theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

burger.addEventListener('click', () => {
  const isOpen = burger.classList.toggle('is-active');
  menu.classList.toggle('is-active');
  burger.setAttribute('aria-expanded', isOpen);
});