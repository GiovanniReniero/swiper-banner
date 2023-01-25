const w = window.innerWidth;
const mainNavSwiper = document.querySelector(".swiper").swiper;
console.log(mainNavSwiper);

if (w > 1201) {
  mainNavSwiper.disable();
  console.log(`${w} pixels in width, Swiper is disabled`);
} else {
  mainNavSwiper.enable();
  console.log(`${w} pixels in width, Swiper is enabled`);
}
