window.onload = function () { //lma el saf7a t5ls t7meel kol haga , nfz el function
  alert("Welcome to the Offline Games Section! 🎮"); // el function elly httnfz = alert feh el gomla dy
};
document.getElementById("sm-btn").addEventListener("click", function () {
  // lma el user ydos 3la button whose id is sm-btn
  document.getElementById("popup").style.display = "block";
  // yft7 el element elly el id bta3o popup 3n tareeq el style changing el display l block
});
const menuButton = document.querySelector('.menu-button');
const dropdownContent = document.querySelector('.dropdown-content');

menuButton.addEventListener('click', () => {
  dropdownContent.classList.toggle('show'); // إضافة أو إزالة الكلاس "show"
});