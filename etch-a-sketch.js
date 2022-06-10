let currColor ="#000000"; 

function initSquareGrid(gridSize){
    gridContainer = document.getElementById('grid');     
    gridContainer.style.gridTemplateColumns= `repeat(${gridSize}, 1fr)`; 
    gridContainer.style.gridTemplateRows= `repeat(${gridSize}, 1fr)`; 
    let newDiv;
    for(let row = 0; row < gridSize; row++){
        for(let col = 0; col < gridSize; col++){
            newDiv = document.createElement("div");
            newDiv.classList.add(`C${col}`, `R${row}`);
            newDiv.addEventListener("mouseover", onHover);
            gridContainer.appendChild(newDiv);
        }
    }
}

function onColorChange(value){
    currColor = value;
    console.log(currColor);
}

function onHover(event){
    event.srcElement.style.backgroundColor = currColor;
}

initSquareGrid(16);