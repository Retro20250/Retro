let quantity = 1;

function increase() { //lma el user ydos 3la (+) el ra2m yzed
    quantity++;
    document.querySelector('.number').textContent = quantity;
    // querySelector -> da le el class ely fe el html

}

function decrease() {
    if (quantity > 1) { // 3lshan el ra2m my2lsh le el zero
        quantity--; //lma el user ydos 3la (-) el ra2m y2l
        document.querySelector('.number').textContent = quantity;
    }
}

const sectionStates = {
    1: 1,
    2: 1
};
function showNextImages(sectionId) {
    document.getElementById(`product-row1-${sectionId}`).classList.add("hidden");
    document.getElementById(`product-row2-${sectionId}`).classList.remove("hidden");
    sectionStates[sectionId] = 2;
    updateButtonHighlight(sectionId);
}

function showPrevImages(sectionId) {
    document.getElementById(`product-row2-${sectionId}`).classList.add("hidden");
    document.getElementById(`product-row1-${sectionId}`).classList.remove("hidden");
    sectionStates[sectionId] = 1;
    updateButtonHighlight(sectionId);
}

function updateButtonHighlight(sectionId) {
    const section = document.querySelector(`.product-section[data-id="${sectionId}"]`);
    const leftBtn = section.querySelector('.product-left');
    const rightBtn = section.querySelector('.product-right');

    if (sectionStates[sectionId] === 1) {
        rightBtn.classList.add("highlighted");
        leftBtn.classList.remove("highlighted");
    } else {
        leftBtn.classList.add("highlighted");
        rightBtn.classList.remove("highlighted");
    }
}

window.onload = function () {
    for (let id in sectionStates) {
        updateButtonHighlight(id);
    }
};

