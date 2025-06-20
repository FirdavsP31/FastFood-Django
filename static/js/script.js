'use strict';



/**
 * navbar toggle
 */
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

menuToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
  });
}


/**
 * header sticky & back to top
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/**
 * search box toggle
 */
const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");

const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn];

for (let i = 0; i < searchBoxElems.length; i++) {
  searchBoxElems[i].addEventListener("click", function () {
    searchContainer.classList.toggle("active");
    document.body.classList.toggle("active");
  });
}

/**
 * move cycle on scroll
 */
const deliveryBoy = document.querySelector("[data-delivery-boy]");

let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", function () {
  let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

  if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
    let activeScrollPos = window.scrollY;

    if (lastScrollPos < activeScrollPos) {
      deliveryBoyMove += 1;
    } else {
      deliveryBoyMove -= 1;
    }

    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
  }
});


const filterButtons = document.querySelectorAll('.filter-btn');
  const menuItems = document.querySelectorAll('.food-menu-list > li');

  // Функция фильтрации
  function filterItems(category) {
    menuItems.forEach(item => {
      if (category === 'all' || item.getAttribute('data-category') === category) {
        item.style.opacity = '1';
        item.style.visibility = 'visible';
        item.style.height = 'auto';
        item.style.margin = '';
      } else {
        item.style.opacity = '0';
        item.style.visibility = 'hidden';
        item.style.height = '0';
        item.style.margin = '0';
      }
    });
  }

  // Обработчики для кнопок фильтра
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Удаляем активный класс со всех кнопок
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Добавляем активный класс текущей кнопке
      this.classList.add('active');
      
      // Применяем фильтр
      const filterValue = this.getAttribute('data-filter');
      filterItems(filterValue);
    });
  });
  

  // document.querySelectorAll('.food-menu-card').forEach(card => {

  //   const orderBtn = card.querySelector('.food-menu-btn');

  //   const cartBtn = card.querySelector('.add-to-cart-btn');

  //   orderBtn.style.pointerEvents = 'auto';
  //   cartBtn.style.pointerEvents = 'auto';

  //   orderBtn.addEventListener('click', function(e) {
  //     e.stopPropagation();
  //     alert('Заказ оформлен: ' + card.querySelector('.card-title').textContent);
  //   });
    
  //   cartBtn.addEventListener('click', function(e) {
  //     e.stopPropagation();
  //     alert('Добавлено в корзину: ' + card.querySelector('.card-title').textContent);
  //   });
  // });