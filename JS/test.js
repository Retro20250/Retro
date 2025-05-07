let item = document.querySelectorAll('.slider .list .item ');
let thumbnail= document.querySelectorAll('..thumbnail .item ');
let next = document.getElementById('next');
let prev = document.getElementById('prev');


let countItem = item.length;
let itemActive = 0;

next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive>=countItem){
       itemActive = 0; 
    }
    showSlider();
}
function showSlider(){
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');


    item[itemActive].classList.add('active')

}