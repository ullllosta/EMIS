const burgerMenu = document.querySelector('.burger_menu_button');
const header = document.querySelector('.header');

burgerMenu.addEventListener('click', () => {
  header.classList.toggle('header__mobile_open');
  burgerMenu.classList.toggle('burger_menu_button_close');
});

document.addEventListener('click', (e) => {
  if (
    !e.target.closest('.header__mobile_open, .burger_menu_button') &&
    header.classList.contains('header__mobile_open')
  ) {
    header.classList.remove('header__mobile_open');
    burgerMenu.classList.remove('burger_menu_button_close');
    burgerMenu.classList.toggle('burger_menu_button_close');
  }
});


