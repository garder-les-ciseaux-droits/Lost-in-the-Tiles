<template>

    <div id="choose-province" class="font-serif top-0 animate-pulse absolute z-50 justify-center hidden items-center w-full h-16 text-2xl mt-4 text-white">
        <p>Выбери регион</p>
    </div>

    <div class="welcome-box backdrop-blur-[2px] absolute z-50 w-full h-full flex justify-center items-center  cursor-pointer" id="welcomeBox">
        <span id="press-space" class="absolute top-0 mt-10 text-white animate-pulse font-mono">Press "Spacebar" to continue</span>
        <div id="pacifica" class="absolute z-40 w-96 ">
            <img id="pacifica-sprite" src="/src/assets/Characters/Pacifica/pacifica-art.png">

        </div>
        
        <div class="w-full h-64  z-50 absolute flex justify-center items-center bg-gradient-to-t from-black via-black/70 to-transparent bottom-0"  id="nextButton">

            
            <div class="flex flex-col w-2/3 h-full items-center justify-center pt-16 space-y-4 pointer-events-none">
                <p class="text-[#cbb48b] text-2xl tracking-wide">Pacifica</p>
                <p class="text-white tracking-wide text-center w-full " id="gameText">Это ваша первая игра. Давайте познакомимся с правилами!</p>
            
            </div>
    
        </div>
    </div>

    <div id="second-training-part" class="second-training-part absolute z-50 hidden w-full h-full justify-center items-center">
        <div id="pacifica" class="absolute z-40 w-[40rem] h-full right-0 flex justify-end">
            <div class="rounded-3xl shadow-xl relative w-[30rem] h-32 mt-24 mr-48 z-50 flex">
                <img class="w-full h-full absolute z-40" src='/src/assets/GUI/dialogue-with-options(2).png'>
                
                <p class="w-full h-full absolute px-2 z-50 text-white text-center drop-shadow-lg font-serif flex items-center justify-center "> Это ваша первая игра. Давайте познакомимся с правилами!</p>
            </div>
            <img id="pacifica-sprite"  class="w-[20rem] h-[30rem] absolute drop-shadow-xl" src="/src/assets/Characters/Pacifica/pacifica-art.png">

        </div>
    </div>

</template>

<script>
import { mapGetters, mapActions  } from 'vuex';
export default {
    
    data() {
      return {
        gameTexts: [
            "Это ваша первая игра. Давайте познакомимся с правилами!",
            "Задача: завоевать как можно больше территорий на карте.",
            "Для этого вам нужно стратегически размещать свои войска.",
            "Нажимайте на регионы, чтобы атаковать соседние области.",
            "Побеждайте в битвах и увеличивайте свою империю!"
        ],
        secondTrainingPart: [
            "Это ваша первая игра. Давайте познакомимся с правилами!",
            "Задача: завоевать как можно больше территорий на карте.",
            "Для этого вам нужно стратегически размещать свои войска.",
            "Нажимайте на регионы, чтобы атаковать соседние области.",
            "Побеждайте в битвах и увеличивайте свою империю!"
        ],
        currentTextIndex: 0,
       
        trainingProgress: [{first: false},{second: false},{third: false}]
       }
    },
    computed: {
        ...mapGetters(['canChoose'])
    },
    methods:{
        ...mapActions(['updateCanChoose']),
        toContinueWelcome(event){
            const gameText = document.getElementById('gameText');
            const pacificaSprite = document.getElementById('pacifica-sprite');
            const chooseProvince = document.getElementById('choose-province');

            if(event.keyCode == 32 ){
                this.currentTextIndex++;
                if( document.getElementById('press-space')){
                    document.getElementById('press-space').remove();
                }
                if (this.currentTextIndex < this.gameTexts.length) {
                    gameText.innerText = this.gameTexts[this.currentTextIndex];
                    if(this.currentTextIndex === 2){
                        pacificaSprite.src = '/src/assets/Characters/Pacifica/pacifica-surprised2.png'
                        
                    }
                    else{
                        pacificaSprite.src = '/src/assets/Characters/Pacifica/pacifica-art.png'
                    }
                } else {
                
                    welcomeBox.style.display = 'none'; 
                    chooseProvince.style.display = 'flex';

                    welcomeBox.remove();

                    this.trainingProgress[0].first = true;
                    this.currentTextIndex = 0;

                    document.removeEventListener('keyup', this.toContinueWelcome)
                    this.secondTrainingFunc();
                    
                    
                }
            }
        },
        secondTrainingFunc(){
            const secondPartBox = document.getElementById("second-training-part");
            const gameText = secondPartBox.querySelector('p');

            
            secondPartBox.classList.remove('hidden');

            setTimeout(() => {
                
                secondPartBox.classList.add('visible');

                document.addEventListener('keyup', (event) => {
                    if(event.keyCode === 32){
                        this.currentTextIndex++;
                        if (this.currentTextIndex < this.secondTrainingPart.length) {
                            gameText.innerText = this.secondTrainingPart[this.currentTextIndex];
                    
                        } else {
                            
                            this.updateCanChoose(true);
                            secondPartBox.style.display = 'none'; 
                    
                    
                            secondPartBox.remove();
                            this.trainingProgress[1].second = true;
                            
                        }
                    }
                });
            }, 1000);

        },
        skipTraining(){
            this.updateCanChoose(true);
            welcomeBox.remove();
        }
    },
    mounted() {
        const welcomeBox = document.getElementById('welcomeBox');
        this.$nextTick(() => {
            setTimeout(() => {
            if (!this.trainingProgress[0].first) {
                welcomeBox.classList.add('visible');
            } else if (!this.trainingProgress[1].second) {
                this.secondTrainingFunc();
            } else {
                this.skipTraining();
            }
            }, 500);
        });
        document.addEventListener('keyup', this.toContinueWelcome);
    },
}

</script>

<style scoped>
.welcome-box {
    opacity: 0;
    transition: all 1s ease; 
}
.welcome-box.visible {
 
    opacity: 1;
}


.second-training-part {
    opacity: 0;
    transition: all 1s ease; 
}
.second-training-part.visible{
    opacity: 1;
}
</style>