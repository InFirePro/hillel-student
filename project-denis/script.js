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