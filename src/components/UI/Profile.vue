<template>
    <div id="shownProfile" ref="shownProfile" class="hidden">

        <div id="profile-menu" class="w-full z-50 h-full absolute flex justify-center items-center backdrop-blur-sm hidden-prof">
            <div class="w-2/3 h-[32rem] bg-[#1f1f1f] border-4 border-[#18191d] rounded-2xl  flex flex-col items-center">
                <div class="w-full h-14 bg-[#262626] rounded-t-lg flex pl-6 pr-4 justify-between">
                    <div id="section-container" class="w-auto h-full flex">
                        <button id="profile-section" class="h-full w-24 bg-white border border-[#3d393a] rounded-t-lg flex justify-center items-center">
                            <img class="w-8 h-8" src="/src/assets/menuImages/province-profile-icon-svg.png">
                        </button>
                        <button id="cities-section" class="h-full w-24 bg-[#1f1d1e] hover:bg-[#bea378] border border-[#3d393a] rounded-t-lg flex justify-center items-center">
                            <img class="w-8 h-8" src="/src/assets/menuImages/state-profile-icon-gray-svg.png">
                        </button>
                    </div>
                    <div class="w-14 h-full flex justify-center items-center ">
                        <button id="hide-profile" class="w-f10 h-10  flex justify-center items-center ">
                            <svg class="w-10 h-10 text-white hover:text-[#bea378]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 9L8 12M8 12L11 15M8 12H16M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </button>
                    </div>
                </div>
            
                <div id="current-province" class="w-full h-[26rem]  mt-4 flex px-6 space-x-8 hidden">
                    <div class="w-72 h-full">
                        <div class="w-full h-24 flex items-center space-x-2 bg-[#121212] pl-4 border-l-4 border-l-[#c7b88d]">
                            
                           
                            <div class="flex justify-center flex-col items-start drop-shadow-xl space-y-1 text-white">
                                <p id="province-name" class="text-lg drop-shadow-lg tracking-widest uppercase">Skipsia</p>
                                <p id="state-name" class="text-sm drop-shadow-lg font-thin">State: Zarakzirala</p>
                                
                            </div>
                        </div>
                        <div class="w-full h-10 bg-white mt-2 flex justify-center items-center text-center rounded-md">
                            <span class="font-serif text-black tracking-wide">Выбери героя</span>
                        </div>
                        <div id="char-choice" class="w-full h-auto flex space-x-2 pt-4 relative justify-center">
                            <div class="w-24 h-64 bg-[#121212] border border-[#c7b88d] flex justify-center items-center z-40 hover:z-50">
                                <img class="absolute w-36 hover:w-48 cursor-pointer">
                            </div>
                            <div  class="w-24 h-64 bg-[#121212] border border-[#c7b88d] flex justify-center items-center  z-40 hover:z-50">
                                <img class="absolute w-36 hover:w-48 cursor-pointer">
                            </div>
                            <div  class="w-24 h-64  bg-[#121212] border border-[#c7b88d] flex justify-center items-center  z-40 hover:z-50">
                                <img class="absolute w-36 hover:w-48 cursor-pointer">
                            </div>

                            
                        </div>
                    </div>
                    <div class="w-[36rem] h-full font-serif text-white bg-[#121212] border-2 border-[#c7b88d] rounded-2xl px-10 py-2 whitespace-normal break-words text-justify"> 
                        <div id="first-description-province" class="w-full h-full flex flex-col space-y-4 justify-between py-4">
                            <p id="province-description" class="first-line:uppercase first-line:tracking-widest
                            first-letter:text-7xl first-letter:font-bold first-letter:text-white
                            first-letter:mr-3 first-letter:float-left
                        "> Южная провинция Скипсия в государстве Зиракзирала — это край, где горы встречаются с бескрайними лесами, а древние реки пересекают плодородные долины. Провинция известна добычей редких кристаллов, которые используются в артефактах и магических ритуалах. Скипсия — это сердце магии и духовного богатства, охраняемое суровыми воинами, которые веками защищают её границы от внешних угроз.</p>
                        <p class="font-bold">Бонусы региона</p>
                        <ul id="pr-bonuses" class="list-disc pl-5 text-sm">
                            <!-- <li>Продвинутая оценка способностей противника</li>
                            <li>Полученный опыт увеличен на 5%</li> -->
                        </ul>
                        <p class="font-bold">Недостатки региона</p>
                        <ul  id="pr-minuses" class="list-disc pl-5 text-sm">
                            <!-- <li>Отсутствие советников</li> -->
                        </ul>
                        
                        </div>
                        <div id="char-cards" class="w-full h-full ">
                            <div id="char-1" class="w-full h-full flex items-center relative hidden">
                                <div class="w-1/2 h-full flex flex-col justify-between py-6">
                                    <p class="w-full h-auto  first-char-desk"><span class="text-2xl font-bold">Лириа Ним</span> — любопытная и бесстрашная девочка-кошка, которая выросла в тенистых улицах города-порта, кишащего контрабандистами и магическими существами.</p>
                                    <div>
                                        <p class="font-bold">Способности</p>
                                        <ul class="list-disc pl-5 text-sm space-y-2 mt-2 first-char-skills">
                                            <li>Отмена последнего хода</li>
                                            <li>Опыт увелечен на 3%</li>
                                        </ul>
                                    
                                    </div>
                                    <button class="w-24 h-10 bg-white text-black rounded-lg active:bg-black active:text-white ">Выбрать</button>
                                </div>
                                
                                <div class="w-1/2 h-full flex items-start">
                                    <img class="w-80 absolute " >
                                </div>
                            
                            </div>
                            <div id="char-2" class="w-full h-full flex items-center relative hidden">
                                <div class="w-1/2 h-full flex flex-col justify-between py-6">
                                    <p class="w-full h-auto first-char-desk"><span class="text-2xl font-bold">Силена Морвель</span> — древний вампир, вынужденная скрываться от мира в тени, несмотря на своё благородное происхождение.</p>
                                    <div>
                                        <p class="font-bold">Способности</p>
                                        <ul class="list-disc pl-5 text-sm space-y-2 mt-2 first-char-skills">
                                            <li>Вампиризм вражеского времени</li>
                                            <li>Награды увеличены на 3%</li>
                                        </ul>
                                        
                                    </div>
                                    <button class="w-24 h-10 bg-white text-black rounded-lg  active:bg-black active:text-white ">Выбрать</button>
                                </div>
                                <div class="w-1/2 h-full flex items-start">
                                    <img class="w-80 absolute ">
                                </div>
                            
                            </div>
                            <div id="char-3" class="w-full h-full flex items-center relative hidden">
                                <div class="w-1/2 h-full flex flex-col justify-between py-6">
                                    <p class="w-full h-auto first-char-desk"><span class="text-2xl font-bold">Аэленн</span>  — потомок древнего рода лесных эльфов, живущих в уединённом уголке волшебного леса. В отличие от своих родичей, Аэленн всегда тянуло к людям и их непредсказуемой природе.</p>
                                    <div>
                                        <p class="font-bold">Способности</p>
                                        <ul class="list-disc pl-5 text-sm space-y-2 mt-2 first-char-skills">
                                            <li>Восстановление одной пешки</li>
                                            <li>Награды и опыт увеличены на 1%</li>
                                        </ul>
                                        
                                    </div>
                                    <button class="w-24 h-10 bg-white text-black rounded-lg active:bg-black active:text-white">Выбрать</button>
                                </div>
                                <div class="w-1/2 h-full flex items-start">
                                    <img class="w-80 absolute ">
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div id="fight-cities" class="w-full h-[26rem] mt-4 flex px-6 space-x-8 hidden">
                    <div class="w-72 h-full space-y-2">
                        <div id="fight-province-cities" class="w-full h-20 flex flex-col items-start justify-center  bg-[#121212] hover:bg-gray-300 hover:text-black text-white cursor-pointer pl-4 border-l-4 border-l-[#c7b88d]">
                            <p class="font-serif  text-lg">Города провинции</p>
                            <p class=" text-sm font-thin">Опыт и валюта</p>
                                
                        </div>
                        <div id="fight-province-cities" class="w-full h-20 flex flex-col items-start justify-center  bg-gray-700 pl-4 border-l-4 border-l-[#c7b88d]">
                            <p class="font-serif text-white text-lg">Провинции страны</p>
                            <p class=" text-white  text-sm font-thin">Очки влияния</p>
                                
                        </div>
                        
                    </div>
                    <div id="province-cities" class="w-[36rem] h-[25rem] font-serif text-white bg-[#121212] border border-black flex flex-col items-start shadow-lg px-4 py-6 space-y-4 overflow-y-auto">
                        <div class="one-city w-full h-24 bg-[#0a0a0a] rounded-lg flex items-center px-6 justify-between min-h-24">
                            <div class="flex w-20 h-full items-center space-x-4 ">
                                <p class="city-name text-xl">Khab</p>
                                <p class="city-level text-green-200 text-xl">4</p>
                            </div>
                            <div class=" h-full flex-1 flex  space-x-2 items-center justisfy-center">

                            <div class="bounty w-48 h-full flex flex-col items-end justify-center text-sm font-thin font-sans">
                                    <p class="city-exp">Опыт: 40</p>
                                    <p class="city-crd">Валюта: 250</p>
                            </div>
                            </div>
                            <div class="w-32 h-full flex flex-col items-center justify-center text-black text-center ">
                                <button class="fight-city w-full h-10 bg-[#e0e0e0] hover:bg-black hover:text-white rounded-3xl text-center flex justify-center items-center text-xs ">
                                    <svg class="w-6 h-6" version="1.1" fill="currentColor"  stroke="currentColor" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path class="afiado_een" d="M14.586,20.243l2.828,2.828l-2.828,2.828l-2.828-2.828l-2.828,2.828l-2.828-2.828l2.828-2.828 l-2.828-2.828l2.828-2.828l2.828,2.828L23.071,6.1l2.828,2.828L14.586,20.243z"></path> </g></svg>
                                    <span>Сразиться</span>
                                </button>
                            
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

export default {
    data() {
        return{
            firstSelectedCharacter: null,
            hasCharacterChosen: false
        }
    },
    computed:{
        ...mapGetters(['provinces', 'characters', 'playerProfile', 'insertedElement'])
    },
    methods: {
        ...mapActions(['updateInsertedElement']),
        showProfile() {
            const profileTab = document.getElementById('profile');
            profileTab.style.display = 'none';

            
            const mapContainer = document.getElementById('mapContainer');
 
            const template = this.$refs.shownProfile;

        
            const templateContent = document.createDocumentFragment(); 
            Array.from(template.childNodes).forEach(node => {
            templateContent.appendChild(node.cloneNode(true)); 
            });
                        

  

            const nameState = templateContent.querySelector('#state-name');
            let currentProvince = this.provinces.find(x => x.id === this.playerProfile.province);
           
            nameState.textContent = `State: ${currentProvince.state}`;
         

            const nameProvince = templateContent.getElementById('province-name');
            nameProvince.textContent = currentProvince.name;



            const provinceDescription = templateContent.getElementById('province-description');
            provinceDescription.textContent = currentProvince.description;

            const bonuses = templateContent.getElementById('pr-bonuses');
            currentProvince.bonuses.forEach(bonus => {
                const list = document.createElement('li');
                list.textContent = bonus;
                bonuses.appendChild(list);
            });

            const minuses = templateContent.getElementById('pr-minuses');
            currentProvince.minuses.forEach(minus => {
                const list = document.createElement('li');
                list.textContent = minus;
                minuses.appendChild(list);
            });

            const charChoice = templateContent.getElementById('char-choice');
            const choices = charChoice.querySelectorAll('img');

            const firstDeskProvince = templateContent.getElementById('first-description-province');
            const charCards = templateContent.getElementById('char-cards');
            const cards = charCards.querySelectorAll('[id^="char-"]'); 




            let lastCard = null;
            
            const buttonHandlers = [];
            const choiceHandlers = [];
            
        
            
            if(!this.hasCharacterChosen){
                choices.forEach((choice, index) => {
                charCards.querySelectorAll('button').forEach((button, inx) => {
                    if (inx === index) {
                
                        const buttonClickHandler = () => {
                            this.playerProfile.characters.push({charName: this.characters[index].name, charLvl: 1, rarity:this.characters[index].rarity });
            
                            this.firstSelectedCharacter = index;

                            charChoice.querySelectorAll('div').forEach((char, i) => {
                                if (i !== inx) {
                                    char.classList.remove('bg-[#121212]');
                                    char.classList.add('bg-black');
                                }
                                char.classList.remove('hover:z-50');
                                char.querySelector('img').classList.remove("hover:w-48");
                            });
            
                        
                            
                            this.hasCharacterChosen = true;

                            charCards.querySelectorAll('div').forEach(cr => {
                                cr.classList.add('hidden');
                            })
                            firstDeskProvince.classList.remove('hidden');
            
                    
                            removeAllEventListeners();
                        };
            
                    
                        button.addEventListener('click', buttonClickHandler);
            
                        
                        buttonHandlers.push({ button, handler: buttonClickHandler });
                    }
                });
            
                // Добавляем информацию о персонаже
                const desk = cards[index].querySelector('.first-char-desk');
                const skills = cards[index].querySelector('.first-char-skills');
                skills.innerHTML = '';
                const spanName = document.createElement('span');
                spanName.classList.add("text-2xl", "font-bold");
            
                if (this.playerProfile.province === 'province24') {
                    spanName.textContent = this.characters[index].name;
                    desk.textContent = this.characters[index].desk;
            
                    this.characters[index].skills.forEach(skill => {
                        const list = document.createElement('li');
                        list.textContent = skill.desk;
                        skills.appendChild(list);
                    });
            
                    desk.prepend(spanName);
                }
            
            
                const lastCardChoice = function() {
                    if (lastCard) {
                        lastCard.classList.add('hidden');
                    }
            
                
                    if (!lastCard) {
                        firstDeskProvince.classList.add('hidden');
                    }
            
                    cards[index].classList.remove('hidden');
                    lastCard = cards[index];
                };
            
            
                choice.addEventListener('click', lastCardChoice);
            
                choiceHandlers.push({ choice, handler: lastCardChoice });
                });
            }
            else{
                choices.forEach((choice, index) => {
                    choice.classList.remove('hover:w-48');


                }) 

                charChoice.querySelectorAll('div').forEach((char, i) => {
                    char.classList.remove('hover:z-50');
                    if(i !== this.firstSelectedCharacter){
                        char.classList.remove('bg-[#121212]');
                        char.classList.add('bg-black');
                    }

                });
            }
            
            
            function removeAllEventListeners() {
                
                buttonHandlers.forEach(({ button, handler }) => {
                    button.removeEventListener('click', handler);
                });
            
        
                choiceHandlers.forEach(({ choice, handler }) => {
                    choice.removeEventListener('click', handler);
                });
        
                buttonHandlers.length = 0;
                choiceHandlers.length = 0;
            }
            
            let isProfileSection = true;
            let isCitiesSection = false;

            const chooseProfileSection = templateContent.getElementById('profile-section');
            const chooseCitiesSection = templateContent.getElementById('cities-section');

            const currentProvinceSect = templateContent.getElementById('current-province');
            const citiesFightSect = templateContent.getElementById('fight-cities');

            currentProvinceSect.classList.remove('hidden');

            chooseCitiesSection.addEventListener('click', function () {
                if (!isCitiesSection) {
                    citiesFightSect.classList.remove('hidden');
                    currentProvinceSect.classList.add('hidden');

                    chooseProfileSection.classList.remove('bg-white');
                    chooseProfileSection.classList.add('bg-[#1f1d1e]');
                    
                    chooseCitiesSection.classList.remove('bg-[#1f1d1e]');
                    chooseCitiesSection.classList.add('bg-white');
                

                    isProfileSection = false;
                    isCitiesSection = true;
                }
            });

            chooseProfileSection.addEventListener('click', function () {
                if (!isProfileSection) {
                    currentProvinceSect.classList.remove('hidden');
                    citiesFightSect.classList.add('hidden');

                    chooseProfileSection.classList.add('bg-white');
                    chooseProfileSection.classList.remove('bg-[#1f1d1e]');
                    
                    chooseCitiesSection.classList.add('bg-[#1f1d1e]');
                    chooseCitiesSection.classList.remove('bg-white');

                    isProfileSection = true;
                    isCitiesSection = false;
                }
            });

            const cities = templateContent.getElementById('province-cities');
            const cityTemplate = cities.querySelector('.one-city');

            // Очищаем контейнер городов перед добавлением новых
            cities.innerHTML = '';

            currentProvince.cities.forEach(city => {
                // Клонируем шаблон города для каждого города
                let oneCity = cityTemplate.cloneNode(true);

                oneCity.querySelector('.city-exp').textContent = city.exp;
                oneCity.querySelector('.city-crd').textContent = city.crd;
                oneCity.querySelector('.city-name').textContent = city.name;
                oneCity.querySelector('.city-level').textContent = city.level;

            

                oneCity.querySelector('.fight-city').addEventListener('click', function(e){
                    


                    e.stopPropagation();
                
                })
            
                // Добавляем клонированный элемент в список городов
                cities.appendChild(oneCity);
            });

            const hideProfileIcon = templateContent.getElementById('hide-profile');
            hideProfileIcon.addEventListener('click', this.hideProfile);

            mapContainer.prepend(templateContent);
            this.updateInsertedElement(mapContainer.firstElementChild);
          

            this.insertedElement.classList.remove('hidden-prof'); // Убираем класс, который запускает анимацию исчезновения
            this.insertedElement.classList.add('visible-prof');

        },
        hideProfile(){
            if(this.insertedElement){
                const profileTab = document.getElementById('profile');


                this.insertedElement.classList.remove('visible-prof'); // Убираем класс, который отображает элемент
                this.insertedElement.classList.add('hidden-prof');
                this.insertedElement.remove(); 
                this.updateInsertedElement(null)


                profileTab.style.display = 'flex';
            }

        }
    },
    mounted(){
        const profileButton = document.getElementById('profile-button');

        profileButton.addEventListener('click', this.showProfile)
    }
}
</script>

<style scoped>
.visible-prof {
    animation: slideDown 0.5s ease-out forwards; /* Анимация при появлении */
}

/* Элемент с анимацией исчезновения */
.hidden-prof {
    animation: slideUp 0.5s ease-out forwards; /* Анимация при исчезновении */
    opacity: 0; /* Прячем элемент */
}


@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-50px); /* Начальная позиция - 50px выше */
    }
    to {
        opacity: 1;
        transform: translateY(0); /* Конечная позиция */
    }
}

/* Анимация исчезновения снизу вверх */
@keyframes slideUp {
    from {
        opacity: 1;
        transform: translateY(0); /* Начальная позиция */
    }
    to {
        opacity: 0;
        transform: translateY(-50px); /* Конечная позиция - 50px выше */
    }
}

.afiado_een{fill:#0B1719;}
</style>