let item = document.querySelectorAll('.slider .list .item ');
let thumbnail= document.querySelectorAll('..thumbnail .item ');
let next = document.getElementById('next');
let prev = document.getElementById('prev');


let countItem = item.length;
let itemact = 0;

next.onclick = function(){
    itemact = itemact + 1;
    if(itemact>=countItem){
       itemact = 0; 
    }
    showSlider();
}
function showSlider(){
    let itemactOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemactOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');


    item[itemact].classList.add('active')

}