const iconCategories = document.querySelector('.categories_nav');

if (iconCategories) {
  const menuCategories = document.querySelector('.categories_nav_box');
  const iconCrossCategories = document.querySelector('.nav_line');

  let startY;
  let isCategoriesPopupActive = false;

  // Open popup on click
  iconCategories.addEventListener('click', () => {
    if (!isCategoriesPopupActive) {
      document.body.classList.add('_lock');
      iconCategories.classList.add('active');
      menuCategories.classList.add('active');
      isCategoriesPopupActive = true;
    }
  });

  // Close popup on link click
  menuCategories.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      iconCategories.classList.remove('active');
      menuCategories.classList.remove('active');

      // Add a delay before removing the _lock class
      setTimeout(() => {
        document.body.classList.remove('_lock');
        isCategoriesPopupActive = false;
      }, 500);
    }
  });

  // Handle touch events to detect downward swipe
  document.addEventListener('touchstart', (event) => {
    startY = event.touches[0].pageY;
  });

  document.addEventListener('touchmove', (event) => {
    const currentY = event.touches[0].pageY;
    const swipeDown = currentY > startY;

    if (swipeDown && event.target.classList.contains('nav_line')) {
      iconCategories.classList.remove('active');
      menuCategories.classList.remove('active');

      // Add a delay before removing the _lock class
      setTimeout(() => {
        document.body.classList.remove('_lock');
        isCategoriesPopupActive = false;
      }, 500);
    }
  });
}
