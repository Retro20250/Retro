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


/* 000000000000000000000000000000000000000 */
/* 000000000000000000000000000000000000000 */
/* 000000000000000000000000000000000000000 */





/* 000000000000000000000000000000000000000 */
/* 000000000000000000000000000000000000000 */
/* 000000000000000000000000000000000000000 */



/* 2222222222222222222222*/



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

/*0000000000000000000 */
/*0000000000000000000 */
/*0000000000000000000 */
/*0000000000000000000 */

/*cartoooon */

document.addEventListener('DOMContentLoaded', () => {
  const horizontalWrapper = document.querySelector('.horizontal-wrapper');


  horizontalWrapper.addEventListener('mouseenter', () => {
    horizontalWrapper.style.animationPlayState = 'paused';
  });


  horizontalWrapper.addEventListener('mouseleave', () => {
    horizontalWrapper.style.animationPlayState = 'running';
  });
});



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














 // Menu functionality with smooth animations
        function toggleMenu() {
            const menu = document.getElementById("dropdown");
            const isShowing = menu.classList.contains("show");
            
            if (!isShowing) {
                // Show menu with smooth animation
                menu.style.display = "block";
                // Force reflow to ensure animation plays
                void menu.offsetWidth;
                menu.classList.add("show");
            } else {
                // Hide menu with smooth animation
                menu.classList.remove("show");
                
                // Wait for animation to complete before hiding
                menu.addEventListener('transitionend', function handler() {
                    if (!menu.classList.contains("show")) {
                        menu.style.display = "none";
                    }
                    menu.removeEventListener('transitionend', handler);
                }, { once: true });
            }
        }

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            const dropdown = document.getElementById("dropdown");
            const menuButton = document.querySelector('.menu-button');
            
            if (dropdown.classList.contains("show") && 
                !menuButton.contains(e.target) && 
                !dropdown.contains(e.target)) {
                
                dropdown.classList.remove("show");
                
                dropdown.addEventListener('transitionend', function handler() {
                    if (!dropdown.classList.contains("show")) {
                        dropdown.style.display = "none";
                    }
                    dropdown.removeEventListener('transitionend', handler);
                }, { once: true });
            }
        });