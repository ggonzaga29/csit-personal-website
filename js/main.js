new fullpage('#fullPage', {
	licenseKey: 'gplv3-license',
	autoScrolling: true,
});

document.querySelector('.fp-watermark').remove();

const hamburgerIcon = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav li');
const jobsElement = document.querySelector('.header__heading--jobs');

const jobs = [
	'Rust Developer',
	'Frontend Developer',
	'Backend Developer',
];

const letters = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
];

function animateNavLinks() {
	let i = 0;

	const interval = setInterval(() => {
		if (i < navLinks.length) {
			navLinks[i].classList.toggle('active');
			i += 1;
		} else {
			clearInterval(interval);
		}
	}, 100);
}

function toggleMenu() {
	nav.classList.toggle('active');
	hamburgerIcon.classList.toggle('active');
	animateNavLinks();
}

hamburgerIcon.addEventListener('click', () => {
	toggleMenu();
});

navLinks.forEach((li) => {
	li.addEventListener('click', () => {
		toggleMenu();

		const section = document.querySelector(li.dataset.section);

		setTimeout(() => {
			section.scrollIntoView({
				behavior: 'smooth',
				left: 0,
				top: section.offsetTop,
			});
		}, 200);
	});
});

function spellOut(str) {
	let i = 0;

	const interval = setInterval(() => {
		if (i < str.length) {
			jobsElement.innerHTML += str[i];
			i += 1;
		} else {
			clearInterval(interval);
		}
	}, 100);
}

function animatedWord() {
	// let i = 0;
	// const limit = 3;

	// const interval = setInterval(() => {
	// 	if (i < limit) {
	// 		const randomLetter = letters[Math.floor(Math.random() * letters.length)];
	// 		jobsElement.textContent = randomLetter;
	// 		i += 1;
	// 	} else {
	// 		clearInterval(interval);
	// 	}
	// }, 100);

	let i = 0;

	const interval = setInterval(() => {
		if (i < jobs.length) {
			spellOut(jobs[i]);
			i += 1;
		} else {
			clearInterval(interval);
		}
	}, 100);
}

function clearLetters(str) {
	setInterval(() => {
		jobsElement.textContent = jobsElement.textContent.substring(
			0,
			jobsElement.textContent.length - 1
		);
	}, 100);
}

// document.addEventListener('scroll', (e) => {

// 	const currentSection = document.querySelector('#about');
// 	currentSection.scrollIntoView({
// 		behavior: 'smooth',
// 		left: 0,
// 		top: currentSection.offsetTop,
// 	})

// });

const header = document.querySelector('.header');
const logo = document.querySelector('.logo');

function add() {
	setTimeout(() => {
		header.classList.add('header-s2');
		logo.innerHTML = 'GG';
	}, 200);
}

function remove() {
	setTimeout(() => {
		header.classList.remove('header-s2');
		logo.innerHTML = 'Gian Gonzaga';
	}, 200);
}

setInterval(() => {
	if (!getCurrentSection().contains('s1')) {
		add();
	} else {
		remove();
	}
}, 100);

function getCurrentSection() {
	return fullpage_api.getActiveSection().item.classList;
}
