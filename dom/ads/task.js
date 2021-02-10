let items = Array.from(document.getElementsByClassName('rotator__case'));

change = function(){
  let currentId = 0;
  let activeId = 0;
  
  currentId = items.findIndex(item => item.classList.contains('rotator__case_active'));
  
  if (currentId >= items.length - 1){
    activeId = 0;
  } else {
    activeId = currentId + 1;
  }
  let color = items[activeId].getAttribute('data-color');
  let time = items[activeId].getAttribute('data-speed');
  clearInterval(timer);
  timer = setInterval(change, time);
  items[activeId].style.color = color;
  items.map(item => item.classList.remove('rotator__case_active'));
  items[activeId].classList.add('rotator__case_active');
}

let timer = setInterval(change, 1000);