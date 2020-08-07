/*** Display *****/

let sliderImages = document.querySelectorAll('.slide');
let arrowRight =  document.querySelector('#arrow-right');
let arrowLeft =  document.querySelector('#arrow-left');
let current = 0;

function reset(){
    for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }
}

function startSlide(){
    reset();
    sliderImages[0].style.display = 'block';
}

function slideLeft(){
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

function slideRight(){
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}


arrowLeft.addEventListener('click', function(){
    if(current === 0){
        current = sliderImages.length;
    }
    slideLeft();
});


arrowRight.addEventListener('click', function(){
    if(current === sliderImages.length - 1 ){
        current = -1;
    }
    slideRight();
});

startSlide();

let buttons = document.querySelectorAll('.tab');
let tabContents = document.querySelectorAll('.tab-content');




function tabEvent(){
    removeBorder();
    removeShow();
    this.classList.add('tab');
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');
}

function removeBorder(){
    buttons.forEach(button =>{
        button.classList.remove('tab');
    });
}

function removeShow(){
    tabContents.forEach(content =>{
        content.classList.remove('show');
    });
}
tabContents.forEach(item =>{
    item.addEventListener('click', tabEvent);
});