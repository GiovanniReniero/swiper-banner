const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  // loop: true,
  // centeredSlides: true,
  // edgeSwipeThreshold: 1200,
  slidesPerView: "auto",
  spaceBetween: 10,

  // breakpoints: {
  //   400: {
  //     slidesPerView: 3,
  //     spaceBetween: 10,
  //   },
  //   580: {
  //     slidesPerView: 4,
  //     spaceBetween: 10,
  //   },
  //   720: {
  //     slidesPerView: 5,
  //     spaceBetween: 10,
  //   },
  //   860: {
  //     slidesPerView: 6,
  //     spaceBetween: 10,
  //   },
  //   1120: {
  //     slidesPerView: 8,
  //     spaceBetween: 10,
  //   },
  //   1200: {
  //     slidesPerView: 10,
  //     spaceBetween: 10,
  //   },
  // },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
