const isInViewport = function(element){
    const viewportHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    return elementTop < viewportHeight ? true : false;
  };
  
  window.addEventListener('scroll', function(event){
    let reveal = Array.from(document.getElementsByClassName('reveal'));
    reveal.forEach(element => {
      if (isInViewport(element)){
        element.classList.add('reveal_active');
      } else {
        element.classList.remove('reveal_active');
      }
    });
  })