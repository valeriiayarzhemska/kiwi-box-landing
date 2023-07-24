'use strict';

const navIconBurger = document.querySelector('.nav__icons--burger');
const navIconCross = document.querySelector('.nav__icons--cross');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav') {
    navIconBurger.classList.add('nav__icons--undisplayed');
    navIconCross.classList.remove('nav__icons--undisplayed');

    document.body.style.overflow = 'hidden';
  } else {
    navIconBurger.classList.remove('nav__icons--undisplayed');
    navIconCross.classList.add('nav__icons--undisplayed');

    document.body.style.overflow = 'auto';
  }
});
