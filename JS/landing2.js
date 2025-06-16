const menuButton = document.querySelector('.menu-button');
const dropdownContent = document.querySelector('.dropdown-content');

menuButton.addEventListener('click', () => {
  if (dropdownContent.classList.contains('show')) {
    dropdownContent.classList.remove('show');
  } else {
    dropdownContent.classList.add('show');
  }
}); /* في برضو toglo ممكن تستخدمها */ 









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


/* 000000000000000000000000000000000000000 */
/* 000000000000000000000000000000000000000 */
/* 000000000000000000000000000000000000000 */


const wrapper = document.getElementById("sliderWrapper");
const scrollAmount = window.innerWidth;


wrapper.addEventListener("wheel", function (e) {
  const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth; 


  if (
    (e.deltaY > 0 && wrapper.scrollLeft < maxScrollLeft) || (e.deltaY < 0 && wrapper.scrollLeft > 0) 
  )
   {


  
    e.preventDefault();
    wrapper.scrollBy({
      left: e.deltaY, 
      behavior: "smooth",
    });
  }
});



// ********************
// *****************
// نكرر الصور داخل التراك ده بس مرة واحدة بس
const cartoonTrack = document.querySelector('.cartoon-slider-track');
cartoonTrack.innerHTML += cartoonTrack.innerHTML;

// نوقف سلايدر الكرتون ده عند الهوفر فقط على عناصره
const cartoonItems = document.querySelectorAll('.slider-item');

cartoonItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    cartoonTrack.style.animationPlayState = 'paused';
  });
  item.addEventListener('mouseleave', () => {
    cartoonTrack.style.animationPlayState = 'running';
  });
});








