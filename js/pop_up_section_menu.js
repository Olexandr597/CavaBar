// const iconPopup = document.querySelector('.burger_first');
// if (iconPopup) {
//   const menuPopup = document.querySelector('.pop_up_menu');
//   const iconCrossPopup = document.querySelector('.nav_line');
//   let startY;

//   // Відкривання попапа при кліці
//   iconPopup.addEventListener("click", function (e) {
//     document.body.classList.toggle('_lock');
//     iconPopup.classList.toggle('active');
//     menuPopup.classList.toggle('active');
//   });

//   // Закриття попапа при свайпі вниз
//   document.addEventListener('touchstart', function (event) {
//     startY = event.touches[0].clientY;
//   });

//   document.addEventListener('touchmove', function (event) {
//     if (!startY) return;

//     const currentY = event.touches[0].clientY;
//     const deltaY = currentY - startY;

//     if (deltaY > 50 && event.target.classList.contains('nav_line')) {
//       document.body.classList.remove('_lock');
//       iconPopup.classList.remove('active');
//       menuPopup.classList.remove('active');
//       startY = null;
//     }
//   });
// }
document.addEventListener("DOMContentLoaded", function() {
for (let i = 1; i <= 9; i++) {
  const iconPopup = document.querySelector(`.coffee_${i}`);
  const menuPopup = document.querySelector(`.coffee_popup_${i}`);

  if (iconPopup && menuPopup) {
    const iconCrossPopup = document.querySelector('.nav_line');
    let startY;

    // Відкривання попапа при кліці
    iconPopup.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      iconPopup.classList.toggle('active');
      menuPopup.classList.toggle('active');
    });

    // Закриття попапа при свайпі вниз
    document.addEventListener('touchstart', function (event) {
      startY = event.touches[0].clientY;
    });

    document.addEventListener('touchmove', function (event) {
      if (!startY) return;

      const currentY = event.touches[0].clientY;
      const deltaY = currentY - startY;

      if (deltaY > 50 && event.target.classList.contains('nav_line')) {
        document.body.classList.remove('_lock');
        iconPopup.classList.remove('active');
        menuPopup.classList.remove('active');
        startY = null;
      }
    });
  }
}
});