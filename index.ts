import './src/styles/app.css';

const openMobileNavBtn = document.getElementById('open-mobile-nav-btn');
const mobileNav = document.getElementById('mobile-nav');
const content = document.getElementById('content');

openMobileNavBtn.addEventListener('click', () => {
  mobileNav.classList.add('open');
});

content.addEventListener('click', () => {
  mobileNav.classList.remove('open');
});

mobileNav.addEventListener('click', e => {
	const sectionId = (e.target as HTMLElement).dataset.sectionId;

	const section = document.getElementById(sectionId);

	if (!section) {
		return;
	}

	section.scrollIntoView({behavior: 'smooth'});
});
