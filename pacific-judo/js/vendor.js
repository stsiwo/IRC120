/**
 * Swiper initialization 
 **/
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  speed: 500,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

})

/**
 * aos (fade-in-out library) initialization
 **/
AOS.init({
  delay: 400, // values from 0 to 3000, with step 50ms
});
