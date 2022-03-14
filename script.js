
let currentColor = "#000";
let currentMode = 'oneColor';
let currentSize = 16;


const grid=getGridNum();
const color=document.querySelector('.color');
const eraser=document.querySelector('.eraser');
const gridLines=document.querySelector('.gridLines');
const rainbow=document.querySelector('.rainbow');
const clearing=document.querySelector('.clearing');
const gridNums=document.querySelector('.gridNum');


function getGridNum(newSize){
//    currentSize=newSize;
    return 16;
}

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
   
});
rainbow.addEventListener('click',()=>{
    setMode('rainbow');
   
});

eraser.addEventListener('click',()=>{
    setMode('eraser');
   
});

gridLines.addEventListener('click',()=>{
    for(let i=0;i<pixels.length;i++){
        pixels[i].style.border="None";
    } 
   
});

const container=document.querySelector('.container');
const board=document.createElement('div');
container.appendChild(board);
board.classList.add("board");
board.style.cssText=`grid-template-columns:repeat(${grid},1fr);grid-template-rows: repeat(${grid},1fr);`;

for(let i=0;i<grid;i++){
    for(let j=0;j<grid;j++){
        const div=document.createElement('div');
        div.style.cssText="border:1px solid gray;box-sizing:border-box;";
        div.classList.add('pixel');
        board.appendChild(div); 
        }
}  

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
 clear();
});

function clear(){
    window.location.reload();
    console.log ("clear");
}


