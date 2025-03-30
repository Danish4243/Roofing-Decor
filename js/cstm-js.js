// Onscroll function to add class in header
$(window).scroll(function () {
	if ($(this).scrollTop() > 44) {
		$('header').addClass("sticky");
	} else {
		$('header').removeClass("sticky");
	}
});
// aos animation
AOS.init({
	duration: 1200,
})

// Kursor js

 const cursor = new kursor({
      type: 2, // Type 1 for circular cursor
      color: '#ffffff', // White cursor
    });

    const hoverTargets = document.querySelectorAll('.hover-target');

    hoverTargets.forEach(target => {
      target.addEventListener('mouseenter', () => {
        document.querySelector('.kursor').style.transform = 'scale(2)'; // 100px (5x of 20px)
      });

      target.addEventListener('mouseleave', () => {
        document.querySelector('.kursor').style.transform = 'scale(1)'; // Back to original size
      });
    });