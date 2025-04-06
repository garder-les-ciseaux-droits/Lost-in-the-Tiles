<template>

    <div id="shownMenu" class="hidden" ref="shownMenu">
        <div class="w-full z-50 h-full absolute bg-gradient-to-b from-black to-transparent backdrop-blur-sm flex flex-col items-center">
            <div class="w-[4rem] fixed left-0 h-full bg-gradient-to-b from-[#262626] via-[#262626] to-[#262626] flex flex-col justify-between items-center pb-10 pt-4">
                    
                <button id="hide-menu">
                    <svg class="w-10 h-10 text-white hover:text-[#e8e1d2]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 9L8 12M8 12L11 15M8 12H16M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>

                <svg class="w-10 h-10 text-white hover:text-[#e8e1d2]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Settings"> <g id="Vector"> <path d="M20.3499 8.92293L19.9837 8.7192C19.9269 8.68756 19.8989 8.67169 19.8714 8.65524C19.5983 8.49165 19.3682 8.26564 19.2002 7.99523C19.1833 7.96802 19.1674 7.93949 19.1348 7.8831C19.1023 7.82677 19.0858 7.79823 19.0706 7.76998C18.92 7.48866 18.8385 7.17515 18.8336 6.85606C18.8331 6.82398 18.8332 6.79121 18.8343 6.72604L18.8415 6.30078C18.8529 5.62025 18.8587 5.27894 18.763 4.97262C18.6781 4.70053 18.536 4.44993 18.3462 4.23725C18.1317 3.99685 17.8347 3.82534 17.2402 3.48276L16.7464 3.1982C16.1536 2.85658 15.8571 2.68571 15.5423 2.62057C15.2639 2.56294 14.9765 2.56561 14.6991 2.62789C14.3859 2.69819 14.0931 2.87351 13.5079 3.22396L13.5045 3.22555L13.1507 3.43741C13.0948 3.47091 13.0665 3.48779 13.0384 3.50338C12.7601 3.6581 12.4495 3.74365 12.1312 3.75387C12.0992 3.7549 12.0665 3.7549 12.0013 3.7549C11.9365 3.7549 11.9024 3.7549 11.8704 3.75387C11.5515 3.74361 11.2402 3.65759 10.9615 3.50224C10.9334 3.48658 10.9056 3.46956 10.8496 3.4359L10.4935 3.22213C9.90422 2.86836 9.60915 2.69121 9.29427 2.62057C9.0157 2.55807 8.72737 2.55634 8.44791 2.61471C8.13236 2.68062 7.83577 2.85276 7.24258 3.19703L7.23994 3.1982L6.75228 3.48124L6.74688 3.48454C6.15904 3.82572 5.86441 3.99672 5.6517 4.23614C5.46294 4.4486 5.32185 4.69881 5.2374 4.97018C5.14194 5.27691 5.14703 5.61896 5.15853 6.3027L5.16568 6.72736C5.16676 6.79166 5.16864 6.82362 5.16817 6.85525C5.16343 7.17499 5.08086 7.48914 4.92974 7.77096C4.9148 7.79883 4.8987 7.8267 4.86654 7.88237C4.83436 7.93809 4.81877 7.96579 4.80209 7.99268C4.63336 8.26452 4.40214 8.49186 4.12733 8.65572C4.10015 8.67193 4.0715 8.68752 4.01521 8.71871L3.65365 8.91908C3.05208 9.25245 2.75137 9.41928 2.53256 9.65669C2.33898 9.86672 2.19275 10.1158 2.10349 10.3872C2.00259 10.6939 2.00267 11.0378 2.00424 11.7255L2.00551 12.2877C2.00706 12.9708 2.00919 13.3122 2.11032 13.6168C2.19979 13.8863 2.34495 14.134 2.53744 14.3427C2.75502 14.5787 3.05274 14.7445 3.64974 15.0766L4.00808 15.276C4.06907 15.3099 4.09976 15.3266 4.12917 15.3444C4.40148 15.5083 4.63089 15.735 4.79818 16.0053C4.81625 16.0345 4.8336 16.0648 4.8683 16.1255C4.90256 16.1853 4.92009 16.2152 4.93594 16.2452C5.08261 16.5229 5.16114 16.8315 5.16649 17.1455C5.16707 17.1794 5.16658 17.2137 5.16541 17.2827L5.15853 17.6902C5.14695 18.3763 5.1419 18.7197 5.23792 19.0273C5.32287 19.2994 5.46484 19.55 5.65463 19.7627C5.86915 20.0031 6.16655 20.1745 6.76107 20.5171L7.25478 20.8015C7.84763 21.1432 8.14395 21.3138 8.45869 21.379C8.73714 21.4366 9.02464 21.4344 9.30209 21.3721C9.61567 21.3017 9.90948 21.1258 10.4964 20.7743L10.8502 20.5625C10.9062 20.5289 10.9346 20.5121 10.9626 20.4965C11.2409 20.3418 11.5512 20.2558 11.8695 20.2456C11.9015 20.2446 11.9342 20.2446 11.9994 20.2446C12.0648 20.2446 12.0974 20.2446 12.1295 20.2456C12.4484 20.2559 12.7607 20.3422 13.0394 20.4975C13.0639 20.5112 13.0885 20.526 13.1316 20.5519L13.5078 20.7777C14.0971 21.1315 14.3916 21.3081 14.7065 21.3788C14.985 21.4413 15.2736 21.4438 15.5531 21.3855C15.8685 21.3196 16.1657 21.1471 16.7586 20.803L17.2536 20.5157C17.8418 20.1743 18.1367 20.0031 18.3495 19.7636C18.5383 19.5512 18.6796 19.3011 18.764 19.0297C18.8588 18.7252 18.8531 18.3858 18.8417 17.7119L18.8343 17.2724C18.8332 17.2081 18.8331 17.1761 18.8336 17.1445C18.8383 16.8247 18.9195 16.5104 19.0706 16.2286C19.0856 16.2007 19.1018 16.1726 19.1338 16.1171C19.166 16.0615 19.1827 16.0337 19.1994 16.0068C19.3681 15.7349 19.5995 15.5074 19.8744 15.3435C19.9012 15.3275 19.9289 15.3122 19.9838 15.2818L19.9857 15.2809L20.3472 15.0805C20.9488 14.7472 21.2501 14.5801 21.4689 14.3427C21.6625 14.1327 21.8085 13.8839 21.8978 13.6126C21.9981 13.3077 21.9973 12.9658 21.9958 12.2861L21.9945 11.7119C21.9929 11.0287 21.9921 10.6874 21.891 10.3828C21.8015 10.1133 21.6555 9.86561 21.463 9.65685C21.2457 9.42111 20.9475 9.25526 20.3517 8.92378L20.3499 8.92293Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8.00033 12C8.00033 14.2091 9.79119 16 12.0003 16C14.2095 16 16.0003 14.2091 16.0003 12C16.0003 9.79082 14.2095 7.99996 12.0003 7.99996C9.79119 7.99996 8.00033 9.79082 8.00033 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g> </g></svg>
            </div>
            <div class="w-[27rem] shadow shadow-white rounded-b-3xl h-[10rem] relative bg-[#111111] bg-center bg-contain flex px-4 py-4 justify-center items-center">

                <!-- <div class="absolute w-full h-full bg-gradient-to-b from-[#3a4250] to-[#3a4250]/30  rounded-b-3xl "></div> -->
                <div class="z-50 h-full flex w-20 items-start ">
                    <div class="border-4 border-black w-20 h-20 rounded-full">
                        <img  class="rounded-full w-full h-full" src="/src/assets/menuImages/defaultAvatar2.png">
                    </div>
                </div>
                <div class="z-50 w-[22rem] h-full flex flex-col text-white px-6 pt-2 font-serif text-lg">

                    <p id="player-name">Player1</p>
                    <span class=text-base>(No title)</span>
                    <div class="flex justify-between mt-4 w-full text-base h-10 items-center">
                        <span>Current Rank</span>
                        <span id="current-rank" class="text-2xl">1</span>
                    
                    </div>
                
                </div>
            </div>
            <div class="w-full h-[30rem] flex justify-center mt-2 py-2 px-2 space-x-2">
                <div class="w-36 h-36  bg-transparent hover:bg-gray-600/40 flex justify-center items-center rounded-xl">
                    <svg class="w-24 h-24" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" >
                        <title>DALL·E 2024-09-30 23</title>

                        <g id="Layer 1">
                            <path id="форма 5" fill-rule="evenodd" class="s0" d="m225.8 483.8l36.6 32.8-32.7 36.7-36.7-32.8z"/>
                            <path id="форма 2" fill-rule="evenodd" class="s1" d="m249.8 737.2c0 0 45.1-61.3 176.5-99.7 0 0 61.6 57.1 151.6 4.1 0 0 137.6 32.1 184.4 102.4 0 0-268 252.1-512.5-6.8z"/>
                            <path id="форма 1" fill-rule="evenodd" class="s2" d="m511.9 920c-233.1 0-421.5-182.1-421.5-407.5 0-225.4 188.4-407.6 421.5-407.6 233.1 0 421.5 182.2 421.5 407.6 0 225.4-188.4 407.5-421.5 407.5z"/>
                            <path id="форма 5 copy" fill-rule="evenodd" class="s0" d="m778.8 479.7l36.7 32.8-32.8 36.7-36.6-32.8z"/>
                            <path id="форма 3" fill-rule="evenodd" class="s1" d="m512.4 612.9c0 0 77.9 0.3 120.3-95.3 0 0 24.8-10.6 34.2-46.1l-3-88c0 0-18.7-70.6-73.7-94.2 0 0 8-39.6-4.1-61.5 0 0-50.8 22.8-118.8-16.3 0 0-32.8 11.7 24.6 53.2 0 0-103.7 18.7-135.2 16.4 0 0-44.2 3.8 0 41l28.7 4.1c0 0-54.8 46.9-41 159.7 0 0 22.7 17.1 32.8 28.7 0 0 1.1 65.7 135.2 98.3z"/>
                            <path id="форма 4" fill-rule="evenodd" class="s3" d="m745.9 522.8"/>
                        </g>
                    </svg>
                </div>
                <div class="w-36 h-36 bg-transparent hover:bg-gray-600/40 flex justify-center items-center rounded-xl">
                    <svg class="w-24 h-20" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" >
                        <title>DALL·E 2024-09-30 23</title>

                        <g id="Layer 1">
                            <path id="форма 3" fill-rule="evenodd" class="s0" d="m378.3 635.9h270.8c0 0-21.9-35.7-38-101.8 0 0-10.2-55-11.5-93.4h-174.6c0 0-10.1 143.4-46.7 195.2z"/>
                            <path id="форма 1" fill-rule="evenodd" class="s0" d="m422.3 300.5h181.4c0 0 55-42.8 54.4-109.4 0 0 4.6-138.8-144-145.7 0 0-99.2-0.1-134.6 83.6 0 0-49.3 105.3 42.8 171.5z"/>
                            <path id="форма 2" fill-rule="evenodd" class="s0" d="m342.6 369c0 0-2.1-30.3 35.3-28.7 6.1 0.4 275.3 0 275.3 0 0 0 26.1-1.3 30.2 30.3 0 0-0.5 21.1-24.7 27.5h-292.8c0 0-23.4-3.4-23.3-29.1z"/>
                            <path id="форма 2 copy" fill-rule="evenodd" class="s0" d="m312.4 701.6c0 0-2.5-27.4 41.6-25.9 7.1 0.3 324 0 324 0 0 0 30.8-1.2 35.7 27.3 0 0-0.7 19.2-29.2 25h-344.6c0 0-27.7-3.1-27.5-26.4z"/>
                            <path id="форма 2 copy 2" fill-rule="evenodd" class="s0" d="m242.3 936.7c0 0-3.3-27.5 56.1-26 9.7 0.3 437.3 0 437.3 0 0 0 41.5-1.2 48.1 27.4 0 0-0.9 19.1-39.4 24.9h-465c0 0-37.3-3.1-37.1-26.3z"/>
                            <path id="форма 4" fill-rule="evenodd" class="s0" d="m276.6 869.5h474.2c0 0 38-20.2 11-74.2 0 0-7.7-24.7-35.8-31.6h-427.4c0 0-45 7.5-45.4 67.4 0 0-0.2 30.4 23.4 38.4z"/>
                        </g>
                    </svg>
                </div>    
                
                <div class="w-36 h-36 bg-transparent hover:bg-gray-600/40  flex justify-center items-center rounded-xl">
                    <svg class="w-24 h-24" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" >
                        <title>DALL·E 2024-09-30 23</title>

                        <g id="Layer 1">
                            <path id="форма 4" fill-rule="evenodd" class="s0" d="m512.5 826.9v-35.5c0 0-43.5-0.2-70.8-51.5-32-60-239.1-107.1-322.9-80.6l28-361.9c0 0-19.4-3.9-33.1 15.3l-31.7 379.6c0 0 2 13.3 35.6 0 0 0 144.7-35.7 294.5 57.2 0 0 26.7 74.5 100.4 77.4z"/>
                            <path id="форма 4 copy" fill-rule="evenodd" class="s0" d="m511.2 826.9v-35.5c0 0 43.4-0.2 70.8-51.5 31.9-60 239.1-107.1 322.8-80.6l-27.9-361.9c0 0 19.4-3.9 33 15.3l31.8 379.6c0 0-2 13.3-35.6 0 0 0-144.8-35.7-294.6 57.2 0 0-26.6 74.5-100.3 77.4z"/>
                            <path id="форма 3" fill-rule="evenodd" class="s0" d="m165.6 624.2l1.2-17.9c0 0 75-39.5 202.9 23.9 0 0 56.6 23.3 99.2 65.5 16.3 16.2 30 31.9 42.9 36v22.8c0 0-14.2 3.3-35.8-26.4 0 0-113.4-122.2-310.4-103.9z"/>
                            <path id="форма 3 copy" fill-rule="evenodd" class="s0" d="m856.8 624.2l-1.2-17.9c0 0-75-39.5-202.9 23.9 0 0-56.6 23.3-99.2 65.5-16.4 16.2-30.1 31.9-42.9 36v22.8c0 0 14.1 3.3 35.8-26.4 0 0 113.4-122.2 310.4-103.9z"/>
                            <path id="форма 2" fill-rule="evenodd" class="s0" d="m193 244.6l-18.9 309.2c0 0 199.4-37.3 325.7 142 0 0 13.1-16.8-54.9-89.5 0 0-103-89.7-244.7-81.2l14.5-274.1c0 0-14.8 0.1-21.7-6.4z"/>
                            <path id="форма 2 copy" fill-rule="evenodd" class="s0" d="m829.3 244.6l19 309.2c0 0-199.4-37.3-325.8 142 0 0-13-16.8 54.9-89.5 0 0 103.1-89.7 244.8-81.2l-14.5-274.1c0 0 14.8 0.1 21.6-6.4z"/>
                            <path id="форма 1" fill-rule="evenodd" class="s0" d="m243.2 198c0 0 210.3 27.2 259.4 120.5v322.4c0 0-47.4-119.9-275-148z"/>
                            <path id="форма 1 copy" fill-rule="evenodd" class="s0" d="m779.5 198c0 0-210.3 27.2-259.4 120.5v322.4c0 0 47.5-119.9 275-148z"/>
                        </g>
                    </svg>
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

        }
    },
    computed:{
        ...mapGetters(['insertedElement', 'playerProfile'])
    },
    methods: {
        ...mapActions(['updateInsertedElement']),
        showMenu(){
            const profileTab = document.getElementById('profile');

            profileTab.style.display = 'none';

            const mapContainer = document.getElementById('mapContainer');
             
            const template = this.$refs.shownMenu;

        
            const templateContent = document.createDocumentFragment(); 
            Array.from(template.childNodes).forEach(node => {
            templateContent.appendChild(node.cloneNode(true)); 
            });


            let name = templateContent.getElementById('player-name');
            name.textContent = this.playerProfile.username;

            let rank = templateContent.getElementById('current-rank');
            rank.textContent = this.playerProfile.level;

            const hideMenuIcon = templateContent.getElementById('hide-menu');


            hideMenuIcon.addEventListener('click', this.hideMenu);


            mapContainer.prepend(templateContent);


            this.updateInsertedElement(mapContainer.firstElementChild);



        },
        hideMenu(){
            if(this.insertedElement){
                const profileTab = document.getElementById('profile');


                    this.insertedElement.remove();  
                    this.updateInsertedElement(null);


                profileTab.style.display = 'flex';
            }

        }
    },
    mounted(){
        const menuIcon = document.getElementById('menu-icon');

        menuIcon.addEventListener('click', this.showMenu);

    }
}
</script>

<style scoped>
.s0 { fill: #ffffff;stroke: #ffffff;stroke-miterlimit:10 } 
.s1 { fill: #ffffff } 
.s2 { fill: none;stroke: #ffffff;stroke-miterlimit:10;stroke-width: 38 } 
.s3 { fill: none;stroke: #ffffff;stroke-miterlimit:10 } 



</style>