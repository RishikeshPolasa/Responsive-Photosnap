
// burger.addEventListener('click',()=>{
//   // toggle nav
//   nav.classList.toggle('nav-active');
//   //animation
//   navlinks.forEach((link,index)=>{
//     if(link.style.animation){
//       link.style.animation='';
//     }else{
//       link.style.animation=`navlinkfade 0.5s ease forwards ${index / 7 +0.5}s`;
//     }
//   });
//   burger.classList.toggle('toggle');
  
// });

const togglebutton=document.querySelector('.toggle-button');
const navlinks=document.querySelector('.nav-links');

togglebutton.addEventListener('click',()=>{
  navlinks.classList.toggle('nav-active');
  togglebutton.classList.toggle('toggle');
});