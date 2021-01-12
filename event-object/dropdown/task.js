const dropdown = document.querySelector('.dropdown');
const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItems = Array.from(document.getElementsByClassName('dropdown__item'));

dropdown.onclick = function(){
  dropdownList.classList.toggle('dropdown__list_active');
}

dropdownItems.forEach(item => {
  item.onclick = function(){
    //dropdownList.classList.remove('dropdown__list_active');
    const text = this.querySelector('.dropdown__link').textContent;
    dropdownValue.textContent = text;
    return false;
  }
})
