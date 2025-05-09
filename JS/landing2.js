/*   اول سيكشن */
/* 000000000000000000000000000000000000000 */
/* 000000000000000000000000000000000000000 */



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
    setPositionThumbnail();
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000);
}
function setPositionThumbnail() {
    let thumbnailActive = document.querySelector('.thumbnail .item.active');
    let rect = thumbnailActive.getBoundingClientRect(); 
    if (rect.left < 0 || rect.right > window.innerWidth) {
        thumbnailActive.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    }}
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;    
        showSlider();            
    });
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        next.click(); 
    } else if (event.key === 'ArrowLeft') {
        prev.click();  
    }
});



/* 000000000000000000000000000000000000000 */
/* 000000000000000000000000000000000000000 */
/* 000000000000000000000000000000000000000 */



/* 2222222222222222222222*/



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

/*0000000000000000000 */
/*0000000000000000000 */
/*0000000000000000000 */
/*0000000000000000000 */

/* dwonloooooooooooo */


/* 000000000000000000000000000000000000000 */
/* 000000000000000000000000000000000000000 */
/* 000000000000000000000000000000000000000 */



  const wrapper = document.getElementById("sliderWrapper");
const scrollAmount = window.innerWidth;

document.getElementById("prevBtn").addEventListener("click", () => {
  wrapper.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

document.getElementById("nextBtn").addEventListener("click", () => {
  wrapper.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

// إضافة فئة "visible" للصور عند تحميل السلايدر
const slides = document.querySelectorAll(".slide img");
slides.forEach((img, index) => {
  setTimeout(() => {
    img.classList.add("visible"); // إظهار الصورة تدريجيًا
  }, index * 1000); // تأخير ظهور كل صورة حسب ترتيبها
});


/*0000000000000000000000000000000000000000 */
/*0000000000000000000000000000000000000000 */
/*0000000000000000000000000000000000000000 */
/*0000000000000000000000000000000000000000 */




const scrollContainer = document.querySelector('.scroll-container');
const horizontalWrapper = document.querySelector('.horizontal-wrapper');
const sliderItems = document.querySelectorAll('.slider-item');

//  (كلون العناصر عشان يبقى في تواصل)
function setupInfiniteScroll() {
  //  (عشان السكرول يبقى ناعم وبدون قفزات)
  const originalItems = document.querySelectorAll('.slider-item');
  originalItems.forEach(item => {
    const clone = item.cloneNode(true);
    horizontalWrapper.appendChild(clone);
  });
}
setupInfiniteScroll();

// تحكم في توقف وتشغيل الحركة
let isScrolling = true;
let scrollAnimation;

// 4. نوقف الحركة لما الماوس يجي فوق أي صورة
horizontalWrapper.addEventListener('mouseenter', () => {
  // بنوقف الحركة
  isScrolling = false;
  horizontalWrapper.style.animationPlayState = 'paused';
});

// 5. نشغل الحركة تاني لما الماوس يمشي
horizontalWrapper.addEventListener('mouseleave', () => {
  // بنشغل الحركة تاني
  isScrolling = true;
  horizontalWrapper.style.animationPlayState = 'running';
});

// 6. نضيف إمكانية النقر على الصور للانتقال لمحتوى مرتبط
sliderItems.forEach((item, index) => {
  item.style.cursor = 'pointer'; // نخلي شكل الماوس يدل على إنه ينفع تدوس
  
  item.addEventListener('click', () => {
    // الانتقال لمحتوى معين حسب الصورة المختارة
    // ممكن تغير الأماكن دي حسب المطلوب
    const destinations = [
      '.two', // القسم الأول
      '.three', // القسم الثاني
      '.game-section', // قسم الألعاب
      '#section-four', // قسم مخصص
      '.colom:first-child', // الكولوم الأول
      '.online-r', // قسم الألعاب
      '.game-card.large:first-child', // كارت الألعاب الكبير الأول
      '.game-card.large:last-child' // كارت الألعاب الكبير الثاني
    ];
    
    // نحسب الإندكس بحيث ميعديش عدد الوجهات المتاحة
    const destinationIndex = index % destinations.length;
    const destination = document.querySelector(destinations[destinationIndex]);
    
    if (destination) {
      destination.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// 7. تعديل في السي إس إس عشان نخلي الحركة سلسة أكتر
// نزيد الـ keyframes من 60% ل 100% عشان اللوب ميبانش فيه قفزة
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes scroll-left {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-200px * ${sliderItems.length / 2})); }
  }
  
  .horizontal-wrapper {
    animation: scroll-left 30s linear infinite;
  }
`;
document.head.appendChild(styleSheet);




