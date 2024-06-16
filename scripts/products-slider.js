const swiper = new Swiper('.swiper', {
  slidesPerView: 6,
  loop: true,
  grabCursor: true,
  loopAdditionalSlides: 4,
  centeredSlides: true,
  roundLengths: true,
  slideActiveClass: 'active',
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    enabled: true,
  },
  pagination: {
    el: '.pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.navigation__next',
    prevEl: '.navigation__prev',
  },
  breakpoints: {
    550: {
      slidesPerView: 5,
    },
  },
});
