<template>
    <body>

        <div id="loading-screen" style="z-index: 900000"></div>
        <!-- <button id="checkFilter" >TAP</button> -->
        <div id="currentPlayer">
            <img class="shield" alt="enemy-turn" src="/src/assets/public/resources/Gui/shield-4-svgrepo-com.svg" style="display: none;">
            <img class="sword" alt="player-turn" src="/src/assets/public/resources/Gui/sword-svgrepo-com.svg">
        </div>

       

        

      
    
        <div id="end-screen">
            <div class="black-banner">
                <div id="end-images">
                    <img id="win-img" src="/src/assets/public/resources/backgrounds/endScreen/victory.svg" style="display: none;">
                    <img id="lose-img" src="/src/assets/public/resources/backgrounds/endScreen/defeat.svg" style="display: none;">
                    <img id="draw-img" src="/src/assets/public/resources/backgrounds/endScreen/draw.svg" style="display: none;">
                </div>
                <div id="end-button">
                    <button id="repeat-battle">
                        <span>Try again</span>
                        <img src="/src/assets/public/resources/backgrounds/endScreen/buttons/repeat-svgrepo-com.svg">
                    </button>
                    <button id="quit-battle">
                        <span>Continue</span>
                        <img src="/src/assets/public/resources/backgrounds/endScreen/buttons/arrow-sm-right-svgrepo-com.svg">
                    </button>
                </div>
            </div>
        </div>

        <!-- <div id="cards-btn" class="cards-button">
            <button class="cards-inner">

            </button>
        </div> -->


        <div id="crd-cont" class="cards-container">
        </div>

        <div id="desc-cont" class="desc-container">

        </div>

        <!-- <div class="skill-char-container">
            
        </div> -->



        <div class="player-container">
            <div class="player-capture">
            
            </div>
        </div>


        <div class="enemy-container">
            <div class="enemy-capture">
             
            </div>
        </div>
    <div class="container">

        <div class="ui-container">
            <div class="ui">
                
            </div>
            <div class="current-energy" style="display: none;">
                <div class="energy-circle">
                    <img src="/src/assets/public/resources/Skills/Energy/power-svgrepo-com.svg">
                  
                        <span class="energy-number"></span>
                    <div class="energy">
                        <div class="wave">
                              <div></div>
                        </div>
                    </div>
                   
                </div>
               
            </div>
            <div class="timer">
                
                <span class="timer-numbers">04:59</span>
            </div>
        </div>
        
        
        <div class="chessboard" id="chessboard">
           
        </div>

        <div id="settings" style="z-index: 5000000;">
            <a href="/home"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0001 3H3.00006V21H21.0001V3ZM8.13177 16.8033L16.1318 16.8033L16.1318 8.80331H14.1318V13.3891L7.88913 7.14645L6.47491 8.56067L12.7176 14.8033H8.13177V16.8033Z" fill="#ffffff"></path> </g>
            </svg></a>
            
        </div>

        

        <!-- <div class="background">               
        </div> -->

    </div>


    <!-- <div id="settings-menu">
        <h1>SETTINGS</h1>
    </div> -->

    <audio id="move-tile-sound" src="/src/assets/public/resources/Sounds/rocks-sliding-101019 (mp3cut.net).mp3"></audio>
    <audio id="battle-sound" src="/src/assets/public/resources/videos/effects/swords_battle.mp3"></audio>
    <audio id="click-sound" src="/src/assets/public/resources/Sounds/souds/Click_2.wav"></audio>
    <audio id="changeStatus" src="/src/assets/public/resources/Sounds/souds/Bleep_01.ogg"></audio>

    <audio id="background-music" src="/src/assets/public/resources/Sounds/Sci-Fi Music Pack Vol. 2/Loops/mp3/5 - Stellar Drift  (Loop).mp3" loop ></audio>
    <audio id="background-wind" src="/src/assets/public/resources/Sounds/Cold Wind Sound Effect No Copyright Free.mp3" loop ></audio>
    <audio id="skills-voices"></audio>
    <audio id="enemyAVB" src="/src/assets/public/resources/TutorialResources/isnotenought.mp3"></audio>
   

    <!-- <script type="module" src="./settings.js"></script> -->
    <!-- <script type="module" src="./index.js"></script> -->

    <!-- <script type="module" src="./timerAndCapture.js"></script>
    
    
    <script src="./engine/stockfish-16.1-single.js"></script>
    <script type="module" src="./tutorial.js"></script>
    <script type="module" src="./visual.js"></script>
    <script type="module" src="./ui.js"></script>

    <script src="./music.js"></script> -->



    
   <!-- <script> -->




   <!-- </script> -->
</body>
</template>

<script>
export default {
    mounted(){

    function createImageElement(src, location) {
    const imgElement = document.createElement('img');
    imgElement.src = src;
    imgElement.style.width = '110px';
    imgElement.style.height = '167px';
   
    const divElement = document.createElement('div');
    divElement.classList.add('canvas-gif')

    divElement.appendChild(imgElement)
  
    location.appendChild(divElement);

    setTimeout(() => {
        location.removeChild(divElement);
      }, 600);
  
}



// Функция для создания видео элемента
function createVideoElement(src, location, width, height) {
    const videoElement = document.createElement('video');
    videoElement.src = src;
    videoElement.autoplay = true;
    videoElement.loop = true;
    videoElement.muted = true;
    videoElement.playsInline = true;
    videoElement.style.width = width;
    videoElement.style.height = height;
    videoElement.classList.add('videoLayer');
    
    location.appendChild(videoElement);
  

    setTimeout(() => {
        location.removeChild(videoElement);
      }, 1500);

    return videoElement;
  }
  
  // Функция для применения хромакея и отображения на canvas
  function applyChromaKey(videoElement, location, width, height, top, left) {
    const canvas = document.createElement('canvas');
    canvas.classList.add('canvas')
    canvas.style.width = width;
    canvas.style.height = height;
    canvas.style.top = top;
    canvas.style.left = left;

    location.appendChild(canvas);

    setTimeout(() => {
        location.removeChild(canvas);
      }, 1500);
    const ctx = canvas.getContext('2d');
  
    videoElement.addEventListener('play', () => {
      canvas.width = videoElement.videoWidth;
      canvas.height = videoElement.videoHeight;
  
      function renderFrame() {
        if (!videoElement.paused && !videoElement.ended) {
          ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
          const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const data = frame.data;
  
          // Удаление зеленого фона
          for (let i = 0; i < data.length; i += 4) {
            const red = data[i];
            const green = data[i + 1];
            const blue = data[i + 2];
  
            // Проверка на зеленый цвет
            if (green > 100 && red < 100 && blue < 100) {
              data[i + 3] = 0; // Устанавливаем альфа-канал в 0 (прозрачный)
            }
          }
  
          ctx.putImageData(frame, 0, 0);
          requestAnimationFrame(renderFrame);
        }
      }
  
      renderFrame();
    });
  }
  

    

function addCapturedPiece(piece, isPlayerTurn){
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
        type: 'P', img: '/src/assets/public/resources/capturedPieces/pawn-svgrepo-com.svg'
    },
    {
        type: 'R', img: '/src/assets/public/resources/capturedPieces/rook-svgrepo-com.svg'
    },
    {
        type: 'N', img: '/src/assets/public/resources/capturedPieces/knight-svgrepo-com.svg'
    },
    {
        type: 'B', img: '/src/assets/public/resources/capturedPieces/bishop-svgrepo-com.svg'
    },
    {
        type: 'Q', img: '/src/assets/public/resources/capturedPieces/pawn-svgrepo-com.svg'
    },
    {
        type: 'K', img: '/src/assets/public/resources/capturedPieces/king-svgrepo-com.svg'
    },
    {
        type: 'p', img: '/src/assets/public/resources/capturedPieces/pawn-svgrepo-com-b.svg'
    },
    {
        type: 'r', img: '/src/assets/public/resources/capturedPieces/rook-svgrepo-com-b.svg'
    },
    {
        type: 'n', img: '/src/assets/public/resources/capturedPieces/knight-svgrepo-com-b.svg'
    },
    {
        type: 'b', img: '/src/assets/public/resources/capturedPieces/bishop-svgrepo-com-b.svg'
    },
    {
        type: 'q', img: '/src/assets/public/resources/capturedPieces/queen-svgrepo-com-b.svg'
    },
    {
        type: 'k', img: '/src/assets/public/resources/capturedPieces/king-svgrepo-com-b.svg'
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


function fillCircle(percentage) {
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




function changeEnergy(energy, value){
    energy += value;
}

function changeCurrentTurn(isPlayerTurn, isFirst){
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

// import { addCapturedPiece,  changeEnergy, fillCircle, changeCurrentTurn} from "./timerAndCapture.js";
// import { createVideoElement, applyChromaKey } from "./visual.js"
// import { startMoveTutorial, isLengthWatching, enemyArrival, isEnemyArrived } from "./tutorial.js";
// import {abilityFunctions} from './ui.js'
function saveBotSettings(botLevel, timerTimeMs) {
        localStorage.setItem('botLevel', botLevel.toString());
        localStorage.setItem('timerTime', timerTimeMs.toString());
      }

      // Получение данных из localStorage


      // Пример использования
      saveBotSettings(6, 5);
function getBotSettings() {
    const botLevel = parseInt(localStorage.getItem('botLevel'), 10);
    const timerTime = parseInt(localStorage.getItem('timerTime'), 10);

    return { botLevel, timerTime };
}

const settings = getBotSettings();


// Constants for the chessboard and pieces
const chessboard = document.getElementById('chessboard');
let selectedPiece = null;
let playerSide = 'white';
let currentPlayer = 'white'; 
let bot = currentPlayer === 'white' ? 'black' : 'white'
let hasKingMoved = { white: false, black: false };
let hasRookMoved = { whiteKingside: false, whiteQueenside: false, blackKingside: false, blackQueenside: false };
let lastPawnMove = null;

let isPlayerTurn = true; 
let isInputBlocked = false; 

let tileStates = {};
let isRestrictedPiece = null;
let energy = 100;
// fillCircle(energy);

let isTutorialMode = false;
let isSingleMoveAllowed = false;


function enableTutorialMode() {
    isTutorialMode = true;
}

function disableTutorialMode() {
    isTutorialMode = false;
}

function enableSingleMove() {
   
    const pieces = document.querySelectorAll('.piece');
    const tiles = document.querySelectorAll('.tile');
    const faces = document.querySelectorAll('.face')
    if(!isSingleMoveAllowed){

        tiles.forEach(tile => {
            const row = tile.dataset.row;
            const col = tile.dataset.col;
          
            // Проверяем, чтобы клетка не находилась на позициях (6, 3), (5, 3), и (4, 3)
            if (!((row === '6' && col === '3') || (row === '5' && col === '3') || (row === '4' && col === '3'))) {
                
                const faces = tile.querySelectorAll('.face');
                
                
                
                const piece = tile.querySelector('.piece');
                
                if (piece) piece.style.filter = 'brightness(0.5)';
                faces.forEach(face => face.style.filter = 'brightness(0.5)');
              
               
            }
        });
        
        // faces.forEach(tile => {
        //     tile.style.filter ='brightness(0.5)';
      
        // })  
        isSingleMoveAllowed = !isSingleMoveAllowed;
    }
    else{

        pieces.forEach(piece =>{
            
            piece.style.filter ='none';
        })

        faces.forEach(tile => {
            tile.style.filter ='none';
        
        })
        isSingleMoveAllowed = !isSingleMoveAllowed;
    }


}


function decreaseEnergy(value){
    energy -= value;
    fillCircle(energy);
}

function attackSound(src){
    const audio = document.getElementById('skills-voices');
    audio.src = src;
    audio.volume = 0.1;
    audio.play();
}


changeCurrentTurn(isPlayerTurn, true)


// let whiteTile = 'linear-gradient(133deg, rgba(250,252,248,1) 0%, rgba(255,206,255,1) 100%)'
// let whiteTile = "url('/src/assets/public/resources/whiteabove2.png') center center / cover no-repeat, #1b1b1ba8";
let whiteTile = "url('/src/assets/public/resources/whiteabove3.png')";
let whiteAnimation = 'none';
let blackAnimation = 'none';
let backgroundSizeWhite = '100% 100%';
let backgroundSizeBlack = '100% 100%';
let blackTile = "url('/src/assets/public/resources/blackabove.png') center center / cover no-repeat, #101010";


function startAudio(isMove, isBattle, isCustom, isStatus, isClick, isClickDenied){
    const audioForTile = document.getElementById('move-tile-sound');
    const battleSoundAudio =  document.getElementById('battle-sound');
    const changeStatus = document.getElementById('changeStatus');
    const clickSound = document.getElementById('click-sound');
    if(isMove){
        audioForTile .src = '/src/assets/public/resources/Sounds/rocks-sliding-101019 (mp3cut.net).mp3';
        audioForTile .volume = 0.1;
        audioForTile .play();
    }
    if(isBattle){
        if(isCustom){
            battleSoundAudio.src = '/src/assets/public/resources/Characters/images/allchars/Pacifica/sounds/water_pouring_out_of.mp3';
        }
        else{
            battleSoundAudio.src = '/src/assets/public/resources/videos/effects/swords_battle.mp3';
        }
        battleSoundAudio.volume = 0.1;
        battleSoundAudio.play();
    }
    if(isStatus){
        changeStatus.volume = 0.04;
        changeStatus.play();
    }

  
    if(isClick){
        if(!isClickDenied){
         clickSound.src = '/src/assets/public/resources/Sounds/souds/Click_2.wav'
        }
        else{
            clickSound.src = '/src/assets/public/resources/Sounds/souds/Denied_01.ogg'
        }
       
        clickSound.volume = 0.1;
        clickSound.play();
    }
   

   
}
function moveTileSound() {
    const audio = document.getElementById('move-tile-sound');
    audio.volume = 0.1;
    audio.play();
  }

function battleSound(isCustom) {
    const audio = document.getElementById('battle-sound');
    if(isCustom){
        audio.src = '/src/assets/public/resources/Characters/images/allchars/Pacifica/sounds/water_pouring_out_of.mp3';
    }
    else{
        audio.src = '/src/assets/public/resources/videos/effects/swords_battle.mp3';
    }
    audio.volume = 0.1;
    audio.play();
  }
// Initial chessboard state, 'p' = pawn, 'r' = rook, 'n' = knight, etc.
let initialBoardState = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
];

function applyRowColorAnimation(fen) {
   
    const targetFEN = 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1';

    if (fen === targetFEN) {
        for (let row = 7; row >= 0; row--) {
            setTimeout(() => {
                document.querySelectorAll(`.tile[data-row="${row}"]`).forEach(tile => {
                    if (tile.classList.contains('black')) {
                        const frontFace = tile.querySelectorAll('.face');
                        frontFace.forEach(face =>{
                             if (face) {
                            // face.style.transition = 'background 0.4s ease';
                            // face.style.background = '#1d1c27';
                        }
                        })

                    }
                });
            }, (7 - row) * 400); 
        }
    }
}

// Chessboard creation and piece placement
function createChessboard() {
    const chessboard = document.getElementById('chessboard');
    chessboard.innerHTML = ''; 
    
    // Создание клеток доски
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const tile = document.createElement('div');
            tile.classList.add('tile');
            tile.style.zIndex = row + 1;

            if ((row + col) % 2 === 1) {
                tile.classList.add('black');
            }

            tile.dataset.row = row;
            tile.dataset.col = col;

          

            const faces = ['front', 'back', 'left', 'right', 'top', 'bottom'];
            faces.forEach(face => {
                const faceDiv = document.createElement('div');
                faceDiv.classList.add('face', face);
            
                // Если окрашена верхняя грань, окрашиваем все грани
                if ((row + col) % 2 === 1) {
                    if(face === 'bottom'){
                    faceDiv.style.background = `linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,1) 100%), ${blackTile}`

                    faceDiv.style.backgroundSize = backgroundSizeBlack
                    faceDiv.style.animation = blackAnimation
                    

                    }
                    else{
                        faceDiv.style.background = `${blackTile}`

                        faceDiv.style.backgroundSize = backgroundSizeBlack
                        faceDiv.style.animation = blackAnimation
                    }
                
                
                    
                } else {
                    if (face === 'top' || face === 'front') {
                    
                        faceDiv.style.background = `${whiteTile}`
                        faceDiv.style.backgroundSize = backgroundSizeWhite
                        faceDiv.style.animation = whiteAnimation
                    
                    
                        

                    }   
                    else if(face === 'bottom'){
                    

                            
                        faceDiv.style.background = `linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,1) 100%), ${whiteTile}`
                        faceDiv.style.backgroundSize = backgroundSizeWhite
                        faceDiv.style.animation = whiteAnimation
                        
                        
                    }  
                    else {
                        faceDiv.style.background = `${whiteTile}`
                        faceDiv.style.backgroundSize = backgroundSizeWhite
                        //  faceDiv.style.animation = whiteAnimation
                        
                        
                    }
                }
            
                tile.appendChild(faceDiv);
            });
            const hoverBorder = document.createElement('div')
            hoverBorder.classList.add('hover-border')
          

            const pieceType = initialBoardState[row][col];

            tile.appendChild(hoverBorder)
    
            if (pieceType) {
                const piece = createPiece(pieceType, row, col);
                piece.style.zIndex = 5;
              
                tile.appendChild(piece);
                
                tile.classList.remove('on-lower-plane');

                // Устанавливаем параметры анимации для тайла с фигурой
                // tile.style.transform = 'translateZ(0px)';
                // tile.style.setProperty('--start-z', '0px');
                // tile.style.setProperty('--amplitude', `${Math.random() * -20 - 10}px`); // Амплитуда вниз
                // tile.style.setProperty('--delay', `${Math.random() * 2}s`);

                hoverBorder.style.transform = 'translateZ(140px)';
            } else {
                tile.classList.add('on-lower-plane');

                // Устанавливаем начальный стиль для тайлов без фигур
                // tile.style.transform = 'translateZ(-80px)';
                // tile.style.setProperty('--start-z', '-80px');
                // tile.style.setProperty('--amplitude', `${Math.random() * -20 - 10}px`); // Опускаем еще ниже
                // tile.style.setProperty('--delay', `${Math.random() * 2}s`);

                hoverBorder.style.transform = 'translateZ(60px)';

                // Настраиваем стили граней
                if (tile.classList.contains('black')) {
                    tile.querySelector('.front').style.background = `${blackTile}`;
                    tile.querySelector('.front').style.backgroundSize = backgroundSizeBlack;
                } else {
                    tile.querySelector('.front').style.background = `${whiteTile}`;
                    tile.querySelector('.front').style.backgroundSize = backgroundSizeWhite;
                }
            }

            let tileKey = `${row}-${col}`;
            if (tileStates[tileKey]) {
            
                // tile.style.transform = tileStates[tileKey].transform;  
            
            }
        


            tile.addEventListener('click', () => handleTileClick(row, col, tile));
            chessboard.appendChild(tile);
        }
    }




    function isPlayerPiece(piece) {
        return (currentPlayer === 'white' && piece === piece.toUpperCase()) ||
            (currentPlayer === 'black' && piece === piece.toLowerCase());
    }
    
    // Добавляем обработчики событий на все клетки
    document.querySelectorAll('.tile').forEach(tile => {
        tile.addEventListener('mouseenter', function() {
            const row = parseInt(tile.dataset.row, 10);
            const col = parseInt(tile.dataset.col, 10);
    
            const piece = initialBoardState[row][col];
    
        
            if (piece) {
                // Проверяем, является ли фигура союзной
                if (isPlayerPiece(piece) && isPlayerTurn && !isInputBlocked) {
                    tile.style.transform = 'translateZ(100px)';
                }
                else{
                    tile.style.transform = 'translateZ(100px)';
                }
            }
            else{
                
                 tile.style.transform = 'translateZ(100px)';
                 
            }
            // tile.style.transform = 'translateZ(60px)';
        });

        tile.addEventListener('mouseleave', function() {
            const row = parseInt(tile.dataset.row, 10);
            const col = parseInt(tile.dataset.col, 10);
    
            const piece = initialBoardState[row][col];
    
            // Проверяем, есть ли в клетке фигура
            if (piece) {
                // Проверяем, является ли фигура союзной
                if (isPlayerPiece(piece) && isPlayerTurn && !isInputBlocked) {
                    tile.style.transform = 'translateZ(0px)';
                }
                else{
                    tile.style.transform = 'translateZ(0px)';
                }
            }
            else{
                tile.style.transform = 'translateZ(0px)';
            }
        });
    });

    // if (useCustomPieces) {
    
    //     applyCustomPieces();
    chessboard.style.display = 'grid';
    setTimeout(() =>{
        document.getElementById('loading-screen').style.opacity = '0';
        setTimeout(()=>{
            document.getElementById('loading-screen').style.display = 'none';
        },2000)
        
    }, 4000)
   
   
    // }
}

let pawnCounter = 0; 

// Function to create a piece element
function createPiece(type, row, col) {
    const piece = document.createElement('div');
   
    piece.classList.add('piece');

    piece.dataset.type = type;

    let id = type;
    if (type !== 'P' && type !== 'p') {
       
        let existingPiece = document.querySelector(`[data-id="${id}"]`);
        
        if (existingPiece) {
           
            id = `${type}1`;
        }
    }
    else{
        id = `${type}${pawnCounter}`;
        pawnCounter++;
        if(pawnCounter === 7){
            pawnCounter = 0;
        }
       
    }


    piece.dataset.id = id; 
    // piece.dataset.animation = '/public/ChessChatGPT/public/resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4';
    
    const letter = document.createElement('div');
   
    letter.classList.add('letter-tip');
    letter.textContent = type.toUpperCase();
    piece.appendChild(letter);
    if (type === type.toLowerCase()) {
        piece.classList.add('black'); 
    }

    let customPiece = null;
    
    if(type === 'P' || type === 'p'){
        customPiece = customPieces.find(p => p.piece === type);
       
    }
    else{
        customPiece = customPieces.find(p => p.piece === id);
    }

    piece.dataset.animation = customAttack.find(p => p.piece === type).image;
    piece.dataset.custom = customAttack.find(p => p.piece === type).custom;
    piece.dataset.sound = customAttack.find(p => p.piece === type).sound;

    if (customPiece) {
        const imgElement = document.createElement('img');
        imgElement.src = customPiece.image;
        imgElement.alt = type;
        imgElement.loading = 'lazy';
        imgElement.style.width = '130px';
        imgElement.style.height = '197px';   
       
        piece.appendChild(imgElement);


    } else {
        piece.textContent = type.toUpperCase();
    }

    return piece;
}


// Handle click on a tile
function handleTileClick(row, col, tile) {
   
    if (!isPlayerTurn || isInputBlocked || !isInteractionComplete) return;

    const piece = tile.querySelector('.piece');

    if(piece){
        if(isRestrictedPiece && isRestrictedPiece.dataset.id === piece.dataset.id){
            return;
        }
    }
   
    if(isTutorialMode && isSingleMoveAllowed){
        if(selectedPiece && selectedPiece.row !== 6 && selectedPiece.col !== 3) return
        if (selectedPiece && selectedPiece.row === 6 && selectedPiece.col === 3) {
            
            if (isValidMove(selectedPiece.row, selectedPiece.col, row, col)) {
                isInputBlocked = true; 
                movePiece(selectedPiece.row, selectedPiece.col, row, col);
                const currentFEN = boardToFEN(); 
                applyRowColorAnimation(currentFEN);        
                selectedPiece = null;
                removeHighlight();
                if(validInterval){
                    clearInterval(validInterval);
                 
                }
                // startMoveTutorial(false);
                document.getElementById('moveTutor').style.pointerEvents = 'all'
                switchTurn();
                isInputBlocked = false; 

    
                
                    
            } else {
              
                selectedPiece = null;
                removeHighlight();
            }
        } else if (piece && isPlayerPiece(piece.dataset.type)) {
            if(tile.dataset.row !== '6' || tile.dataset.col !== '3') return;
            selectedPiece = { row, col, piece };
            highlightSelected(tile); 
        }
    }
    else{
        if (selectedPiece) {
        
            if (isValidMove(selectedPiece.row, selectedPiece.col, row, col)) {
                isInputBlocked = true; 
                movePiece(selectedPiece.row, selectedPiece.col, row, col);
                const currentFEN = boardToFEN(); 
                applyRowColorAnimation(currentFEN);    
                 
                selectedPiece = null;
                removeHighlight();
                if(validInterval){
                    
                   
                    clearInterval(validInterval);
                    
                    
                }
              
                switchTurn();
                isInputBlocked = false; 

                
                    
            } else {
            
                selectedPiece = null;
                removeHighlight();
            }
        } else if (piece && isPlayerPiece(piece.dataset.type)) {
            
            selectedPiece = { row, col, piece };
            highlightSelected(tile); 
        }
    }
}

// Check if a move is valid
function isValidMove(fromRow, fromCol, toRow, toCol) {
    const piece = initialBoardState[fromRow][fromCol];
    const target = initialBoardState[toRow][toCol];
    // Нельзя двигаться на клетку, занятую своей фигурой
    if (target && isPlayerPiece(target)) {
        return false;
    }

    const pieceType = piece.toLowerCase();
    let valid = false;

    switch (pieceType) {
        case 'p':
            valid = isValidPawnMove(piece, fromRow, fromCol, toRow, toCol, target);
            break;
        case 'r':
            valid = isValidRookMove(fromRow, fromCol, toRow, toCol) && isPathClear(fromRow, fromCol, toRow, toCol);
            break;
        case 'n':
            valid = isValidKnightMove(fromRow, fromCol, toRow, toCol);
            break;
        case 'b':
            valid = isValidBishopMove(fromRow, fromCol, toRow, toCol) && isPathClear(fromRow, fromCol, toRow, toCol);
            break;
        case 'q':
            valid = (isValidRookMove(fromRow, fromCol, toRow, toCol) || isValidBishopMove(fromRow, fromCol, toRow, toCol)) &&
                    isPathClear(fromRow, fromCol, toRow, toCol);
            break;
        case 'k':
            valid = isValidKingMove(fromRow, fromCol, toRow, toCol);
            break;
    }

    if (!valid) return false;

    // Симуляция хода и проверка на шах
    const originalPiece = initialBoardState[toRow][toCol];
    let capturedEnPassantPiece = null;

    // Обработка взятия на проходе в симуляции
    if (pieceType === 'p' && !originalPiece && lastPawnMove) {
        const direction = piece === 'P' ? -1 : 1;
        if (
            fromRow + direction === toRow &&
            Math.abs(fromCol - toCol) === 1 &&
            lastPawnMove.row === fromRow &&
            lastPawnMove.col === toCol
        ) {
            // Взятие на проходе
            capturedEnPassantPiece = initialBoardState[fromRow][toCol];
            initialBoardState[fromRow][toCol] = null; // Удаляем захваченную пешку
        }
    }

    // Выполняем симуляцию хода
    initialBoardState[toRow][toCol] = piece;
    initialBoardState[fromRow][fromCol] = null;

    const kingColor = currentPlayer;
    const inCheck = isKingInCheck(kingColor);

    // Восстанавливаем исходное состояние доски
    initialBoardState[fromRow][fromCol] = piece;
    initialBoardState[toRow][toCol] = originalPiece;
    if (capturedEnPassantPiece) {
        initialBoardState[fromRow][toCol] = capturedEnPassantPiece; // Восстанавливаем захваченную пешку
    }


    return !inCheck;
}



// Pawn movement and En Passant
function isValidPawnMove(piece, fromRow, fromCol, toRow, toCol, target) {
    const direction = piece === 'P' ? -1 : 1; // White moves up (-1), Black moves down (+1)
    const startRow = piece === 'P' ? 6 : 1;  // Starting row for pawns

    // Normal forward movement (one or two squares on the first move)
    if (fromCol === toCol && !target) {
        if (fromRow + direction === toRow) {
            return true; // Move forward one square
        }
        if (fromRow === startRow && fromRow + 2 * direction === toRow && !initialBoardState[fromRow + direction][fromCol]) {
            lastPawnMove = { row: toRow, col: toCol, piece: piece }; // Track this pawn for En Passant
            return true; // Move forward two squares
        }
    }

    // Capture diagonally
    if (Math.abs(fromCol - toCol) === 1 && fromRow + direction === toRow) {
    
        if (target) {


            return true; // Diagonal capture of opponent's piece
        }

        // En Passant capture check
        if (lastPawnMove && lastPawnMove.row === fromRow && lastPawnMove.col === toCol && lastPawnMove.piece !== piece) {
            return true; // Valid En Passant capture
        }



    }

    return false; // Invalid move otherwise
}





// Rook movement
function isValidRookMove(fromRow, fromCol, toRow, toCol) {
    if (fromRow !== toRow && fromCol !== toCol) return false; // Rook moves in straight lines
    return isPathClear(fromRow, fromCol, toRow, toCol);
}

// Knight movement (L-shaped)
function isValidKnightMove(fromRow, fromCol, toRow, toCol) {
    const rowDiff = Math.abs(fromRow - toRow);
    const colDiff = Math.abs(fromCol - toCol);
    return (rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2);
}

// Bishop movement
function isValidBishopMove(fromRow, fromCol, toRow, toCol) {
    if (Math.abs(fromRow - toRow) !== Math.abs(fromCol - toCol)) return false; // Bishop moves diagonally
    return isPathClear(fromRow, fromCol, toRow, toCol);
}

// Queen movement (combines Rook and Bishop movement)
function isValidQueenMove(fromRow, fromCol, toRow, toCol) {
    return isValidRookMove(fromRow, fromCol, toRow, toCol) || isValidBishopMove(fromRow, fromCol, toRow, toCol);
}

// King movement (one square in any direction)
function isValidKingMove(fromRow, fromCol, toRow, toCol) {
    // Standard king move (one square in any direction)
    if (Math.abs(fromRow - toRow) <= 1 && Math.abs(fromCol - toCol) <= 1) {
        return true;
    }

    // Castling logic
    if (isCastlingMove(fromRow, fromCol, toRow, toCol)) {
        return true;
    }

    return false;
}

// Check if the path between two tiles is clear (for rooks, bishops, queens)
function isPathClear(fromRow, fromCol, toRow, toCol) {
    const rowDirection = Math.sign(toRow - fromRow);
    const colDirection = Math.sign(toCol - fromCol);

    let currentRow = fromRow + rowDirection;
    let currentCol = fromCol + colDirection;

    while (currentRow !== toRow || currentCol !== toCol) {
        if (initialBoardState[currentRow][currentCol]) {
            return false; // Blocked path
        }
        currentRow += rowDirection;
        currentCol += colDirection;
    }
    return true;
}

// Castling move check
function isCastlingMove(fromRow, fromCol, toRow, toCol) {
    const kingColor = fromRow === 7 ? 'white' : 'black';
    
    // Castling is only allowed if the king hasn't moved and the king is not currently in check
    if (hasKingMoved[kingColor] || isKingInCheck(kingColor)) return false;

    const isKingside = toCol === 6;
    const isQueenside = toCol === 2;

    // Ensure the king is moving two squares horizontally
    if (fromRow !== toRow || Math.abs(fromCol - toCol) !== 2) return false;

    // Check for kingside castling conditions
    if (isKingside && canCastle(kingColor, 'kingside')) {
        // Ensure the king does not pass through or land on a square that is attacked
        if (isSquareAttacked(kingColor, fromRow, 5) || isSquareAttacked(kingColor, fromRow, 6)) {
            return false;
        }
        // moveRookForCastling(kingColor, 'kingside');
        return true;
    }

    // Check for queenside castling conditions
    if (isQueenside && canCastle(kingColor, 'queenside')) {
        // Ensure the king does not pass through or land on a square that is attacked
        if (isSquareAttacked(kingColor, fromRow, 3) || isSquareAttacked(kingColor, fromRow, 2)) {
            return false;
        }
        // moveRookForCastling(kingColor, 'queenside');
        return true;
    }

    return false;
}

// Check if a specific square is under attack by the opponent
function isSquareAttacked(kingColor, row, col) {
    const opponentColor = kingColor === 'white' ? 'black' : 'white';

    // Iterate through all opponent's pieces
    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            const piece = initialBoardState[r][c];
            if (piece && isOpponentPiece(piece, kingColor)) {
                if (canPieceMoveTo(piece, r, c, row, col)) {
                    return true; // The square is under attack
                }
            }
        }
    }
    return false; // The square is not under attack
}



function canCastle(kingColor, side) {
    const row = kingColor === 'white' ? 7 : 0;
    const isKingside = side === 'kingside';

    if (isKingside) {
        if (hasRookMoved[kingColor + 'Kingside']) return false;
    } else {
        if (hasRookMoved[kingColor + 'Queenside']) return false;
    }

    if (isKingside) {
        if (initialBoardState[row][5] || initialBoardState[row][6]) return false;
    } else {
        if (initialBoardState[row][1] || initialBoardState[row][2] || initialBoardState[row][3]) return false;
    }

    return true;
}

function moveRookForCastling(kingColor, side) {
    const row = kingColor === 'white' ? 7 : 0;
    const isKingside = side === 'kingside';

   


    if (isKingside) {
        const piece = initialBoardState[row][7]
    
        initialBoardState[row][5] = initialBoardState[row][7];

        const fromCol = 7
        const toCol = 5

        const fromTile = document.querySelector(`[data-row='${row}'][data-col='${fromCol}']`);
        const toTile = document.querySelector(`[data-row='${row}'][data-col='${toCol}']`);


        // fromTile.style.setProperty('--start-z', '-80px');
        // fromTile.style.animationDelay = '0.2s';
        // fromTile.style.setProperty('--amplitude', `${Math.random() * -20 - 10}px`); 
    

        fromTile.classList.remove('no-bounce');

        setTimeout(() =>{
            toTile.style.setProperty('--start-z', '0px');
        
            toTile.classList.add('no-bounce');
        },100)

        const pieceElement = fromTile.querySelector('.piece');
    
        pieceElement.style.opacity = 0;

        setTimeout(()=> {
      

            toTile.querySelector('.hover-border').style.display = 'none';
       
            fromTile.style.transition = 'transform 1s ease';
            // fromTile.style.transform = 'translateZ(-80px)';
          
            // moveTileSound();
            startAudio(true, false, false, false)

           
            toTile.style.transition = 'transform 1s ease';
            toTile.style.transform = 'scaleZ(1)';
            
            
        }, 600)


        // Сохранение состояний клеток в tileStates
        tileStates[`${row}-${fromCol}`] = { 
            transform: 'translateZ(-80px)', 
            transition: 'transform 1s ease'  // Уменьшение с анимацией
        };
        tileStates[`${row}-${toCol}`] = { 
            transform: 'scaleZ(1)', 
            transition: 'transform 1s ease'  // Увеличение с анимацией
        };



        setTimeout(() => {
            //   createChessboard();  
            fromTile.classList.add('on-lower-plane');
            toTile.classList.remove('on-lower-plane');
            const pieceElement = fromTile.querySelector('.piece');
    
        
            if (pieceElement) {
                toTile.appendChild(pieceElement);
                setTimeout(() =>{
                    pieceElement.style.opacity = 1;
                },350)
            }
        
        }, 1100);  
       
        initialBoardState[row][7] = null;
        hasRookMoved[kingColor + 'Kingside'] = true;

        
    } else {
        const piece = initialBoardState[row][0]
        initialBoardState[row][3] = initialBoardState[row][0];
    
        const fromCol = 0
        const toCol = 3

        const fromTile = document.querySelector(`[data-row='${row}'][data-col='${fromCol}']`);
        const toTile = document.querySelector(`[data-row='${row}'][data-col='${toCol}']`);


        // fromTile.style.setProperty('--start-z', '-80px');
        // fromTile.style.animationDelay = '0.2s';
        // fromTile.style.setProperty('--amplitude', `${Math.random() * -20 - 10}px`); 
    

        fromTile.classList.remove('no-bounce');

        setTimeout(() =>{
            toTile.style.setProperty('--start-z', '0px');
        
            toTile.classList.add('no-bounce');
        },100)


        const pieceElement = fromTile.querySelector('.piece');
    
        pieceElement.style.opacity = 0;

        setTimeout(()=> {
      

            toTile.querySelector('.hover-border').style.display = 'none';
       
            fromTile.style.transition = 'transform 1s ease';
            // fromTile.style.transform = 'translateZ(-80px)';
          
            // moveTileSound();
            startAudio(true, false, false, false)

           
            toTile.style.transition = 'transform 1s ease';
            toTile.style.transform = 'scaleZ(1)';
            
            
        }, 600)



        // Сохранение состояний клеток в tileStates
        tileStates[`${row}-${fromCol}`] = { 
            transform: 'translateZ(-80px)', 
            transition: 'transform 1s ease'  // Уменьшение с анимацией
        };
        tileStates[`${row}-${toCol}`] = { 
            transform: 'scaleZ(1)', 
            transition: 'transform 1s ease'  // Увеличение с анимацией
        };

        const customPieceIndex = customPieces.findIndex(p => p.row === row && p.col === fromCol && p.piece === piece);
        if (customPieceIndex !== -1) {
            customPieces[customPieceIndex].row = row;
            customPieces[customPieceIndex].col = toCol;
        }

        setTimeout(() => {
            //   createChessboard();  
            fromTile.classList.add('on-lower-plane');
            toTile.classList.remove('on-lower-plane');
            const pieceElement = fromTile.querySelector('.piece');
    
        
            if (pieceElement) {
                toTile.appendChild(pieceElement);
                setTimeout(() =>{
                    pieceElement.style.opacity = 1;
                },350)
            }
        
        }, 1100);  
        initialBoardState[row][0] = null;
        hasRookMoved[kingColor + 'Queenside'] = true;
    }

    hasKingMoved[kingColor] = true;
}



// Function to promote a pawn
function promotePawn(fromRow, fromCol, row, col, piece) {
    const fromTile = document.querySelector(`[data-row='${fromRow}'][data-col='${fromCol}']`);
    const toTile = document.querySelector(`[data-row='${row}'][data-col='${col}']`);
    let botQueen = false;
    let promotedPiece;

    // If it's Stockfish's turn (black), automatically promote to a queen
    if (currentPlayer === bot) {
        promotedPiece = piece === 'P' ? 'Q' : 'q';
        botQueen = true;
    } 
    else {

        let options = ['Queen', 'Knight', 'Bishop', 'Rook'];
        let choice = '';

        while (!options.includes(choice)) {
            choice = prompt(`Promote pawn to (Queen, Knight, Bishop, Rook):`, 'Queen');
            if (choice) {
                choice = choice.trim();
            }
        }


        // Map choice to corresponding piece character
        switch (choice) {
            case 'Queen':
                promotedPiece = piece === 'P' ? 'Q' : 'q';
                break;
            case 'Knight':
                promotedPiece = piece === 'P' ? 'N' : 'n';
                break;
            case 'Bishop':
                promotedPiece = piece === 'P' ? 'B' : 'b';
                break;
            case 'Rook':
                promotedPiece = piece === 'P' ? 'R' : 'r';
                break;
        }
    }

    // Replace the pawn with the chosen/promoted piece
        initialBoardState[row][col] = promotedPiece;


    
        // Удаляем элемент захваченной пешки из DOM
        const capturedPawnElement = toTile.querySelector('.piece');
        const pieceToPromote = fromTile.querySelector('.piece');
        if(pieceToPromote){
            fromTile.removeChild(pieceToPromote);
        }
        if (capturedPawnElement) {
            toTile.removeChild(capturedPawnElement);
        }

        fromTile.style.transition = 'transform 1s ease';
        // fromTile.style.transform = 'translateZ(-80px)';

        // Применяем увеличение для новой клетки (1 секунда)
        toTile.querySelector('.hover-border').style.display = 'none';
        toTile.style.transition = 'transform 1s ease';
        toTile.style.transform = 'scaleZ(1)';  // Увеличиваем новую клетку плавно




    setTimeout(() => {
        //   createChessboard();  
        fromTile.classList.add('on-lower-plane');
        toTile.classList.remove('on-lower-plane');

        

        const piece = document.createElement('div');
        if(botQueen){
            
            piece.classList.add('piece');
        
        
            piece.dataset.type = promotedPiece;
            if (promotedPiece === promotedPiece.toLowerCase()) {
                piece.classList.add('black'); // Black pieces
            }
        
        
            const customPiece = customPieces.find(p => p.piece === promotedPiece);
            if (customPiece) {
                const imgElement = document.createElement('img');
                imgElement.src = customPiece.image; // Устанавливаем кастомное изображение
                imgElement.alt = promotedPiece;
                imgElement.style.width = '105px'; // Настраиваем размер
                imgElement.style.height = '105px';
                piece.appendChild(imgElement);
            } else {
                piece.textContent = promotedPiece.toUpperCase();
            }

            toTile.appendChild(piece)
        }
        else{
           
            piece.classList.add('piece');
        
            piece.dataset.type = promotedPiece;
            if (promotedPiece === promotedPiece.toLowerCase()) {
                piece.classList.add('black'); // Black pieces
            }
        
        
            const customPiece = customPieces.find(p => p.piece === promotedPiece);
            if (customPiece) {
                const imgElement = document.createElement('img');
                imgElement.src = customPiece.image; // Устанавливаем кастомное изображение
                imgElement.alt = promotedPiece;
                imgElement.style.width = '105px'; // Настраиваем размер
                imgElement.style.height = '105px';
                piece.appendChild(imgElement);
            } else {
                piece.textContent = promotedPiece.toUpperCase();
            }

            toTile.appendChild(piece);
        }
    
    }, 1100);  
    // createChessboard();
}




// Move a piece from one tile to another, handle En Passant and Promotion
function movePiece(fromRow, fromCol, toRow, toCol) {
   
    const piece = initialBoardState[fromRow][fromCol];
    const fromTile = document.querySelector(`[data-row='${fromRow}'][data-col='${fromCol}']`);

    if (fromTile.style.transform === 'translateZ(40px)') {
        // fromTile.style.transform = 'translateZ(0px)';
    }

    const toTile = document.querySelector(`[data-row='${toRow}'][data-col='${toCol}']`);

   
    const isCastling = piece.toLowerCase() === 'k' && Math.abs(fromCol - toCol) === 2;
    let castlingInfo = null;


    if (isCastling) {

        const kingColor = piece === 'K' ? 'white' : 'black';
        const side = toCol === 6 ? 'kingside' : 'queenside';

        const rookFromCol = side === 'kingside' ? 7 : 0;
        const rookToCol = side === 'kingside' ? 5 : 3;
        const rookPiece = initialBoardState[fromRow][rookFromCol];

        
        castlingInfo = {
            rookFromRow: fromRow,
            rookFromCol: rookFromCol,
            rookToRow: fromRow,
            rookToCol: rookToCol,
            rookPiece: rookPiece
        };
        moveRookForCastling(kingColor, side);
        hasKingMoved[kingColor] = true;
    }

    // fromTile.style.setProperty('--start-z', '-80px');
    // fromTile.style.animationDelay = '0.2s';
    // fromTile.style.setProperty('--amplitude', `${Math.random() * -20 - 10}px`); 
 

    fromTile.classList.remove('no-bounce');

    setTimeout(() =>{
        toTile.style.setProperty('--start-z', '0px');
    
        toTile.classList.add('no-bounce');
    },100)

    


    // En Passant capture
    if (piece.toLowerCase() === 'p' && !initialBoardState[toRow][toCol] && lastPawnMove) {
        const direction = piece === 'P' ? -1 : 1;
        if (
            fromRow + direction === toRow &&
            Math.abs(fromCol - toCol) === 1 &&
            lastPawnMove.row === fromRow &&
            lastPawnMove.col === toCol
        ) {
            // Удаляем захваченную пешку из состояния доски
            initialBoardState[fromRow][toCol] = null;

    
            // Находим клетку с захваченной пешкой в DOM
            const capturedPawnTile = document.querySelector(`[data-row='${fromRow}'][data-col='${toCol}']`);
    
            // Удаляем элемент захваченной пешки из DOM
            const capturedPawnElement = capturedPawnTile.querySelector('.piece');
            if (capturedPawnElement) {
                capturedPawnTile.classList.add('on-lower-plane');
                capturedPawnTile.style.transition = 'transform 1s ease';
                // capturedPawnTile.style.transform = 'translateZ(-80px)'; 
                capturedPawnTile.removeChild(capturedPawnElement);
            }
        }
    }
    


    const capturedPiece = initialBoardState[toRow][toCol];

    if (piece.toLowerCase() === 'k') {
        const kingColor = piece === 'K' ? 'white' : 'black';
        hasKingMoved[kingColor] = true;
    }

    // Обновление флагов перемещения ладьи при перемещении
    if (piece.toLowerCase() === 'r') {
        const rookColor = piece === 'R' ? 'white' : 'black';
        if (rookColor === 'white') {
            if (fromRow === 7 && fromCol === 0) {
                hasRookMoved['whiteQueenside'] = true;
            } else if (fromRow === 7 && fromCol === 7) {
                hasRookMoved['whiteKingside'] = true;
            }
        } else {
            if (fromRow === 0 && fromCol === 0) {
                hasRookMoved['blackQueenside'] = true;
            } else if (fromRow === 0 && fromCol === 7) {
                hasRookMoved['blackKingside'] = true;
            }
        }
    }

    // Обновление флагов перемещения ладьи при захвате
    if (capturedPiece && capturedPiece.toLowerCase() === 'r') {
        const rookColor = capturedPiece === 'R' ? 'white' : 'black';
        if (rookColor === 'white') {
            if (toRow === 7 && toCol === 0) {
                hasRookMoved['whiteQueenside'] = true;
            } else if (toRow === 7 && toCol === 7) {
                hasRookMoved['whiteKingside'] = true;
            }
        } else {
            if (toRow === 0 && toCol === 0) {
                hasRookMoved['blackQueenside'] = true;
            } else if (toRow === 0 && toCol === 7) {
                hasRookMoved['blackKingside'] = true;
            }
        }
    }

    moveHistory.push({
        boardState: JSON.parse(JSON.stringify(initialBoardState)),
        fromRow, fromCol, toRow, toCol,
        capturedPiece: initialBoardState[toRow][toCol] ? { piece: initialBoardState[toRow][toCol], row: toRow, col: toCol } : null,
        currentPlayer,
        isCastling: isCastlingMove,
        castlingInfo: castlingInfo
    });

    // moveHistory.push(move);
    if (capturedPiece) {
    
        addCapturedPiece(capturedPiece, isPlayerTurn);
    }
    
   
    initialBoardState[toRow][toCol] = piece;
    initialBoardState[fromRow][fromCol] = null;

    // Handle pawn promotion
    if (piece.toLowerCase() === 'p' && (toRow === 0 || toRow === 7)) {
        promotePawn(fromRow, fromCol, toRow, toCol, piece);
        return;
    }

    // Update lastPawnMove if this move was a two-square pawn move
    if (piece.toLowerCase() === 'p' && Math.abs(fromRow - toRow) === 2) {
        lastPawnMove = { row: toRow, col: toCol, piece: piece }; 
    } else {
        lastPawnMove = null; 
    }


   
    const pieceElement = fromTile.querySelector('.piece');
    const captureElement = toTile.querySelector('.piece');


  
    pieceElement.style.opacity = 0;
  
        
    setTimeout(()=> {
        

            toTile.querySelector('.hover-border').style.display = 'none';
            
            fromTile.style.transition = 'transform 1s ease';
            // fromTile.style.transform = 'translateZ(-80px)';
        
            // moveTileSound();
            startAudio(true, false, false, false)

        
            toTile.style.transition = 'transform 1s ease';
            toTile.style.transform = 'scaleZ(1)';
            
            
        }, 600)

    if(isPlayerTurn && capturedPiece){
            energy += 35;
            fillCircle(energy);
    }else{
      
                
            energy += 20;
            fillCircle(energy);
        
    }
    
    

    tileStates[`${fromRow}-${fromCol}`] = { 
        // transform: 'translateZ(-80px)', 
        transition: 'transform 1s ease' 
    };
    tileStates[`${toRow}-${toCol}`] = { 
        transform: 'scaleZ(1)', 
        transition: 'transform 1s ease'  
    };



    setTimeout(() => { 
        const toTileFront = toTile.querySelector('.front');

        toTileFront.style.boxShadow = '0px 0px 48px 20px rgba(0,0,0,0)';

        
        fromTile.querySelector('.hover-border').style.display = 'flex';
        fromTile.querySelector('.hover-border').style.transform = 'translateZ(180px)';
        fromTile.classList.add('on-lower-plane');
        
        setTimeout(() => {
            toTile.classList.remove('on-lower-plane');
        },400)
        
        const videoSrc = pieceElement.dataset.animation;
        const isCustom = pieceElement.dataset.custom === 'true';
        const sound =  pieceElement.dataset.sound;
       

        if (pieceElement && captureElement) {
            
           
            if(isCustom){
               
                setTimeout(() =>{
                    attackSound(sound);
                    toTile.removeChild(captureElement);
                   
                  
                   
                }, 1500)
               
            }
            else{
                toTile.removeChild(captureElement);
                // fromTile.removeChild(pieceElement); 
            }

            
            if(isCustom){
                // battleSound(isCustom) 
                startAudio(false, true, isCustom, false)
                const videoElement = createVideoElement(videoSrc, toTile, '50px', '50px');         
                applyChromaKey(videoElement, toTile.querySelector('.piece'), '150px', '150px', '-150px', '-10px');  
            }
            else{
                // battleSound(isCustom) 
                startAudio(false, true, isCustom, false)
                const videoElement = createVideoElement(videoSrc, toTile, '100px', '100px');         
                applyChromaKey(videoElement, toTile, '200px', '150px', '-40px', '-35px');  
            }

        
            pieceElement.style.opacity = 0;
            fromTile.removeChild(pieceElement); 
        
            toTile.appendChild(pieceElement);
            
            setTimeout(() => {
                pieceElement.style.opacity = 1;
            }, 1500);
        }
        else{
            

            
           
            fromTile.removeChild(pieceElement); 

            pieceElement.style.opacity = 0;
        
            toTile.appendChild(pieceElement);
        
            setTimeout(() => {
                pieceElement.style.opacity = 1;
            }, 350);
        }
        
        updateHistoryAfterMove();

      

    }, 1100);  
  
}




// Highlight selected tile
function highlightSelected(tile) {
    removeHighlight();
    
    tile.querySelector('.front').style.border = '2px solid white';

    tile.querySelector('.front').style.filter = 'drop-shadow(0px 0px 5px rgb(164, 79, 255))';
   
    const fromRow = parseInt(tile.dataset.row);
    const fromCol = parseInt(tile.dataset.col);
    
    // Получаем все допустимые ходы для выбранной фигуры
    const validMoves = getValidMoves(fromRow, fromCol);
    
    // Выделяем каждую клетку, на которую фигура может пойти
    validMoves.forEach(move => {
        const moveTile = document.querySelector(`.tile[data-row='${move.row}'][data-col='${move.col}']`);
        moveTile.querySelector('.hover-border').style.border = '2px solid rgb(255, 255, 255)';
        moveTile.querySelector('.hover-border').style.filter = 'drop-shadow(0px 0px 5px rgb(164, 79, 255))';
        
    });
   


}

function getValidMoves(fromRow, fromCol) {
    let validMoves = [];
    for (let toRow = 0; toRow < 8; toRow++) {
        for (let toCol = 0; toCol < 8; toCol++) {
            if (isValidMove(fromRow, fromCol, toRow, toCol)) {
                validMoves.push({ row: toRow, col: toCol });
            }
        }
    }
    return validMoves;
}

// Remove highlights
function removeHighlight() {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {
        const frontFace = tile.querySelector('.front');
        const hoverBorder = tile.querySelector('.hover-border')
        
        // Только сбрасываем drop-shadow, сохраняя brightness
        if (frontFace.style.filter.includes('brightness')) {
            frontFace.style.filter = frontFace.style.filter.replace(/drop-shadow\(.*?\)/, '').trim();
            hoverBorder.style.filter = hoverBorder.style.filter.replace(/drop-shadow\(.*?\)/, '').trim();;
        } else {
            frontFace.style.filter = ''; // Если drop-shadow единственный эффект, сбрасываем полностью
            hoverBorder.style.filter = '';
            
        }
        hoverBorder.style.border = '';
        frontFace.style.border = ''; // Reset border
    });
}

const startingMinutes = settings.timerTime;
let time = startingMinutes * 60;
const countDownElement = document.querySelector('.timer-numbers');
let validInterval;


function countDownTimer(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countDownElement.innerHTML = `${minutes}:${seconds}`;

    time--;

    if(time < 0){
        clearInterval(validInterval);
        const endScreen = document.getElementById('end-screen')
        endScreen.style.display = 'flex';

        endScreen.querySelector('#lose-img').style.display = 'flex'; 
      
    }
    
}

// Switch turns and check for checkmate, then let Stockfish play

function switchTurn() {

    // if(isLongSkillActive){
    //     const length = watchMoveHistory(watchingLength);
    //     if(length){
    //         isRestrictedPiece.querySelector('#after-skill-effect').remove();
    //         isRestrictedPiece = null;
    //         isLongSkillActive = false;
           
    //     }
    // }
    
    currentPlayer = currentPlayer === 'white' ? 'black' : 'white';
    isPlayerTurn = currentPlayer !== bot; 
    
    highlightKingInCheck();
    changeCurrentTurn(isPlayerTurn);

    // Проверяем мат перед тем, как разрешить ход следующему игроку или боту
    if (isCheckmate(currentPlayer)) {
        // console.log(`${currentPlayer === 'white' ? 'Черные' : 'Белые'} выиграли. Мат!`);
      
        const endScreen = document.getElementById('end-screen')
        endScreen.style.display = 'flex';

        if (
            (playerSide === 'white' && currentPlayer === 'white') || // Если игрок за белых и ему поставили мат
            (playerSide === 'black' && currentPlayer === 'black')    // Если игрок за черных и ему поставили мат
        ) {
            endScreen.querySelector('#lose-img').style.display = 'flex'; // Показываем картинку поражения
        } else {
            endScreen.querySelector('#win-img').style.display = 'flex'; // Показываем картинку победы
        }

    }

    if (isStalemate(currentPlayer)) {
        const endScreen = document.getElementById('end-screen');
        endScreen.style.display = 'flex';
        endScreen.querySelector('#draw-img').style.display = 'flex';
    }

    if(isThreefoldRepetition()){
        const endScreen = document.getElementById('end-screen');
        endScreen.style.display = 'flex';
        endScreen.querySelector('#draw-img').style.display = 'flex';
    }

    if(isInsufficientMaterial()){
      
        const endScreen = document.getElementById('end-screen');
        endScreen.style.display = 'flex';
        endScreen.querySelector('#draw-img').style.display = 'flex';
    }

    if (currentPlayer === bot) {
        const fen = boardToFEN(); 
        getBestMove(fen, function(bestMove) {
            const { fromRow, fromCol, toRow, toCol } = uciToMove(bestMove);

           
            
            if (initialBoardState[fromRow] && initialBoardState[fromRow][fromCol]) {
                
                  
                    setTimeout(() =>{
                      
                        movePiece(fromRow, fromCol, toRow, toCol); 
                       
                       
                    }, 3000)
                
                    setTimeout(()=>{
                       
                        switchTurn(); 
                        validInterval = setInterval(countDownTimer, 1000);
                       
                    }, 5000)
               
            
            } else {
                console.error('Ошибка: бот пытается сделать недействительный ход.');
            }
        });
    } else {
        isPlayerTurn = true; 
    }

}

let previousKingTile = null; // Глобальная переменная для хранения прошлой клетки короля

function highlightKingInCheck() {
    const kingColor = currentPlayer === 'white' ? 'white' : 'black'; // Проверка шаха для короля противника после хода
    let kingPosition = null;

    // Находим позицию короля указанного цвета
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const piece = initialBoardState[row][col];
            if (piece === (kingColor === 'white' ? 'K' : 'k')) {
                kingPosition = { row, col };
                break;
            }
        }
        if (kingPosition) break;
    }

    // Сбрасываем границу для предыдущей клетки короля, если она существует
    if (previousKingTile) {
        previousKingTile.style.border = '';
    }

    const kingTile = document.querySelector(`.tile[data-row="${kingPosition.row}"][data-col="${kingPosition.col}"] .front`);

    // Подсвечиваем клетку, если король под шахом
    if (kingPosition && isKingInCheck(kingColor)) {
        if (kingTile) kingTile.style.border = '2px solid red'; // Устанавливаем границу для шаха
    } 

    // Обновляем предыдущую клетку короля на текущую
    previousKingTile = kingTile;
}




// Check if a piece belongs to the current player
function isPlayerPiece(type) {
    return (currentPlayer === 'white' && type === type.toUpperCase()) ||
        (currentPlayer === 'black' && type === type.toLowerCase());
}





// Function to check if the king of a given color is in check
function isKingInCheck(kingColor) {
    // Find the king's position
    let kingPosition = null;
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const piece = initialBoardState[row][col];
            if (piece === (kingColor === 'white' ? 'K' : 'k')) {
                kingPosition = { row, col };
                break;
            }
        }
        if (kingPosition) break;
    }

    if (!kingPosition) {
        console.error('King not found on the board.');
        return false;
    }

    // Check if any opponent's piece can attack the king's position
    const opponentColor = kingColor === 'white' ? 'black' : 'white';
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const piece = initialBoardState[row][col];
            if (piece && isOpponentPiece(piece, kingColor)) {
                if (canPieceMoveTo(piece, row, col, kingPosition.row, kingPosition.col)) {
                  
                    return true; // King is in check
                }
            }
        }
    }
    return false; // King is not in check
}

// Helper function to check if a piece belongs to the opponent
function isOpponentPiece(piece, kingColor) {
    return (kingColor === 'white' && piece === piece.toLowerCase()) ||
        (kingColor === 'black' && piece === piece.toUpperCase());
}

// Helper function to determine if a piece can move to a given position
function canPieceMoveTo(piece, fromRow, fromCol, toRow, toCol) {
    const pieceType = piece.toLowerCase();
    // Temporarily store and modify the board state
    const originalPiece = initialBoardState[toRow][toCol];
    initialBoardState[toRow][toCol] = piece;
    initialBoardState[fromRow][fromCol] = null;

    let valid = false;
    switch (pieceType) {
        case 'p':
            valid = isValidPawnAttack(piece, fromRow, fromCol, toRow, toCol);
            break;
        case 'r':
            valid = isValidRookMove(fromRow, fromCol, toRow, toCol) && isPathClear(fromRow, fromCol, toRow, toCol);
            break;
        case 'n':
            valid = isValidKnightMove(fromRow, fromCol, toRow, toCol);
            break;
        case 'b':
            valid = isValidBishopMove(fromRow, fromCol, toRow, toCol) && isPathClear(fromRow, fromCol, toRow, toCol);
            break;
        case 'q':
            valid = (isValidRookMove(fromRow, fromCol, toRow, toCol) || isValidBishopMove(fromRow, fromCol, toRow, toCol)) &&
                    isPathClear(fromRow, fromCol, toRow, toCol);
            break;
        case 'k':
            valid = Math.abs(fromRow - toRow) <= 1 && Math.abs(fromCol - toCol) <= 1;
            break;
    }

    // Restore the original board state
    initialBoardState[fromRow][fromCol] = piece;
    initialBoardState[toRow][toCol] = originalPiece;

    return valid;
}

// Pawn attack logic (different from movement)
function isValidPawnAttack(piece, fromRow, fromCol, toRow, toCol) {
    const direction = piece === 'P' ? -1 : 1;
    return Math.abs(fromCol - toCol) === 1 && fromRow + direction === toRow;
}


// Checkmate detection
function isCheckmate(kingColor) {
    if (!isKingInCheck(kingColor)) {
        return false; // Не мат, если король не под шахом
    }

    // Проходим по всем возможным ходам текущего игрока
    for (let fromRow = 0; fromRow < 8; fromRow++) {
        for (let fromCol = 0; fromCol < 8; fromCol++) {
            const piece = initialBoardState[fromRow][fromCol];
            if (piece && isPlayerPiece(piece)) {
                // Проверяем все возможные ходы для каждой фигуры
                for (let toRow = 0; toRow < 8; toRow++) {
                    for (let toCol = 0; toCol < 8; toCol++) {
                        // Если ход валиден и после него король не под шахом, это не мат
                        if (isValidMove(fromRow, fromCol, toRow, toCol)) {
                            return false; // Есть хотя бы один валидный ход, мата нет
                        }
                    }
                }
            }
        }
    }

    // Если ни один ход не позволяет выйти из шаха, это мат
    return true;
}


// Switch turns between players
// Reset the game after checkmate
function resetBoard() {
    // Default board state
    initialBoardState = [
        ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
        ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
        ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ];

    // Reset king and rook movement tracking
    resetCastlingStatus();

    // Reset current player to white





    startingFEN = '';

    // Reset draw conditions
    halfmoveClock = 0;
    boardHistory = {};

    // Re-render the chessboard
    createChessboard();


}



// Reset king and rook movement tracking
function resetCastlingStatus() {
    hasKingMoved = { white: false, black: false };
    hasRookMoved = { whiteKingside: false, whiteQueenside: false, blackKingside: false, blackQueenside: false };
}


// Function to detect stalemate
function isStalemate(kingColor) {
    if (isKingInCheck(kingColor)) {
        return false; // Not a stalemate if the king is in check
    }

    // Check if there are any legal moves for the current player
    for (let fromRow = 0; fromRow < 8; fromRow++) {
        for (let fromCol = 0; fromCol < 8; fromCol++) {
            const piece = initialBoardState[fromRow][fromCol];
            if (piece && isPlayerPiece(piece)) {
                for (let toRow = 0; toRow < 8; toRow++) {
                    for (let toCol = 0; toCol < 8; toCol++) {
                        if (isValidMove(fromRow, fromCol, toRow, toCol)) {
                            return false; 
                        }
                    }
                }
            }
        }
    }

    return true; 
}


// Function to check if the game has insufficient material for a checkmate
// Function to check if the game has insufficient material for a checkmate
function isInsufficientMaterial() {
let whitePieces = [];
let blackPieces = [];

// Проход по доске для сбора фигур
for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        const piece = initialBoardState[row][col];
        if (piece) {
            if (piece === piece.toUpperCase()) {
                whitePieces.push(piece); // Белые фигуры
            } else {
                blackPieces.push(piece); // Черные фигуры
            }
        }
    }
}

// Проверяем недостаточный материал у обеих сторон
const insufficientWhite = isMaterialInsufficient(whitePieces);
const insufficientBlack = isMaterialInsufficient(blackPieces);

// Если обе стороны имеют недостаточный материал, возвращаем true
return insufficientWhite && insufficientBlack;
}

// Helper function to check if a player's material is insufficient for checkmate
function isMaterialInsufficient(pieces) {
// Приводим все фигуры к верхнему регистру для сравнения
const normalizedPieces = pieces.map(piece => piece.toUpperCase());

// Если только король, это недостаточный материал
if (normalizedPieces.length === 1 && normalizedPieces.includes('K')) {
    return true; // Только король
}

// King + Bishop or King + Knight is insufficient material
if (normalizedPieces.length === 2 && (normalizedPieces.includes('K') && (normalizedPieces.includes('B') || normalizedPieces.includes('N')))) {
    return true; // Король с одним легким офицером (слоном или конем)
}

// King + two knights is also insufficient material
if (normalizedPieces.length === 3 && normalizedPieces.includes('K') && normalizedPieces.filter(p => p === 'N').length === 2) {
    return true; // Король с двумя конями
}

return false; // В остальных случаях материала достаточно
}

// Track the board history in FEN format
let boardHistory = {};

// Function to detect threefold repetition
function isThreefoldRepetition() {
    const fen = boardToFEN();

    // Убедитесь, что FEN включает полные данные позиции, включая права рокировки и взятие на проходе
    if (!boardHistory[fen]) {
        boardHistory[fen] = 1;
    } else {
        boardHistory[fen]++;
    }

    return boardHistory[fen] >= 4; // Если позиция встретилась 3 раза, возвращаем true
}

// Обновление истории после каждого хода
function updateHistoryAfterMove() {
    const fen = boardToFEN();
    if (!boardHistory[fen]) {
        boardHistory[fen] = 1;
    } else {
        boardHistory[fen]++;
    }
}



// Track the number of halfmoves since the last pawn move or capture
let halfmoveClock = 0;

// Function to detect fifty-move rule
function isFiftyMoveRule() {
    return halfmoveClock >= 100; // 100 halfmoves = 50 full moves
}

// Update halfmove clock after each move
function updateHalfmoveClock(piece, target) {
    if (piece.toLowerCase() === 'p' || target) {
        halfmoveClock = 0; // Reset halfmove clock on pawn move or capture
    } else {
        halfmoveClock++;
    }
}



// Initialize Stockfish as a web worker
let stockfish = new Worker('/src/assets/public/resources/engine/stockfish-16.1-single.js');

// Log Stockfish responses
// Helper function to convert the board state to FEN
function boardToFEN() {
let fen = "";
for (let row = 0; row < 8; row++) {
    let empty = 0;
    for (let col = 0; col < 8; col++) {
        const piece = initialBoardState[row][col];
        if (!piece) {
            empty++;
        } else {
            if (empty > 0) {
                fen += empty;
                empty = 0;
            }
            fen += piece;
        }
    }
    if (empty > 0) {
        fen += empty;
    }
    if (row < 7) {
        fen += "/";
    }
}

// Добавляем активного игрока и права рокировки
fen += ` ${currentPlayer === 'white' ? 'w' : 'b'} `;

// Определяем права рокировки
let castlingRights = '';
if (!hasKingMoved.white) {
    if (!hasRookMoved.whiteKingside) castlingRights += 'K';
    if (!hasRookMoved.whiteQueenside) castlingRights += 'Q';
}
if (!hasKingMoved.black) {
    if (!hasRookMoved.blackKingside) castlingRights += 'k';
    if (!hasRookMoved.blackQueenside) castlingRights += 'q';
}
fen += castlingRights || '-';

// Добавляем взятие на проходе
fen += ` - 0 1`;

return fen;
}






// Функция для конвертации массива ходов в строку PGN

// Initialize Stockfish


// Function to ask Stockfish for the best move
function getBestMove(fen, callback) {
    stockfish.postMessage("uci");
    stockfish.postMessage(`position fen ${fen}`);
    stockfish.postMessage("go depth " + settings.botLevel);

    stockfish.onmessage = function(event) {
        const message = event.data;
        if (message.startsWith("bestmove")) {
            const bestMove = message.split(" ")[1];
            callback(bestMove); // Send best move back to the callback
        }
    };
}


// Convert UCI move (e.g., "e2e4") into board coordinates
function uciToMove(uci) {
    const cols = { 'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7 };
    const fromCol = cols[uci[0]];
    const fromRow = 8 - parseInt(uci[1]);
    const toCol = cols[uci[2]];
    const toRow = 8 - parseInt(uci[3]);
    return { fromRow, fromCol, toRow, toCol };
}





let customPieces = [
    { piece: 'P', image: '/src/assets/public/resources/pieces/white/pawn.svg' },
    { piece: 'p', image: '/src/assets/public/resources/pieces/black/pawn2.svg' },
    { piece: 'R',  image: '/src/assets/public/resources/pieces/white/rook.svg' },
    { piece: 'R1',   image: '/src/assets/public/resources/pieces/white/rook.svg' },
    { piece: 'r',  image: '/src/assets/public/resources/pieces/black/rook2.svg' },
    { piece: 'r1', image: '/src/assets/public/resources/pieces/black/rook2.svg' },
    { piece: 'N',  image: '/src/assets/public/resources/pieces/white/knight.svg' },
    { piece: 'N1',   image: '/src/assets/public/resources/pieces/white/knight.svg' },
    { piece: 'n', image:'/src/assets/public/resources/pieces/black/knight2.svg' },
    { piece: 'n1',   image:'/src/assets/public/resources/pieces/black/knight2.svg' },
    { piece: 'B',  image: '/src/assets/public/resources/pieces/white/bishop.svg'},
    { piece: 'B1',   image: '/src/assets/public/resources/pieces/white/bishop.svg'},
    { piece: 'b', image: '/src/assets/public/resources/pieces/black/bishop2.svg' },
    { piece: 'b1',  image: '/src/assets/public/resources/pieces/black/bishop2.svg' },
    { piece: 'Q', image:'/src/assets/public/resources/pieces/white/queen.svg'},
    { piece: 'q',  image: '/src/assets/public/resources/pieces/black/queen2.svg' },
    { piece: 'K', image: '/src/assets/public/resources/pieces/white/king.svg' },
    { piece: 'k', image: '/src/assets/public/resources/pieces/black/king2.svg' }
];

let customAttack = [
    { piece: 'P', custom: false, image: '/src/assets/public/resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4', sound: '' },
    { piece: 'p', custom: false, image: '/src/assets/public/resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4', sound: '' },
    { piece: 'R',  custom: false, image: '/src/assets/public/resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4', sound: ''  },
    { piece: 'R1', custom: false,  image: '/src/assets/public/resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4', sound: ''  },
    { piece: 'r', custom: false, image: '/src/assets/public/resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4', sound: ''  },
    { piece: 'r1',custom: false, image: '/src/assets/public/resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4', sound: ''  },
    { piece: 'N', custom: false, image: '/src/assets/public/resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4' , sound: '' },
    { piece: 'N1', custom: false,  image: '/src/assets/public/resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4', sound: ''  },
    { piece: 'n', custom: false,image:'/src/assets/public/resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4', sound: ''  },
    { piece: 'n1', custom: false,  image:'/src/assets/public/resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4', sound: ''  },
    { piece: 'B', custom: false, image: '/src/assets/public/resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4', sound: '' },
    { piece: 'B1', custom: false,  image: '/src/assets/public/resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4', sound: '' },
    { piece: 'b', custom: false,image: '/src/assets/public/resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4', sound: ''  },
    { piece: 'b1', custom: false, image: '/src/assets/public/resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4', sound: ''  },
    { piece: 'Q',custom: false, image:'/src/assets/public/resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4', sound: '' },
    { piece: 'q', custom: false, image: '/src/assets/public/resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4', sound: ''  },
    { piece: 'K', custom: false,image: '/src/assets/public/resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4', sound: ''  },
    { piece: 'k', custom: false, image: '/src/assets/public/resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4', sound: ''  }
]



window.createChessboard = createChessboard;
let useCustomPieces = true;



function applyCustomPieces() {
    customPieces.forEach(({ piece, row, col, image }) => {
        // Find the tile for the custom piece based on its current position
        const pieceTile = document.querySelector(`.tile[data-row="${row}"][data-col="${col}"] .piece`);
        
        // If the piece exists in that position, replace it with the custom image
        if (pieceTile) {
            pieceTile.innerHTML = ''; // Clear the existing content
            const imgElement = document.createElement('img');
            imgElement.src = image; // Set the custom image
            imgElement.alt = piece;
            imgElement.style.width = '100px'; // Adjust the size to match other pieces
            imgElement.style.height = '100px'; // Adjust the size to match other pieces

            // Add the custom image to the piece's tile
            pieceTile.appendChild(imgElement);
        }
    });
}


// Function to load a FEN string and update the board

function loadFEN(fen) {
    const [position, activeColor, castlingRights, enPassantSquare] = fen.split(' '); // Split FEN fields
    
    // Clear the current board
    initialBoardState = Array(8).fill(null).map(() => Array(8).fill(null));

    let row = 0;
    let col = 0;

    // Loop through the position part of the FEN
    for (const char of position) {
        if (char === '/') {
            row++; // Move to the next row
            col = 0; // Reset column
        } else if (!isNaN(char)) {
            // Empty squares (a number indicates consecutive empty squares)
            col += parseInt(char);
        } else {
            // Check for white bishop ('B') and assign B1 if it's on a white square
            if (char === 'B') {
                // Белые клетки имеют чётную сумму индексов строки и столбца
                if ((row + col) % 2 === 0) {
                    initialBoardState[row][col] = 'B';  // Белый белопольный слон
                } else {
                    initialBoardState[row][col] = 'B';   // Белый чернопольный слон
                }
                
            } 
            
            else {
                // Set the piece on the board for other types
                initialBoardState[row][col] = char;
            }
            col++;
        }
    }

    // Set the current player

    currentPlayer = activeColor === 'w' ? 'white' : 'black';

    isPlayerTurn = currentPlayer !== bot;


    

    // Set castling rights
    if (castlingRights && castlingRights !== '-') {
        hasKingMoved.white = !castlingRights.includes('K') && !castlingRights.includes('Q');
        hasRookMoved.whiteKingside = !castlingRights.includes('K');
        hasRookMoved.whiteQueenside = !castlingRights.includes('Q');
        hasKingMoved.black = !castlingRights.includes('k') && !castlingRights.includes('q');
        hasRookMoved.blackKingside = !castlingRights.includes('k');
        hasRookMoved.blackQueenside = !castlingRights.includes('q');
    } else {
        resetCastlingStatus(); // No castling rights in FEN, reset castling status
    }

    // Handle en passant square (the 5th field of the FEN)
// Handle en passant square (the 5th field of the FEN)
    if (enPassantSquare !== '-') {
        const enPassantCol = enPassantSquare.charCodeAt(0) - 'a'.charCodeAt(0); // Convert 'a'-'h' to 0-7
        const enPassantRow = 8 - parseInt(enPassantSquare[1], 10); // Convert FEN row to 0-based index
        
        // Determine the direction based on the opponent's color (since the en passant target is for the capturing pawn)
        const direction = currentPlayer === 'white' ? 1 : -1;
        
        // The pawn that moved two squares is one rank behind the en passant target square
        const pawnRow = enPassantRow + direction;
        const pawnCol = enPassantCol;
        const pawnPiece = initialBoardState[pawnRow][pawnCol];
        
        // Ensure that the piece is indeed a pawn of the opponent
        if (pawnPiece && pawnPiece.toLowerCase() === 'p' && isOpponentPiece(pawnPiece, currentPlayer)) {
            lastPawnMove = { row: pawnRow, col: pawnCol, piece: pawnPiece };
        } else {
            lastPawnMove = null; // No valid pawn found for en passant
        }
    } else {
        lastPawnMove = null; // Reset if no en passant target
    }

    // Re-render the chessboard

    createChessboard();
    // validInterval = setInterval(countDownTimer, 1000);



    // If it's black's turn (Stockfish's turn), make Stockfish move right away
    if (currentPlayer === bot) {
        const fen = boardToFEN(); // Get the updated FEN after loading
        getBestMove(fen, function(bestMove) {
            const { fromRow, fromCol, toRow, toCol } = uciToMove(bestMove);
            movePiece(fromRow, fromCol, toRow, toCol); // Move Stockfish's piece
            switchTurn(); // Switch back to human after the move
        });
    }

}




let moveHistory = [];


function setTime(newTime) {
    time += newTime;
    setTimeout(()=>{
        isInteractionComplete = true;
    },4000)
    return true;
}




let isInteractionComplete = true;
let isLongSkillActive = false;
let watchingLength = null;
function changeStatus(){
    isInteractionComplete = !isInteractionComplete;
}

function watchMoveHistory(length){
    if(moveHistory.length === length) return true;
}

function rootEnemyPiece(isPlayer, power) {
    if (!isPlayer) {
        const pieces = Array.from(document.querySelectorAll('.piece'));
        
        // Фильтруем фигуры игрока, исключая короля
        const playerPieces = pieces.filter(piece => {
            const pieceType = piece.dataset.type; // Получаем тип фигуры, например, 'P', 'N', 'R', 'B', 'Q', 'K'
            return isPlayerPiece(pieceType) && pieceType.toUpperCase() !== 'K'; // Исключаем короля ('K')
        });
        
        // Проверяем, есть ли фигуры, кроме короля
        if (playerPieces.length > 0) {
            // Выбираем случайную фигуру
            const randomPiece = playerPieces[Math.floor(Math.random() * playerPieces.length)];
            
            // Выводим выбранную фигуру в консоль
            // isRestrictedPiece = randomPiece.dataset.id.toUpperCase();

            const matchingPiece = Array.from(pieces).find(piece => {
                return piece.dataset.id === randomPiece.dataset.id.toUpperCase();
            });
        

            isRestrictedPiece = matchingPiece;
            const imgRoot = document.createElement('img');
            imgRoot.src = '/src/assets/public/resources/Skills/Skills/cobweb.svg';
            imgRoot.loading = 'lazy';
            imgRoot.style.width = '110px';
            imgRoot.style.height = '167px';   
            imgRoot.style.position = 'absolute';
            imgRoot.style.zIndex = '9003';
            imgRoot.id = 'after-skill-effect';
            matchingPiece.appendChild(imgRoot);
           
            isLongSkillActive = true;
            watchingLength = moveHistory.length + power;
            return true;
        } else {
           return false;
        }
    }
}





let startingFEN = '';

if(startingFEN){
    loadFEN(startingFEN)
}
else{
    resetCastlingStatus();
    window.addEventListener('load', () => {
        createChessboard();
        setTimeout(()=>{
            highlightKingInCheck();
        },200)
       
    });
    validInterval = setInterval(countDownTimer, 1000);
   
}
    
// Initialize the chessboard and reset castling status

if(currentPlayer === 'black' && !startingFEN){
    switchTurn(); 
}



// enableTutorialMode();
    }}
</script>

<style>
body {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0;
    padding: 0;
    height: 100%;
    width: 100vw;
    background: rgb(21, 21, 21);
  
    overflow-y: hidden;
    /* background-image: url('/src/assets/public/resources/backgrounds/N97CMVWEAFDVPX4ADRVZ6EEWG0.jpeg'); */
    background-position: center;
    background-size: cover;
}


#settings-menu{
    position: fixed;
    
    width: 30%;
    height: 100%;
    right: 0;
    background-color: #1b1b1b;
}

#settings-menu h1{ 
    font-size: medium;
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-align: center;
    padding-top: 0.5rem;
}

#settings{
    width: 3rem;
    height: 3rem;
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 1rem;
}

.chessboard {
    /* display: grid; */
    grid-template-columns: repeat(8, 120px);
    grid-template-rows: repeat(8, 120px);
    gap: 20px;
    perspective: 2500px; 
    /* transform: rotateX(20deg) scale(1.6) rotateZ(0deg);  */
    transform-style: preserve-3d;
    transition: transform 0.2s ease-out;
    z-index: 40;
    transform: rotateX(5deg) scale(0.6) rotateZ(0deg) ; 
    will-change: transform;
    backface-visibility: hidden;
    margin-top: 1rem;
    /* animation: scaleDown 10s ease-in-out forwards;  */
}



/* Анимация плавного изменения масштаба */
@keyframes scaleDown {
    from {
       transform: rotateX(40deg) scale(1.6) rotateZ(0deg); 
    }
    to {
        transform: rotateX(10deg) scale(1) rotateZ(0deg); 
    }
}


.container {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* perspective: 1000px;  */
    transform-style: preserve-3d;
   
}

.videoLayer{
    z-index: 50000;
    
}


.tile {
    position: relative;
    width: 120px;
    height: 120px;
    transition: transform 0.3s ease;
    will-change: transform;
    transform-style: preserve-3d;
  
    animation: none;
 
}

.on-lower-plane{
    
    /* animation: randomBounce 5s infinite ease-in-out;
    animation-delay: var(--delay); */
}


.tile.on-lower-plane .front {
    /* box-shadow: 0px 0px 48px 20px rgba(0,0,0,0.61); */
    /* transition: box-shadow 0.3s ease-in-out; */


 
}


.on-lower-plane.no-bounce {
    animation: none;
}




.pause{
    animation-play-state: paused;
}

@keyframes rotateTileLower {
    0% {
        transform: translateZ(-80px);
    }
    50% {
        transform: translateZ(-60px);
    }
    100% {
        transform: translateZ(-80px);
    }
}


.tile-animation{
    animation: rotateTileLower 6s ease-in-out infinite; 
    animation-play-state: running;
}

.pause {
    animation-play-state: paused;
  
}

.no-animation{
    animation: none;
   
}




.hover-border{
    position: absolute;
    top: 0;
    left: -1px;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    pointer-events: all; 
    transform-style: preserve-3d;
    


}

.tile.on-lower-plane .hover-border:hover{
    border-color: rgb(255, 255, 255);
    filter: drop-shadow(0px 0px 5px rgb(164, 79, 255));
}








.tile:hover{
    /* transform: translateZ(40px); */
}


.face {
    position: absolute;
    width: 120px;
    height: 120px;
    background-color: #ffffff;
    transition: filter 1s ease-in-out;;
  
    /* box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);  */
}

.front {
    transform: translateZ(60px);
    background-color: rgb(62, 83, 64);
    /* box-shadow: 0px 0px 10px 4px rgba(255, 255, 255, 0.5); */
  
    /* box-shadow: 0px 0px 17px 21px rgba(47, 47, 47, 0.7); */
    transition: border 0.5s ease;
     
}
.back {
    transform: rotateY(180deg) translateZ(60px);
    background-color: rgb(51, 51, 51); 
   
 
  
}
.left {
    transform: rotateY(-90deg) translateZ(60px);
    background-color: rgb(230, 230, 230);
  
   
}
.right {
    transform: rotateY(90deg) translateZ(60px);
    background-color: rgb(230, 230, 230);
   
   
}
.top {
    transform: rotateX(90deg) translateZ(60px);
    background-color: rgb(255, 255, 255);
   
}
.bottom {
    transform: rotateX(-90deg) translateZ(60px);
    background-color: rgb(51, 51, 51);
  
}


/* .tile.on-lower-plane .front {
    filter: drop-shadow(0 0 30px rgba(0, 0, 0, 0.9));
} */
.tile.black{
    box-shadow: none;
}




.skill-char-container{
    position: fixed;
    z-index: 100;
    left: 5rem;
    height: 100%;
    width: 20rem;
    display: flex;
    align-items: center;
}


.divImage{
    width: 100%;
    height: 30rem;
 
}
.character-div-image{
    width: 100%;
    height: 100%;
    transform: scaleX(-1);
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

.divImage img.show {
    opacity: 1; 
}

.divImage img.hide {
    opacity: 0; 
}

.testDiv{
    width: 3rem;
    height: 3rem;
    background-color:#1b1b1b;
    position: absolute;
    z-index: 10000;
    top: -40px;
}

.piece {
    position: absolute;
    top: -60px;
   
    left: -5px;
    width: 130px;
    height: 197px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    z-index: 502; 
    transform: translateZ(75px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1);
    cursor: pointer;
    filter: drop-shadow(0px 0px 10px #000000);
    backface-visibility: hidden;
    transition: opacity 0.35s ease-in-out,filter 1s ease-in-out;
 

  
}

@keyframes randomBounce {
    0%, 100% {
        transform: translateZ(calc(var(--start-z) + var(--amplitude)));
    }
    50% {
        transform: translateZ(var(--start-z));
    }
}

.canvas{
    position: absolute;
    top: -20px;
    left: -35px;
    width: 200px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    z-index: 55002; 
    transform: translateZ(65px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1);
   
}

.canvas-gif{
    position: absolute;
    top: -30px;
    left: 10px;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    z-index: 9002; 
    transform: translateZ(75px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1);
    cursor: pointer;
    filter: drop-shadow(0px 0px 10px #000000);
    backface-visibility: hidden;
    transition: opacity 0.15s ease-in-out;
}

/* .piece::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-40%) translateZ(-1px); 
    width: 50%;
    height: 10px; 
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 50%; 
    filter: blur(5px); 
    z-index: -1;
    transition: opacity 0.5s ease-in-out;
  
} */

img{
    image-rendering: pixelated;
}

* {
    cursor: url('/src/assets/GUI/pointer_scifi_b.svg'), auto;
  }
  

.piece img{
    image-rendering: crisp-edges;
    width: 100%;
    height: 100%;
    opacity: 1;
    z-index: 9002; 
    filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.9));
    transform-style: preserve-3d;
    image-rendering: -webkit-optimize-contrast;
    backface-visibility: hidden;
    image-rendering: pixelated;
    transition: opacity 0.5s ease-in-out;
}

.letter-tip{
    position: absolute;
    z-index: 10250;
    bottom: 0;
    right:  0;
    top: 5rem;
    color: rgb(255, 255, 255);
    font-size: smaller;
    text-shadow: 0px 0px 5px rgb(164, 79, 255);
    opacity: 0;
    transition: opacity 0.5s ease-in;
   
    will-change: transform;
    filter: none; 
}

.letter-tip.visible{
    opacity: 1;
}

.tile:hover .letter-tip{
    opacity: 1;
}


#checkFilter{
    position: fixed;
    top: 0;
    z-index: 100000;
}

.background {
    position: absolute; 
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center; 
    align-items: center;     
    z-index: 10;
    /* perspective: 1000px; */
}



@keyframes rotateCube {
    0% {
        transform: var(--base-transform) translateZ(0px);
    }
    50% {
        transform: var(--base-transform) translateZ(20px);
    }

    100% {
        transform: var(--base-transform) translateZ(0px);
    }
}


.cube {
    width: 80px;
    height: 80px;
    position: relative;
    transform-style: preserve-3d;
    margin: 10px;
    animation: rotateCube 6s ease-in-out infinite; /* Анимация применяется ко всем кубам */
    transform: var(--base-transform); /* Сразу устанавливаем базовую трансформацию */
    will-change: transform; /* Оптимизация для аппаратного ускорения */
    animation-play-state: running; 
  
}


.cube div {
    position: absolute;
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.8);
    /* border: 1px solid #ccc; */
   
 
}

.cube .frontc  { transform: translateZ(40px); }
.cube .backc  { 
    transform: rotateY(180deg) translateZ(40px); 
    box-shadow: 0px 0px 40px 20px rgba(44, 44, 44, 0.35);
   
   
   
   
}
.cube .rightc  { transform: rotateY(90deg) translateZ(40px); }
.cube .leftc  { transform: rotateY(-90deg) translateZ(40px); }
.cube .topc   { transform: rotateX(90deg) translateZ(40px); }
.cube .bottomc { transform: rotateX(-90deg) translateZ(40px);
    /* box-shadow: 0px 0px 20px 20px rgba(44, 44, 44, 0.3); */
}

/* Цвета для чередования */
.blackc { background-color: black !important;
    /* box-shadow: 0 0 20px rgba(65, 65, 65, 0.7);  */
}
.whitec { background-color: white !important; 
    /* box-shadow: 0 0 20px rgba(255, 255, 255, 0.4); */
}



.ui{
    position: relative;
    width: 15rem;
    height: 27rem;
    display: flex;
    flex-direction: column;
    padding-top: 3rem;
    padding-right: 0.5rem;

   
}

.ui-container{
    position: fixed;
    width: 18rem;
    height: 100%;
    z-index: 100;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: end;
}

img{
 
    shape-rendering: geometricPrecision;
    z-index: 1000;
    
}
.timer{
    width: 15rem;
    height: 5rem;
    /* background-color: #121212; */
    position: fixed;
    top: 0;
    padding-right: 3rem;
/*  
    border-top-left-radius: 1rem; */
    /* border-bottom-left-radius: 1rem; */
    /* border-bottom: 1px solid snow; */
    display: flex;
    justify-content: end;
    align-items: center;
    /* clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%); */
}
.timer-numbers{
    color: white;
    filter: drop-shadow(0px 0px 2px white);
    font-size: x-large;
    letter-spacing: 4px;

}


.char{
    position: relative;
    width: 100%;
    height: 7rem;
    display: flex;
    justify-content: end;
    align-items:end;
    border: 1px solid white;
    border-top-left-radius: 1em;
    margin-bottom: 2rem;
    box-shadow: inset 0px 0px 30px -16px rgba(255,255,255,0.99);
}
.char img{
    width: 9rem;
    height: 10rem;
    filter: drop-shadow(5px 5px 10px #000000);
}


@keyframes background-move {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }



.player-container{
    position: fixed;
    
    margin-top: 15rem;
    margin-left: 1rem;
    left: 0;
    width: 20rem;
    height: 7rem;
    z-index: 100;
   


}


.player-capture{
    width: 100%;
    height: 100%;
    position: relative;
    display: grid;
    grid-template-columns: repeat(8, 1.5rem);
    grid-template-rows: repeat(2, 3rem);

   
}

.player-capture img{
    width: 3rem;
    height: 2.5rem;
    margin: 0;
    align-self: center;
    filter: drop-shadow(0px 0px 5px rgb(6, 6, 6))

}



.enemy-container{
    position: fixed;
   
    left: 0;
    width: 20rem;
    height: 7rem;
    margin-bottom: 15rem;
    margin-left: 1rem ;
    z-index: 100;
   


}

.enemy-capture{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(8, 1.5rem);
    grid-template-rows: repeat(2, 3rem);

}


.enemy-capture img{
    width: 3rem;
    height: 2.5rem;
    margin: 0;
    align-self: center;
    filter: drop-shadow(0px 0px 5px rgb(6, 6, 6))

}

#currentPlayer{
    position: fixed;
    left: 0;
    top: 0;
    margin-top: 2rem;
    margin-left: 2rem;
}

#currentPlayer img{
    width: 2rem;
    height: 2rem;
}

.cards-button{
    position: fixed;
    left: 0;
    width: 3rem;
    height: 3rem;
    background-color: rgb(208, 208, 208);
    clip-path: polygon(68.69% 79.28%, 0% 100%, 0% 0%, 68.69% 18.62%);
    z-index: 1000;
    display: flex;
    align-items: center;


}

.cards-inner{
    position: absolute;
    width: 2.5rem;
    height: 2.5rem;
    background-color: rgb(22, 22, 22);
    clip-path: polygon(68.69% 79.28%, 0% 100%, 0% 0%, 68.69% 18.62%);
    left: 0;
}


.cards-container{
    position: fixed;
    width: 100%;
    height: 100%;
    inset: 0;
    z-index: 101;
    /* background-color: rgba(0, 0, 0, 0.5); */
    backdrop-filter: blur(2px);
    display: none;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}

.desc-container{
    position: fixed;
    width: 100%;
    height: 100%;
    inset: 0;
    z-index: 5000;
    /* background-color: rgba(0, 0, 0, 0.5); */
    backdrop-filter: blur(2px);
    display: none;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}
.sub-container{

    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
   
}

.left-side{
    width: 50%;
    height: 100%;
    padding-left: 5rem;
    padding-top: 20rem;
    color: white;
    display: flex;
    justify-content: end;
   
}


.desc-btn{
    width: 5rem;
    height: 5rem;
    border: 0rem solid white;
    border-radius: 5rem;
    margin-left: 1rem;
    margin-top: 1rem;
 
 
}
.desc-btn div{
    width: 100%;
    height: 100%;
    background-color: #1b1b1b;
    color: white;
    border-radius: 5rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn-cont{
    width: 25rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
}
.right-side{
    width: 50%;
    height: 100%;
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4948354341736695) 13%, rgba(0,0,0,0.727328431372549) 37%, rgba(0,0,0,0.73) 100%);
    display: flex;
    justify-content: center;
    align-items: end;
    

}

.right-side-cont{
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    

}

.main-data{
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding-left: 5rem;
   
}

.main-data span{
    color: white;
    font-size:xx-large;

}
.main-data p{
    color: white;
    font-size:larger;

}
.detailed-data{
    width: 100%;
    height: 80%;
   
    padding-left: 3rem;
    display: flex;
    flex-direction: column;
    
    justify-content: start;
}

.detailed-data span{
    color: rgba(255, 255, 255, 0.49);
    font-size:large;
    align-self: center;
    
}

.detailed-data ul{
    align-self: start;
    padding: 0;
    color: white;
    list-style-type: none;

}
.detailed-data ul p{

    color: white;
    display: flex;
    flex-direction: column;
    align-items: start;
    

}
.detailed-data li{
    align-items: center;
}

.detailed-data ul p span{
    color: white;
    align-self: self-start;
}

.detailed-data img{
    margin-right: 1rem;

}

.energy-demand-text{
    margin-top: 0.3rem !important;
    font-size:medium !important;
    color: rgba(255, 255, 255, 0.757) !important;
}
.data-bonus-desc{
    margin-top: 0.3rem !important;
    font-size:medium !important;
    color: rgba(255, 255, 255, 0.757) !important; 
}
#desc-cont{
    justify-content: center;
    align-items: center;
   
}

#crd-cont {
    position: fixed;

    inset: 0;
    display: none;
    opacity: 0;
    transition: opacity 0.5s;
    z-index: 101;
    overflow: hidden;
    width: 100%;
    justify-content: center;
}

.slider {
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
}

.slides {
    display: flex;
}

.card {
    flex-shrink: 0;
    width: calc(33.33% - 250px);
    height: 20rem;
    margin: 0 25px;
    text-align: center;
    background-color: #1b1b1b;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 10px;
    color: white;
    user-select: none;
}


.card img{
    width: 100%;
    height: 100%;
    pointer-events: none;
    -webkit-user-drag: none;
}



#end-screen{
    position: fixed;
    inset: 0;
    display: none;
    align-items: center;
    z-index: 2000;
}

.black-banner{
    width: 100%;
    height: 20rem;
    background-color: rgba(0, 0, 0, 0.798);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: opacity ease-in;
    animation: smoothAppear 2s ease-in;
   
}

@keyframes smoothAppear {
    0% {
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}


#end-images{
    width: 30rem;
    height: 50%;
    position: relative;
    display: flex;
    justify-content: center;
}

#end-images img{
    position: absolute;
    top: -7rem;
    width: 40rem;
    height: 20rem;
}

#end-button{
    width: 30rem;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: start;
    margin-top: 4rem;
    margin-right: 0.5rem;
}

#end-button button{
    margin-left: 1rem;
    width: 10rem;
    height: 3rem;
    background-color: rgb(20, 20, 20);
    border: 0.1rem solid aliceblue;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 10px 3px white;
}

#end-button button:hover{
    background: rgb(173, 146, 255);
}

#end-button button:active{
    background: rgb(106, 61, 242);
}
#end-button button img{
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 0.5rem;
}


.numberToPress{
    position: absolute;
    color: wheat;
    background-color: #1b1b1b;
    width: 2rem;
    height: 2rem;
    border-radius: 2rem;
    bottom: -1rem;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3000;
    filter: drop-shadow(0px 0px 2px black);
}

.altToPress{
    position: absolute;
    color: wheat;
    background-color: #1b1b1b;
    width: 2rem;
    height: 2rem;
    border-radius: 2rem;
    bottom: -1rem;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3000;
    filter: drop-shadow(0px 0px 2px black);
}

.current-energy{
    width: 15rem;
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
}

.energy-number{
    color: white;
   
    font-size: larger;
    filter: drop-shadow(0px 0px 5px rgb(0, 0, 0));
    z-index: 100;



}

.energy-number-tutor{
    color: white;
   
    font-size: larger;
    filter: drop-shadow(0px 0px 5px rgb(0, 0, 0));
    z-index: 100;



}
.energy-circle{
    width: 14rem;
    height: 2rem;

    border: 0.2rem solid white;
    position: relative;
    overflow: hidden;
    display: flex;

    justify-content: start;
    align-items: center;

}

.energy-circle img{
    width: 2rem;
    height: 2rem;
}

.energy{
    position: absolute;
    bottom: 0;
    width: 100%;
    /* background-color: rgb(147, 129, 255); */
    height: 100%; /* Начальное заполнение 0% */
    transition: height 0.5s;
    
}


.energy-circle-tutor{
    width: 14rem;
    height: 2rem;

    border: 0.2rem solid white;
    position: relative;
    overflow: hidden;
    display: flex;

    justify-content: start;
    align-items: center;

}

.energy-circle-tutor img{
    width: 2rem;
    height: 2rem;
}

.energy-tutor{
    position: absolute;
    bottom: 0;
    width: 100%;
    /* background-color: rgb(147, 129, 255); */
    height: 100%; /* Начальное заполнение 0% */
    transition: height 0.5s;
    
}


.wave-tutor {
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 300%; /* Ширина в два раза больше для плавности анимации */
    height: 300px;
    transition: width 0.5s ease;
}

.wave-tutor svg {
    width: 100%;
    height: 100%;
}


.wave-tutor path {
    fill:  rgb(147, 129, 255); /* Цвет волны */
    animation: wave-animation 4s infinite linear; /* Анимация волны */
}


.wave {
            position: absolute;
            /* bottom: -20px; */
            left: 0;
            width: 100%; /* Ширина в два раза больше для плавности анимации */
            height: 100%;
            transition: width 0.5s ease;
          
}

.wave div {
            width: 100%;
            height: 100%;
            background-color:  rgb(147, 129, 255);
}


.wave path {
            fill:  rgb(147, 129, 255); /* Цвет волны */
            animation: wave-animation 4s infinite linear; /* Анимация волны */
}


.tutor-cont{
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 6000;
}

.tutor-block{
    position: fixed;
    inset: 0;


    display: flex;
    align-items: center;
    justify-content: center;

}

.tutor-slide{
    width: 100%;
    height: 100%;
    display: flex;
    color: white;
    text-align: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: larger;
}

.slide1{
    position: absolute;
    bottom: 0;
    display: flex;
}

.slide2{
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    margin-top: 4rem;
}
.slide3{
    position: absolute;
    top: 0;
    display: flex;
    inset: 0;
    justify-content: center;
    align-items: start;


}

.slide3 .right-box{
    justify-content: center;
    display: flex;
}
.slide3 .right-box button{
    position: static;
}
.slide3 .left-box{
    justify-content: center;
}

.slide1 img{
    transform: scaleX(-1);
}





#loading-screen {
    position: fixed;
    inset: 0;
    background-color: black;
    z-index: 1000; /* Убедитесь, что он выше всех остальных элементов */
    opacity: 1;
    transition: opacity 1s ease-in-out;
}
#chessboard {
    display: none; /* Скрываем шахматную доску по умолчанию */
}

#moveTutor{
    inset: 0;
    pointer-events: none;
    z-index: 60000;

}

#enemyArrival{
    inset: 0;
    pointer-events: all;
    z-index: 60000;
}

.fullscreen-overlay-chars {
 
    background-color: rgba(0, 0, 0, 0.623);
    mask-image: linear-gradient(white, white), linear-gradient(white, white);
    mask-size: calc(100% - 17rem) 100%, 100% calc(100% - 30rem);
    mask-position: bottom left, bottom left;
    mask-repeat: no-repeat;
}




.moveTutor1 {
    width: 40rem;
    height: auto; /* Позволяет контейнеру расширяться по высоте */
    min-height: 10rem; /* Ограничивает высоту, если необходимо */
    background-color: #1d1d1d;
    color: rgb(255, 255, 255);
    border-radius: 2rem;
    position: fixed;
    top: 0;
    right: 0;
    margin-top: 2rem;
    margin-right: 2rem;
    display: flex;
    border: 0.1rem solid wheat;
    filter: drop-shadow(0px 1px 5px black);
    padding: 1rem; /* Внутренние отступы для визуального оформления */
    overflow: hidden; /* Убирает прокрутку, если текст выходит за пределы */
}

.enemyTutor1 {
    inset: 0;
    display: flex;
    color: white;
    text-align: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: larger;
    position: absolute;
   


    margin-top: 4rem;
}

.next-move-slide{
    width: 15rem;
    height: 3rem;
    border-radius: 2rem;
    border: 0px solid white;
    background-color: rgb(16, 16, 16);
    color: #f5deb3;
    font-size: large;
    display: flex;
    justify-content: center;
    align-items: center;

}

.next-move-slide img{
    width: 1rem;
    height: 1rem;
    margin-left: 0.5rem;
}
.next-move-slide:hover{
    background-color: #f5deb3;
}
.moveTutor1 div {
    width: 100%;
   
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: x-large;
    padding: 0 2rem;
    white-space: normal; /* Позволяет перенос текста на новую строку */
    overflow-wrap: break-word; /* Переносит длинные слова на следующую строку */
  
}

.moveTutor1 p {
    margin: 0; /* Убираем внешние отступы для текста */
    color: white;
}

.dialogue-box{
    width: 40rem;
    height: 15rem;
    background-color: #ffffff;
    color: black;
    border-radius: 2rem;
    position: absolute;
    
    display: flex;
    flex-direction: column;
    border: 0.1rem solid wheat;
    filter: drop-shadow(0px 1px 5px black);
}

.left-box{
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: larger;
    padding-left: 2rem;
   
}
.right-box{
    width: 100%;
    height: 50%;
    padding: 0;
    position: relative;
}
.right-box button img{
    width: 1rem;
    height: 1rem;
    transform: scaleX(1);
    margin-left: 0.5rem;
}

.right-box button{
    position: absolute;
    bottom: 0;
    right: 0;
    margin-bottom: 1rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.tutor-img{
    width: 35rem;
    height: 35rem;
    
}
.slide2 img{
    width: 25rem;
    height: 25rem;
    transform: scaleX(-1);
}

.next-tutor-slide{
    width: 10rem;
    height: 3rem;
    border-radius: 2rem;
    border: 0px solid white;
    background-color: rgb(16, 16, 16);
    color: #f5deb3;

}
.next-tutor-slide:hover{
    background-color: rgb(23, 23, 23);
}
.next-tutor-slid:active{
    background-color: rgb(58, 58, 58);
}








</style>