
// var swiper = new Swiper(".mySwiper", {
//         loop: true,
//     // loopedSlides: 3,
//     // autoplay: true,
//     // autoplayspeed: 1000,
//         // slidesPerView: 2,
//         // spaceBetween: 10,
//         freeMode: true,
//         // pagination: {
//         //   el: ".swiper-pagination",
//         //   clickable: true,
//         // },
//         breakpoints: {
//             320: {
//               slidesPerView: 1.1,
//             },
//             350: {
//                 slidesPerView: 1.155,
//               },
//               370: {
//                 slidesPerView: 1.2,
//               },
//               390: {
//                 slidesPerView: 1.25,
//               },
//               425: {
//                 slidesPerView: 1.3,
//               },
//               475: {
//                 slidesPerView: 1.35,
//               },
//             500: {
//               slidesPerView: 1.5,
//             },
           
//         }
//       });
//       var swiper = new Swiper(".mySwiper_2", {
//         // loop: true,
//     // loopedSlides: 3,
//     // autoplay: true,
//     // autoplayspeed: 1000,
//         // slidesPerView: 2,
//         // spaceBetween: 10,
//         freeMode: true,
//         // pagination: {
//         //   el: ".swiper-pagination",
//         //   clickable: true,
//         // },
//         breakpoints: {
//             320: {
//               slidesPerView: 1.1,
//             },
//             350: {
//                 slidesPerView: 1.155,
//               },
//               370: {
//                 slidesPerView: 1.2,
//               },
//               390: {
//                 slidesPerView: 1.25,
//               },
//               425: {
//                 slidesPerView: 1.3,
//               },
//               475: {
//                 slidesPerView: 1.35,
//               },
//             500: {
//               slidesPerView: 1.5,
//             },
           
//         }
//       });

$(document).ready(function(){
  $('.slider').slick({
    arrows:false,
    infinite: false,
    centerMode:true,
    variableWidth:true,
  });
});

$(document).ready(function(){
  $('.slider_sec').slick({
    arrows:false,
    infinite: false,
    // centerMode:true,
    variableWidth:true,
    // variableHight:true,
    // slidesToShow:2,
  });
});