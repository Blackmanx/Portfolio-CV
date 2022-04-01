const sections = document.querySelectorAll('.section');
const menuIcons = document.querySelectorAll('.menu-icons');
const icon = document.querySelectorAll('.menu-icon');
const bodyClass = document.querySelector('.main-content');

function activebtnTransition() {
	for (let i = 0; i < icon.length; i++) {
		icon[i].addEventListener('click', function () {
			let selectedBtn = document.querySelectorAll('.active-btn');
			selectedBtn[0].classList = selectedBtn[0].className.replace('active-btn', '');
			this.className += ' active-btn';
		})
	}
}


function PageTransitions() {
	// Button click .active-btn class
	activebtnTransition();
}

PageTransitions();
