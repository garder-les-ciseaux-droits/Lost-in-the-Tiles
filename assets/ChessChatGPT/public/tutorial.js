

import { enableSingleMove, isTutorialMode} from './index.js'
let currentMoveIndex = 0;

export let isEnemyArrived = false;
export let isTestSkill = false;
export let isDashboardAllowed = false;
export let isLengthWatching = false;

let currentEnemySlideIndex = 0;

export function changeTestSkill(){
    isTestSkill = !isTestSkill;
    isDashboardAllowed = !isDashboardAllowed;
}

setTimeout(()=>{
    if(isTutorialMode){
        document.querySelector('#tutor').style.display = 'flex';
        tutorial(true);
    }
    
},1000)


export function enemyArrival(isFirst){
    document.getElementById('enemyArrival').style.display = 'flex';
    const slides = document.querySelectorAll('.enemyTutor1');
  

    if(!isFirst){
       
        slides[currentEnemySlideIndex].style.display = 'none'; 

        
        currentEnemySlideIndex++; 
    }

    const audio = slides[currentEnemySlideIndex].querySelector('.enemyAV');
    if(audio){
        audio.voice = 0.5;
        audio.play();
    }
   
    

    if (currentEnemySlideIndex < slides.length) {

        slides[currentEnemySlideIndex].style.display = 'flex';

        if (currentEnemySlideIndex === slides.length - 1) {
            setTimeout(()=>{
                slides[currentEnemySlideIndex].remove()
            },3000)    
        }
        else if(currentEnemySlideIndex === slides.length - 2){
            setTimeout(()=>{
                slides[currentEnemySlideIndex].style.display = 'none';
                document.getElementById('enemyArrival').style.pointerEvents = 'none';
            },6000)
            
            isEnemyArrived = true;
        }
        else {
           
        }
        
    }
    else{
        document.getElementById('enemyArrival').remove();
    }

 




}

export function startMoveTutorial(isFirst){
    const slides = document.querySelectorAll('.moveTutor1');
   
    if(!isFirst){
        slides[currentMoveIndex].style.display = 'none'; 
        currentMoveIndex++;  
    }
    // Increment the slide index
                // Check if it's the last slide
    if (currentMoveIndex < slides.length) {
                    // Show the next slide
    slides[currentMoveIndex].style.display = 'flex';
    if (currentMoveIndex === slides.length - 1) {
        }
    } else {
         // Hide the tutorial container if it was the last slide
        isLengthWatching = true;
    }
    if(currentMoveIndex === 5){  
        document.getElementById('moveTutorOverlay').classList.add('fullscreen-overlay-chars')
    }
    else if(currentMoveIndex === 7){
        document.getElementById('moveTutorOverlay').classList.remove('fullscreen-overlay-chars');
        document.getElementById('moveTutorOverlay').style.pointerEvents = 'none';
        isTestSkill = true;
    }
}


function tutorial(isActive) {
    if (isActive) {
        const tutorCont = document.getElementById('tutor');
        const tutorialSlides = document.querySelectorAll('.tutor-slide');
        const nextButton = document.querySelectorAll('.next-tutor-slide');
        const moveTutorial = document.getElementById('moveTutorial');
        let currentSlideIndex = 0;
        const audios = document.querySelectorAll('.tutor-audio');
        // Show the first slide initially
        tutorialSlides[currentSlideIndex].style.display = 'flex';
        audios[currentSlideIndex].volume = 0.5
        audios[currentSlideIndex].play()
        moveTutorial.addEventListener('click', enableSingleMove)
        nextButton.forEach(btn => {
            btn.addEventListener('click', () => {
                clickSound()
                // Hide the current slide
                tutorialSlides[currentSlideIndex].style.display = 'none';
    
                // Increment the slide index
                currentSlideIndex++;
    
                // Check if it's the last slide
                if (currentSlideIndex < tutorialSlides.length) {
                    // Show the next slide
                    tutorialSlides[currentSlideIndex].style.display = 'flex';
                    
                    if (currentSlideIndex === tutorialSlides.length - 1) {
                        nextButton.textContent = 'Play';
                    }
                } else {
                    // Hide the tutorial container if it was the last slide
                    tutorCont.style.display = 'none';
                    startMoveTutorial(true);
                    const nextBtn = document.querySelectorAll('.next-move-slide');
                    nextBtn.forEach(btn =>{
                        btn.addEventListener('click', ()=> startMoveTutorial(false))
                    
                    })
                    
                }
            });
        })
    }
}

function clickSound() {
    const audio = document.getElementById('click-sound');
    audio.volume = 0.1;
    audio.play();
}



