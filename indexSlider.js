const swiper = new Swiper('.swiper', {
    // Configuración opcional
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    slidesPerView: 1,
    spaceBetween: 300,
    autoplay: {
        delay: 3000, 
    },


    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});