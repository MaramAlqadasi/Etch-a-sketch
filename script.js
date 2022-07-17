
let currentColor = "#000";
let currentMode = 'oneColor';
let currentSize = 16;
let gridLine=1;



const color=document.querySelector('.color');
const eraser=document.querySelector('.eraser');
const gridLines=document.querySelector('.gridLines');
const rainbow=document.querySelector('.rainbow');
const clearing=document.querySelector('.clearing');
const gridNums=document.querySelector('#gridNum');
const size=document.querySelector("#size");






function getColor(){
    const color=document.querySelector('.color').value;
    return color;
}
function getRainbowColor(){
   const randomR= Math.floor(Math.random() * 256);
   const randomG= Math.floor(Math.random() * 256);
   const randomB= Math.floor(Math.random() * 256);
  return `${randomR},${randomG},${randomB}`;

}
function setMode(newMode){
     currentMode=newMode;
    
}
color.addEventListener('click',()=>{
    setMode('oneColor');
    color.classList.add("active");
    rainbow.classList.remove("active");
    eraser.classList.remove("active");
   
});
rainbow.addEventListener('click',()=>{
    setMode('rainbow');
    rainbow.classList.add("active");
    color.classList.remove("active");
    eraser.classList.remove("active");
   
});

eraser.addEventListener('click',()=>{
    setMode('eraser');
    eraser.classList.add("active");
    color.classList.remove("active");
    rainbow.classList.remove("active");
   
});
// function changeSize(newSize){
//     grid=newSize;
// }
// let gridLine=1;
// gridNums.addEventListener('change',changeSize(`${gridNums.value}`);
    
// let grid=changeSize(16);

const container=document.querySelector('.container');
const board=document.createElement('div');
container.appendChild(board);
board.classList.add("board");
board.style.cssText=`grid-template-columns:repeat(${currentSize},1fr);grid-template-rows: repeat(${currentSize},1fr);`;

for(let i=0;i<currentSize;i++){
    for(let j=0;j<currentSize;j++){
        const div=document.createElement('div');
        div.classList.add('pixel');
        board.appendChild(div); 
        
        }
}  
gridLines.addEventListener('click',()=>{
    if(gridLine==1){
       gridLines.classList.add("active");
     for(let i=0;i<pixels.length;i++){
         pixels[i].style.cssText="border:1px solid gray";
     } 
     gridLine=0;
    }
    else if(gridLine==0){
        gridLines.classList.remove("active");
     for(let i=0;i<pixels.length;i++){
         pixels[i].style.cssText="border:None";
     } 
     gridLine=1;
    }
    
 });


const pixels=document.querySelectorAll(".pixel");
for(let i=0;i<pixels.length;i++){
    pixels[i].addEventListener('mouseover',()=>{
        if(currentMode==='oneColor'){
            pixels[i].style.backgroundColor=getColor();
            
        }
        else if(currentMode==='rainbow'){
            pixels[i].style.backgroundColor=`rgb(${getRainbowColor()})`;
        }
        else if(currentMode==='eraser'){
            pixels[i].style.backgroundColor='white';
        }
        
    });
    
}


    

clearing.addEventListener('click',()=>{
    console.log("m");
    clearing.classList.add("active");
 clear();
});

function clear(){
    window.location.reload();
}
// const gridP=document.createElement('p');
// gridP.style.color="red";
// const gridValue=document.querySelector('#gridNum');
// gridNums.addEventListener('change',(k)=>{
//     k=gridNums.value;
//     grid=gridNums.value;
//     console.log (gridNums.value);
   
// gridP.innerText=`${k}`;
// container.appendChild(gridP);
// })


