const grid = document.querySelector('.grid');
const newGridButton = document.querySelector('.new-grid-button');
const DEFAULT_GRID_WIDTH = 16;
const GRID_SQUARE_WIDTH = 7;

generateGrid(DEFAULT_GRID_WIDTH)

newGridButton.addEventListener('click', generateNewGrid);

function colorSquare(e) {
    e.target.style.backgroundColor = 'black';
}

function generateNewGrid() {
    const newGridWidth = prompt('Enter the number of squares per side', 16);
    if (newGridWidth <= 0) {
        alert('Enter a number greater than 0');
    } else {
        while (grid.hasChildNodes()) {
            grid.removeChild(grid.firstChild);
        }
        generateGrid(newGridWidth);
    }   
}

function generateGrid(width) {
    grid.style.width = width*GRID_SQUARE_WIDTH+'px';
    for (let i = 0; i < width ** 2; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.addEventListener('mouseover', colorSquare);
        grid.appendChild(gridSquare);
    }
}
