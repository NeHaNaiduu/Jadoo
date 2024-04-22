const bar=document.getElementById('bar');
const nav= document.getElementById('navlist');
const close= document.getElementById('close');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

let currentIndex=0;
let comments=document.querySelectorAll('.comment');

let scrollComments=(direction)=>{
    comments[currentIndex].classList.remove('active');
    if(direction === 'up'){
        currentIndex=(currentIndex-1+comments.length)%comments.length;
    }else{
        currentIndex=(currentIndex+1)%comments.length;
    }
    comments[currentIndex].classList.add('active');
}