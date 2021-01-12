let next = document.querySelector('.slider__arrow_next');
let prev = document.querySelector('.slider__arrow_prev');
let items = Array.from(document.getElementsByClassName('slider__item'));
let dots = Array.from(document.getElementsByClassName('slider__dot'));

next.onclick = function () {
  let currentId = 0;
  currentId = items.findIndex(item => item.classList.contains('slider__item_active'));
  
  if (currentId >= items.length - 1){
    change(0);
  } else {
    change(currentId + 1);
  }
  
}
prev.onclick = function () {
  let currentId = 0;
  currentId = items.findIndex(item => item.classList.contains('slider__item_active'));
  
  if (currentId <= 0){
    change(items.length - 1);
  } else {
    change(currentId - 1);
  }
  
}

function change (activeId){
  // items[currentId].classList.remove('slider__item_active');
  items.map(item => item.classList.remove('slider__item_active'));
  items[activeId].classList.add('slider__item_active');
  dots.map(item => item.classList.remove('slider__dot_active'));
  dots[activeId].classList.add('slider__dot_active');
}

dots.forEach((dot) => {
  dot.onclick = function (){
    let currentDotId = 0;
    dots.map(item => item.classList.remove('slider__dot_active'));
    this.classList.add('slider__dot_active');
    dots.map((element, index) => {
      if (element.classList.contains('slider__dot_active')){
        currentDotId = index;
      }
    });
    change (currentDotId);
  }
})