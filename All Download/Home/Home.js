window.onload = function () {
  alert("Welcome to the Offline Games Section! 🎮");
};
document.getElementById("sm-btn").addEventListener("click", function () {
  document.getElementById("popup").style.display = "block";
});





const menuButton = document.querySelector('.menu-button');
const dropdownContent = document.querySelector('.dropdown-content');

menuButton.addEventListener('click', () => {
  dropdownContent.classList.toggle('show'); // إضافة أو إزالة الكلاس "show"
});

