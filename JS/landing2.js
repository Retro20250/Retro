let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;

// event next click
next.onclick = function () {
    itemActive++;
    if (itemActive >= countItem) itemActive = 0;
    showSlider();
};

// event prev click
prev.onclick = function () {
    itemActive--;
    if (itemActive < 0) itemActive = countItem - 1;
    showSlider();
};

// auto run slider forever
let refreshInterval = setInterval(() => {
    next.click();
}, 5000);

function showSlider() {
    document.querySelector('.slider .list .item.active')?.classList.remove('active');
    document.querySelector('.thumbnail .item.active')?.classList.remove('active');

    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
    setPositionThumbnail();

    // Restart the interval without condition
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
    }
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    });
});
document.addEventListener('keydown', function (event) {
    // لو الضغط كان على السهم لليمين (Right Arrow)
    if (event.key === 'ArrowRight') {
        next.click();  // يعمل click على زرار "التالي"
    }
    // لو الضغط كان على السهم لليسار (Left Arrow)
    else if (event.key === 'ArrowLeft') {
        prev.click();  // يعمل click على زرار "السابق"
    }
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


