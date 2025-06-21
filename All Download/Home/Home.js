
  
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




  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".game-card");
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`; // تأخير بسيط لكل واحدة
    });
  });


  document.getElementById("randomBtn").addEventListener("click", () => {
    const cards = document.querySelectorAll(".game-card");

    // شيل أي تأثيرات قديمة
    cards.forEach(card => {
      card.classList.remove("highlighted");
      card.classList.remove("blurred");
    });

    const randomIndex = Math.floor(Math.random() * cards.length);
    const selectedCard = cards[randomIndex];

    // سكرول للكرت المختار
    selectedCard.scrollIntoView({ behavior: "smooth", block: "center" });

    // ضيف الكلاسات المطلوبة
    selectedCard.classList.add("highlighted");
    cards.forEach(card => {
      if (card !== selectedCard) {
        card.classList.add("blurred");
      }
    });

    // بعد 2 ثانية، رجّع كل حاجة
    setTimeout(() => {
      selectedCard.classList.remove("highlighted");
      cards.forEach(card => card.classList.remove("blurred"));
    }, 2000);
  });


