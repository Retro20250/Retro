window.onload = function () {
  alert("Welcome to the Offline Games Section! 🎮");
  
  const menuButton = document.querySelector('.menu-button');
  const dropdown = document.getElementById("dropdown");

  menuButton.addEventListener("click", function (e) {
    e.stopPropagation(); // يمنع إن الكليك يتسبب في غلق المينيو على طول
    toggleMenu();
  });

  document.addEventListener('click', function(e) {
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
};

function toggleMenu() {
  const menu = document.getElementById("dropdown");
  const isShowing = menu.classList.contains("show");

  if (!isShowing) {
    menu.style.display = "block";
    void menu.offsetWidth; // trigger reflow
    menu.classList.add("show");
  } else {
    menu.classList.remove("show");
    menu.addEventListener('transitionend', function handler() {
      if (!menu.classList.contains("show")) {
        menu.style.display = "none";
      }
      menu.removeEventListener('transitionend', handler);
    }, { once: true });
  }
}
