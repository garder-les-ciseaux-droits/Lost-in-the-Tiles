<template>

    <div id="prov-info" rel="prov-info">
        <div class="absolute z-50 w-full h-full flex justify-center items-center font-serif">
            <div class="w-[5rem] fixed bottom-0 active:opacity-50 right-0 mr-4 mb-4  h-[5rem] bg-[#1e1e1e] rounded-3xl flex shadow-lg">
                
                <div  class="w-full h-full text-white flex font-serif space-x-4 justify-between items-center px-4">    
            

                    <div class="w-20 h-full flex justify-center items-center">
                        <div>
                            <img @click="showInfo" class="w-10 h-10 cursor-pointer"  src="/src/assets/menuImages/StateChooseIcons/bookmark-svgrepo-com.svg">
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="showSkills" class="w-[13rem] h-[4rem] active:shadow-lg active:text-[#D1AE98] bg-[#1e1e1e] rounded-3xl flex justify-center items-center shadow-lg absolute bottom-0 mb-4 text-white">
                <button id="start-game" class="w-full h-full">Выбрать</button>
            </div>

            <div class="w-[25rem] absolute top-0 h-[5rem]  rounded-3xl text-white mt-4 justify-center items-center flex">
                <span class="text-3xl drop-shadow-lg uppercase tracking-widest animate-pulse">{{ nameToShow }}</span>
            </div>

               
                <div v-show="showStateInfo" class="w-2/3 h-[32rem] absolute  rounded-2xl  flex flex-col items-center">
                    <img class="absolute z-40 w-full h-full" src="/src/assets/GUI/equipment-menu3.png">
                    <div class="w-full h-14 z-50 rounded-t-lg flex pl-6 pr-4 justify-end text-white ">
                        <!-- <div class="w-14 h-full flex justify-center items-center ">
                            <button @click="hideInfo" class="w-f10 h-10  flex justify-center items-center ">
                                <svg class="w-10 h-10 text-white hover:text-[#bea378]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 9L8 12M8 12L11 15M8 12H16M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </button>
                        </div> -->
                    </div>
                
                    <div class="w-full h-[26rem] absolute z-50 mt-4 flex px-10 pt-10 items-center space-x-8 ">
                        <div class="w-1/2 h-full text-white flex flex-col space-y-4 pt-4 pl-2 relative">
                            <div class="flex flex-col">
                                <p class="text-lg uppercase">State: {{ provinceDetailedInfo.stateName}}</p>
                                <p>Province: {{ provinceDetailedInfo.name}}</p>
                            </div>
                            <p class="text-start">{{ provinceDetailedInfo.desk}}</p>

                            <img class=" w-full" src="/src/assets/GUI/divider (1).png">
                            <div class="w-full h-full flex items-center justify-between px-10 pb-4 ">
                                <div class="w-24 h-full flex items-center  justify-center ">

                                    <img @click="showBonus(0)" class="w-10 h-10 cursor-pointer" :src=bonusToShow>
                                </div>
                                <div  class="w-24 h-full flex items-center  justify-center ">
                                  
                                    <img @click="showBonus(1)" class="w-14 h-14  cursor-pointer" src="/src/assets/Skills/Bonuses/Increases/arrow-trend-up-svgrepo-com.svg">
                                </div>
                                <div  class="w-24 h-full flex items-center  justify-center ">
                                   
                                    <img  @click="showMinus"  class="w-14 h-14  cursor-pointer" src="/src/assets/Skills/Bonuses/Decreases/arrow-trend-down-svgrepo-com.svg">
                                </div>
                                <div  class="w-24 h-full flex items-center  justify-center ">
                                    <img @click="showStateInformation" class="w-10 h-10 cursor-pointer"  src="/src/assets/menuImages/StateChooseIcons/bookmark-svgrepo-com.svg">
                                </div>
                            </div>
                        </div>

                        <div class="w-1/2 h-full text-white flex flex-col pt-4">

                            <div v-if="!showStatusInfo" class="w-full h-full flex flex-col justify-center text-center items-center relative">
                                <p class="w-full h-12 uppercase tracking-wider">Начальный выбор персонажей</p>
                               <div class="w-full h-80 flex space-x-4 justify-center">

                                <div class="w-28  h-80 flex justify-center items-center  bg-[#121212] border border-[#c7b88d]" v-for="(char,index) of provinceDetailedInfo.baseCharacters"> 
                                   
                                        <img class="w-36 absolute hover:w-40 cursor-pointer " :src="showBaseCharacter(char)">
                                </div>
                               </div>
                            </div>
                            <div v-else  class="w-full h-full flex flex-col justify-center relative">
                                <div v-if="showFirstBonus" class="w-full h-full flex flex-col items-start justify-center ">
                                    <div class="w-full h-24 flex space-x-6 items-center">

                                        <img  class="w-24 h24 cursor-pointer" :src=bonusToShow>
                                        <span>{{provinceDetailedInfo.bonuses[0]}}</span>
                                    </div>
                                    <div class="w-full h-full space-y-4 flex flex-col pl-4 mt-4">
                                        <ul class="list-disc" v-for="skill of findSkill">
                                            <li>{{ skill}}</li>
                                        </ul>

                                    </div>
                                </div>
                                <div v-else-if="showSecondBonus"  class="w-full h-full flex flex-col justify-center relative">
                                    <div class="w-full h-24 flex space-x-6 items-center">

                                        <img  class="w-24 h24 cursor-pointer" src="/src/assets/Skills/Bonuses/Increases/arrow-trend-up-svgrepo-com.svg">
                                        
                                        <span>Положительные эффекты</span>
                                    </div>
                                    <div class="w-full h-full space-y-4 flex flex-col pl-4 mt-4">
                                        <ul class="list-disc">
                                            <li>{{ findBonus}}</li>
                                        </ul>

                                    </div>
                                </div>

                                <div v-else class="w-full h-full flex flex-col justify-center relative">
                                    <div class="w-full h-24 flex space-x-6 items-center">

                                        <img  class="w-24 h24 cursor-pointer"src="/src/assets/Skills/Bonuses/Decreases/arrow-trend-down-svgrepo-com.svg">
                                        
                                        <span>Отрицательные эффекты</span>
                                    </div>
                                    <div class="w-full h-full space-y-4 flex flex-col pl-4 mt-4">
                                        <ul class="list-disc" v-for="minus of findMinus">
                                            <li>{{ minus}}</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div> 



          
        </div>
    </div>

</template>


<script>
 import { mapGetters, mapActions  } from 'vuex';
 export default{
    props: {provinceToShow: {
      type: String,
      required: true
    }},
    data(){
        return{
           showStateInfo: false,
           detailedStateInfo: {},
           showSkills: true,
           showFirstBonus: false,
           showSecondBonus: false,
           showFirstMinus: false,
           showStatusInfo: false,
           scale: 1,
           translateX: 0,
           translateY: 0

        }
    },
    computed:{
        ...mapGetters(['provinces', 'characters', 'skills', 'insertedElement', 'tutorialSkiped']),
        bonusToShow(){
            if(this.provinceToShow){
                return this.provinces.find(x => x.id === this.provinceToShow).bonusIcon;
            }
            else{
                return `/src/assets/Skills/Bonuses/SearchEnemySkills/radar-sweep-svgrepo-com.svg`;
            }
        },
        nameToShow(){
            if(this.provinceToShow){
                return this.provinces.find(x => x.id === this.provinceToShow).name;
            }
            else{
                'Skipsia';
            }
        },
        provinceDetailedInfo(){
            this.detailedStateInfo.stateName = this.provinces.find(x => x.id === this.provinceToShow).state;
            this.detailedStateInfo.name = this.provinces.find(x => x.id === this.provinceToShow).name;
            this.detailedStateInfo.desk = this.provinces.find(x => x.id === this.provinceToShow).description;
            this.detailedStateInfo.bonuses = this.provinces.find(x => x.id === this.provinceToShow).bonuses;
            this.detailedStateInfo.minuses = this.provinces.find(x => x.id === this.provinceToShow).minuses;
            this.detailedStateInfo.baseCharacters = this.provinces.find(x => x.id === this.provinceToShow).baseCharacters;
            return this.detailedStateInfo;
        },
        findSkill(){
            return this.skills.find( x => x.name === this.detailedStateInfo.bonuses[0]).description
        },
        findBonus(){
            return this.detailedStateInfo.bonuses[1];
        },
        findMinus(){
            return this.detailedStateInfo.minuses;
        },
        
    },
    methods:{
        ...mapActions(['setProvince', 'updateInsertedElement', 'skipTutorial']),
        showInfo(){
            this.showStateInfo = !this.showStateInfo;
            this.showSkills = !this.showSkills;
            
        },
        generateProfileTab(){

            const profileTab = document.getElementById('profile');

            profileTab.style.display = 'flex';

        },
        showStateInformation(){


            this.showFirstMinus = false;
            this.showSecondBonus = false;
            this.showFirstMinus = false;

            this.showStatusInfo = false;
        },
        showBaseCharacter(name){
            return this.characters.find(x => x.name === name).image;
        },
        showBonus(index){
            if(!this.showStatusInfo){
                this.showStatusInfo = !this.showStatusInfo;
            }
            if(index === 0){
                this.showFirstMinus = false;
                this.showSecondBonus = false;
                this.showFirstBonus = !this.showFirstBonus;
            }
            else{
                this.showFirstMinus = false;
                this.showFirstBonus = false;
                this.showSecondBonus = !this.showSecondBonus;
            }
        },
        showMinus(){
            this.showFirstBonus = false;
            this.showSecondBonus = false;

           

            if(!this.showStatusInfo){
                this.showStatusInfo = true
            }

            this.showFirstMinus = !this.showFirstMinus;
        },
        hideInfo(){
            this.showStateInfo = !this.showStateInfo;
            this.showStatusInfo = false;
            this.showSkills = !this.showSkills;
        },
        mainFunc(){
            const chooseProvince = document.getElementById('choose-province');
  const mapObject = document.getElementById('mapObject');
  const svgDoc = mapObject.contentDocument;
  const svg = svgDoc.querySelector('svg');



  const buttonStart = document.getElementById('start-game');
  const provinces = svgDoc.querySelectorAll('path[id^="province"]:not([id*="gap"])');

  provinces.forEach(province => {
    if (this.provinceToShow === province.id) {
      buttonStart.addEventListener('click', () => {
        const blackDiv = document.querySelector('.initial');
        blackDiv.classList.remove('hidden');

        function toggleAnimation() {
          blackDiv.classList.toggle('active');
        }

        setTimeout(() => {
          toggleAnimation();
        }, 0);

        setTimeout(() => {
          toggleAnimation();

          setTimeout(() => {
            blackDiv.classList.add('hidden');
          }, 1000);

          document.querySelector('.zoom-controls').classList.remove('hidden');
          document.querySelector('.zoom-controls').classList.add('z-40');

          const bbox = province.getBoundingClientRect();
          const svgRect = svg.getBoundingClientRect();

          const provinceCenterX = bbox.x + bbox.width / 2;
          const provinceCenterY = bbox.y + bbox.height / 2;

          // Вычисляем начальные значения для перемещения и зума
          this.translateX = (svgRect.width / 2) - (provinceCenterX * this.scale);
          this.translateY = (svgRect.height / 2) - (provinceCenterY * this.scale);
          
          this.scale = 3

          this.$emit('update-translate-x', this.translateX) 
          this.$emit('update-translate-y', this.translateY) 
          this.$emit('update-scale', this.scale) 


          this.setProvince(province.id);
          this.generateProfileTab();

          chooseProvince.style.display = 'none';
          svg.style.transformOrigin = 'center';

          this.updateInsertedElement(document.getElementById('prov-info'));
          this.insertedElement.remove();
          this.updateInsertedElement(null);
          this.skipTutorial(true)

          svg.style.transform = `scale(${this.scale}) translate(${this.translateX}px, ${this.translateY}px)`;
          svg.style.transformOrigin = "center";


        }, 4000);
      });
    }
  });
        }
    },
    mounted() {
        this.mainFunc()
},


 }
</script>

<style>

</style>
