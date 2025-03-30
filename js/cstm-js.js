// aos animation
AOS.init({
	duration: 1200,
})

// Kursor js
const cursor = new kursor({
	type: 2,
	color: '#ff8f1f', // White cursor initially
});

const hoverTargets = document.querySelectorAll('.hover-target');

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