const menuLink = Array.from(document.querySelectorAll('.menu__link'));
menuLink.forEach(element => {
  element.onclick = function(){
    const menuSub = Array.from(this.closest('.menu__item').querySelectorAll('.menu_sub'));
    if (menuSub.length > 0){
      menuSub.forEach(item =>{
        if (item.classList.contains('menu_active')){
          Array.from(document.querySelectorAll('.menu_sub')).forEach(item =>{
            item.classList.remove('menu_active');
          });
        } else{
          Array.from(document.querySelectorAll('.menu_sub')).forEach(item =>{
            item.classList.remove('menu_active');
          });
          item.classList.add('menu_active');
        }
        // item.classList.toggle('menu_active');
      });
      return false;
    }
  }
})

