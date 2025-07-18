



const slideshowElements=document.querySelectorAll(".slideshow-content");

let countElements=1;

setInterval(() => {
    countElements ++;

    let currrentElement=document.querySelector(".current");

    currrentElement.classList.remove("current");

    if(countElements>slideshowElements.length){
        
        countElements=1;

        slideshowElements[0].classList.add("current");
    }else{

        currrentElement.nextElementSibling.classList.add("current");

    }
}, 2000);