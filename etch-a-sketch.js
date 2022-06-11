let currColor ="#000000"; 
let isRainbow = false;
let isClickRequired = false;

let mouseDown = false
document.body.onmousedown = () => {mouseDown = true}
document.body.onmouseup = () => (mouseDown = false)

function initSquareGrid(gridSize){
    let gridContainer = document.getElementById('grid');     
    gridContainer.style.gridTemplateColumns= `repeat(${gridSize}, 1fr)`; 
    gridContainer.style.gridTemplateRows= `repeat(${gridSize}, 1fr)`; 
    let newDiv;

    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }

    for(let row = 0; row < gridSize; row++){
        for(let col = 0; col < gridSize; col++){
            newDiv = document.createElement("div");
            newDiv.classList.add(`C${col}`, `R${row}`);
            newDiv.addEventListener("mouseover", onHover);
            newDiv.addEventListener("mousedown", onHover);
            newDiv.style.backgroundColor = "white";
            newDiv.style.userSelect = "none";
            gridContainer.appendChild(newDiv);
        }
    }
}

function onSizeInput(size){
    document.getElementById('size-label').innerHTML= `${size}X${size}`;
}

function onColorChange(value){
    currColor = value;
    document.getElementById('color-container').style.backgroundColor = currColor;
}

function onColorReset(){
    let divs = document.querySelectorAll("#grid > div");
    divs.forEach(div => {
        div.style.backgroundColor = "white";
    });
}

function changeButtonState(element, state){
    if (state){
        element.style.backgroundColor = "#e08169";
        element.style.color = "white";
    } 
    else {
        element.style.backgroundColor = "#f2aca0";
        element.style.color = "black";
    }
}

function onRainbow(){
    isRainbow = !isRainbow;
    changeButtonState(document.querySelector("#rainbow"), isRainbow);
    
    let prevColor = document.getElementById("color-picker").value;
    currColor = prevColor; 
}

function onChangeClick(){
    isClickRequired = !isClickRequired;
    buttonContainer = document.getElementById("click-or-hover");
    changeButtonState(buttonContainer, isClickRequired);
    
    if (isClickRequired){
        buttonContainer.innerHTML = "CLICK";
    }
    else {
        buttonContainer.innerHTML = "HOVER";
    }
}

function onHover(event){
    if (!isClickRequired){
        event.srcElement.style.backgroundColor = currColor;
    }
    else if (!(event.type == "mouseover" && !mouseDown)){
        event.srcElement.style.backgroundColor = currColor;
    }

    if (isRainbow) {
        currColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    }
}

initSquareGrid(16);