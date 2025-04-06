
import { customPieces, currentPlayer, isPlayerTurn, setTime, customAttack, energy, decreaseEnergy, isInteractionComplete,changeStatus, startAudio, isTutorialMode } from "./index.js";
import { isTestSkill, startMoveTutorial, changeTestSkill, isDashboardAllowed  } from "./tutorial.js";
import { disableTutorialMode, enableSingleMove, rootEnemyPiece} from './index.js'

const uiContainer = document.querySelector('.ui');


const characters = [
    {
        name: 'Ambition', 
        rarity: 4, 
        type: 'B',
        inGameImage: './resources/Characters/images/allchars/Ambition/in-game.svg', 
        image: './resources/Characters/images/allchars/Ambition/full-body.svg', 
        splash: './resources/Characters/images/allchars/Ambition/splash-art.svg',
        icon: './resources/Characters/images/allchars/Ambition/icon.png', 
        chibiIcon: './resources/Characters/images/allchars/Ambition/chibi.svg', 
        animation: './resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4',
        description: '— a curious and fearless cat-girl who grew up in the shadowy streets of a port city teeming with smugglers and magical creatures.', 
        attackSound: './resources/Characters/images/allchars/Ambition/sounds/voices/attack/ElevenLabs_2024-11-03T16_39_01_Isabel - emotional & lisp_gen_s9_sb75_se0_m2.mp3',
        skills: [
            {type: 'ultimate', name: 'Undo last move', description: 'Undo the last move (1 time)', power: 1, skillImg: './resources/Skills/Skills/clock-skill.svg', energyDemand: 100, voice: './resources/Characters/images/allchars/Ambition/sounds/voices/skill/ElevenLabs_2024-10-29T07_34_56_Isabel - emotional & lisp_gen_s50_sb75_se0_m2-[AudioTrimmer.com].mp3'}, 
            {type: 'bonus', name: 'Experience increased by', description: 'Experience increased by 3%', power: 3, skillImg: './resources/Skills/Bonuses/Increases/vip-4-svgrepo-com.svg'}
        ]
    },
    {
        name: 'Morfel',  
        rarity: 4, 
         type: 'B',

        inGameImage: './resources/Characters/images/allchars/Morfel/in-game.svg', 
        image: './resources/Characters/images/allchars/Morfel/full-body.svg', 
        splash: './resources/Characters/images/allchars/Morfel/full-body.svg',
        icon: './resources/Characters/images/allchars/Morfel/icon.png', 
        chibiIcon: './resources/pieces/custom/custom3.svg', 
        animation: './resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4',
        description: '— an ancient vampire forced to hide from the world in the shadows despite her noble heritage.', 
        attackSound: '',
        skills: [
            {type: 'ultimate', name: 'Vampirism of enemy time', description: 'Vampirism of enemy time (15 sec)', power: 60, skillImg: './resources/Skills/Skills/vampire-teeth.svg', energyDemand: 100,  voice: ''}, 
            {type: 'bonus', name: 'Rewards increased by', description: 'Rewards increased by 3%', power: 3, skillImg: './resources/Skills/Bonuses/Increases/rewards-solid-svgrepo-com.svg'}
        ]
    },
    {
        name: 'Librarian', 
        rarity: 4, 
        type: 'N1',

        inGameImage: './resources/Characters/images/allchars/Librarian/in-game.svg', 
        image: './resources/Characters/images/allchars/Librarian/full-body.svg', 
        splash: './resources/Characters/images/allchars/Librarian/splash-art.svg',
        icon: './resources/Characters/images/allchars/Librarian/icon.png', 
        chibiIcon: './resources/Characters/images/allchars/Librarian/chibi.svg', 
        animation: './resources/videos/effects/fighting-cloud (online-video-cutter.com).mp4',
        description: '— a hereditary hatter who runs a small shop. Unlike her relatives, Aellen was always drawn to magic and its unpredictable nature.', 
        attackSound: '',
        skills: [
            {type: 'ultimate', name: 'Restore one pawn', description: 'Restore one pawn', power: 1, skillImg: './resources/Skills/Skills/mineral-heart-svgrepo-com.svg',energyDemand: 100,  voice:''}, 
            {type: 'bonus',name: 'Rewards and experience increased by', description: 'Rewards and experience increased by 1%', power: 1,  skillImg: './resources/Skills/Bonuses/Increases/rewards-solid-svgrepo-com.svg'}
        ]
    }
    ,
    {
        name: 'Pacifica', 
        rarity: 5, 
        type: 'Q',

        inGameImage: './resources/Characters/images/allchars/Pacifica/in-game.svg', 
        image: './resources/Characters/images/allchars/Pacifica/full-body.svg', 
        splash: './resources/Characters/images/allchars/Pacifica/full-body.svg',
        icon: './resources/Characters/images/allchars/Pacifica/icon.png', 
        chibiIcon: './resources/Characters/images/allchars/Pacifica/chibi.svg', 
        animation: './resources/Characters/images/allchars/Pacifica/animations/attack/pacifica-attack.mp4',
        description: '— a hereditary hatter who runs a small shop. Unlike her relatives, Aellen was always drawn to magic and its unpredictable nature.', 
        attackSound: './resources/Characters/images/allchars/Pacifica/sounds/voices/attack/ElevenLabs_2024-11-03T15_03_39_Sophia - Female, UK Accent - Audiobooks, E-learning Courses, Adverts_pvc_s31_sb26_t2.mp3',
        skills: [
            {type: 'ultimate',name: 'Remove enemy piece', description: 'Remove enemy piece', power: 1, skillImg: './resources/Skills/burning-passion-svgrepo-com.svg', energyDemand: 150,  voice:'./resources/Characters/images/allchars/Pacifica/sounds/skill/ElevenLabs_2024-11-03T16_50_05_Sophia - Female, UK Accent - Audiobooks, E-learning Courses, Adverts_pvc_s24_sb15_t2.mp3'}, 
            {type: 'bonus',name: 'Rewards and experience increased by', description: 'Rewards and experience increased by 10%', power: 10,  skillImg: './resources/Skills/Bonuses/Increases/rewards-solid-svgrepo-com.svg'}
        ]
    }
];


const cards = [
    {
        name: "King's Pawn Opening",
        imageUrl: "./resources/Cards/3ZJWQJEMMK3CSZJ7NKZ8RZ5CA0.jpeg",
        background: "",
        fen: "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        description: "E2E4",
        bonuses: ""
    },
    {
        name: "Sicilian Defense",
        imageUrl: "./resources/Cards/14BT33V3VZ4XKYQ8762EQZS410.jpeg",
        background: "",
        fen: "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2",
        description: "E2E4 C7C5",
        bonuses: ""
    },
    {
        name: "Queen's Gambit",
        imageUrl: "./resources/Cards/EZD1QNJACB0H36SMAMS5J6QNC0.jpeg",
        background: "",
        fen: "rnbqkbnr/ppp1pppp/8/3p4/2P5/8/PP1PPPPP/RNBQKBNR b KQkq c3 0 2",
        description: "D2D4 D7D5 C2C4",
        bonuses: ""
    },
    {
        name: "French Defense",
        imageUrl: "./resources/Cards/HRGYX0HWR65ZEG9FFV8Z4W2XM0.jpeg",
        background: "",
        fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2",
        description: "E2E4 E7E5",
        bonuses: ""
    },
    {
        name: "Ruy Lopez",
        imageUrl: "./resources/Cards/YS6K9RNTBXDSJ4MN13MVN12YW0.jpeg",
        background: "",
        fen: "rnbqkbnr/pppp1ppp/8/4p3/3P4/5N2/PPP1PPPP/RNBQKB1R b KQkq - 1 2",
        description: "E2E4 E7E5 Nf3",
        bonuses: ""
    }
];


let character1 = 'Morfel'; 
let character2 = 'Ambition';
let character3 = 'Pacifica';


function clickSound() {
    const audio = document.getElementById('click-sound');
    audio.volume = 0.1;
    audio.play();
}

function skillSound(src){
    const audio = document.getElementById('skills-voices');
    audio.src = src;
    audio.volume = 0.1;
    audio.play();
}

let isCardsShowing = false;
function showCards(cards) {
    const btn = document.getElementById('cards-btn');
    const container = document.getElementById('crd-cont');
    let isShown = false;
    let startX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID = 0;
    let isDragging = false;

    function createSlider() {
        container.innerHTML = `
            <div class="slider">
                <div class="slides">
                    ${cards.map((card, index) => `
                        <div class="card" data-index="${index}">
                            <img src="${card.imageUrl}" alt="${card.name}">
                            <h3>${card.name}</h3>
                            <p>${card.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        const slidesContainer = container.querySelector('.slides');
        const cardWidth = container.querySelector('.card').offsetWidth;

      
        currentTranslate = 0;
        prevTranslate = currentTranslate;
        slidesContainer.style.transform = `translateX(${currentTranslate}px)`;
    }

  
    function setSliderPosition() {
        const slidesContainer = container.querySelector('.slides');
        slidesContainer.style.transition = "transform 0.3s ease-out";
        slidesContainer.style.transform = `translateX(${currentTranslate}px)`;
    }


    function touchStart(event) {
        startX = event.type.includes('mouse') ? event.clientX : event.touches[0].clientX;
        isDragging = true;
        animationID = requestAnimationFrame(animation);
        container.querySelector('.slides').style.transition = 'none'; 
    }


    function animation() {
        setSliderPosition();
        if (isDragging) requestAnimationFrame(animation);
    }


    function touchMove(event) {
        if (isDragging) {
            const currentX = event.type.includes('mouse') ? event.clientX : event.touches[0].clientX;
            const deltaX = currentX - startX;
            currentTranslate = prevTranslate + deltaX;
        }
    }

    
    function touchEnd() {
        cancelAnimationFrame(animationID);
        isDragging = false;
        const cardWidth = container.querySelector('.card').offsetWidth;
        const slidesContainer = container.querySelector('.slides');

       
        const maxTranslate = 0; 
        const minTranslate = -(cardWidth * (cards.length - 2)); 

     
        currentTranslate = Math.max(Math.min(currentTranslate, maxTranslate), minTranslate);

     
        const offset = Math.round(currentTranslate / cardWidth) * cardWidth;
        currentTranslate = offset;
        prevTranslate = currentTranslate;

        setSliderPosition();
    }

    
    btn.addEventListener('click', function () {
        // clickSound()
        startAudio(false, false, false, false, true);
        if(isCardsShowing) return;
        isCardsShowing = true;
        if (!isShown) {
           

           
            isShown = true;
            createSlider();
            container.style.display = 'flex';
            setTimeout(() => {
                container.style.opacity = '1';
            }, 500);

            const slidesContainer = container.querySelector('.slides');
            
            slidesContainer.addEventListener('touchstart', touchStart);
            slidesContainer.addEventListener('touchmove', touchMove);
            slidesContainer.addEventListener('touchend', touchEnd);

            
            slidesContainer.addEventListener('mousedown', touchStart);
            slidesContainer.addEventListener('mousemove', touchMove);
            slidesContainer.addEventListener('mouseup', touchEnd);
            slidesContainer.addEventListener('mouseleave', touchEnd);
        } else {
            isShown = false;
            setTimeout(() => {
                container.style.opacity = '0';
            }, 500);
            setTimeout(() => {
                container.style.display = 'none';
            }, 700);
        }

        setTimeout(()=>{
            isCardsShowing = false;
        }, 1000)
    });
}

// showCards(cards);



function addCharacterToUI(characterName, index) {
   
    const div = document.createElement('div');
    div.classList.add('char');

    const img1 = document.createElement('img');
    // img1.style.width = '5rem';
    // img1.style.height = '5rem';
    // img1.style.marginBottom = '1rem';

    const img2 = document.createElement('img');
    
    if (characterName) {
        const character = characters.find(char => char.name === characterName);

        if (character) {
            // img1.src = character.skills[0].skillImg;
            // img2.src = character.inGameImage || './resources/no-piece.svg'; 
                if (currentPlayer === 'white' && isPlayerTurn) {
                    let index = customPieces.findIndex(x => x.piece === character.type);
                    if (index !== -1) {
                        customPieces[index].image = character.chibiIcon;
                        // customAttack[index].image = character.animation;
                        // customAttack[index].sound = character.attackSound;
                        customAttack[index].custom = true;
                    }
                } 
                else{
                    
                    let index = customPieces.findIndex(x => x.piece === character.type.toLowerCase());
                    if (index !== -1) {
                        customPieces[index].image = character.chibiIcon;
                        // customAttack[index].image = character.animation;
                        // customAttack[index].sound = character.attackSound;
                        customAttack[index].custom = true;
                    }
                }

            if (window.createChessboard) {
                window.createChessboard();
            } else {
                console.error('createChessboard function not found!');
            }
            if (character.skills.length > 0) {
                const firstSkill = character.skills[0];
                let isSkillInUse = false;
                function useSkill(){
                    // clickSound();
                  
                    if(!isPlayerTurn || isSkillInUse || !isInteractionComplete) {
                        startAudio(false, false, false, false, true, true);
                        return false;
                    }
                    startAudio(false, false, false, false, true, false);
                    if(energy < firstSkill.energyDemand) return;
                    
                    isSkillInUse = true;
                   
                    
                    const abilityFunction = abilityFunctions[firstSkill.name];
                    if (abilityFunction) {
                        const canUse = abilityFunction(firstSkill.power || 0); 
                       
                        if(!canUse) {
                            isSkillInUse = false;
                            startAudio(false, false, false, false, true, true);
                            return;
                        }
                        
                        changeStatus();
                        skillSound(firstSkill.voice);
                        decreaseEnergy(firstSkill.energyDemand);
                        const container = document.querySelector('.skill-char-container');
                        const divImage = document.createElement('div');
                        divImage.classList.add('divImage');
                        const image = document.createElement('img');
                        image.classList.add('character-div-image');
                     
                        image.src = character.splash;
                        image.onload = function() {
                            image.classList.add('show');
                        };
                        divImage.appendChild(image);
                        container.appendChild(divImage);
                        setTimeout(() =>{
                            image.classList.remove('show');
                            image.classList.add('hide'); 
                            setTimeout(() => {
                                
                                container.removeChild(divImage);
                                isSkillInUse = false;
                            },1000);
                            isSkillInUse = false;
                            
                        }, 4000);
                    } else {
                        console.log('Ability not implemented:', firstSkill.name);
                    }

                    return true;
                }

                div.addEventListener('click', function(){
                    if(!isTutorialMode){
                        // useSkill();
                    }
                    
                }
                );
                document.addEventListener('keydown', function(event) {
                    if (event.key === String(index + 1) && !isTutorialMode) {
                        
                    //    useSkill();
                      
                    }else if(event.key === String(index + 1) && isTutorialMode && isTestSkill){
                        if(index === 1){
                            const isUsed = useSkill();
                            if(!isUsed){
                                return;
                              
                            }

                            changeTestSkill();
                            setTimeout(()=>{
                                console.log('Starting')
                                    startMoveTutorial();
                            },7000);
                            

                        }
                       

                    }
                    
                });
                
            }
        } else {
            img1.src = './resources/no-piece.svg';
        }
    } else {
        img2.src = './resources/no-piece.svg';  
    }

    // const numberToPress = document.createElement('div');


    // numberToPress.classList.add('numberToPress');
    // numberToPress.textContent = index + 1;

    // div.appendChild(numberToPress);

    // if(characterName){
    //     div.appendChild(img1);
    // }
    // div.appendChild(img2);
    // uiContainer.appendChild(div);
}
let isShownDesc = false;

function showDescription(chars, firstLoad) {
    const container = document.getElementById('desc-cont');


    if (!isShownDesc) {
       
        if(!firstLoad){
            container.style.display = 'flex';
            isShownDesc = true;
            setTimeout(()=>{
                container.style.opacity = '1';
            },500)
        }
        else{
            container.style.display = 'none';
        }
              

        // Создаем три дополнительных контейнера
        container.innerHTML = `
            <div class="sub-container" style="display: flex;">
                <div class="left-side"></div> 
                <div class="right-side"> </div>

            </div>
            <div class="sub-container" style="display: none;"> 
                <div class="left-side"></div>
                <div class="right-side"> </div> 
            </div>
            <div class="sub-container" style="display: none;"> 
                <div class="left-side"></div> 
                <div class="right-side"> </div>
            </div>`;

        let currentIndex = 0;
        const subContainers = container.querySelectorAll('.sub-container');
        
        const btnCont = document.createElement('div')
        for(let i = 0; i < 3; i++){
           
            btnCont.classList.add('btn-cont')
            const divBtn = document.createElement('div');
            divBtn.classList.add('desc-btn');
            const btn = document.createElement('div');
           
            const img = document.createElement('img');
            img.loading = 'lazy';

            if(chars[i]){
                img.src = characters.find(x => x.name === chars[i]).inGameImage;
                img.style.width = '100%';
                img.style.height = '100%';

                const fullBody = document.createElement('img');
                fullBody.style.width = '35rem';
                fullBody.style.height = '50rem';
                const character = characters.find(x => x.name === chars[i])
                fullBody.src = character.image;
                subContainers[i].querySelector('.left-side').appendChild(fullBody);

                subContainers[i].querySelector('.right-side').innerHTML = `
                <div class="right-side-cont">
                    <div class="main-data">
                        <span>Ambition </span>
                        <p>Level 1</p>
                    </div>
                    <div class="detailed-data">
                        <span>Skills</span> 
                        <ul class="ultimates" style="width: 100%; height: 20%;">
                            
                        </ul>
                        <span>Bonuses</span>
                        <ul class="bonuses" style="width: 100%; height: 20%;">
                            
                        </ul>

                    </div>
                </div>
                `
                 subContainers[i].querySelector('.main-data').querySelector('span').textContent = character.name;
                 for(let j = 0; j < character.skills.length; j++){
                    const li = document.createElement('li');
                     
                    if(character.skills[j].type === 'ultimate'){
                        li.innerHTML = `<li style="display: flex; margin-left: 1rem; list-style-type: none;">
                            <img class="data-skill-img" style="width: 2rem; height: 2rem;" src="./resources/Skills/Skills/clock-skill.svg">
                            <p>

                                <span class="data-skill-name">Undo Last Move</span>
                                <span class="energy-demand-text">Energy demand: 100</span>
                            </p>
                        </li>`
                        subContainers[i].querySelector('.detailed-data').querySelector('.ultimates').appendChild(li); 
                        subContainers[i].querySelector('.detailed-data').querySelector('.data-skill-img').src = character.skills[j].skillImg;
                        subContainers[i].querySelector('.detailed-data').querySelector('.data-skill-name').textContent = character.skills[j].name;
                        subContainers[i].querySelector('.detailed-data').querySelector('.energy-demand-text').textContent = `Energy demand: ${character.skills[j].energyDemand}`;
                    }
                    else if(character.skills[j].type === 'bonus'){
                        li.innerHTML = `
                        <li style="display: flex; margin-left: 1rem;">
                        <img class="data-bonus-img" style="width: 2rem; height: 2rem;" src="./resources/Skills/Skills/clock-skill.svg">
                            <p>
                                <p>
                                    <span class="data-bonus-name">Undo Last Move</span>
                                    
                                </p>
                            </li>`
                        subContainers[i].querySelector('.detailed-data').querySelector('.bonuses').appendChild(li); 
                        subContainers[i].querySelector('.detailed-data').querySelector('.data-bonus-img').src = character.skills[j].skillImg;
                        subContainers[i].querySelector('.detailed-data').querySelector('.data-bonus-name').textContent = `${character.skills[j].name} ${character.skills[j].power}%`;
                      
                    }
                 }
               
            }
            else{
                img.style.width = '70%';
                img.style.height = '70%';
                img.src = './resources/no-piece.svg';
            }
          
         
            btn.appendChild(img);
            if(chars[i]){
                btn.addEventListener('click', () => showNextContainer(i));
            }
           
            divBtn.appendChild(btn);
            btnCont.appendChild(divBtn);
           
        }
        container.appendChild(btnCont)
        // Функция для переключения контейнеров
        function showNextContainer(index) {
            // Скрываем все контейнеры
            subContainers.forEach((sub) => {
                sub.style.display = 'none';
            });

            // Показываем выбранный контейнер
            subContainers[index].style.display = 'flex';
        }

        
       
    } else {
        isShownDesc = false;
       
        setTimeout(()=>{
            container.style.opacity = '0';
            setTimeout(()=>{
                container.style.display = 'none';
            },500)
            
        },500)
        
       
    }
}

let isToggleAllowed = true;
showDescription([character1,character2,character3], true)
document.addEventListener('keydown', function(event) {
    if (event.key === 'Alt') {
        if(!isTutorialMode){
            if(!isToggleAllowed) return;

            isToggleAllowed = false;
            showDescription([character1,character2,character3], false)
    
            setTimeout(()=>{
                isToggleAllowed = true;
            },1000)
        }
        else{
            if(!isDashboardAllowed) return;
            startMoveTutorial();
            enableSingleMove()
            disableTutorialMode();
            document.getElementById('tutor').remove();
            document.getElementById('moveTutor').remove();
            if(!isToggleAllowed) return;

            isToggleAllowed = false;
            showDescription([character1,character2,character3], false)
    
            setTimeout(()=>{
                isToggleAllowed = true;
            },1000)
        }
       
    }

});



// addCharacterToUI(character1, 0);
// addCharacterToUI(character2, 1);
// addCharacterToUI(character3, 2);


export const abilityFunctions = {
    'Undo last move': () => {
        const result = undoLastMove()

   
    if (result) {
    
        setTimeout(() => {
            undoLastMove();
            setTimeout(()=>{
                changeStatus();
            },1000)

        }, 4000);
    }

    return result;
        
    },
    'Experience increased by': (amount) => {
        console.log(`Experience increased by ${amount}%`);
    },
    'Vampirism of enemy time': (power) => {
        const result = setTime(power)
        return result;
       
    },
    'Restore one pawn': () => {
        const result = restorePawn();
        return result;
       
    },
    'Remove enemy piece': () =>{
        const result = removeEnemyPieceOnClick();
        return result;
    },
    'Root enemy piece': () => {
        const result = rootEnemyPiece(isPlayerTurn);
        return result;
    }

};
