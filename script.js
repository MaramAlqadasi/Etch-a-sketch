
const grid=getGridNum();
const penColor=document.querySelector('.color');
const eraser=document.querySelector('.eraser');
const gridLines=document.querySelector('.gridLines');
const rainbow=document.querySelector('.rainbow');
const clearing=document.querySelector('.clearing');
const gridNums=document.querySelector('.gridNum');
const check=[penColor,eraser,gridLines,rainbow,clearing,gridNums];



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
        pixels[i].style.backgroundColor="black";
    });
}

// eraser.addEventListener('click',()=>{
//     eraser.style.cssText="background-color:rgb(42, 97, 104)"
//     for(let i=0;i<pixels.length;i++){
//         pixels[i].addEventListener('mouseover',()=>{
//             pixels[i].style.backgroundColor="white";
//         })
//     }
// } );

// gridLines.addEventListener('click',()=>{
//     gridLines.style.cssText="background-color:rgb(42, 97, 104)"
//     for(let i=0;i<pixels.length;i++){
//         pixels[i].style.border="None";
//     }
// } );

// clearing.addEventListener('click',()=>{
//     window.location.reload();
// });




// for(let i=0;i<check.length;i++){
//     check[i].addEventListener('click',() => {
//         if (check[i]===penColor){
//             penColor.addEventListener('click',()=>console.log("me"));
//             const pixels=document.querySelectorAll(".pixel");
//             for(let i=0;i<pixels.length;i++){
//                 pixels[i].addEventListener('mouseover',()=>{
//                     pixels[i].style.backgroundColor=getColor();
//                 })
//             }

//         }
//         else if (check[i]===eraser){
//             penColor.removeEventListener('click');
//             eraser.addEventListener('click',()=>{
//                     eraser.style.cssText="background-color:rgb(42, 97, 104)"
//                     for(let i=0;i<pixels.length;i++){
//                         pixels[i].addEventListener('mouseover',()=>{
//                             pixels[i].style.backgroundColor="white";
//                         })
//                     }
//                 } );
//         }

//     });
// }




function getGridNum(){
    const defult=16;
    return defult;
}
function getColor(){
    const color=document.querySelector('.color').value;
    return color;
}
function erase(){
    console.log ("erase");
}
function getRainbowColors(){
    console.log ("Rainbow");
}
function clear(){
    window.location.reload();
    console.log ("clear");
}

// function gradingStudents(grades) {
//     // Write your code here
//     for(let i=0;i<grades.length;i++){
//         if(grades[i]>=38){
//             let temp=grades[i];
//             let difference;
//             temp=(Math.ceil(temp/5)*5);
//             console.log(`temp= ${temp}`);
//             difference=temp-grades[i];
//             if(difference<3){
//                 grades[i]=temp;
//             }
          
//         }
//     }
//     return grades;

// }
// let grades=[4,73,62,80,38];
// console.log(gradingStudents(grades));

// function sockMerchant(n, ar) {

//     // Write your code here
//     let countPairs=0;
//     for(let i=0;i<n;i++){
//         let j=i+1;
//         while(j<ar.length){
//             if(ar[i]== ar[j]){
//                 let remove=[i,j];
//                 console.log("remove-array = "+ remove);
//                 for(let r=1;r>=0;r--){
//                     console.log( ar.splice(remove[r],1));

//                 }
//                 countPairs+=1;
//                 i--;
//             }
//             j++;
//         }
//     }
  
//     return countPairs;
    
  
// }



// function sockMerchant(n, ar) {
//     // Write your code here
// let countPairs=0;
//     for(let i=0;i<ar.length;i++){
//         for(let j=i+1;j<ar.length;j++){
//             if(ar[i]===ar[j]){
//                 ar.splice(i,1);
//                 ar.splice(j,1);
//                 countPairs+=1;
//                 i=0;
//                 j=i+1;
                
//                 break;
               
//             }
            

//         }

//     }
  
//     return countPairs;}

// let grades=[1,1,3,1,2,1,3,3,3,3];
// console.log(grades);
// let n=grades.length;
// console.log(sockMerchant(n,grades));


// function countingValleys(steps, path) {
//     // Write your code here
//     let valleys=0;
//     let steplevel=0;
//     let underSea=false;
//     for(let i=0;i<steps;i++){
//         if(path.charAt(i)==="D"){
//             steplevel-=1;
            
//         }
//         else {
//             steplevel+=1;
//         }
//         if(steplevel<0){
//             underSea=true;
//         }
//         if(underSea&&steplevel===0){
//             valleys+=1;
//             underSea=false;
//         }


//     }
//  console.log(valleys);
//    return valleys

// }


// let path="DDUUDDUDUUUD";
// let steps=path.length;
// countingValleys(steps, path);