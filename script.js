var mainNavSw = new Swiper(".main-navibar.swiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: "auto",
  spaceBetween: 10,
});

console.log(mainNavSw);

var resizeTimeOut = null;

window.addEventListener("resize", function () {
  clearTimeout(resizeTimeOut);

  resizeTimeOut = setTimeout(function () {
    var w = window.innerWidth;
    console.log(`${w} pixels in width!`);
    mainNavSw.slideTo(0);
  }, 1000);
});

var width = window.innerWidth;
if (width > 1254) {
  mainNavSw.disable();
  console.log(`${width} pixels in width, Swiper is disabled`);
} else {
  mainNavSw.enable();
  console.log(`${width} pixels in width, Swiper is enabled`);
}
