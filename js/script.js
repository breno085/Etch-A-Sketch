const container = document.querySelector('#container');
const gridButton = document.querySelector('#gridsize');
const clearButton = document.querySelector('#clear');
const rainbow = document.querySelector('#rainbow');
const black = document.querySelector('#black');
const eraser = document.querySelector('#eraser');

let size = 16;
let color;

//using a boolean flag to control the behavior of event listeners based on certain conditions or actions,
//in this case, 3 events when the user uses the mouse: mousedown, mouseup and mousemove, 
//altering the squares colors based on this 3 conditions
let isMouseDown = false;

//using a boolean flag again to control the behavior of the default event (black pen) overwriting the rainbow event (rainbow pen),
//meaning that the squares was still staying black even when the rainbow button was clicked
let isRainbowEnabled = false;

gridButton.addEventListener('click', () => {
    gridSize();   
});

black.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        backcolorChange(square, 'black')
    });
})

rainbow.addEventListener('click', () => {
    isRainbowEnabled = true;
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        let colorNew = rainBow();
        backcolorChange(square, colorNew);
    });
    
});

eraser.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        backcolorChange(square, 'whitesmoke');
    });
});

clearButton.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = 'whitesmoke';
    });
});

squareNumber(size);
squareSize(size);

function rainBow(){
    let r = Math.floor((Math.random() * 255));
    let g = Math.floor((Math.random() * 255));
    let b = Math.floor((Math.random() * 255));

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function squareSize(size){
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.width = `${560 / size}px`;
        square.style.height = `${560 / size}px`;
    });
}

function gridSize(){
    let sizeNum = prompt('Choose the number of squares', '');
    if (sizeNum !== null && sizeNum > 0 && sizeNum < 101) {
    container.innerHTML = '';
    size = sizeNum;
    isRainbowEnabled = false;
    squareNumber(size);
    squareSize(size);
    } else {
        alert('Choose a valid size between 1 and 100');
    }
}

function squareNumber(size){
    for (let j = 0; j < size; j++){
        const row = document.createElement('div');
        row.classList.add('row');

        for (let i = 0; i < size; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
        if (!isRainbowEnabled){
        backcolorChange(square, 'black');
        }
        }
        container.appendChild(row);
    }
}

function backcolorChange(square, color){
    square.addEventListener('mousedown', () => {
        isMouseDown = true;
    });
    square.addEventListener('mouseup', () => {
        isMouseDown = false;
    });
    square.addEventListener('mousemove', () => {
        if (isMouseDown) {
            square.style.backgroundColor = `${color}`;
            }
        });
    }
