window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.frame-line');
    const triggerBottom = window.innerHeight * 0.8;

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < triggerBottom) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const headerBurger = document.querySelector('.header__burger');
  const headerMenu = document.querySelector('.header__menu');

  headerBurger.addEventListener('click', function() {
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
  });
});