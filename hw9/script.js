document.addEventListener('DOMContentLoaded', function() {
  const headerBurger = document.querySelector('.header__burger');
  const navigationMenu = document.querySelector('.navigation');
  const numberBox = document.querySelector('.header__number-box');

  headerBurger.addEventListener('click', function() {
    headerBurger.classList.toggle('active');
    navigationMenu.classList.toggle('active');
    numberBox.classList.toggle('active');
  });
});