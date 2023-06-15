const container = document.querySelector('#container');
let isMouseDown = false;

    for (let j = 0; j < 16; j++){
        const row = document.createElement('div');
        row.classList.add('row');

        for (let i = 0; i < 16; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
        
        backcolorChange(square);
        }
        
        container.appendChild(row);
    }

    function backcolorChange(square){
        square.addEventListener('mousedown', () => {
            isMouseDown = true;
        });
        square.addEventListener('mouseup', () => {
            isMouseDown = false;
        });
        square.addEventListener('mousemove', () => {
            if (isMouseDown) {
                square.style.backgroundColor = 'black';
            }
        });
    }
    

  

