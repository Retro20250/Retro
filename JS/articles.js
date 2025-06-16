const cards = document.querySelectorAll('.card'); //bgeeb el elements elly 3ndhom class card w  a7othom fl variable elly esmo cards
const observer = new IntersectionObserver(entries => { // b3ml observer 3la el elements elly 3ndhom class card
  entries.forEach(entry => {  // b3ml loop 3la el entries elly 3ndhom class card
    if (entry.isIntersecting) { // lw el element zahr fl screen
      entry.target.classList.add('show'); //bdeef class show 3la el element
    } else { // lw el element mzharch fl screen
      entry.target.classList.remove('show'); //b5ly el class show myt3mlsh
    }
  });
}, { threshold: 0.1 }); // b3ml threshold 3la 0.1 y3ny lma el element yzhar b 10% mn el screen htzhr

cards.forEach(card => { //b3ml loop 3la kol card mn elly gbnahom 2bl kda
  card.classList.add('hidden'); //bdeef class hidden 3la el card
  observer.observe(card);  //b3ml observe 3la el card
});




