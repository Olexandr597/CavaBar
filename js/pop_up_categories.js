const iconCategories = document.querySelector('.categories_nav');

if (iconCategories) {
  const menuCategories = document.querySelector('.categories_nav_box');
  const iconCrossCategories = document.querySelector('.nav_line');


  let startY;

  // Open popup on click
  iconCategories.addEventListener('click', () => {
    document.body.classList.add('_lock');
    iconCategories.classList.add('active');
    menuCategories.classList.add('active');
  });

  // Close popup on link click
  const popupLinks = document.querySelectorAll('.nav_list_item');

  popupLinks.forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('_lock');
      iconCategories.classList.remove('active');
      menuCategories.classList.remove('active');
    });
  });

  // Handle touch events to detect downward swipe
  document.addEventListener('touchstart', (event) => {
    startY = event.touches[0].pageY;
  });

  document.addEventListener('touchmove', (event) => {
    const currentY = event.touches[0].pageY;
    const swipeDown = currentY > startY;
    iconCategories.classList.remove('active');
    menuCategories.classList.remove('active');

    // if (swipeDown  && (event.target.classList.contains('nav_line') || event.target.classList.contains('nav_line_el'))) {
      // Add a delay before removing the _lock class
      setTimeout(() => {
        // Remove the _lock class only
        document.body.classList.remove('_lock');
      }, 500);
    }
  )
}
