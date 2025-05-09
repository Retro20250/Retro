// جايبة كل الصور الكبيرة اللي في السلايدر
let items = document.querySelectorAll('.slider .list .item');

// جايبة الزرار اللي بيروّح للصورة اللي بعد كده
let next = document.getElementById('next');

// جايبة الزرار اللي بيرجع للصورة اللي قبله
let prev = document.getElementById('prev');

// جايبة الصور الصغيرة اللي تحت (التامنيلز)
let thumbnails = document.querySelectorAll('.thumbnail .item');

// عدد الصور كلها
let countItem = items.length;

// بنبدأ من أول صورة
let itemActive = 0;

// لما نضغط على الزرار بتاع "التالي"
next.onclick = function () {
    itemActive++; // نزود واحد علشان نروح للصورة اللي بعدها
    if (itemActive >= countItem) itemActive = 0; // لو وصلنا للآخر نرجع لأول صورة
    showSlider(); // نعرض الصورة الجديدة
};

// لما نضغط على الزرار بتاع "السابق"
prev.onclick = function () {
    itemActive--; // ننقص واحد علشان نرجع للصورة اللي قبل
    if (itemActive < 0) itemActive = countItem - 1; // لو رجعنا قبل أول صورة، نروح لآخر واحدة
    showSlider(); // نعرض الصورة الجديدة
};

// السلايدر يشتغل لوحده كل 5 ثواني
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




rotateCards();

window.addEventListener("scroll", () => {
  let distance = window.innerHeight * 0.5;
  let topVal = stackArea.getBoundingClientRect().top;
  let index = Math.floor(-1 * (topVal / distance + 1));

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


