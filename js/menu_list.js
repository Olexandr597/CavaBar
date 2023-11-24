const mains = [
    document.getElementById('coffeeMenu'),
    document.getElementById('teaMenu'),
    document.getElementById('coldDrinksMenu'),
    document.getElementById('coldDrinks'),
    document.getElementById('breakfastMenu'),
    document.getElementById('firstMealMenu'),
    document.getElementById('cheesecakeMenu'),
    document.getElementById('pastaMenu'),
    document.getElementById('saladMenu'),
    document.getElementById('burgerMenu'),
    document.getElementById('pitaMenu'),
    document.getElementById('bruschettaMenu'),
    document.getElementById('waffleMenu'),
    document.getElementById('dessertMenu')
  ];
  

  const coffeeMenu = [
    {
        name: "Еспресо",
        price:"35 грн",
        img: "./images/coffee_popup_1.webp",
    },
    {
        name: "Американо",
        price: "35 грн",
        img: "./images/coffee_popup_2.webp",
    },
    {
        name: "Американо з молоком",
        price:"40 грн",
        img: "./images/coffee_popup_3.webp",
    },
    {
        name: "Капучино",
        price:"50 грн",
        img: "./images/coffee_popup_4.webp",
    },
    {
        name: "Флет-вайт",
        price: "45 грн",
        img: "./images/coffee_popup_5.webp",
    },
    {
        name: "Лате",
        price: "50 грн",
        img: "./images/coffee_popup_6.webp",
    },
    {
        name: "Мокачино",
        price: "60 грн",
        img: "./images/coffee_popup_7.webp",
    },
    {
        name: "Какао",
        price: "40 грн",
        img: "./images/coffee_popup_8.webp",
    },
    {
        name: "Какао для буржуїв",
        price: "45 грн",
        img: "./images/coffee_popup_9.webp",
    },
    {
        name: "Nutella Milk",
        price: "55 грн",
        img: "./images/coffee_popup_10.webp",
    },
    {
        name: "Mr. Raf",
        price: "60 грн",
        img: "./images/coffee_popup_11.webp",
    },
    {
        name: "Mr. Red",
        price: "55 грн",
        img: "./images/coffee_popup_12.webp",
    },
    {
        name: "Джміль",
        price: "55 грн",
        img: "./images/coffee_popup_13.webp",
    },
    {
        name: "Матча лате",
        price: "65 грн",
        img: "./images/coffee_popup_14.webp",
    },
    {
        name: "Матча джміль",
        price: "75 грн",
        img: "./images/coffee_popup_15.webp",
    },
    {
        name: "Запаяна кава",
        price: "55 грн",
        img: "./images/coffee_popup_16.webp",
    },
];

const teaMenu = [
    {
        name: "Чай листовий",
        price: "35 грн",
        img: "./images/tea_popup_1.webp",
    },
    {
        name: "Чай манго-маракуйя",
        price: "50 грн",
        img: "./images/tea_popup_2.webp",
    },
    {
        name: "Чай смородина",
        price: "50 грн",
        img: "./images/tea_popup_3.webp",
    },
    {
        name: "Чай полуниця",
        price: "50 грн",
        img: "./images/tea_popup_4.webp",
    },
    {
        name: "Чай малина",
        price: "50 грн",
        img: "./images/tea_popup_5.webp",
    },
];

const coldDrinksMenu = [
    {
        name: "Айс-лате",
        price: "60 грн",
        img: "./images/coffee_cold_drink_popup_1.webp",
    },
    {
        name: "Афогато",
        price: "60 грн",
        img: "./images/coffee_cold_drink_popup_2.webp",
    },
    {
        name: "Глясе",
        price: "65 грн",
        img: "./images/coffee_cold_drink_popup_3.webp",
    },
    {
        name: "Еспресо тонік",
        price: "65 грн",
        img: "./images/coffee_cold_drink_popup_4.webp",
    },
    {
        name: "Зимний джміль",
        price: "55 грн",
        img: "./images/coffee_cold_drink_popup_5.webp",
    },
    {
        name: "Зимний матча джміль",
        price: "80 грн",
        img: "./images/coffee_cold_drink_popup_6.webp",
    },
    {
        name: "Зимне мокачино",
        price: "65 грн",
        img: "./images/coffee_cold_drink_popup_7.webp",
    },
    {
        name: "М’ятне какао",
        price: "50 грн",
        img: "./images/coffee_cold_drink_popup_8.webp",
    },
    {
        name: "Полуничне матча лате",
        price: "80 грн",
        img: "./images/coffee_cold_drink_popup_9.webp",
    },
];

const coldDrinks = [
    {
      
      name: "Мохіто класичне",
      price: "55 грн",
      img: "./images/cold_drink_popup_1.webp",
    },
    {
      name: "Мохіто з полуницею",
      price: "60 грн",
      img: "./images/cold_drink_popup_2.webp",
    },
    {
      name: "Мохіто з смородиною",
      price: "60 грн",
      img: "./images/cold_drink_popup_3.webp",
    },
    {
      name: "Мохіто з малиною",
      price: "60 грн",
      img: "./images/cold_drink_popup_4.webp",
    },
    {
      name: "Коктейль манго-маракуйя",
      price: "65 грн",
      img: "./images/cold_drink_popup_5.webp",
    },
    {
      name: "Коктейль піна колада",
      price: "65 грн",
      img: "./images/cold_drink_popup_6.webp",
    },
    {
      name: "Молочний коктейль",
      price: "50 грн",
      img: "./images/cold_drink_popup_7.webp",
    },
    {
      name: "Банановий коктейль",
      price: "55 грн",
      img: "./images/cold_drink_popup_8.webp",
    },
    {
      name: "Шоколадний коктейль",
      price: "55 грн",
      img: "./images/cold_drink_popup_9.webp",
    },
    {
      name: "Полуничний коктейль",
      price: "55 грн",
      img: "./images/cold_drink_popup_10.webp",
    },
    {
      name: "Карамельний коктейль",
      price: "55 грн",
      img: "./images/cold_drink_popup_11.webp",
    },
    {
      name: "Смузі полуниця-банан",
      price: "55 грн",
      img: "./images/cold_drink_popup_12.webp",
    },
    {
      name: "Смузі ківі-яблуко",
      price: "55 грн",
      img: "./images/cold_drink_popup_13.webp",
    },
    {
      name: "Смузі малина-гранат-базилік",
      price: "55 грн",
      img: "./images/cold_drink_popup_14.webp",
    },
    {
      name: "Смузі абрикос-банан",
      price: "55 грн",
      img: "./images/cold_drink_popup_15.webp",
    },
    {
      name: "Сік в асортименті",
      price: "35 грн",
      img: "./images/cold_drink_popup_16.webp",
    },
    {
      name: "Пепсі 0.33",
      price: "40 грн",
      img: "./images/cold_drink_popup_17.webp",
    },
  ];
  
  const breakfastMenu = [
    {
      name: "Англійський сніданок",
      description: "Мікс салату, яєчня, цибуля кранч, сир хохланд, ковбаска, чері, тостерний хліб, соуси",
      price: "130 грн",
      img: "./images/breakfast_popup_1.webp",
    },
    {
      name: "Французький сніданок",
      description: "Мікс салату, яйце пашот, сир хохланд, чері, червона риба, авокадо, круасан/тостовий хліб",
      price: "150 грн",
      img: "./images/breakfast_popup_2.webp",
    },
    {
      name: "Сніданок з куркою",
      description: "Мікс салату, скрамбл, цибуля кранч, сир хохланд, печена курка, чері, тостерний хліб, соуси",
      price: "130 грн",
      img: "./images/breakfast_popup_3.webp",
    },
  ];
  
  const firstMealMenu = [
    {
      name: "Сирний крем-суп",
      price: "80 грн",
      img: "./images/first_meal_popup_1.webp",
    },
    {
      name: "Грибний крем-суп",
      price: "80 грн",
      img: "./images/first_meal_popup_2.webp",
    },
    {
      name: "Крем-суп з броколі",
      price: "70 грн",
      img: "./images/first_meal_popup_3.webp",
    },
    {
      name: "Крем-суп з сочевицею",
      price: "70 грн",
      img: "./images/first_meal_popup_4.webp",
    },
  ];
  
  const cheesecakeMenu = [
    {
      name: "Сирники манго-маракуйя",
      description: "Сирники, мангова подушка, пюре манго-маракуя, сезонні фрукти",
      price: "140 грн",
      img: "./images/cheesecake_popup_1.webp",
    },
    {
      name: "Сирники з малиною",
      description: "Сирники, малинова подушка, пюре з малини, сезонні фрукти",
      price: "130 грн",
      img: "./images/cheesecake_popup_2.webp",
    },
    {
      name: "Сирники з карамеллю",
      description: "Сирники, карамельна подушка, солона карамель, карамелізовані яблука, арахіс",
      price: "130 грн",
      img: "./images/cheesecake_popup_3.webp",
    },
  ];
  
  const pastaMenu = [
    {
      name: "Паста з шпинатом та моцарелою",
      description: "Паста, шпинат, моцарела, вершки, цибуля, песто, пармезан, чері",
      price: "130 грн",
      img: "./images/pasta_popup_1.webp",
    },
    {
      name: "Паста карбонара",
      description: "Паста, бекон, вершки, яйце, пармезан",
      price: "130 грн",
      img: "./images/pasta_popup_2.webp",
    },
    {
      name: "Паста томатна з куркою",
      description: "Паста, куряче філе, томатна паста, вершки, вино, в’ялені томати, цибуля, часник, пармезан, чері",
      price: "140 грн",
      img: "./images/pasta_popup_3.webp",
    },
    {
      name: "Лінгвіні з креветками",
      description: "Паста, креветки, помідори, вершки, пармезан",
      price: "180 грн",
      img: "./images/pasta_popup_4.webp",
    },
  ];
  
  const saladMenu = [
    {
      name: "“Цезар” з куркою",
      description: "Салат айсберг, мікс салату, куряче філе, перепилині яйця, чері, грінки, соус цезар, пармезан, бальзамічний соус",
      price: "120 грн",
      img: "./images/salads_popup_1.webp",
    },
    {
      name: "“Цезар” з креветкою",
      description: "Салат айсберг, мікс салату, креветки, перепилині яйця, чері, грінки, соус цезар, пармезан, бальзамічний соус",
      price: "160 грн",
      img: "./images/salads_popup_2.webp",
    },
    {
      name: "“Норд” з лососем",
      description: "Мікс салату, червона риба, чері, моцарела, авокадо, бальзамічний соус, кунжут",
      price: "160 грн",
      img: "./images/salads_popup_3.webp",
    },
    {
      name: "“Прошуто”",
      description: "Мікс салату, хамон, в’ялені помідори, чері, синя цибуля, оливкова олія, бальзамічний соус, кунжут",
      price: "140 грн",
      img: "./images/salads_popup_4.webp",
    },
    {
      name: "Салат з куркою унагі",
      description: "Мікс салату, куряче філе в соусі унагі, чері, перець солодкий, бальзамічний соус, кунжут",
      price: "110 грн",
      img: "./images/salads_popup_5.webp",
    },
    {
      name: "Салат з яйцем пашот",
      description: "Мікс салату, копчена курка, яйце пашот, в’ялені томати, каперси, тостовий хліб, соус з тунця, пармезан, кунжут",
      price: "150 грн",
      img: "./images/salads_popup_6.webp",
    },
    {
      name: "Салат з тунцем та авокадо",
      description: "Мікс салату, салат айсберг, тунець, авокадо, чері, синя цибуля, гірчичний соус",
      price: "160 грн",
      img: "./images/salads_popup_7.webp",
    },
  ];
  
  const burgerMenu = [
    {
      name: "Буржуйський бургер з телятиною та фрі",
      description: "Булочка бріош, теляча котлета, сир чедер, бекон, помідор, маринована синя цибуля, яйце смажене, цибуля кранч, бургерний соус + картопля фрі, соус",
      price: "220 грн",
      img: "./images/burger_popup_1.webp",
    },
    {
      name: "Не просто бургер з куркою та фрі",
      description: "Булочка бріош, куряча котлета, сир чедер, салат айсберг, помідор, квашений огірок, соус “Ранч” + картопля фрі, соус",
      price: "195 грн",
      img: "./images/burger_popup_2.webp",
    },
    {
      name: "Бургер “Біг Тейсті”",
      description: "Булочка бріош, салат айсберг, котлета теляча, сир гауда, цибуля, квашений огірок, помідор, соус “Біг Тейсті” + картопля фрі, соус",
      price: "215 грн",
      img: "./images/burger_popup_3.webp",
    },
    {
      name: "Просто картопля фрі",
      price: "55 грн",
      img: "./images/burger_popup_4.webp",
    },
    {
      name: "Нагетси",
      price: "85 грн",
      img: "./images/burger_popup_5.webp",
    },
  ];
  
  const pitaMenu = [
    {
      name: "Лаваш з запеченою куркою",
      description: "Лаваш, курка запечена, помідор, салат, огірок, сир, соус сметанковий",
      price: "140 грн",
      img: "./images/pita_popup_1.webp",
    },
    {
      name: "Лаваш з тунцем",
      description: "Лаваш, тунець, кукурудза, помідор, огірок, сир, соус з тунця",
      price: "150 грн",
      img: "./images/pita_popup_2.webp",
    },
  ];
  
  const bruschettaMenu = [
    {
      name: "Брускет з авокадо та червоною рибою",
      description: "Тост, мікс салату, авокадо, помідор, червона риба, моцарела, яйце пашот, бальзамічний соус",
      price: "180 грн",
      img: "./images/bruschetta_popup_1.webp",
    },
    {
      name: "Брускет з хамоном та яйцем пашот",
      description: "Тост, мікс салату, хамон, помідор, моцарела, яйце пашот, песто, в‘ялений томат, бальзамічний соус",
      price: "170 грн",
      img: "./images/bruschetta_popup_2.webp",
    },
  ];
  
  const waffleMenu = [
    {
      name: "Вафля з куркою",
      description: "Вафля, мікс салату, курка печена, сир чедер, чері, огірок, соус “Ранч”, кисло-солодкий соус, бальзамічний соус, кунжут",
      price: "135 грн",
      img: "./images/waffles_popup_1.webp",
    },
    {
      name: "Вафля з лососем",
      description: "Вафля, мікс салату, лосось, авокадо, моцарела, чері, соус “Ранч”, кисло-солодкий соус, бальзамічний соус, кунжут",
      price: "175 грн",
      img: "./images/waffles_popup_2.webp",
    },
    {
      name: "Вафля з тунцем та яйцем пашот",
      description: "Вафля, мікс салату, тунець, яйце пашот, огірок, чері, соус “Тартар”, соус з тунця, бальзамічний соус, кунжут",
      price: "175 грн",
      img: "./images/waffles_popup_3.webp",
    },
    {
      name: "Вафля манго-маракуйя",
      description: "Вафля, манговий крем, пюре манго-маракуя, морозиво, сезонні фрукти",
      price: "145 грн",
      img: "./images/waffles_popup_4.webp",
    },
    {
      name: "Вафля з малиною",
      description: "Вафля, малиновий крем, пюре з малини, морозиво, сезонні фрукти, крихти орео",
      price: "130 грн",
      img: "./images/waffles_popup_5.webp",
    },
    {
      name: "Вафля з солоною карамеллю",
      description: "Вафлі, карамельний крем, солона карамель, карамелізовані яблука, морозиво, арахіс",
      price: "135 грн",
      img: "./images/waffles_popup_6.webp",
    },
    {
      name: "Вафля з нутеллою",
      description: "Вафля, крем з нутелли, нутелла, морозиво, сезонні фрукти, арахіс",
      price: "145 грн",
      img: "./images/waffles_popup_7.webp",
    },
  ];
  
  const dessertMenu = [
    {
      name: "Чізкейк",
      price: "90 грн",
      img: "./images/dessert_popup_1.webp",
    },
    {
      name: "Маренговий рулет",
      price: "70 грн",
      img: "./images/dessert_popup_2.webp",
    },
    {
      name: "Макарун",
      price: "40 грн",
      img: "./images/dessert_popup_3.webp",
    },
    {
      name: "Яблучний штрудель",
      price: "75 грн",
      img: "./images/dessert_popup_4.webp",
    },
    {
      name: "Мусовий десерт",
      price: "90 грн",
      img: "./images/dessert_popup_5.webp",
    },
    {
      name: "Донатс",
      price: "40 грн",
      img: "./images/dessert_popup_6.webp",
    },
    {
      name: "Морозиво класичне",
      price: "50 грн",
      img: "./images/dessert_popup_7.webp",
    },
    {
      name: "Морозиво (в асортименті)",
      price: "60 грн",
      img: "./images/dessert_popup_8.webp",
    },
  ];
  
    
  let isOpen = true;
  let startY;
  
  function showPopup(elem) {
    if (isOpen) {
      isOpen = false;
      document.body.classList.add('_lock');
      const popup = document.querySelector(".popup");
    
      if (elem.description) {
        popup.innerHTML = `
        <div class="nav_line"><span class="nav_line_el"></span></div>
          <img class="photo_menu_pop_up" src=${elem.img} alt="">
          <div class="container_text_menu">
            <p class="title_dish_pop_up">${elem.name}</p>
            <p class="content_dish_pop_up">${elem.description}</p>
            <p class="price_dish_pop_up">${elem.price}</p>
           
          </div>
        `;
      } else {
        popup.innerHTML = `
        <div class="nav_line"><span class="nav_line_el"></span></div>
          <img class="photo_menu_pop_up" src=${elem.img} alt="">
          <div class="container_text_menu">
            <p class="title_dish_pop_up">${elem.name}</p>
            <p class="price_dish_pop_up">${elem.price}</p>
           
          </div>
        `;
      }
     
      // Append the popup to the body before adding the 'active' class
      document.body.appendChild(popup);
  
      // Force reflow before adding the 'active' class for smooth transition
      popup.offsetHeight;
  
      // Add the 'active' class
      popup.classList.add("active");
  
      // Add touch events to detect swipe
      popup.addEventListener('touchstart', handleTouchStart, false);
      popup.addEventListener('touchmove', handleTouchMove, false);
      popup.addEventListener('touchend', handleTouchEnd, false);
    }
  }
  
  function hidePopup() {
    if (!isOpen) {
      const popup = document.querySelector(".popup");
      
      // Add the 'active2' class
      // popup.classList.add("active2");
  
      // Use a setTimeout to remove the 'active' class after the animation completes
      setTimeout(() => {
        popup.classList.remove("active");
        document.body.classList.remove('_lock');
        isOpen = true;
  
        // Remove touch events when the popup is hidden
        popup.removeEventListener('touchstart', handleTouchStart, false);
        popup.removeEventListener('touchmove', handleTouchMove, false);
        popup.removeEventListener('touchend', handleTouchEnd, false);
      }, 300); // 300 milliseconds, should match the transition duration
    }
  }
  
  function handleTouchStart(e) {
    startY = e.touches[0].clientY;
  }
  
  function handleTouchMove(e) {
    if (!startY) return;
  
    const currentY = e.touches[0].clientY;
    const diffY = currentY - startY;
  
    if (diffY > 50) { // You can adjust this threshold for sensitivity
      hidePopup();
      startY = null;
    }
  }
  
  function handleTouchEnd() {
    startY = null;
  }
  


const showArray = (array, mm) => {
    mm.innerHTML = "";
    array.forEach(elem => {
      const el = document.createElement("div");
      el.classList.add("menu_box");
  
       // Add onclick event to the 'el' element
       el.onclick = () => {
        // Show the popup
        showPopup(elem);
      };
  
      if (elem.description) {
        el.innerHTML = `
          <img class="photo_menu" src=${elem.img} alt="">
          <div class="container_text_menu">
            <p class="title_dish">${elem.name}</p>
            <p class="content_dish">${elem.description}</p>
            <p class="price_dish">${elem.price}</p>
           
          </div>
        `;
      } else {
        el.innerHTML = `
          <img class="photo_menu" src=${elem.img} alt="">
          <div class="container_text_menu">
            <p class="title_dish">${elem.name}</p>
            <p class="price_dish">${elem.price}</p>
           
          </div>
        `;
      }
  
      mm.appendChild(el);
    });
  };

  showArray(coffeeMenu,mains[0])
  showArray(teaMenu,mains[1])
  showArray(coldDrinksMenu,mains[2])
  showArray(coldDrinks,mains[3])
  showArray(breakfastMenu,mains[4])
  showArray(firstMealMenu,mains[5])
  showArray(cheesecakeMenu,mains[6])
  showArray(pastaMenu,mains[7])
  showArray(saladMenu,mains[8])
  showArray(burgerMenu,mains[9])
  showArray(pitaMenu,mains[10])
  showArray(bruschettaMenu,mains[11])
  showArray(waffleMenu,mains[12])
  showArray(dessertMenu,mains[13])