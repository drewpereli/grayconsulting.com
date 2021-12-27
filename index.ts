import './src/styles/app.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/brands.css';

const openMobileNavBtn = document.getElementById('open-mobile-nav-btn');
const mobileNav = document.getElementById('mobile-nav');
const content = document.getElementById('content');
const clickableNavs = document.querySelectorAll('.clickable-nav');

openMobileNavBtn.addEventListener('click', () => {
  mobileNav.classList.add('open');
});

content.addEventListener('click', () => {
  mobileNav.classList.remove('open');
});

clickableNavs.forEach(nav => {
	nav.addEventListener('click', e => {
		const sectionId = (e.target as HTMLElement).dataset.sectionId;
	
		const section = document.getElementById(sectionId);
	
		if (!section) {
			return;
		}
	
		section.scrollIntoView({behavior: 'smooth'});
	});
});
