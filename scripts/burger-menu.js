const burgerMenu = document.querySelector('.burger_menu_button');
const navigation = document.querySelector('.header');

burgerMenu.addEventListener('click', () => {
  navigation.classList.toggle('header__mobile_open');
  burgerMenu.classList.toggle('burger_menu_button_close');
});
