function createGrid(gridNum){
    const canvas = document.querySelector(".canvas-section");
    canvas.replaceChildren();
    for(i = 0; i < gridNum; i++){
        console.log(gridNum);
        const canvasRow = document.createElement("div");
        canvasRow.classList.add("canvas-row");
        canvas.appendChild(canvasRow);
        for(j=0;j<gridNum;j++){
            const canvasCell = document.createElement("div");
            canvasCell.style.border = "1px solid red";
            canvasRow.appendChild(canvasCell);
            canvasCell.classList.add("canvas-cell");
            canvasCell.addEventListener('mouseenter',()=>{
                canvasCell.style.backgroundColor = getRandomColor();
            });
        }
    }
}

function getRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}


createGrid(16);
const gridButton = document.querySelector('#change-size');
gridButton.addEventListener('click',() =>{
    let gridNum = prompt('Enter the dimensions of the grid.(1~100)');
    while (gridNum < 1 || gridNum >100){
        gridNum = prompt("Out of range! Enter the dimensions of the grid.(1~100)");
    }
    createGrid(gridNum);
});