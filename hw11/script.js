document.addEventListener('DOMContentLoaded', function() {
  const headerBurger = document.querySelector('.navigation__burger');
  const headerMenu = document.querySelector('.navigation__wrapper-list');

  headerBurger.addEventListener('click', function() {
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
  });
});