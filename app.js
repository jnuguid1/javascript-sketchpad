const grid = document.querySelector('.grid');
const newGridButton = document.querySelector('.new-grid-button');
const defaultColorButton = document.querySelector('.default-color-button');
const randomColorButton = document.querySelector('.random-color-button');

const DEFAULT_GRID_WIDTH = 500;
const DEFAULT_GRID_DIMENSION = 16;
const MAX_GRID_DIMENSION = 64;

generateGrid(DEFAULT_GRID_DIMENSION);

newGridButton.addEventListener('click', generateNewGrid);
randomColorButton.addEventListener('click', setRandomMode);
defaultColorButton.addEventListener('click', setDefaultMode);

function colorSquareBlack(e) {
    e.target.style.backgroundColor = 'black';
}

function colorSquareRandom(e) {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
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
        gridSquare.addEventListener('mouseover', colorSquareBlack);
        grid.appendChild(gridSquare);
    }
}

function setRandomMode() {
    const children = grid.children;
    for (let i = 0; i < children.length; i++) {
        const gridSquare = children[i];
        gridSquare.removeEventListener('mouseover', colorSquareBlack);
        gridSquare.addEventListener('mouseover', colorSquareRandom);
    }
}

function setDefaultMode() {
    const children = grid.children;
    for (let i = 0; i < children.length; i++) {
        const gridSquare = children[i];
        gridSquare.removeEventListener('mouseover', colorSquareRandom);
        gridSquare.addEventListener('mouseover', colorSquareBlack);
    }
}
