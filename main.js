    // const show = document.querySelector("div__show");

// press.addEventListener("keydown",(event)=>{
//        console.log(23)
//     if(event.isComposing||keydown ===229 ){
//       press.style.display="none";  
//       key.innerHTML =  `${event.code}`; 
//       boxShow.style.display ="block";
//     }});




// document.addEventListener('DOMContentLoaded', () => {
// //   const divNameKey = document.querySelector('.div__name__key');
// //   console.log(divNameKey); 
// // });
// const divNameKey = document.querySelector('.div__name__key');
// console.log(divNameKey)
const keyCode = document.querySelector('.div__detect__key');
const locateCode = document.querySelector('.div__detect__location');
const whichCode  = document.querySelector('.div__detect__which');
const codeCode = document.querySelector('.div__detect__code');
const press = document.querySelector(".div__press");
const box = document.querySelector(".box");
const show =document.querySelector(".content")
document.addEventListener("keydown",(e)=>{
    
    keyCode.innerText=e.key;
    locateCode.innerText=e.location;
    whichCode.innerText=e.which;
    codeCode.innerText=e.code;
    show.innerText= e.which
    press.style.display ="none"
    box.style.display="block"
})





