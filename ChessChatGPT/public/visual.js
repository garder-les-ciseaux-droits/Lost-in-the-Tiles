function seededRandom(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

// Предварительная генерация и кэширование случайных данных для кубов
function generateCubeData(rows, cols, seed) {
    const data = [];
    let cubeIndex = 0;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const skipValue = seededRandom(seed + row * cols + col);

            if (skipValue > 0.2) {
                const isBlack = (row + col) % 2 === 0;
                const heightSeed = seed + row * cols + col + 1000;
                const height = seededRandom(heightSeed) * 200 - 100;

                const offsetXSeed = seed + row * cols + col + 2000;
                const offsetZSeed = seed + row * cols + col + 3000;
                const offsetX = seededRandom(offsetXSeed) * 70 - 35;
                const offsetZ = seededRandom(offsetZSeed) * 70 - 35;

                // Определяем, должен ли этот куб быть меньше (30% вероятность)
                const sizeFactor = seededRandom(seed + row * cols + col + 4000) < 0.3 ? 0.7 : 1.0; // 30% вероятность быть меньше

                data.push({ isBlack, height, offsetX, offsetZ, index: cubeIndex, sizeFactor });
                cubeIndex++;
            }
        }
    }

    return data;
}




// Функция для создания шахматного куба с сохранением трансформаций через CSS-переменные
function createChessCube(isBlack, height, offsetX, offsetZ, index, sizeFactor) {
    const cube = document.createElement('div');
    cube.classList.add('cube');

    // Устанавливаем размер куба (если sizeFactor меньше 1, куб будет уменьшен)
    const cubeSize = 80 * sizeFactor;
    cube.style.width = `${cubeSize}px`;
    cube.style.height = `${cubeSize}px`;

    // Используем CSS-переменные для базовой трансформации
    const baseTransform = `rotateX(10deg) translateY(${height}px) translateX(${offsetX}px) translateZ(${offsetZ}px)`;
    cube.style.setProperty('--base-transform', baseTransform);
    cube.style.transform = baseTransform;
    cube.style.animationDelay = `${index * 0.1}s`; // Задержка для каждого куба

    // Уменьшаем translateZ для граней куба
    const faces = ['frontc', 'backc', 'rightc', 'leftc', 'topc', 'bottomc'];
    faces.forEach(face => {
        const side = document.createElement('div');
        side.classList.add(face);
        side.classList.add(isBlack ? 'blackc' : 'whitec');
        side.style.width = `${cubeSize}px`;
        side.style.height = `${cubeSize}px`;

        // Корректируем translateZ в зависимости от размера куба
        if (face === 'frontc' || face === 'backc') {
            side.style.transform = `translateZ(${cubeSize / 2}px)`;
        } else if (face === 'topc' || face === 'bottomc') {
            side.style.transform = `rotateX(5deg) translateZ(${cubeSize / 2}px)`;
        } else if (face === 'leftc' || face === 'rightc') {
            side.style.transform = `rotateX(5deg) translateZ(${cubeSize / 2}px)`;
        }

        cube.appendChild(side);
    });

    return cube;
}

// Асинхронная генерация кубов с использованием requestAnimationFrame
function createCubesInBackground(seed, rows = 8, cols = 8) {
    const background = document.querySelector('.background');
    const cubeData = generateCubeData(rows, cols, seed);
    const fragment = document.createDocumentFragment();
    let currentIndex = 0;

    function generateBatch() {
        const batchSize = 10; // Сколько кубов создавать за один кадр
        for (let i = 0; i < batchSize && currentIndex < cubeData.length; i++) {
            const { isBlack, height, offsetX, offsetZ, index, sizeFactor } = cubeData[currentIndex];
            const cube = createChessCube(isBlack, height, offsetX, offsetZ, index, sizeFactor);
            fragment.appendChild(cube);
            currentIndex++;
        }

        if (currentIndex < cubeData.length) {
            requestAnimationFrame(generateBatch); 
        } else {
            background.appendChild(fragment); 
        }
    }

    requestAnimationFrame(generateBatch);
}

// Запуск функции
const seed = 42;
// createCubesInBackground(seed);

const chessboard1 = document.getElementById('chessboard');
chessboard1.addEventListener('animationend', () => {
    chessboard1.style.animation = 'none'; 
});

window.addEventListener('load', () => {
        let newTransform = null
        const chessboard = document.getElementById('chessboard');
        let isDragging = false;
        let isDragginBoard = false;
        let startX = 0;
        let startY = 0;
        let currentRotateZ = 0; 
        let currentRotateX = 20;
        let scale = 1;
        let initialLeft, initialTop;
        let buffer = 300; 

        function centerChessboard() {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const chessboard = document.getElementById('chessboard');
        
            // Вычисляем центр экрана
            const centerX = (windowWidth - chessboard.offsetWidth) / 2;
            const centerY = (windowHeight - chessboard.offsetHeight) / 2;
        
            // Устанавливаем положение доски по центру
            chessboard.style.position = 'absolute';
            chessboard.style.left = `${centerX}px`;
            chessboard.style.top = `${centerY}px`;
           
           
        }   
        setTimeout(() =>{ centerChessboard();},2000)
        centerChessboard();
  
        chessboard.addEventListener('mousedown', (e) => {
            if(e.shiftKey){
                isDragginBoard = true;
                startX = e.clientX;
                startY = e.clientY;
        
                
                const rect = chessboard.getBoundingClientRect();

                const computedStyle = window.getComputedStyle(chessboard);
                initialLeft = parseFloat(computedStyle.left) || rect.left - 10;
                initialTop = parseFloat(computedStyle.top) || rect.top - 20;
        
                e.preventDefault();
            }
            else{

                isDragging = true;
                startX = e.clientX; // Начальная позиция мыши по оси X
                startY = e.clientY; // Начальная позиция мыши по оси Y
                chessboard.style.transition = 'none'; // Отключаем плавность при начале перетаскивания
            }
        });


        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
        
                const deltaX = e.clientX - startX; 
                const deltaY = e.clientY - startY; 
        
                const newRotateX = Math.min(60, Math.max(0, currentRotateX - deltaY * 0.1));
        
                // Определяем диапазоны значений
                const minRotateX = 0;
                const maxRotateX = 60;
        
                const minTranslation = 65;
                const maxTranslation = 85; // Вы можете настроить максимальное значение по своему усмотрению
        
                const minRotateForPiece = 0;
                const maxRotateForPiece = 45; // Настройте по необходимости
        
                // Нормализуем newRotateX в диапазон от 0 до 1
                const t = (newRotateX - minRotateX) / (maxRotateX - minRotateX);
        
                // Плавно изменяем translation в зависимости от newRotateX
                const translation = minTranslation + t * (maxTranslation - minTranslation);
        
                // Плавно изменяем rotateForPiece в зависимости от newRotateX
                const rotateForPiece = minRotateForPiece + t * (maxRotateForPiece - minRotateForPiece);
        
                // Применяем преобразования к фигурам
                // document.querySelectorAll('.piece').forEach(element => {
                //     element.style['pointer-events'] = "none";
                //     element.style['user-select'] = 'none'; 
                //     element.style.transform = `translateZ(${translation}px) rotateX(${-rotateForPiece}deg) rotateY(0deg) rotateZ(0deg) scale(1)`;
                // });
        
                // // Применяем преобразования к доске
                // chessboard.style.transform = `rotateX(${newRotateX}deg) scale(${scale}) rotateZ(0deg)`;
        
            }
            if(isDragginBoard){
 

                    const windowWidth = window.innerWidth;
                    const windowHeight = window.innerHeight;
                
                    const deltaX = e.clientX - startX;
                    const deltaY = e.clientY - startY;
                // Внутри обработчика 'mousemove'
                    let newLeft = initialLeft + deltaX;
                    let newTop = initialTop + deltaY;
                
                // Ограничиваем координаты
                    newLeft = Math.max(-buffer, Math.min(newLeft, windowWidth - chessboard.offsetWidth + buffer));
                    newTop = Math.max(-buffer, Math.min(newTop, windowHeight - chessboard.offsetHeight + buffer));
                

                  
            
                    // Обновляем позицию доски
                    chessboard.style.position = 'absolute';
                    chessboard.style.left = `${newLeft}px`;
                    chessboard.style.top = `${newTop}px`;
            
                    // Предотвращаем действия по умолчанию
                    e.preventDefault();
            }
        });
        

        document.addEventListener('mouseup', (e) => {
            if (isDragging) {
                document.querySelectorAll('.piece').forEach(element => {
                    element.style['pointer-events'] = "auto";
                    element.style['user-select'] = 'text'; 
                });
                isDragging = false;
                const deltaX = e.clientX - startX;
                const deltaY = e.clientY - startY;

                // Обновляем текущее значение углов после отпускания мыши
                currentRotateZ += deltaX * 0.1;
                currentRotateX = Math.min(60, Math.max(0, currentRotateX - deltaY * 0.1));

                // Включаем плавный переход после отпускания мыши
                chessboard.style.transition = 'transform 0.2s ease-out';

 
            }
            if(isDragginBoard){
                isDragginBoard = false;
            }
        });

      
        document.addEventListener('wheel', function(event) {
            if(!isDragging){
                if (event.deltaY < 0) {
                    if(scale <= 2.4){
                        scale += 0.055;
                        buffer += 12;
                        
                        document.getElementById('chessboard').style.transform = `rotateX(0deg) scale(${scale}) rotateZ(0deg)`;
                    }
                
                } else if (event.deltaY > 0) {
                    if(scale >= 0.6){

                        scale -= 0.05;
                        if(buffer > 300) buffer -= 12;

                        if (scale < 1) {
                            centerChessboard();
                        }
                       
                     
                        document.getElementById('chessboard').style.transform = `rotateX(0deg) scale(${scale}) rotateZ(0deg)`;
                    }
                }
            }
        });

        
    
    
})



// Функция для создания гиф элемента
export function createImageElement(src, location) {
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
export function createVideoElement(src, location, width, height) {
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
  export function applyChromaKey(videoElement, location, width, height, top, left) {
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
  