const burger=document.querySelector('.burger');
const nav=document.querySelector('.nav-links');
const navlinks=document.querySelectorAll('.nav-links li');

burger.addEventListener('click',()=>{
    burger.classList.toggle('toggle');
    navlinks.forEach((link,index)=>{
        if(link.style.animation){
            link.style.animation='';
        }else{
            link.style.animation=`navlinksfade 0.5s ease forwards ${index/7+0.4}s`;
        }
    });
    nav.classList.toggle('nav-active');
});

