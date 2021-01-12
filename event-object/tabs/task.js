const  tabs = Array.from(document.getElementsByClassName('tab'));
const tabContents = Array.from(document.getElementsByClassName('tab__content'));

tabs.forEach(tab => {
  tab.onclick = function(){
    const id = tabs.indexOf(this);
    tabs.map(item => item.classList.remove('tab_active'));
    tabContents.map(item => item.classList.remove('tab__content_active'));

    tabs[id].classList.add('tab_active');
    tabContents[id].classList.add('tab__content_active');
  }
})