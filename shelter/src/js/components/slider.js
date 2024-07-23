import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);
const swiper = new Swiper('.our-friends__content', {

  spaceBetween: 90,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 3,
  slidesPerGroup: 3,
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //     slidesPerGroup: 1,
  //   },

  //   576: {
  //     slidesPerView: 2,
  //     slidesPerGroup: 2,
  //   },
  //   768: {
  //     slidesPerView: 3,
  //     slidesPerGroup: 3,
  //   },
  //   1040: {
  //     slidesPerView: 4,
  //     slidesPerGroup: 4,
  //   },
  //   1200: {
  //     slidesPerView: 5,
  //     slidesPerGroup: 5,
  //   },
  // },

  navigation: {
    nextEl: '.our-friends__slider-btn--next',
    prevEl: '.our-friends__slider-btn--prev',
  },
});
