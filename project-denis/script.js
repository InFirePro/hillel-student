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

$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__menu').toggleClass('active');
  });
});