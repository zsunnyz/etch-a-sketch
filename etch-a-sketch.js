let currColor ="#000000"; 
let isRainbow = false;

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
            newDiv.style.backgroundColor = "white";
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

function onRainbow(){
    isRainbow = !isRainbow;

    rainbowButton = document.querySelector("#rainbow");
    if (isRainbow){
        rainbowButton.style.backgroundColor = "#e08169";
        rainbowButton.style.color = "white";
    } 
    else {
        rainbowButton.style.backgroundColor = "#f2aca0";
        rainbowButton.style.color = "black";
        let prevColor = document.getElementById("color-picker").value;
        currColor = prevColor; 
    }
}

function onHover(event){
    event.srcElement.style.backgroundColor = currColor;
    if (isRainbow) {
        currColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    }
}

initSquareGrid(16);