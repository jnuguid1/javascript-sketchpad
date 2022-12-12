const grid = document.querySelector('.grid');
const SQUARES_MAX = 16;

for (let i = 0; i < SQUARES_MAX; i++) {
    const newGridSquare = document.createElement('div');
    newGridSquare.classList.add('grid-square');
    grid.appendChild(newGridSquare);
}