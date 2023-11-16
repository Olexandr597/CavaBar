
document.addEventListener("DOMContentLoaded", function() {
  // Ваш код тут
  const iconMenu = document.querySelector('.menu_icon');
if (iconMenu) {
  const menuBody = document.querySelector('.menu_body');
  const iconCross = document.querySelector('.modal_cross');
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    // iconCross.classList.toggle('_active');


  });
}
const iconCross = document.querySelector('.modal_cross');
if (iconCross) {
  const menuBody = document.querySelector('.menu_body');
  iconCross.addEventListener("click", function (e) {
    document.body.classList.remove('_lock');
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
    // iconCross.classList.remove('_active');
    

  });
}


});
