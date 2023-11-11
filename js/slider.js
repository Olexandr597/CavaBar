// $('.slider_popular').slick({
//     dots: false,
//     infinite: true,
//     speed: 5000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     // centerMode: true,
//     // centerPadding: '32px',
//     autoplay: true,
//     autoplaySpeed: 2000,
//     // variableWidth: true,
//     button: false,
   
//     // responsive: [
//     //   {
//     //     breakpoint: 1024,
//     //       settings: {
//     //       slidesToShow: 3,
//     //       slidesToScroll: 3,
//     //       infinite: true,
//     //       dots: true,
//     //     },
//     //   },
//     //   {
//     //     breakpoint: 600,
//     //     settings: {
//     //       slidesToShow: 2,
//     //       slidesToScroll: 2,
//     //     },
//     //   },
//     //   {
//     //     breakpoint: 375,
//     //     settings: {
//     //       slidesToShow: 1,
//     //       slidesToScroll: 1,
//     //     },
//     //   },
//     //   // You can unslick at a given breakpoint now by adding:
//     //   // settings: "unslick"
//     //   // instead of a settings object
//     // ],
//   });


// $('.slider_popular').slick({
//     dots: true,
//     infinite: true,
//     speed: 3000,
//     slidesToShow: 1,
//     adaptiveHeight: true,
//     autoplay: true,
//     autoplaySpeed: 2000,

// //   });
// var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 30,
//     infinite: true,
//     speed: 3000,
//     slidesToShow: 1,
//     // adaptiveHeight: true,
//     autoplay: true,
//     lopp:true,
//     autoplaySpeed: 2000,   
//      navigation: {
//         mousewhell: true,
//         keyboard: true,

//     }
// });
// new Swiper('.swiper-container',{
//     loop: true,
//     // 
//     // autoplay: true,
//     // autoplayspeed: 1000,
//     ,
//     // slidesPerView: 1,
//     // centeredSlides: true,
// });
// var swiper = new Swiper(".mySwiper", {
//     // spaceBetween:30,
//     // loop: true,
    

// });
var swiper = new Swiper(".mySwiper", {
        loop: true,
    // loopedSlides: 3,
    // autoplay: true,
    // autoplayspeed: 1000,
        slidesPerView: 2,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
            320: {
              slidesPerView: 1.1,
            },
            350: {
                slidesPerView: 1.155,
              },
              370: {
                slidesPerView: 1.2,
              },
              390: {
                slidesPerView: 1.25,
              },
              425: {
                slidesPerView: 1.3,
              },
              475: {
                slidesPerView: 1.35,
              },
            500: {
              slidesPerView: 1.5,
            },
           
        }
      });