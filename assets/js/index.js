const menu_btn = document.querySelector('.menu-btn'),
      menu_close__btn = document.querySelector('.menu-close__btn'),
      menu = document.querySelector('.menu'),
      navLists = document.querySelectorAll('.header .nav-list li');

      navLists.forEach(nav => {
        nav.addEventListener('click', () => {
          navLists.forEach(li => {
            li.classList.remove('active')
          })
          nav.classList.add('active');
          menu.classList.add('d-none')
        })
      });
      


menu_btn.addEventListener('click', () => {
    menu.classList.remove('d-none')
});

menu_close__btn.addEventListener('click', () => {
    menu.classList.add('d-none')
});


var productSlider = new Swiper('.big-slider .swiper', {
  spaceBetween: 30,
  centeredSlides: false,
  loop:true,
  resizeObserver:true,
  effect: "fade",
  autoHeight: true,
  fadeEffect: {
    crossFade: true,
  },
  breakpoints: {
    0: {
      loopedSlides: 1,
    },
    992: {
      loopedSlides: 3,
    },
},
});

var productThumbs = new Swiper('.top-slider .swiper', {
  slideToClickedSlide: true,
    loop: true,
    speed: 500,
    allowTouchMove: false,
    autoHeight: true,
    breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 30,
          effect: "fade",
          centeredSlides: false,
        },
        992: {
          spaceBetween: 30,
          slidesPerView: 3,
          centeredSlides: true,
          slideToClickedSlide: true,
          // effect: 'coverflow',
          // grabCursor: true,
          // centeredSlides: true,
          // slidesPerView: 'auto',
          // coverflowEffect: {
          //     rotate: 0,
          //     stretch: 80,
          //     depth: 200,
          //     modifier: 1,
          //     slideShadows: false,
          // },
        },
  },
    

    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
          const slideText = [ 'LiftGPT <span>PRO</span>', 'LiftGPT Multi', 'LiftGPT Base'][index]; 
          return '<span class="' + className + '">' + slideText + '</span>';
      },
  },
});
productSlider.controller.control = productThumbs;
productThumbs.controller.control = productSlider;



const faqs = document.querySelectorAll('.faqs .faq');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('showFaq')
  })
});

const footerMenu = document.querySelector('.footer-menu__btn');

footerMenu.addEventListener('click', () => {
  footerMenu.parentElement.classList.toggle('showFooterMenu')
})








