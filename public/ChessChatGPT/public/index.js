
import { addCapturedPiece,  changeEnergy, fillCircle, changeCurrentTurn} from "./timerAndCapture.js";
import { createVideoElement, applyChromaKey } from "./visual.js"
import { startMoveTutorial, isLengthWatching, enemyArrival, isEnemyArrived } from "./tutorial.js";
// import {abilityFunctions} from './ui.js'

// Constants for the chessboard and pieces
const chessboard = document.getElementById('chessboard');
let selectedPiece = null;
let playerSide = 'white';
export let currentPlayer = 'white'; 
let bot = currentPlayer === 'white' ? 'black' : 'white'
let hasKingMoved = { white: false, black: false };
let hasRookMoved = { whiteKingside: false, whiteQueenside: false, blackKingside: false, blackQueenside: false };
let lastPawnMove = null;

export let isPlayerTurn = true; 
let isInputBlocked = false; 

let tileStates = {};
let isRestrictedPiece = null;
export let energy = 100;
fillCircle(energy);

export let isTutorialMode = false;
let isSingleMoveAllowed = false;


export function enableTutorialMode() {
    isTutorialMode = true;
}

export function disableTutorialMode() {
    isTutorialMode = false;
}

export function enableSingleMove() {
   
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


export function decreaseEnergy(value){
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
// let whiteTile = "url('./resources/whiteabove2.png') center center / cover no-repeat, #1b1b1ba8";
let whiteTile = "url('./resources/whiteabove3.png')";
let whiteAnimation = 'none';
let blackAnimation = 'none';
let backgroundSizeWhite = '100% 100%';
let backgroundSizeBlack = '100% 100%';
let blackTile = "url('./resources/blackabove.png') center center / cover no-repeat, #101010";


export function startAudio(isMove, isBattle, isCustom, isStatus, isClick, isClickDenied){
    const audioForTile = document.getElementById('move-tile-sound');
    const battleSoundAudio =  document.getElementById('battle-sound');
    const changeStatus = document.getElementById('changeStatus');
    const clickSound = document.getElementById('click-sound');
    if(isMove){
        audioForTile .src = './resources/Sounds/rocks-sliding-101019 (mp3cut.net).mp3';
        audioForTile .volume = 0.1;
        audioForTile .play();
    }
    if(isBattle){
        if(isCustom){
            battleSoundAudio.src = './resources/Characters/images/allchars/Pacifica/sounds/water_pouring_out_of.mp3';
        }
        else{
            battleSoundAudio.src = './resources/videos/effects/swords_battle.mp3';
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
         clickSound.src = './resources/Sounds/souds/Click_2.wav'
        }
        else{
            clickSound.src = './resources/Sounds/souds/Denied_01.ogg'
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
        audio.src = './resources/Characters/images/allchars/Pacifica/sounds/water_pouring_out_of.mp3';
    }
    else{
        audio.src = './resources/videos/effects/swords_battle.mp3';
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
                startMoveTutorial(false);
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

const startingMinutes = 10;
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
    if(isLengthWatching){
        const isLengthTwo = watchMoveHistory(6);
        const isLengthSix = watchMoveHistory(8);
        if(isLengthTwo && !isEnemyArrived){
            const pieces = document.querySelectorAll('.piece');
            for(let piece of pieces ){
                if(piece.dataset.id === 'q'){
                    const image = piece.querySelector('img');
                    
                    image.style.opacity = 0;
                    enableTutorialMode();
                    setTimeout(()=>{
                        image.src = './resources/SentinelPieces/svg/enemies/enemy-piece-b.svg';
                    },500)
                 
                    setTimeout(()=>{
                        image.style.opacity = 1;
                        const nextButton = document.querySelectorAll('.next-tutor-slide');
                        nextButton.forEach(btn =>{
                            btn.addEventListener('click', () => enemyArrival(false))
                        
                        })
                        enemyArrival(true);
                        setTimeout(()=>{
                            disableTutorialMode();
                        }, 9000)
                    },1000)
                }
            }
        }
        else if(isLengthSix){
            // abilityFunctions["Root enemy piece"];
            document.getElementById('enemyArrival').style.pointerEvents = 'all';
            enemyArrival(false);
            rootEnemyPiece(isPlayerTurn, 4);
            const audio = document.querySelector('#enemyAVB');
            audio.volume = 0.5;
            audio.play();
            setTimeout(() => { 

                document.getElementById('enemyArrival').style.pointerEvents = 'none';
            }, 6000)
            
        }
    }

    if(isLongSkillActive){
        const length = watchMoveHistory(watchingLength);
        if(length){
            isRestrictedPiece.querySelector('#after-skill-effect').remove();
            isRestrictedPiece = null;
            isLongSkillActive = false;
           
        }
    }
    
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
let stockfish = new Worker('./resources/engine/stockfish-16.1-single.js');

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
    stockfish.postMessage("go depth 2");

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





export let customPieces = [
    { piece: 'P', image: './resources/pieces/white/pawn.svg' },
    { piece: 'p', image: './resources/pieces/black/pawn2.svg' },
    { piece: 'R',  image: './resources/pieces/white/rook.svg' },
    { piece: 'R1',   image: './resources/pieces/white/rook.svg' },
    { piece: 'r',  image: './resources/pieces/black/rook2.svg' },
    { piece: 'r1', image: './resources/pieces/black/rook2.svg' },
    { piece: 'N',  image: './resources/pieces/white/knight.svg' },
    { piece: 'N1',   image: './resources/pieces/white/knight.svg' },
    { piece: 'n', image:'./resources/pieces/black/knight2.svg' },
    { piece: 'n1',   image:'./resources/pieces/black/knight2.svg' },
    { piece: 'B',  image: './resources/pieces/white/bishop.svg'},
    { piece: 'B1',   image: './resources/pieces/white/bishop.svg'},
    { piece: 'b', image: './resources/pieces/black/bishop2.svg' },
    { piece: 'b1',  image: './resources/pieces/black/bishop2.svg' },
    { piece: 'Q', image:'./resources/pieces/white/queen.svg'},
    { piece: 'q',  image: './resources/pieces/black/queen2.svg' },
    { piece: 'K', image: './resources/pieces/white/king.svg' },
    { piece: 'k', image: './resources/pieces/black/king2.svg' }
];

export let customAttack = [
    { piece: 'P', custom: false, image: './resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4', sound: '' },
    { piece: 'p', custom: false, image: './resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4', sound: '' },
    { piece: 'R',  custom: false, image: './resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4', sound: ''  },
    { piece: 'R1', custom: false,  image: './resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4', sound: ''  },
    { piece: 'r', custom: false, image: './resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4', sound: ''  },
    { piece: 'r1',custom: false, image: './resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4', sound: ''  },
    { piece: 'N', custom: false, image: './resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4' , sound: '' },
    { piece: 'N1', custom: false,  image: './resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4', sound: ''  },
    { piece: 'n', custom: false,image:'./resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4', sound: ''  },
    { piece: 'n1', custom: false,  image:'./resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4', sound: ''  },
    { piece: 'B', custom: false, image: './resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4', sound: '' },
    { piece: 'B1', custom: false,  image: './resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4', sound: '' },
    { piece: 'b', custom: false,image: './resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4', sound: ''  },
    { piece: 'b1', custom: false, image: './resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4', sound: ''  },
    { piece: 'Q',custom: false, image:'./resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4', sound: '' },
    { piece: 'q', custom: false, image: './resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4', sound: ''  },
    { piece: 'K', custom: false,image: './resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4', sound: ''  },
    { piece: 'k', custom: false, image: './resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4', sound: ''  }
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
    validInterval = setInterval(countDownTimer, 1000);



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


export function setTime(newTime) {
    time += newTime;
    setTimeout(()=>{
        isInteractionComplete = true;
    },4000)
    return true;
}




export let isInteractionComplete = true;
let isLongSkillActive = false;
let watchingLength = null;
export function changeStatus(){
    isInteractionComplete = !isInteractionComplete;
}

export function watchMoveHistory(length){
    if(moveHistory.length === length) return true;
}

export function rootEnemyPiece(isPlayer, power) {
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
            imgRoot.src = './resources/Skills/Skills/cobweb.svg';
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





export let startingFEN = '';

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
