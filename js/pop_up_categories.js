// const iconCategories = document.querySelector('.categories_nav');
// if (iconCategories) {
//   const menuCategories = document.querySelector('.categories_nav_box');
//   const iconCrossCategories = document.querySelector('.nav_line');
//   iconCategories.addEventListener("click", function (e) {
//     document.body.classList.toggle('_lock');
//     iconCategories.classList.toggle('active');
//     menuCategories.classList.toggle('active');
//     // iconCross.classList.toggle('_active');


//   });
// }
const iconCategories = document.querySelector('.categories_nav');
if (iconCategories) {
  const menuCategories = document.querySelector('.categories_nav_box');
  const iconCrossCategories = document.querySelector('.nav_line');
  let startY;

  // Відкривання попапа при кліці
  iconCategories.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    iconCategories.classList.toggle('active');
    menuCategories.classList.toggle('active');
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
      iconCategories.classList.remove('active');
      menuCategories.classList.remove('active');
      startY = null;
    }
  });

  // Закриття попапа при переході за посиланням
  const popupLinks = document.querySelectorAll('.nav_list_item');

  popupLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      document.body.classList.remove('_lock');
      iconCategories.classList.remove('active');
      menuCategories.classList.remove('active');
    });
  });
}
