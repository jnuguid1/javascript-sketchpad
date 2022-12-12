const grid = document.querySelector('.grid');
const SQUARES_MAX = 16;

for (let i = 0; i < SQUARES_MAX; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    gridSquare.addEventListener("mouseover", colorSquare)
    grid.appendChild(gridSquare);
}

function colorSquare(e) {
    e.target.style.backgroundColor = 'black';
}
