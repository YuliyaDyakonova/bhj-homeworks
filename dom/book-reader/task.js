let fontSize = Array.from(document.getElementsByClassName('font-size'));
let colorText = Array.from(document.querySelector('.book__control_color').getElementsByClassName('color'));
let colorBg = Array.from(document.querySelector('.book__control_background').getElementsByClassName('color'));
let book = document.querySelector('.book');
fontSize.forEach(element => {
  element.onclick = function(event){
    event.preventDefault();
    changeStyle(this, fontSize, 'size', 'font-size_active');
});

colorText.forEach(element => {
  element.onclick = function(event){
    event.preventDefault();
    changeStyle(this, colorText, 'text-color', 'color_active');
  }
});
colorBg.forEach(element => {
  element.onclick = function(event){
    event.preventDefault();
    changeStyle(this, colorBg, 'bg-color', 'color_active');
  }
});

const changeStyle = function(_this, array, dataAttr, classActive){
  
    let attr = _this.getAttribute(`data-${dataAttr}`);
    array.map(item => { item.classList.remove(classActive)});
    _this.classList.add(classActive);
    switch(dataAttr){
      case 'size':
        book.classList.remove('book_fs-big' , 'book_fs-small');
        if (attr){
          book.classList.add(`book_fs-${attr}`);
        } 
        break;
      case 'text-color':
        book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');
        if (attr){
          book.classList.add(`book_color-${attr}`);
        } 
        break;
      case 'bg-color':
        book.classList.remove('book_bg-gray', 'book_bg-white', 'book_bg-black');
        if (attr){
          book.classList.add(`book_bg-${attr}`);
        } 
        break;
    }
}