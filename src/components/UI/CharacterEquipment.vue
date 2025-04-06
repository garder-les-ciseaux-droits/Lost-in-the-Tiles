<template>
    <div id="equipment-container" class="w-full h-full bg-black/50 fixed backdrop-blur-sm z-[51000] justify-center items-center hidden">
        <div class="tiles" id="tiles">
        </div>

        <button class="fixed top-0 right-0 z-50 mt-6 mr-6">
            <img @click="showList" class="w-12 h-12" src='/src/assets/GUI/chess-svgrepo-com.svg'>
        </button>
        <button @click="hideEquipment" id="hide-equipment"  class="fixed top-0 left-0 w-12 h-12 mt-6 ml-6 flex justify-center items-center z-50">
            <svg class="w-10 h-10 text-white hover:text-[#e8e1d2]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 9L8 12M8 12L11 15M8 12H16M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </button>
        <div v-show="isListShown" class="absolute z-40 w-full h-full flex flex-col items-center space-y-10 backdrop-blur-sm bg-black/50">
            <div class="w-2/3 h-24 mt-6 flex py-4 justify-center space-x-10"> 
                <img @click="filterCharactersByTypes(['R', 'R1'])" class=" w-16 h-16" src="/src/assets/GUI/capturedPieces/rook-svgrepo-com.svg">
                <img  @click="filterCharactersByTypes(['N', 'N1'])" class="  w-16 h-16" src="/src/assets/GUI/capturedPieces/knight-svgrepo-com.svg">
                <img @click="filterCharactersByTypes(['B', 'B1'])" class="  w-16 h-16"  src="/src/assets/GUI/capturedPieces/bishop-svgrepo-com.svg">
                <img @click="filterCharactersByTypes(['Q', 'Q1'])" class="  w-16 h-16"  src="/src/assets/GUI/capturedPieces/queen-svgrepo-com.svg">
                <img @click="filterCharactersByTypes(['K', 'K1'])"  class="  w-16 h-16" src="/src/assets/GUI/capturedPieces/king-svgrepo-com.svg">
            </div>

            <div class="w-2/3 h-full grid grid-cols-6 auto-rows-auto overflow-y-auto gap-6 text-white pb-10 px-10">
                <div class="w-28 h-[8.4rem] border flex justify-center items-center relative rounded-md"  @click="selectCharacter(character)" v-for="character in filteredCharacters"  :key="character.name">
                   <img class="absolute drop-shadow-lg" :src="character.chibiIcon">
                   <div class="w-full h-full bg-indigo-700 rounded-md"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions  } from 'vuex';
export default{
    data(){
        return{
            isListShown: false,
            filteredCharacters: [],
            selectedTileIndex: null, 
            tilesWithCharacters: [],
            typeToTileMap: {  
            'B': 2,
            'R': 0,
            'N': 1,
            'Q': 3,
            'K': 4,
            'R1': 7,
            'B1': 5,
            'N1': 6
        }
        }
    },
    computed:{
        ...mapGetters(['provinces', 'characters', 'playerProfile', 'insertedElement']),
        characters() {
          
            const playerCharacterNames = this.$store.state.playerProfile.characters.map(
            (playerChar) => playerChar.charName
            );
            
        
            return this.$store.state.characters.filter((character) =>
            playerCharacterNames.includes(character.name)
            );
        }
    },
    methods:{
        toggleAnimation() {
            const blackDiv = document.querySelector('.initial');
            blackDiv.classList.toggle('active'); 
        },
        showList(){
            this.clickSound();
            this.isListShown = !this.isListShown;
        },
        filterCharactersByTypes(types) {
            this.filteredCharacters = this.characters.filter((character) =>
                types.includes(character.type)
            );
        },
        createTiles() {
            let whiteTile = "url('/src/assets/whiteabove3.png')";
            let whiteAnimation = 'none';
            let blackAnimation = 'none';
            let backgroundSizeWhite = '100% 100%';
            let backgroundSizeBlack = '100% 100%';
            let blackTile = "url('/src/assets/blackabove.png') center center / cover no-repeat, #101010";
            const tiles = document.getElementById('tiles');
            tiles.innerHTML = ''; 
            

            for (let row = 0; row < 1; row++) {
                for (let col = 0; col < 8; col++) {
                    const tile = document.createElement('div');
                    tile.classList.add('tile-inv');
                    if ((row + col) % 2 === 1) {
                        tile.classList.add('black');
                    }

                  

                    const faces = ['front-inv', 'back-inv', 'left-inv', 'right-inv', 'top-inv', 'bottom-inv'];
                    faces.forEach(face => {
                        const faceDiv = document.createElement('div');
                        faceDiv.classList.add('face-inv', face);
                    
                      
                        if ((row + col) % 2 === 1) {
                            if(face === 'bottom-inv'){
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
                            if (face === 'top-inv' || face === 'front-inv') {
                            
                                faceDiv.style.background = `${whiteTile}`
                                faceDiv.style.backgroundSize = backgroundSizeWhite
                                faceDiv.style.animation = whiteAnimation
                            
                            
                                

                            }   
                            else if(face === 'bottom-inv'){
                            

                                    
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

            
                       tile.style.transform = 'scaleZ(1)'
                    

                        if(tile.classList.contains('black')){
                        
                        
                            tile.querySelector('.front-inv').style.background = `linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%), ${blackTile}`
                            tile.querySelector('.front-inv').style.backgroundSize = backgroundSizeBlack
                        
                        }
                        
                        else{
                        

                            tile.querySelector('.front-inv').style.background = `${whiteTile}`
                            tile.querySelector('.front-inv').style.backgroundSize = backgroundSizeWhite
                        }

                                const randomDelay = Math.random() * 2;
                    const randomDuration = 2 + Math.random();
                    const randomHeight = -5 - Math.random() * 5;

                    // Применяем уникальные параметры для каждой tile
                    tile.style.animation = `floatTile ${randomDuration}s ease-in-out infinite`;
                    tile.style.animationDelay = `${randomDelay}s`;
                    tile.style.setProperty('--float-height', `${randomHeight}px`);
                                        
                    tiles.appendChild(tile);
                }
            }





        },

        hideEquipment(){
            this.clickSound()
            if(this.isListShown){
                this.showList();
            }
          
            document.body.style.pointerEvents = 'none';

            const blackDiv = document.querySelector('.initial');
          
            const profileTab = document.getElementById('profile');

            blackDiv.classList.remove('hidden');
        
           

            setTimeout(() => {
                this.toggleAnimation(); 

            }, 0);

            setTimeout(() => {
                document.getElementById('equipment-container').classList.remove('flex');
                document.getElementById('equipment-container').classList.add('hidden');

                profileTab.style.display = 'flex';
            }, 900);


            setTimeout(() => {
                
                this.toggleAnimation(); 

                setTimeout(()=>{
                   
                    document.body.style.pointerEvents = 'auto';
                   
                        blackDiv.classList.add('hidden');
                    
                },1500)
            }, 1000);
        },
        showEquipment(){
            this.clickSound();
            const blackDiv = document.querySelector('.initial');
            blackDiv.classList.remove('hidden');

            const profileTab = document.getElementById('profile');
            profileTab.style.display = 'none';


            setTimeout(() => {
                
                this.toggleAnimation(); 
            }, 0);


            setTimeout(
                () => {

                    document.getElementById('equipment-container').classList.remove('hidden');
                    document.getElementById('equipment-container').classList.add('flex');
                },900
            )
            setTimeout(() => {
                            
                            this.toggleAnimation(); 
                            setTimeout(() =>{
                                blackDiv.classList.add('hidden');
                            },1500)
            
                            
                
                                      
           }, 1000)


        },
        selectCharacter(character) {
                const tileIndex = this.typeToTileMap[character.type];

                if (tileIndex === undefined) {
                    alert('No tile assigned for this character type');
                    return;
                }

                const tiles = document.getElementById('tiles').children;
                const selectedTile = tiles[tileIndex];

                const previousPiece = selectedTile.querySelector('.piece-inv');
                if (previousPiece) {
                    selectedTile.removeChild(previousPiece);
                }

                const piece = document.createElement('div');
                piece.classList.add('piece-inv');

                piece.dataset.type = character.type;
                piece.setAttribute('draggable', true);

                const imgElement = document.createElement('img');
                imgElement.src = character.chibiIcon;
                imgElement.classList.add('character-image');

                piece.appendChild(imgElement);
                selectedTile.appendChild(piece);

                // Передаем character в dataTransfer при dragstart
                piece.addEventListener('dragstart', (event) => this.handleDragStart(event, character));

                for (let i = 0; i < tiles.length; i++) {
                    const mirroredIndex = 7 - i;
                    tiles[mirroredIndex].addEventListener('dragover', (event) => event.preventDefault());
                    tiles[mirroredIndex].addEventListener('drop', (event) => this.handleDrop(event, i));
                }

                this.showList();
        },

        handleDragStart(event, character) {
            

           
            event.dataTransfer.effectAllowed = "move";
            event.dataTransfer.dropEffect = "none";
            document.body.classList.add('dragging');
            const piece = event.target;
            
            const tiles = document.getElementById('tiles').children;
            let tileIndex;

            // Находим текущий tile, на котором находится piece
            for (let i = 0; i < tiles.length; i++) {
                if (tiles[i].contains(piece)) {
                    tileIndex = i;
                    break;
                }
            }
            piece.classList.add('grabbable')
            // Сохраняем индекс исходного тайла и имя персонажа в dataTransfer
            event.dataTransfer.setData('tileIndex', tileIndex);
            event.dataTransfer.setData('characterName', character.name); // Сохраняем имя персонажа

            const mirroredIndex = 7 - tileIndex;

            // Добавляем класс 'hover-equipment' на зеркальный тайл
            const targetTile = tiles[mirroredIndex];
            targetTile.querySelector('.front-inv').classList.add('hover-equipment');

            event.target.addEventListener('dragend', () => this.handleDragEnd(mirroredIndex));
           
        },

        handleDragEnd(mirroredIndex) {
          
            const tiles = document.getElementById('tiles').children;
            const targetTile = tiles[mirroredIndex];

            // Убираем класс 'hover-equipment' с зеркального тайла при завершении перетаскивания
            targetTile.querySelector('.front-inv').classList.remove('hover-equipment');
        },

        handleDrop(event, draggedTileIndex) {
            event.preventDefault();
            event.dataTransfer.dropEffect = "move"
            document.body.classList.remove('dragging');
            const tiles = document.getElementById('tiles').children;
            const mirroredIndex = 7 - draggedTileIndex; // Рассчитываем зеркальный индекс

            // Извлекаем индекс и имя персонажа из dataTransfer
            const tileIndex = event.dataTransfer.getData('tileIndex');
            const characterName = event.dataTransfer.getData('characterName');

            // Получаем исходный и целевой tile
            const draggedTile = tiles[draggedTileIndex];
            const targetTile = tiles[mirroredIndex];

            // Находим персонажа по имени
            const character = this.$store.state.characters.find(char => char.name === characterName);

            if (character) {
                const piece = draggedTile.querySelector('.piece-inv');
                if (piece) {
                    // Удаляем piece с исходного tile
                    draggedTile.removeChild(piece);

                    // Убираем рамку с зеркального тайла
                    targetTile.querySelector('.front-inv').classList.remove('hover-equipment');

                    // Проверяем, был ли персонаж перемещен на зеркальный тайл или возвращен обратно на исходный
                    if (mirroredIndex === this.typeToTileMap[character.type.replace('1', '')]) {
                        // Если перемещаем обратно на исходный tile, возвращаем исходный тип (без '1')
                        this.updateCharacterType(character.name, character.type.replace('1', ''));
                    } else {
                        // Если перемещаем на зеркальный tile, добавляем '1' к типу
                        if (!character.type.endsWith('1')) {
                            this.updateCharacterType(character.name, character.type + '1');
                        }
                    }

                    // Добавляем piece в целевой tile
                    
                    targetTile.appendChild(piece);

                    // console.log(character.type, character.name, character.chibiIcon);
                    document.body.style.cursor = 'url(/src/assets/GUI/pointer_scifi_b.svg), auto';
                   
                }
            }
        },

        updateCharacterType(name, newType) {
            this.$store.commit('UPDATE_CHARACTER_TYPE', { name, newType });
        },
        clickSound() {
                    
                    const audio = document.getElementById('click-sound');

                    audio.volume = 0.2;
                    audio.play();
        }


    },
    mounted(){
        document.getElementById('equipment-button').addEventListener('click', this.showEquipment)
        this.createTiles();


    }
}
</script>

<style>

.hover-equipment{
    border-color: rgb(255, 255, 255);
    box-shadow: 0px 0px 7px 5px rgb(117, 86, 255);
}


*{
    cursor: url('/src/assets/GUI/pointer_scifi_b.svg'), auto;
}


.dragging {
    cursor: url('/src/assets/GUI/pointer_scifi_b.svg'), auto !important;
}
.piece-inv {
    position: relative;
    top: -30px;
    left: -5px;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    z-index: 2; 
    transform: translateZ(65px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1);
    backface-visibility: hidden;
    cursor: url('/src/assets/GUI/pointer_scifi_b.svg'), auto;
}

.piece-inv::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%) translateZ(-1px); 
    width: 50%;
    height: 10px; 
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 50%; 
    filter: blur(5px); 
    z-index: -1;
}

.tiles {
    display: grid;
    grid-template-columns: repeat(8, 80px);
    grid-template-rows: repeat(1, 80px);
    gap: 10px;
    perspective: 1000px; 

    transform-style: preserve-3d;
    transition: transform 0.2s ease-out;
    z-index: 40;
    transform: rotateX(40deg) scale(1) rotateZ(0deg) scaleY(1.4) scaleX(1.2); 
    will-change: transform;
    backface-visibility: hidden;
    animation: scaleDown 5s ease-in-out forwards; 
}

.tile-inv {
    position: relative;
    width: 80px;
    height: 80px;
  
    transition: transform 0.3s ease;
    will-change: transform;
    transform-style: preserve-3d;
  
 
}

@keyframes floatTile {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(var(--float-height, -5px)); /* Используем CSS переменную для изменения высоты подъема */
    }
}

.face-inv {
    position: absolute;
    width: 80px;
    height: 80px;
    background-color: #ffffff;
   
 
}

.front-inv {
    transform: translateZ(40px);
    background-color: rgb(62, 83, 64);
   
    transition: border 0.5s ease;
     
}
.back-inv {
    transform: rotateY(180deg) translateZ(40px);
    background-color: rgb(51, 51, 51); 
    box-shadow: 0px 0px 20px 10px rgb(0, 0, 0);
  
}
.left-inv {
    transform: rotateY(-90deg) translateZ(40px);
    background-color: rgb(230, 230, 230);
}
.right-inv {
    transform: rotateY(90deg) translateZ(40px);
    background-color: rgb(230, 230, 230);
}
.top-inv {
    transform: rotateX(90deg) translateZ(40px);
    background-color: rgb(255, 255, 255);
}
.bottom-inv {
    transform: rotateX(-90deg) translateZ(40px);
    background-color: rgb(51, 51, 51);
}
</style>