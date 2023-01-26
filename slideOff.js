var mainNavSwiper = document.querySelector(".swiper").swiper;

var resizeTimeOut = null;
window.addEventListener("resize", function () {
  clearTimeout(resizeTimeOut);
  resizeTimeOut = setTimeout(() => {
    var w = window.innerWidth;
    console.log(`${w} pixels in width!`);
    swiper.slideTo(0);
  }, 1000);
});

if (w > 1201) {
  mainNavSwiper.disable();
  console.log(`${w} pixels in width, Swiper is disabled`);
} else {
  mainNavSwiper.enable();
  console.log(`${w} pixels in width, Swiper is enabled`);
}
