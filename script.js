const board = document.querySelector('#board');
const colors = ['#ff0000', '#ff9100', '#f6ff00', '#40ff00', '#00ff80', '#00ffff', '#006aff', '#0400ff', '#9000ff', '#f200ff', '#ff009d'];
const SQUARES_NUMBER = 400;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));

    square.addEventListener('mouseleave', () => removeColor(square));

    board.append(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';

}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}