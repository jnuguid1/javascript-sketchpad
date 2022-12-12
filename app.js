const grid = document.querySelector('.grid');
const GRID_WIDTH = 16;

for (let i = 0; i < GRID_WIDTH ** 2; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    gridSquare.addEventListener("mouseover", colorSquare)
    grid.appendChild(gridSquare);
}

function colorSquare(e) {
    e.target.style.backgroundColor = 'black';
}
