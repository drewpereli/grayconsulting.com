import './src/styles/app.css';

const button = document.getElementById('open-mobile-nav-btn');
const nav = document.getElementById('mobile-nav');
const content = document.getElementById('content');

button.addEventListener('click', () => {
  nav.classList.add('open');
});

content.addEventListener('click', () => {
  nav.classList.remove('open');
});
