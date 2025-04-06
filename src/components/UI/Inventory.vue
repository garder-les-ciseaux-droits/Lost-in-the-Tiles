<template>

    <div id="shownInventory" ref="shownInventory" class="hidden">    
        <div id="inventory" class="w-full h-full absolute z-[400] flex justify-start items-center bg-black/40 backdrop-blur-lg">
            <div class="w-full h-full flex justify-start items-center px-24">
                <button id="hide-inventory"  class="fixed top-0 left-0 w-24 h-24 flex justify-center items-center z-50">
                    <svg class="w-10 h-10 text-white hover:text-[#e8e1d2]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 9L8 12M8 12L11 15M8 12H16M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>
                <div class="w-1/2 h-[40rem] flex flex-col">
                    <div class="w-[32rem] h-[5rem] text-white flex justify-start items-center  text-xl tracking-wider">
                        <span>Characters</span>
                    </div>
                    <div id="characters-list" class="w-[32rem] justify-between  h-[35rem] grid auto-rows-auto grid-cols-5 overflow-y-auto  gap-4">

                    </div>
                </div>
                <div id="selected-char" class="w-1/2 h-[40rem] flex justify-end items-center px-10 space-y-4 flex-col">
                    <div class="w-full h-10 flex space-x-4 text-white font-mono justify-center">
                        <p class="w-auto h-full tracking-wider flex justify-center items-center text-xl profile-name-slct">Mira </p>
                        <div class="h-full slct-char-rarity flex justify-start items-center space-x-2">
                            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="white    " xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 3L14.0357 8.16153C14.2236 8.63799 14.3175 8.87622 14.4614 9.0771C14.5889 9.25516 14.7448 9.41106 14.9229 9.53859C15.1238 9.68245 15.362 9.77641 15.8385 9.96432L21 12L15.8385 14.0357C15.362 14.2236 15.1238 14.3175 14.9229 14.4614C14.7448 14.5889 14.5889 14.7448 14.4614 14.9229C14.3175 15.1238 14.2236 15.362 14.0357 15.8385L12 21L9.96432 15.8385C9.77641 15.362 9.68245 15.1238 9.53859 14.9229C9.41106 14.7448 9.25516 14.5889 9.0771 14.4614C8.87622 14.3175 8.63799 14.2236 8.16153 14.0357L3 12L8.16153 9.96432C8.63799 9.77641 8.87622 9.68245 9.0771 9.53859C9.25516 9.41106 9.41106 9.25516 9.53859 9.0771C9.68245 8.87622 9.77641 8.63799 9.96432 8.16153L12 3Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

                            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="white    " xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 3L14.0357 8.16153C14.2236 8.63799 14.3175 8.87622 14.4614 9.0771C14.5889 9.25516 14.7448 9.41106 14.9229 9.53859C15.1238 9.68245 15.362 9.77641 15.8385 9.96432L21 12L15.8385 14.0357C15.362 14.2236 15.1238 14.3175 14.9229 14.4614C14.7448 14.5889 14.5889 14.7448 14.4614 14.9229C14.3175 15.1238 14.2236 15.362 14.0357 15.8385L12 21L9.96432 15.8385C9.77641 15.362 9.68245 15.1238 9.53859 14.9229C9.41106 14.7448 9.25516 14.5889 9.0771 14.4614C8.87622 14.3175 8.63799 14.2236 8.16153 14.0357L3 12L8.16153 9.96432C8.63799 9.77641 8.87622 9.68245 9.0771 9.53859C9.25516 9.41106 9.41106 9.25516 9.53859 9.0771C9.68245 8.87622 9.77641 8.63799 9.96432 8.16153L12 3Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

                            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="white    " xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 3L14.0357 8.16153C14.2236 8.63799 14.3175 8.87622 14.4614 9.0771C14.5889 9.25516 14.7448 9.41106 14.9229 9.53859C15.1238 9.68245 15.362 9.77641 15.8385 9.96432L21 12L15.8385 14.0357C15.362 14.2236 15.1238 14.3175 14.9229 14.4614C14.7448 14.5889 14.5889 14.7448 14.4614 14.9229C14.3175 15.1238 14.2236 15.362 14.0357 15.8385L12 21L9.96432 15.8385C9.77641 15.362 9.68245 15.1238 9.53859 14.9229C9.41106 14.7448 9.25516 14.5889 9.0771 14.4614C8.87622 14.3175 8.63799 14.2236 8.16153 14.0357L3 12L8.16153 9.96432C8.63799 9.77641 8.87622 9.68245 9.0771 9.53859C9.25516 9.41106 9.41106 9.25516 9.53859 9.0771C9.68245 8.87622 9.77641 8.63799 9.96432 8.16153L12 3Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

                            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="white    " xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 3L14.0357 8.16153C14.2236 8.63799 14.3175 8.87622 14.4614 9.0771C14.5889 9.25516 14.7448 9.41106 14.9229 9.53859C15.1238 9.68245 15.362 9.77641 15.8385 9.96432L21 12L15.8385 14.0357C15.362 14.2236 15.1238 14.3175 14.9229 14.4614C14.7448 14.5889 14.5889 14.7448 14.4614 14.9229C14.3175 15.1238 14.2236 15.362 14.0357 15.8385L12 21L9.96432 15.8385C9.77641 15.362 9.68245 15.1238 9.53859 14.9229C9.41106 14.7448 9.25516 14.5889 9.0771 14.4614C8.87622 14.3175 8.63799 14.2236 8.16153 14.0357L3 12L8.16153 9.96432C8.63799 9.77641 8.87622 9.68245 9.0771 9.53859C9.25516 9.41106 9.41106 9.25516 9.53859 9.0771C9.68245 8.87622 9.77641 8.63799 9.96432 8.16153L12 3Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

                            
                            
                        </div>
                    </div>
                    <p class="w-auto h-10 tracking-widest text-white font-light  flex items-center slct-char-lvl">Level 1 / 50</p>
                    <img class="w-64 chibi-char-img-slct">
                    <div class="w-64 rounded-full h-1 bg-white"></div>
                    <div class="w-full char-skills-invent char-info-block h-24 shadow-lg bg-[#111111] rounded-xl flex text-white font-mono px-8 py-6 justify-center items-center space-x-4">
                        
                        <svg  fill="#ffffff" class="w-12 h-12 cursor-pointer" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 505.712 505.712" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g transform="translate(1 1)"> <g> <g> <path d="M79.842,271.618H61.877c-9.881,0-17.965,8.084-17.965,17.965v17.965c0,9.881,8.084,17.965,17.965,17.965h17.965 c9.881,0,17.965-8.084,17.965-17.965v-17.965C97.807,279.702,89.723,271.618,79.842,271.618z M79.842,307.547H61.877v-17.965 h17.965V307.547z"></path> <path d="M205.596,271.618h-17.965c-9.881,0-17.965,8.084-17.965,17.965v17.965c0,9.881,8.084,17.965,17.965,17.965h17.965 c9.881,0,17.965-8.084,17.965-17.965v-17.965C223.561,279.702,215.477,271.618,205.596,271.618z M205.596,307.547h-17.965 v-17.965h17.965V307.547z"></path> <path d="M332.249,73.105c-3.593-3.593-8.084-5.389-12.575-5.389s-8.982,1.797-12.575,5.389l-12.575,12.575 c-7.186,7.186-7.186,17.965,0,25.151l12.575,12.575c3.593,3.593,8.084,5.389,12.575,5.389s8.982-1.797,12.575-5.389 l12.575-12.575c3.593-3.593,5.389-8.084,5.389-12.575s-1.796-8.982-5.389-12.575L332.249,73.105z M319.674,110.832 l-12.575-12.575l12.575-12.575l12.575,12.575L319.674,110.832z"></path> <path d="M307.098,212.333c3.593,3.593,8.084,5.389,12.575,5.389s8.982-1.797,11.677-5.389l12.576-12.575 c3.593-3.593,5.389-8.084,5.389-12.575s-1.796-8.982-5.389-12.575l-12.576-12.575c-3.593-3.593-8.084-5.389-12.575-5.389 s-8.982,1.797-12.575,5.389l-12.575,12.575c-7.186,7.186-7.186,17.965,0,25.151L307.098,212.333z M319.674,174.607l12.575,12.575 l-12.575,12.575l-12.575-12.575L319.674,174.607z"></path> <path d="M332.249,264.432c-3.593-3.593-8.084-5.389-12.575-5.389s-8.982,1.797-12.575,5.389l-12.575,12.575 c-7.186,7.186-7.186,17.965,0,25.151l12.575,12.575c3.593,3.593,8.084,5.389,12.575,5.389s8.982-2.695,12.575-5.389 l12.575-12.575c7.186-7.186,7.186-17.965,0-25.151L332.249,264.432z M319.674,301.26l-12.575-12.575l12.575-12.575l12.575,12.575 L319.674,301.26z"></path> <path d="M205.596,397.372h-17.965c-9.881,0-17.965,8.084-17.965,17.965v17.965c0,9.881,8.084,17.965,17.965,17.965h17.965 c9.881,0,17.965-8.084,17.965-17.965v-17.965C223.561,405.456,215.477,397.372,205.596,397.372z M205.596,433.302h-17.965 v-17.965h17.965V433.302z"></path> <path d="M79.842,397.372H61.877c-9.881,0-17.965,8.084-17.965,17.965v17.965c0,9.881,8.084,17.965,17.965,17.965h17.965 c9.881,0,17.965-8.084,17.965-17.965v-17.965C97.807,405.456,89.723,397.372,79.842,397.372z M79.842,433.302H61.877v-17.965 h17.965V433.302z"></path> <path d="M142.719,334.495h-17.965c-9.881,0-17.965,8.084-17.965,17.965v17.965c0,9.881,8.084,17.965,17.965,17.965h17.965 c9.881,0,17.965-8.084,17.965-17.965V352.46C160.684,342.579,152.6,334.495,142.719,334.495z M142.719,370.425h-17.965V352.46 h17.965V370.425z"></path> <path d="M496.628,174.607l-158.99-158.99c-9.881-10.779-26.947-10.779-37.726,0L141.821,175.505 c-5.389,4.491-8.084,11.677-8.084,18.863s2.695,13.474,8.084,18.863l13.474,13.474H25.947C10.677,226.705-1,238.382-1,253.653 v215.579c0,15.27,11.677,26.947,26.947,26.947h215.579c15.27,0,26.947-11.677,26.947-26.947V339.563l32.337,31.759 c5.389,5.39,11.677,8.084,18.863,8.084c6.288,0,13.474-2.695,18.863-8.084l158.091-158.989 c5.389-4.491,8.084-11.677,8.084-18.863S502.018,179.997,496.628,174.607z M250.509,469.232c0,5.389-3.593,8.982-8.982,8.982 H25.947c-5.389,0-8.982-3.593-8.982-8.982V253.653c0-5.389,3.593-8.982,8.982-8.982H173.26h68.267 c5.389,0,8.982,3.593,8.982,8.982v68.267V469.232z M484.053,199.758L325.961,358.747c-3.593,3.593-8.982,3.593-12.575,0 l-44.912-44.912v-60.182v0c0-3.34-0.559-6.509-1.592-9.421c-0.738-2.08-1.718-4.029-2.908-5.816 c-0.476-0.715-0.986-1.404-1.528-2.065c-0.542-0.661-1.116-1.294-1.719-1.898s-1.237-1.177-1.898-1.719 c-4.628-3.793-10.621-6.028-17.302-6.028h-60.182l-26.947-26.947c-1.797-1.797-2.695-3.593-2.695-6.288s0.898-4.491,2.695-6.288 l158.99-158.091c3.593-3.593,8.982-3.593,12.575,0l158.091,158.091c1.797,1.796,2.695,3.593,2.695,6.288 S485.849,197.961,484.053,199.758z"></path> </g> </g> </g> </g></svg>


                        <svg class="w-12 h-12  cursor-pointer" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7 15.5c0 .049.006.096.007.145a7.3 7.3 0 1 1 8.638-8.638c-.049 0-.096-.007-.145-.007a8.557 8.557 0 0 0-.877.045 6.296 6.296 0 1 0-7.578 7.578A8.557 8.557 0 0 0 7 15.5zm.983-11.27l-.119-.992A5.3 5.3 0 0 0 3.2 8.558c.002.153.01.303.024.45l.995-.093a4.508 4.508 0 0 1-.019-.367A4.3 4.3 0 0 1 7.983 4.23zM22.8 15.5a7.3 7.3 0 1 1-7.3-7.3 7.308 7.308 0 0 1 7.3 7.3zm-1 0a6.3 6.3 0 1 0-6.3 6.3 6.307 6.307 0 0 0 6.3-6.3zm-10.58.415a4.508 4.508 0 0 1-.02-.367 4.3 4.3 0 0 1 3.783-4.318l-.119-.992a5.3 5.3 0 0 0-4.664 5.32c.002.153.01.303.024.45zm8.028-4.163l-.707.707a4.3 4.3 0 1 1-6.082 6.082l-.707.707a5.3 5.3 0 0 0 7.496-7.496z"></path><path fill="none" stroke="none" d="M0 0h24v24H0z"></path></g></svg>
                    
                    </div>
                </div>
            </div>

        </div>



    </div> 

    <div id="unlocked-char" ref="unlockedChar" class="hidden">
        <div class="unlocked-char w-24 h-28 rounded-md relative flex justify-center cursor-pointer shadow-lg">
            <div class="absolute top-0 w-24 h-1 rounded-t-md bg-cyan-200"></div>
            <img class="w-full rounded-md char-icon" >
            <div class="absolute bottom-0 w-24 h-6 rounded-b-md bg-white flex justify-center items-center">
                <span class="text-[#121212] text-sm font-mono char-lvl">Lv. 1</span>
            </div>
        </div>
    </div>


    <div id="locked-char" ref="lockedChar" class="hidden">
        <div class="locked-char w-24 h-28 rounded-md bg-[#121212] flex justify-center cursor-pointer shadow-lg">
            <svg class="w-16" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve" fill="#8f8f8f"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16,2C9.9,2,5,6.9,5,13v15.1c0,0.4,0.2,0.8,0.6,0.9c0.4,0.2,0.8,0.1,1.1-0.2l0.7-0.6c0.4-0.3,0.9-0.3,1.3,0 c1.1,1.1,2.9,1.1,4,0c0.4-0.3,0.9-0.3,1.3,0c1.1,1.1,2.9,1.1,4,0c0.4-0.3,0.9-0.3,1.3,0c1.1,1.1,2.9,1.1,4,0c0.4-0.3,0.9-0.3,1.3,0 l0.7,0.6c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.3,0,0.4-0.1c0.4-0.2,0.6-0.5,0.6-0.9V13C27,6.9,22.1,2,16,2z M18,13c0-0.6,0.4-1,1-1 s1,0.4,1,1v3c0,0.6-0.4,1-1,1s-1-0.4-1-1V13z M12,13c0-0.6,0.4-1,1-1s1,0.4,1,1v3c0,0.6-0.4,1-1,1s-1-0.4-1-1V13z M21,20H11 c-0.6,0-1-0.4-1-1s0.4-1,1-1h10c0.6,0,1,0.4,1,1S21.6,20,21,20z"></path> </g></svg>
            
        </div>
    </div>

</template>

<script>
import { mapGetters, mapActions  } from 'vuex';

export default{
    data(){
        return {
            showFirstChar: true
        }
    },
    computed: {
        ...mapGetters(['provinces', 'characters', 'playerProfile', 'insertedElement'])
    },
    methods:{
        ...mapActions(['updateInsertedElement']),
        showInventory(){

            const blackDiv = document.querySelector('.initial');
            blackDiv.classList.remove('hidden');

            const profileTab = document.getElementById('profile');
            profileTab.style.display = 'none';


            setTimeout(() => {
                
                this.toggleAnimation(); 
            }, 0);


            setTimeout(
                () => {
   

                    


            
            const mapContainer = document.getElementById('parent-container');
            const template = this.$refs.shownInventory;

        
            const templateContent = document.createDocumentFragment(); 
            Array.from(template.childNodes).forEach(node => {
            templateContent.appendChild(node.cloneNode(true)); 
            });

            const charactersList = templateContent.getElementById('characters-list');

            charactersList.innerHTML = '';


            const unlockedChar = this.$refs.unlockedChar;

            const lockedChar = this.$refs.lockedChar;



            for(let i = 0; i < this.playerProfile.characters.length; i++){

                const unlockedContent = document.createDocumentFragment(); 
                Array.from(unlockedChar.childNodes).forEach(node => {
                unlockedContent.appendChild(node.cloneNode(true)); 
                });


                const char = this.characters.find(x => x.name === this.playerProfile.characters[i].charName);
                unlockedContent.querySelector('.char-icon').src = char.icon;

                unlockedContent.querySelector('.char-lvl').textContent = `Lvl. ${this.playerProfile.characters[i].charLvl}`;

            


                charactersList.appendChild(unlockedContent)
            }


            for(let i = 0; i < 49; i++){

                const lockedContent = document.createDocumentFragment(); 
                Array.from(lockedChar.childNodes).forEach(node => {
                lockedContent.appendChild(node.cloneNode(true)); 
                });


                charactersList.appendChild(lockedContent);
            }



            const selectedContainer = templateContent.getElementById('selected-char');

            if(this.showFirstChar){

                const svgStar  = `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 3L14.0357 8.16153C14.2236 8.63799 14.3175 8.87622 14.4614 9.0771C14.5889 9.25516 14.7448 9.41106 14.9229 9.53859C15.1238 9.68245 15.362 9.77641 15.8385 9.96432L21 12L15.8385 14.0357C15.362 14.2236 15.1238 14.3175 14.9229 14.4614C14.7448 14.5889 14.5889 14.7448 14.4614 14.9229C14.3175 15.1238 14.2236 15.362 14.0357 15.8385L12 21L9.96432 15.8385C9.77641 15.362 9.68245 15.1238 9.53859 14.9229C9.41106 14.7448 9.25516 14.5889 9.0771 14.4614C8.87622 14.3175 8.63799 14.2236 8.16153 14.0357L3 12L8.16153 9.96432C8.63799 9.77641 8.87622 9.68245 9.0771 9.53859C9.25516 9.41106 9.41106 9.25516 9.53859 9.0771C9.68245 8.87622 9.77641 8.63799 9.96432 8.16153L12 3Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`

                selectedContainer.querySelector('.profile-name-slct').textContent = `${this.playerProfile.characters[0].charName} `;

                selectedContainer.querySelector('.slct-char-rarity').innerHTML = '';

                for(let i = 0; i < this.playerProfile.characters[0].rarity; i++ ){
                    selectedContainer.querySelector('.slct-char-rarity').innerHTML += svgStar;
                }

                selectedContainer.querySelector('.slct-char-lvl').textContent = `Level ${this.playerProfile.characters[0].charLvl} / 50`;

                selectedContainer.querySelector('.chibi-char-img-slct').src = this.characters.find(x => x.name === this.playerProfile.characters[0].charName).chibiIcon;
            }



           

           
            mapContainer.prepend(templateContent);


            const hidenButton = document.getElementById('hide-inventory');
            hidenButton.addEventListener('click', this.hideInventory)


            this.updateInsertedElement(mapContainer.firstElementChild);

            
                }, 900
            )

            setTimeout(() => {
                            
                this.toggleAnimation(); 
                setTimeout(() =>{
                    blackDiv.classList.add('hidden');
                },1500)

                
    
                          
             }, 1000)
        },
        toggleAnimation() {
            const blackDiv = document.querySelector('.initial');
            blackDiv.classList.toggle('active');

           
        },

        hideInventory(){    
            this.clickSound()
            document.body.style.pointerEvents = 'none';

            const blackDiv = document.querySelector('.initial');
          
            const profileTab = document.getElementById('profile');

            blackDiv.classList.remove('hidden');
        
           

            setTimeout(() => {
                this.toggleAnimation(); 

            }, 0);

            setTimeout(() => {

                this.insertedElement.remove();
                this.updateInsertedElement(null);

                profileTab.style.display = 'flex';
            }, 900);


            setTimeout(() => {
                
                this.toggleAnimation(); 

                setTimeout(()=>{
                    // blackDiv.classList.add('hidden');
                    document.body.style.pointerEvents = 'auto';
                   
                        blackDiv.classList.add('hidden');
                    
                },1500)
            }, 1000);


        },
        clickSound() {
            
            const audio = document.getElementById('click-sound');

            audio.volume = 0.3;
            audio.play();
        }
    },
    mounted(){
        const inventoryButton = document.getElementById('inventory-button');

        inventoryButton.addEventListener('click', this.showInventory)

  
    }
}

</script>

<style scoped>
.st0{fill:none;stroke:#8f8f8f;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
</style>