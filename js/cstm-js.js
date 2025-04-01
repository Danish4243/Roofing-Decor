// Tilt js

$(".roof, .benefit-img-1, .about-img-1, .about-img-2, .why-tab-ctnt, .blog-card, .area-check").tilt({
	glare: true,
	maxGlare: 0.5,
	speed: 1500,
	maxTilt: 15,
	scale: 1.05,
	perspective: 800
});

$(".hdg-roof-img").tilt({
	glare: true,
	maxGlare: 0.5,
	speed: 1500,
	maxTilt: 15,
	scale: 1.1,
	perspective: 800
});


// Kursor js
const cursor = new kursor({
	type: 2,
	color: '#ff8f1f', // White cursor initially
});

const hoverTargets = document.querySelectorAll('.hover-target');
const hoverTarget3d = document.querySelectorAll('.roof');

hoverTargets.forEach(target => {
	target.addEventListener('mouseenter', () => {
		const cursorElement = document.querySelector('.kursor');
		cursorElement.style.transform = 'scale(3)';
		cursorElement.style.opacity = '0.3';
	});
	

	target.addEventListener('mouseleave', () => {
		const cursorElement = document.querySelector('.kursor');
		cursorElement.style.transform = 'scale(1)';
		cursorElement.style.opacity = '1';
	});
});

hoverTarget3d.forEach(target => {
	target.addEventListener('mouseenter', () => {
		const cursorElement = document.querySelector('.kursor');
		cursorElement.style.transform = 'scale(0.1)';
		cursorElement.style.opacity = '0.3';
	});
	

	target.addEventListener('mouseleave', () => {
		const cursorElement = document.querySelector('.kursor');
		cursorElement.style.transform = 'scale(1)';
		cursorElement.style.opacity = '1';
	});
});