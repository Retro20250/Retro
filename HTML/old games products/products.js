let quantity = 1; 
function increase() { 
  quantity++; //lma el user ydos 3la (+) el ra2m yzed
  document.querySelector('.number').textContent = quantity;
  // bndwar 3la el item elly 3ndo class number, w y3rd el rakam el gded
  // querySelector -> da le el class ely fe el html
}
function decrease() {
  if (quantity > 1) { // 3lshan el ra2m my2lsh le el zero
    quantity--; //lma el user ydos 3la (-) el ra2m y2l
    document.querySelector('.number').textContent = quantity;
  }
}
const sectionStates = { //object by7tfz el state bta3 el sections
  1: 1,  // 1 w 2 el rakam el mt3rf w 3ndhom qeema =1 y3ny el sora el 1 htzhar fel bdaya
  2: 1
};
function showNextImages(sectionId) { 
  document.getElementById(`product-row1-${sectionId}`).classList.add("hidden");
  //bn5fy awl row fl swar
  document.getElementById(`product-row2-${sectionId}`).classList.remove("hidden");
  //bnzhr el row el tany
  // el row el tany da ely feh el sora el gded
  sectionStates[sectionId] = 2; // bn7dth el state bta3 el section
  // bqt el sora el tanya elly htzhr
  updateButtonHighlight(sectionId); //bnady el function elly ht7dth el button 7sb el state el gdeda
}
function showPrevImages(sectionId) {  // function 3ks el function elly fo2, btzhar el sora el awla lma ados 3la el button
  document.getElementById(`product-row2-${sectionId}`).classList.add("hidden");
  //bn5fy el row el tany
  document.getElementById(`product-row1-${sectionId}`).classList.remove("hidden");
  //bnzhr el row el awl
  sectionStates[sectionId] = 1; // bn7dth el state bta3 el section 
  // bqt el sora el awla elly htzhr
  updateButtonHighlight(sectionId); 
}
function updateButtonHighlight(sectionId) { // function bt7dth el button elly htzhr 3la 7sb el state b3d ma 8yrna el sora
  const section = document.querySelector(`.product-section[data-id="${sectionId}"]`); // bngeeb el section elly 3la 7sb el id
  const leftBtn = section.querySelector('.product-left');
  const rightBtn = section.querySelector('.product-right');
  //bgeeb el buttons 3la 7sb right w left buttons

  if (sectionStates[sectionId] === 1) { // 1 hna y3ny el sora el awla
    rightBtn.classList.add("highlighted"); // b7dth el class highlighted 3la el button ely 3la el ymeen
    leftBtn.classList.remove("highlighted"); // w b5ly el button ely 3la el shmal my7dthsh el class highlighted
  
  } else { // hna y3ny el sora el tanya
    leftBtn.classList.add("highlighted"); // b7dth el class highlighted 3la el button ely 3la el shmal
    rightBtn.classList.remove("highlighted"); // w b5ly el button ely 3la el ymeen my7dthsh el class highlighted
  }
}
window.onload = function () { // lma el page t7ml htsht8l el function
  for (let id in sectionStates) { // b3ml loop 3la el sectionStates object w b7dth el button elly 3la 7sb el state
    updateButtonHighlight(id); 
  }
};

