// جايبة كل الصور الكبيرة اللي في السلايدر
let items = document.querySelectorAll('.slider .list .item');

// جايبة الزرار اللي بيروّح للصورة اللي بعد كده
let next = document.getElementById('next');

// جايبة الزرار اللي بيرجع للصورة اللي قبله
let prev = document.getElementById('prev');

// جايبة الصور الصغيرة اللي تحت (التامنيلز)
let thumbnails = document.querySelectorAll('.thumbnail .item');


let countItem = items.length;

// بنبدأ من أول صورة
let itemActive = 0;


next.onclick = function () {
    itemActive++; // نزود واحد علشان نروح للصورة اللي بعدها
    if (itemActive >= countItem) itemActive = 0; // لو وصلنا للآخر نرجع لأول صورة
    showSlider(); // نعرض الصورة الجديدة
};

prev.onclick = function () {
    itemActive--; // ننقص واحد علشان نرجع للصورة اللي قبل
    if (itemActive < 0) itemActive = countItem - 1; // لو رجعنا قبل أول صورة، نروح لآخر واحدة
    showSlider(); // نعرض الصورة الجديدة
};

let refreshInterval = setInterval(() => {
    next.click(); // كأننا ضغطنا على زرار "التالي"
}, 5000);

// دي الفانكشن اللي بتغيّر الصورة المعروضة
function showSlider() {
    // نشيل الـ active من الصورة اللي باينة دلوقتي
    document.querySelector('.slider .list .item.active')?.classList.remove('active');
    // ونشيله من التامنيل كمان
    document.querySelector('.thumbnail .item.active')?.classList.remove('active');

    // نضيف active للصورة الجديدة
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');



    // نخلي التامنيل اللي تحت يبان لو كان بره الشاشة
    setPositionThumbnail();

    // نعيد تشغيل العداد من أول علشان السلايدر يكمل بعد ما نضغط يدوي

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000);
}



// دي الفانكشن اللي بتخلي التامنيل ييجي في النص لو مش باين
function setPositionThumbnail() {
    let thumbnailActive = document.querySelector('.thumbnail .item.active'); // جايبين التامنيل اللي عليه الدور
    let rect = thumbnailActive.getBoundingClientRect(); // بنعرف مكانه في الشاشة
    // لو مش باين (يمين أو شمال)، نخليه ييجي في النص بالراحة
    if (rect.left < 0 || rect.right > window.innerWidth) {
        thumbnailActive.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    }}





// click thumbnail

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;      // نغير رقم الصورة اللي معروضة
        showSlider();            // نحدّث العرض على حسب الصورة المختارة
    });
});



// لو المستخدم ضغط سهم يمين أو شمال من الكيبورد
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        next.click();  // كأننا ضغطنا على زرار "التالي"
    } else if (event.key === 'ArrowLeft') {
        prev.click();  // كأننا ضغطنا على زرار "السابق"
    }
});



/* 000000000000000000000000000000000000000 */
/* 000000000000000000000000000000000000000 */
/* 000000000000000000000000000000000000000 */

// بنختار كل الكروت اللي ليها كلاس "image-card"
let cards = document.querySelectorAll(".image-card");
// بنختار مكان عرض الكروت، اللي هو المنطقة اللي هتكون فيها الكروت
let stackArea = document.querySelector(".stack-area");

function rotateCards() {
    let angle = 0;
    // بنمر على كل كارت ونعمل له تغيير حسب وضعه
    cards.forEach((card, index) => {
        // لو الكارت عليه كلاس "away" يعني هيتحرك بعيد عن الشاشة
        if (card.classList.contains("away")) {
            // هنا بنخليه يتحرك تحت الشاشة ويتلف بزاوية
            card.style.transform = `translateY(-120vh) rotate(-48deg)`;
        } else {
            // لو مش عليه كلاس "away"، الكارت هيدور بزاوية معينة
            card.style.transform = `rotate(${angle}deg)`;
            // كل كارت هيدور بزاوية أقل ب 10 درجات عن اللي قبله
            angle = angle - 10;
            // علشان الكروت الأهم تظهر فوق الكروت التانية
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


// ------------------------------------------------------------------------------------

// إظهار شريط البحث عند الضغط على الأيقونة
const searchBox = document.querySelector(".search");
const icon = document.querySelector(".search-icon");

if (icon) {
  icon.addEventListener("click", () => {
    searchBox.classList.toggle("show");
  });
}

// --------------------------------------------------------------------------------------------




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









