const swiper = new Swiper('.swiper', {
    // Configuración opcional
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    slidesPerView: 1,
    spaceBetween: 300,
    autoplay: {
        delay: 2000, 
    },

    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});

var promoSlider = new Swiper('.promo-slider', {
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    slidesPerView: 1,
    spaceBetween: 100,
    autoplay: {
        delay: 2500, 
    },

    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    },
});