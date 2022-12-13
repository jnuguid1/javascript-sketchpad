const grid = document.querySelector('.grid');
const newGridButton = document.querySelector('.new-grid-button');
const DEFAULT_GRID_WIDTH = 500;
const DEFAULT_GRID_DIMENSION = 16;
const MAX_GRID_DIMENSION = 64;

generateGrid(DEFAULT_GRID_DIMENSION)

newGridButton.addEventListener('click', generateNewGrid);

function colorSquare(e) {
    e.target.style.backgroundColor = 'black';
}

function generateNewGrid() {
    const newGridWidth = prompt('Enter the number of squares per side', 16);
    if (newGridWidth <= 0) {
        alert('Enter a number greater than 0');
    } else if (newGridWidth > MAX_GRID_DIMENSION) {
        alert('The maximum square per side is 64');
    } else {
        while (grid.hasChildNodes()) {
            grid.removeChild(grid.firstChild);
        }
        generateGrid(newGridWidth);
    }   
}

function generateGrid(width) {
    const gridSquareWidth = DEFAULT_GRID_WIDTH/width+"px";
    for (let i = 0; i < width ** 2; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.style.width = gridSquareWidth;
        gridSquare.style.height = gridSquareWidth;
        gridSquare.addEventListener('mouseover', colorSquare);
        grid.appendChild(gridSquare);
    }
}
