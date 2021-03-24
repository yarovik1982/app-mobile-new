const menuLinks = document.querySelectorAll('.menu-link[data-goto]'); 
if(menuLinks.length > 0){
   menuLinks.forEach(menuLink =>{
      menuLink.addEventListener('click',onMenuLinkClick);
   });
   function onMenuLinkClick(event){
      const menuLink = event.target;
      if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;

         window.scrollTo({
            top : gotoBlockValue,
            behavior : 'smooth'
         });
      }
   }
}