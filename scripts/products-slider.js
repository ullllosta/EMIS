const swiper = new Swiper('.swiper', {
  slidesPerView: 5,
  loop: true,
  grabCursor: true,
  loopAdditionalSlides: 4,
  centeredSlides: true,
  roundLengths: true,
  slideActiveClass: 'active',
  pagination: {
    el: '.pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.navigation__next',
    prevEl: '.navigation__prev',
  },
});
