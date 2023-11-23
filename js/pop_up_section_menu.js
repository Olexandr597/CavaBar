// let currentlyOpenPopup = null;

// for (let i = 1; i <= 92; i++) {
//   const iconPopup = document.querySelector(`.coffee_${i}`);
//   const menuPopup = document.querySelector(`.coffee_popup_${i}`);

//   if (iconPopup && menuPopup) {
//     const iconCrossPopup = document.querySelector('.pop_up_menu');
//     let startY;

//     // Відкривання попапа при кліці
//     iconPopup.addEventListener("click", function (e) {
//       // Close the previously open popup
//       if (currentlyOpenPopup) {
//         currentlyOpenPopup.iconPopup.classList.remove('active');
//         currentlyOpenPopup.menuPopup.classList.remove('active');
//         currentlyOpenPopup = null;
        
//         // Remove the lock class after closing the popup
//         document.body.classList.remove('_lock');
//       }

//       // Open the current popup
//       document.body.classList.toggle('_lock');
//       iconPopup.classList.toggle('active');
//       menuPopup.classList.toggle('active');

//       // Update the currently open popup
//       currentlyOpenPopup = {
//         iconPopup: iconPopup,
//         menuPopup: menuPopup
//       };

//       // Stop the click event from propagating to the document body
//       e.stopPropagation();
//     });

//     // // Закриття попапа при кліці в межах екрану (поза попапом)
//     // document.body.addEventListener('click', function () {
//     //   // Close the currently open popup
//     //   if (currentlyOpenPopup) {
//     //     currentlyOpenPopup.iconPopup.classList.remove('active');
//     //     currentlyOpenPopup.menuPopup.classList.remove('active');
//     //     currentlyOpenPopup = null;
        
//     //     // Remove the lock class after closing the popup
//     //     document.body.classList.remove('_lock');
//     //   }
//     // });

//     // Закриття попапа при свайпі вниз
//     document.addEventListener('touchstart', function (event) {
//       startY = event.touches[0].clientY;
//     });

//     document.addEventListener('touchmove', function (event) {
//       if (!startY) return;

//       const currentY = event.touches[0].clientY;
//       const deltaY = currentY - startY;

//       if (deltaY > 50 && event.target.classList.contains('nav_line')) {
//         // Додавання класу '_lock' перед затримкою
//         document.body.classList.add('_lock');

//         // Додавання затримки перед зняттям класу '_lock'
//         setTimeout(function () {
//           document.body.classList.remove('_lock');
//         }, 500);

//         // Close the currently open popup
//         if (currentlyOpenPopup) {
//           currentlyOpenPopup.iconPopup.classList.remove('active');
//           currentlyOpenPopup.menuPopup.classList.remove('active');
//           currentlyOpenPopup = null;
//         }

//         startY = null;
//       }
//     });
//   }
// }
