import { startAudio } from "./index.js";
export function addCapturedPiece(piece, isPlayerTurn){
    const playerContainer = document.querySelector('.player-capture');
    const enemyContainer = document.querySelector('.enemy-capture');
    const image = document.createElement('img');

    image.classList.add('current-captured');



    if(piece === piece.toLowerCase() && isPlayerTurn){
        image.src = pieces.find(x => x.type === piece).img;
        image.dataset.type = piece;
        image.style.filter = 'drop-shadow(0px 0px 1px rgba(255, 255, 255, 0.8))';
        playerContainer.append(image);
    }
    else if(piece === piece.toUpperCase() && !isPlayerTurn){
        image.src = pieces.find(x => x.type === piece).img;
        image.dataset.type = piece;
        enemyContainer.append(image);
    }
    else if(piece === piece.toLowerCase() && !isPlayerTurn){
        image.src = pieces.find(x => x.type === piece).img;
        image.style.filter = 'drop-shadow(0px 0px 1px rgba(255, 255, 255, 0.8))';
        image.dataset.type = piece;
        enemyContainer.append(image);
    }
    else{
        image.src = pieces.find(x => x.type === piece).img;
        image.dataset.type = piece;
        playerContainer.append(image);
    }
}

const pieces = [
    {
        type: 'P', img: './resources/capturedPieces/pawn-svgrepo-com.svg'
    },
    {
        type: 'R', img: './resources/capturedPieces/rook-svgrepo-com.svg'
    },
    {
        type: 'N', img: './resources/capturedPieces/knight-svgrepo-com.svg'
    },
    {
        type: 'B', img: './resources/capturedPieces/bishop-svgrepo-com.svg'
    },
    {
        type: 'Q', img: './resources/capturedPieces/pawn-svgrepo-com.svg'
    },
    {
        type: 'K', img: './resources/capturedPieces/king-svgrepo-com.svg'
    },
    {
        type: 'p', img: './resources/capturedPieces/pawn-svgrepo-com-b.svg'
    },
    {
        type: 'r', img: './resources/capturedPieces/rook-svgrepo-com-b.svg'
    },
    {
        type: 'n', img: './resources/capturedPieces/knight-svgrepo-com-b.svg'
    },
    {
        type: 'b', img: './resources/capturedPieces/bishop-svgrepo-com-b.svg'
    },
    {
        type: 'q', img: './resources/capturedPieces/queen-svgrepo-com-b.svg'
    },
    {
        type: 'k', img: './resources/capturedPieces/king-svgrepo-com-b.svg'
    }
];




function testCaptureContainer(number){
    let testPiece = 'p';
    const playerContainer = document.querySelector('.player-capture');
    const enemyContainer = document.querySelector('.enemy-capture');
    const image = document.createElement('img');

    image.classList.add('current-captured');
    for(let i = 0; i < number; i++){
        const image = document.createElement('img');
        image.src = pieces.find(x => x.type === testPiece).img;
        image.dataset.type = testPiece;
        image.style.filter = 'drop-shadow(0px 0px 1px rgba(255, 255, 255, 0.8))';
        enemyContainer.append(image);
        playerContainer.append(image);
    }
}


export function fillCircle(percentage) {
    // Ограничиваем значение от 0 до 300
    if (percentage < 0) percentage = 0;
    if (percentage > 300) percentage = 300;

    // Вычисляем процент заполнения
    const waterLevel = (percentage / 300) * 100;

    // Обновляем высоту элемента воды
    const waterElement = document.querySelector('.wave');
    waterElement.style.width = waterLevel + '%';

    const textElement = document.querySelector('.energy-number');
    textElement.textContent = percentage
}




export function changeEnergy(energy, value){
    energy += value;
}

export function changeCurrentTurn(isPlayerTurn, isFirst){
    const sword = document.querySelector('.sword');
    const shield = document.querySelector('.shield');

    
    if(isPlayerTurn){
        if(!isFirst){
            // startAudio(false, false, false, true);
        }
      
        shield.style.display = 'none';
        sword.style.display = 'flex';
    }
    else{
        sword.style.display = 'none';
        shield.style.display = 'flex';
    }
}
