"use strict";

let count = 0;
let listImages =document.getElementsByClassName("imageCarousel");
let tagBody = document.getElementsByTagName('body')[0];
imgShow();
function imgShow() {
    if(count > listImages.length - 1) {count = 0}
    if(count < 0) {count = 4}
    for (let i = 0; i < listImages.length; i++) {
        listImages[i].classList.add('displayNone');
    }
    listImages[count].classList.remove('displayNone');

}

function imgNext() {
    count++;
    imgShow();
}

function imgPrev() {
    count--;
    imgShow();  
}

function darkMode() { 
    tagBody.classList.toggle('darkMode');
    }






