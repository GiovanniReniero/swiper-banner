const w = window.innerWidth;
const mainNavbar = document.querySelector(".main-navbar");
const mainNavbarItems = document.querySelector(".main-navbar__items");
const mainNavbarItem = document.querySelector(".main-navbar__item");

if (window.innerWidth < 1171) {
  mainNavbar.classList.add(".swiper");
  mainNavbarItems.classList.add(".swiper-wrapper");
  mainNavbarItem.classList.add(".swiper-slide");
  // console.log(mainNavbar.classList);
  // console.log(mainNavbarItems.classList);
  // console.log(mainNavbarItem.classList);
} else {
  mainNavbar.classList.remove(".swiper");
  mainNavbarItems.classList.remove(".swiper-wrapper");
  mainNavbarItem.classList.remove(".swiper-slide");
}
