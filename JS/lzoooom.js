let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

let countItem = items.length;
let itemActive=0;

next.onclick = function(){
    itemActive++;
    if(itemActive>=countItem){
        itemActive=0;
    }
    showSlider();
}


function showSlider(){
    itemActiveold
}