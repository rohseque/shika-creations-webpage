/*eslint-env es6*/
/*eslint-env browser*/
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-list');	
	const navList = document.querySelectorAll('.nav-list li');
	//Toggle nav 
	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
		
		//Animate links
		navList.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
			}
		});
		
		//Burger animation
		burger.classList.toggle('toggle');
	});
	
	
}

navSlide();