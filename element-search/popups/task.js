const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
modalMain.classList.add('modal_active');
const modalClose = document.getElementsByClassName('modal__close');

for (const element of modalClose){
  element.onclick = function(){
    this.parentElement.parentElement.classList.remove('modal_active');
  }
}

const showSuccess = document.getElementsByClassName('show-success');

for (const element of showSuccess){
  element.onclick = function(){
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
  }
}