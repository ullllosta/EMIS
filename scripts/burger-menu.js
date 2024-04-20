const burgerMenu = document.querySelector('.burger_menu_button');
const header = document.querySelector('.header');

burgerMenu.addEventListener('click', () => {
  header.classList.toggle('header__mobile_open');
  burgerMenu.classList.toggle('burger_menu_button_close');
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.header')
  ) {
    header.classList.remove('header__mobile_open');
    burgerMenu.classList.add('burger_menu_button_close');
  }
});


