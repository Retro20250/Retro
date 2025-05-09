let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');
let countItem = items.length;
let itemActive = 0;
let refreshInterval;

// دالة لتشغيل المؤقت
function startAutoSlide() {
  refreshInterval = setInterval(() => {
    next.click();
  }, 3000);
}

// تشغيل المؤقت عند تحميل الصفحة
startAutoSlide();

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

function showSlider() {
  document.querySelector('.slider .list .item.active')?.classList.remove('active');
  document.querySelector('.thumbnail .item.active')?.classList.remove('active');
  items[itemActive].classList.add('active');
  thumbnails[itemActive].classList.add('active');
  setPositionThumbnail();

  // إعادة تشغيل المؤقت
  clearInterval(refreshInterval);
  startAutoSlide();
}

function setPositionThumbnail() {
  let thumbnailActive = document.querySelector('.thumbnail .item.active');
  let rect = thumbnailActive.getBoundingClientRect();
  if (rect.left < 0 || rect.right > window.innerWidth) {
    thumbnailActive.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
  }
}

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


document.addEventListener('DOMContentLoaded', () => {
  const horizontalWrapper = document.querySelector('.horizontal-wrapper');

  // إيقاف الحركة عند الوقوف على الكارت
  horizontalWrapper.addEventListener('mouseenter', () => {
    horizontalWrapper.style.animationPlayState = 'paused';
  });

  // استئناف الحركة عند مغادرة الكارت
  horizontalWrapper.addEventListener('mouseleave', () => {
    horizontalWrapper.style.animationPlayState = 'running';
  });
});

/* 2222222222222222222222*/



/* 000000000000000000000000000000000000000 */
/* 000000000000000000000000000000000000000 */
/* 000000000000000000000000000000000000000 */




// بنختار كل الكروت اللي ليها كلاس "image-card"

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

wrapper.addEventListener("wheel", function (e) {
  const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth; // أقصى قيمة للتمرير الأفقي

  // إذا كان هناك تمرير أفقي مطلوب، امنع السلوك الافتراضي
  if (
    (e.deltaY > 0 && wrapper.scrollLeft < maxScrollLeft) || // التمرير لليمين
    (e.deltaY < 0 && wrapper.scrollLeft > 0) // التمرير لليسار
  ) {
    e.preventDefault(); // امنع التمرير العمودي
    wrapper.scrollBy({
      left: e.deltaY, // استخدمي حركة العجلة في الاتجاه الأفقي
      behavior: "smooth",
    });
  }
});