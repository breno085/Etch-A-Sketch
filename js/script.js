const container = document.querySelector('#container');
const button = document.querySelector('#gridsize');

let isMouseDown = false;
let size = 16;

const square = document.querySelector('.square');
squareNumber(size);
squareSize(size);

button.addEventListener('click', () => {
    gridSize();
});

function gridSize(){
    let sizeNum = prompt('Choose the number of squares', '');
    if (sizeNum !== null && sizeNum > 0 && sizeNum < 101) {
    container.innerHTML = '';
    size = sizeNum;
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
        
        backcolorChange(square);
        }
        
        container.appendChild(row);
    }
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
    
function squareSize(size){
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.width = `${560 / size}px`;
        square.style.height = `${560 / size}px`;
    });
}

//16 quadrados de altura/largura de 35/35 -> largura total 16*35 = 560
//quadrados*largura(ou altura) = 560
//largura(ou altura) = 560/quadrados
//560 será um valor fixo de largura e altura total do grid
//quero modificar o número de quadrados, porém mantendo a mesma altura e largura total do grid
//posso então criar uma função que ver quando quadrados XxX o usuário selecionou
//para colocar no grid e com isso eu modifico a largura e altura dos quadrados

//function gridSize(size){
	//modificar style square height para 560/size
	//modificar style square width para 560/size
//}

//quando eu clicar no botão e selecionar o tamanho da grid "SizexSize", 
//a função gridSize(size) vai ser chamada e o css .square será modificado

//fazer esse problema primeiro com o prompt pedindo o número de quadrados (com limite de 100)
//depois removo e adiciono aquele botão que move na lateral 

//Algoritmo
//1- Adicionar um prompt que executa quando eu aperto o botão
//2- Fazer uma função rodar ao clicar o botão
//3- A Função receber o valor digitado no prompt
//4- A função modifica o número de quadrados da grid
//5- A função é executada (para valores de 1 a 64 (ou 100))



