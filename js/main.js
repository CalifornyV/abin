const flowersSlider = new Swiper('.flowers-slider', {
  // параметры слвйдера
 
  loop: true,
  slidesPerView: 6,



  // Подключаем стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});


const reviewsSlider = new Swiper('.reviews-slider', {
  // параметры слвйдера
 
  loop: true,
  slidesPerView: 1,



  // Подключаем стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});