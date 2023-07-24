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

/* function setActiveNav() {
  const navItems = document.querySelectorAll('.nav__item:not(:first-child)');
  console.log(navItems);

  navItems.forEach((item) => {
    const sectionId = item.getAttribute('href');
    const section = document.querySelector(sectionId);

    const rect = section.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isVisible) {
      item.classList.add('nav__item--active');
    } else {
      item.classList.remove('nav__item--active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();

  window.addEventListener('scroll', setActiveNav);

  document.querySelectorAll('.nav__item:not(:first-child)').forEach((item) => {
    item.addEventListener('click', () => {
      setTimeout(setActiveNav, 300);
    });
  });

  window.addEventListener('hashchange', () => {
    setActiveNav(); // Update active state on hashchange
  });
}); */
