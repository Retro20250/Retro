let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');


let countItem = items.length;
let itemActive = 0;


next.onclick = function () {
    itemActive++;
    if (itemActive >= countItem) itemActive = 0;
    showSlider();
};


prev.onclick = function () {
    itemActive--;
    if (itemActive < 0) itemActive = countItem - 1;
    showSlider();
};


let refreshInterval = setInterval(() => {
    next.click();
}, 5000);

function showSlider() {
    document.querySelector('.slider .list .item.active')?.classList.remove('active');
    document.querySelector('.thumbnail .item.active')?.classList.remove('active');

    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');


   
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000);
}

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    });
});


/* 000000000000000000000000000000000000000 */
/* 000000000000000000000000000000000000000 */
/* 000000000000000000000000000000000000000 */


let cards = document.querySelectorAll(".image-card");
let stackArea = document.querySelector(".stack-area");

function rotateCards() {
    let angle = 0;
    cards.forEach((card, index) => {
        if (card.classList.contains("away")) {
            card.style.transform = `translateY(-120vh) rotate(-48deg)`;
        } else {
            card.style.transform = `rotate(${angle}deg)`;
            angle = angle - 10;
            card.style.zIndex = cards.length - index;
        }
    });
}

// تحريك الكروت بناءً على السكروول
function rotateCards() {
  let angle = 0;
  cards.forEach((card, index) => {
    if (card.classList.contains("away")) {
      card.style.transform = `translateY(-120vh) rotate(-48deg)`;
    } else {
      card.style.transform = `rotate(${angle}deg)`;
      angle -= 10;
      card.style.zIndex = cards.length - index;
    }
  });
}

rotateCards();

window.addEventListener("scroll", () => {
  let distance = window.innerHeight * 0.5;
  let topVal = stackArea.getBoundingClientRect().top;
  let index = Math.floor(-1 * (topVal / distance + 1 ));

  for (let i = 0; i < cards.length; i++) {
    if (i <= index) {
      cards[i].classList.add("away");
    } else {
      cards[i].classList.remove("away");
    }
  }

  rotateCards();
});


// إظهار شريط البحث عند الضغط على الأيقونة
const searchBox = document.querySelector(".search");
const icon = document.querySelector(".search-icon");

if (icon) {
  icon.addEventListener("click", () => {
    searchBox.classList.toggle("show");
  });
}


// التنقل التلقائي بين السكاشن
let sectionTwo = document.querySelector(".two");
let sectionThree = document.querySelector(".three");

let hasScrolledToThree = false;

window.addEventListener("scroll", () => {
  if (
    sectionTwo &&
    sectionTwo.getBoundingClientRect().bottom <= 0 &&
    !hasScrolledToThree
  ) {
    hasScrolledToThree = true;
    sectionThree.scrollIntoView({ behavior: "smooth" });
  }

  if (sectionTwo && sectionTwo.getBoundingClientRect().bottom > 0) {
    hasScrolledToThree = false;
  }
});


/*0000000000000000000 */
/*0000000000000000000 */
/*0000000000000000000 */
/*0000000000000000000 */

document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menuIcon');
  const menuBar = document.getElementById('menuBar');
  let isOpen = false;

  // Toggle menu on icon click
  menuIcon.addEventListener('click', function(e) {
    e.stopPropagation();
    isOpen = !isOpen;
    this.classList.toggle('active');
    menuBar.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (isOpen && !menuBar.contains(e.target) && !menuIcon.contains(e.target)) {
      menuIcon.classList.remove('active');
      menuBar.classList.remove('active');
      isOpen = false;
    }
  });

  // Add ripple effect to menu items
  const menuLinks = document.querySelectorAll('.menu-link');
  menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Remove existing ripples
      const ripples = this.querySelectorAll('.ripple');
      ripples.forEach(ripple => ripple.remove());
      
      // Create new ripple
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      
      // Position ripple
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      this.appendChild(ripple);
      
      // Remove ripple after animation
      setTimeout(() => {
        ripple.remove();
      }, 500);
    });
  });
});