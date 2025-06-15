const menuButton = document.querySelector('.menu-button');
const dropdownContent = document.querySelector('.dropdown-content');

menuButton.addEventListener('click', () => {
    dropdownContent.classList.toggle('show'); // إضافة أو إزالة الكلاس "show"
});



let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thum = document.querySelectorAll('.thumbnail .item');
let countItem = items.length;
let itemactive = 0;
let clicklwahdo;

function startauto() {
  clicklwahdo = setInterval(() => {
    next.click();
  }, 4000);
}

startauto();

next.onclick = function () {
  itemactive++;
  if (itemactive >= countItem) itemactive = 0;
  showSlider();
};

prev.onclick = function () {
  itemactive--;
  if (itemactive < 0) itemactive = countItem - 1;
  showSlider();
};

function showSlider() {
  const activeSlide = document.querySelector('.slider .list .item.active');
  const activeThumb = document.querySelector('.thumbnail .item.active');
  if (activeSlide) activeSlide.classList.remove('active');
  if (activeThumb) activeThumb.classList.remove('active');
  items[itemactive].classList.add('active');
  thum[itemactive].classList.add('active');

  clearInterval(clicklwahdo);
  startauto();
}

thum.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    itemactive = index;
    showSlider();
  });
});



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












