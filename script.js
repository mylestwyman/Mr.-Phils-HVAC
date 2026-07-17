const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
if (toggle && nav) toggle.addEventListener('click', () => nav.classList.toggle('open'));

const year = document.querySelectorAll('[data-year]');
year.forEach(el => el.textContent = new Date().getFullYear());