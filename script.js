"use strict";
// Banner elements
const bannerContainer = document.querySelectorAll(".banner-container")
const bannerImg1 = document.querySelector(".banner-img-1")
const bannerImg2 = document.querySelector(".banner-img-2")
const bannerImg3 = document.querySelector(".banner-img-3")
const bannerImg4 = document.querySelector(".banner-img-4")



// Banner State
let bannerstate = 1

function mutatebannerstate(){
    if(bannerstate >= 4){
        bannerstate = 1
    }else{
        bannerstate++
    }
}
// Carousel Button 
const leftButton = document.querySelector(".left-button")
const rightButton = document.querySelector(".right-button")

leftButton.addEventListener("click",function(){
    const currentState = bannerstate;
    if(currentState <= 1) {
        document.querySelector(`.banner-img-${currentState}`).classList.add("move-in-center-to-left")
        document.querySelector(`.banner-img-${currentState + 1}`).classList.remove("visibility-none")
        document.querySelector(`.banner-img-${currentState + 1}`).classList.add("move-in-right-to-center")
        mutatebannerstate()
        
    }else if(currentState > 1 && currentState < 4){
        document.querySelector(`.banner-img-${currentState}`).classList.add("move-in-center-to-left")
        document.querySelector(`.banner-img-${currentState + 1}`).classList.remove("visibility-none")
        document.querySelector(`.banner-img-${currentState + 1}`).classList.add("move-in-right-to-center")
        document.querySelector(`.banner-img-${currentState - 1}`).classList.add("visibility-none")
        mutatebannerstate()
    }else if(currentState == 4){
        document.querySelector(`.banner-img-${1}`).classList.remove("visibility-none")
        document.querySelector(`.banner-img-${1}`).classList.add("move-in-right-to-center")
        document.querySelector(`.banner-img-${4}`).classList.add("move-in-center-to-left")
        
        document.querySelector(`.banner-img-${4}`).addEventListener('transitionend', function() {
            document.querySelector(`.banner-img-${4}`).classList.add("visibility-none")
        }, { once: true });
        
        document.querySelector(`.banner-img-${currentState - 1}`).classList.add("visibility-none")
        mutatebannerstate()
    }
    console.log(bannerstate)
})

