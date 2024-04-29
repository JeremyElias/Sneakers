const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');


if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    });
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

let swiperImages = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: 64,
    grabCursor: true,
    centeredSlides: true, // Corregido aquí

    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

let swiperTitles = new Swiper('.home__titles', {
    loop: true,
    spaceBetween: 64,
    grabCursor: true,
    centeredSlides: true, // Corregido aquí
});

let swiperGifts = new Swiper('.home__gift', {
    loop: true,
    spaceBetween: 64,
    grabCursor: true,
    centeredSlides: true, // Corregido aquí
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

swiperImages.controller.control = swiperTitles;
swiperTitles.controller.control = swiperImages;
swiperGifts.controller.control = swiperTitles;


  const bgHeader = () =>{
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
  }
  window.addEventListener('scroll', bgHeader)