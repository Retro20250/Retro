let number = 1;

function increase() { //lma el user ydos 3la (+) el ra2m yzed
    number++;
    document.querySelector('.number').textContent = number;
    // querySelector -> da le el class ely fe el html
}

function decrease() {
    if (number > 1) { // 3lshan el ra2m my2lsh le el zero
        number--; //lma el user ydos 3la (-) el ra2m y2l
        document.querySelector('.number').textContent = number;
    }
}



const menuButton = document.querySelector('.menu-button');
const dropdownContent = document.querySelector('.dropdown-content');

menuButton.addEventListener('click', () => {
  dropdownContent.classList.toggle('show'); // إضافة أو إزالة الكلاس "show"
});

