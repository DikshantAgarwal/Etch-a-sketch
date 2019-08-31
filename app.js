const randomColor = document.querySelector('#randomColor');
const newGrid =  document.getElementById('newGrid');
const gridBox = document.getElementsByClassName('gridBox');
const clear1= document.querySelector('#clear');
const choseColor = document.querySelector('#color')

let colorMode = 'custom'

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
 return color
}
function changeColor(e){
    let color;
    if(colorMode == 'custom'){
        color = choseColor.value;
    }else
        {
            color = getRandomColor();    
        }
        e.target.style.background = color;
    
       
}   
function makeGrid(){
    do{
    var noOfGrid = parseInt(window.prompt('Entgter number of Square'));
    }while(isNaN(noOfGrid));
        
    gridBox[0].style.display ='grid';
    gridBox[0].style.gridTemplateRows = `repeat(${noOfGrid},1fr)`
    gridBox[0].style.gridTemplateColumns = `repeat(${noOfGrid},1fr)`
    
    
    for(let i=0;i<noOfGrid*noOfGrid;i++){
        const div =document.createElement('div');
        div.setAttribute('style','border:thin solid white')
        gridBox[0].appendChild(div);
    }
     for(let i=0;i<gridBox[0].children.length;i++){
             gridBox[0].children[i].addEventListener("mouseover",changeColor)    
    }
  }
function clear(){
     while(gridBox[0].firstChild){
         gridBox[0].removeChild(gridBox[0].firstChild)
     }
    colorMode ='custom'
}
clear1.addEventListener('click',clear);
newGrid.addEventListener('click',makeGrid);
randomColor.addEventListener('click',()=>colorMode='Random');
choseColor.addEventListener('click',()=>colorMode='custom');