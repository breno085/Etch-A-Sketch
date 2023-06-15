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


  

