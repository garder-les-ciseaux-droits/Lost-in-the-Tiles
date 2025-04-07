<template>  
    <div id="parent-container" class="w-full h-screen bg-black/60  relative">
      <div class="fixed z-50">
        <BlackScreen/>
        </div>

      <div class="w-full h-full z-40 relative "  @click="isSearchingGame = false">
        <div class="w-full h-full z-50 absolute  bg-[#111111]">
          <!-- <WelcomeMessage/> -->
            <div class="w-full h-full absolute flex justify-center items-center filter blur-sm">
              <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" class="w-48 h-48 animate-pulse">
                <title>new</title>
        
                <g id="Layer 1">
                  <path id="форма 7" fill-rule="evenodd" class="s0" d="m514.4 559c0 0-8.9 23.6 7.7 46.7 6.1 8.4 21.2 21.7 33.3 26.7 0 0 36.6 13.9 54.6 17.8 0 0 9.3 3.1 20.5-9.1 11-12.2 25.6-42.2 27.9-52.6 0 0-20.4 11.8-40.5 13.6 0 0-38.3 0.8-53-6.9 0 0-45.4-20.4-50.5-36.2z"/>
                  <path id="форма 7" fill-rule="evenodd" class="s0" d="m505.3 559c0 0 8.9 23.6-7.7 46.7-6.1 8.4-21.2 21.7-33.3 26.7 0 0-36.6 13.9-54.6 17.8 0 0-9.3 3.1-20.5-9.1-11-12.2-25.6-42.2-27.9-52.6 0 0 20.4 11.8 40.5 13.6 0 0 38.3 0.8 53-6.9 0 0 45.4-20.4 50.5-36.2z"/>
                  <path id="форма 6" fill-rule="evenodd" class="s0" d="m675.5 566.6c0 0 21.4-9.3 30.5-24.8 0 0-9.2 4.9-14.3 4.8-0.3 0-12.9-1.6-12.9-1.6 0.2 1.6-1.5 9.9-3.3 21.6z"/>
                  <path id="форма 6" fill-rule="evenodd" class="s0" d="m343.7 563.7c0 0-21.4-9.3-30.5-24.8 0 0 9.1 4.9 14.3 4.9 0.3 0 12.9-1.6 12.9-1.6-0.2 1.5 1.5 9.8 3.3 21.5z"/>
                  <path id="форма 4" fill-rule="evenodd" class="s0" d="m512 430.2c-8.2 0-14.8-6.6-14.8-14.7 0-8.2 6.6-14.8 14.8-14.8 8.2 0 14.8 6.6 14.8 14.8 0 8.1-6.6 14.7-14.8 14.7z"/>
                  <path id="форма 1" fill-rule="evenodd" class="s0" d="m504.8 393c0 0-20.1-26.6-38.1-47.6 0 0-19.2-16.5-28.1-53.1 0 0-9.4-37.1 22.3-69 30.2-30.3 49.7-37.2 49.7-37.2 0 0 3.2-3.4 38 25 0 0 28.2 16.7 43 68.5 0 0-19.2 2.4-42 41.9l-18.1 45.8c0 0-7.1 18.1-12.4 22.9l1-66.8c0 0 2.2-18.7-7.6-17.1 0 0-9.1-3.1-8.6 9.5 0 0 2.7 75.6 0.9 77.2z"/>
                  <path id="форма 1" fill-rule="evenodd" class="s0" d="m485.2 415c0 0-28.2-2.4-54.9 4.9 0 0-23.1 10.4-59.9 2.8 0 0-37.6-7.3-53-49.5-14.6-40.2-10.8-69.1-10.8-69.1 0 0-4.4 1.2 36-18.3 0 0 28.1-15.6 81.3-6.9 0 0-6 18.4 20.1 55.8l31.4 40c0 0 13.8 16.6 15.9 23.4l-49.8-26.4c0 0-28.5-18.8-31.3-9.2 0 0-3.6 5.6 9.2 11.2 0 0 65.1 39 65.8 41.3z"/>
                  <path id="форма 1" fill-rule="evenodd" class="s0" d="m535.4 430.3c0 0 13.5-7.9 40.9-4.1 0 0 45.5 4.6 71.4 36.5 0 0 10.2 7.6 15.5 38.8 0.4 2.5 1.6 21.6-1 38.7-2.5 16.8-10.9 33.2-10.9 33.2 0 0-4 10.3-48.8 12.3 0 0-35.2-2.2-58.7-20.3-17.2-13.2-25.8-32.4-27.8-58 0 0 0.6-62.4 3.7-66.4l13.8 9.1 19.7 19c0 0 25.7 30.5 31.8 21.4 0 0 3-4-19.5-30.8-6.8-8-30.2-28.4-30.1-29.4z"/>
                  <path id="форма 1" fill-rule="evenodd" class="s0" d="m489 430.3c0 0-13.5-7.9-40.9-4.1 0 0-45.6 4.6-71.4 36.5 0 0-10.2 7.6-15.6 38.8-0.4 2.5-1.5 21.6 1.1 38.7 2.5 16.8 10.9 33.2 10.9 33.2 0 0 4 10.3 48.8 12.3 0 0 35.1-2.2 58.6-20.3 17.3-13.2 25.9-32.4 27.9-58 0 0-0.7-62.4-3.8-66.4l-13.7 9.1-19.7 19c0 0-25.7 30.5-31.9 21.4 0 0-3-4 19.6-30.8 6.7-8 30.2-28.4 30.1-29.4z"/>
                  <path id="форма 1" fill-rule="evenodd" class="s0" d="m529.6 397.9c0 0 14.1-30.3 24.3-56.1 0 0 5.5-24.6 33.7-49.6 0 0 31.6-24.2 75.4-14.2 39.2 8.9 52.1 27.9 52.1 27.9 0 0 4.7 23.9-9.4 66 0 0 1.6 9.6-37 43.2 0 0-16.3 9.9-49.6 9.2 0 0-18.1-6.9-39-9.6-15.3-2-33.4 0.3-40.4-1.6-0.8-0.2 3.2-5.2 14.8-12 17.2-10 43.8-22.4 43.8-22.4 0 0 17.6-6.8 11.6-14.8 0 0-1.6-9.5-12.5-3.1 0 0-65.4 37.9-67.8 37.1z"/>
                  <path id="форма 2" fill-rule="evenodd" class="s0" d="m364.7 261.5c0 0 2.3-40.5 30.5-58.2 0 0 8.9-3.7 30.5 0 0 0 14.4 2.2 24.8 9.5 0 0-22.4 20.8-22.9 52.5 0 0-15.4-7.8-32.4-7.7 0 0-25.1 0.5-30.5 3.9z"/>
                  <path id="форма 3" fill-rule="evenodd" class="s0" d="m576.3 215.7c0 0 9.8-8 35.3-9.5 0 0 21.4-1 25.8 4.7 0 0 19.1 23.5 26.7 54.4 0 0-20.4-5.3-31.5-3.8 0 0-20.6 2.1-29.6 7.6 0 0-2.9-27.3-26.7-53.4z"/>
                  <path id="форма 5" fill-rule="evenodd" class="s0" d="m255 453.1l21-48.6c0 0 10.4-21.4 27.6-32.4 0 0 6.2 27.4 45.8 55.3 0 0 18.9 10.7 28.6 11.4 0 0-39.3 40.4-35.3 91.6 0 0-32.7-3.4-54.3-28.6 0 0-26.8-26.9-33.4-48.7z"/>
                  <path id="форма 5" fill-rule="evenodd" class="s0" d="m768 452.2l-21-48.7c0 0-10.4-21.3-27.6-32.4 0 0-6.2 27.4-45.8 55.3 0 0-18.9 10.7-28.6 11.5 0 0 39.3 40.3 35.3 91.5 0 0 32.7-3.4 54.3-28.6 0 0 26.8-26.9 33.4-48.6z"/>
                  <path id="форма 8" fill-rule="evenodd" class="s0" d="m494 729c0 0-21.1-9.8-24-29 0 0-2.6-12.8 3-30 0 0 8.4-17.6 11-21l7 5c0 0-6.8 11.1-10 22 0 0-3.3 7.9-1 25 0 0 4.7 13.6 15 17 0 0-6.2-7.1 0-17 0 0 5.4-9.6 17-10v22 56c0 0-9.9 0.2-14-12l-1-7c0 0-13.7 10.9-15 25 0 0-0.7 13.5 5 28 0 0 4.9 6.6 2 10 0 0-13.4 1.1-17-29 0 0-0.3-16.9 8-28 0 0 9.7-8 13-10 0 0 4.6-2.3 3-5 0 0-10.5 0.5-17 5.6 0 0-20.5 15.7-25 33.1 0 0-4 4.9-7-0.7 0 0-0.2-13.6 11.1-25.5 11.7-12.1 17.6-13.4 23.9-17.5 0 0-17.5-0.2-27.6-11.5-0.1-0.2-0.3-0.3-0.4-0.5-4.3-9-6.1-22.4-6.1-22.4 0 0-0.6-21.3 3.1-15.6 0 0 1.5 10.9 4 18 0 0 5.2 14.7 12.1 18.7 0 0 8.7 8.2 14.9 8.3 0 0 7.7 0.9 10 0 0 0 1.9-0.1 2-2z"/>
                  <path id="форма 8" fill-rule="evenodd" class="s0" d="m530 729c0 0 21.1-9.8 24-29 0 0 2.6-12.8-3-30 0 0-8.4-17.6-11-21l-7 5c0 0 6.8 11.1 10 22 0 0 3.3 7.9 1 25 0 0-4.7 13.6-15 17 0 0 6.2-7.1 0-17 0 0-5.4-9.6-17-10v22 56c0 0 9.9 0.2 14-12l1-7c0 0 13.7 10.9 15 25 0 0 0.7 13.5-5 28 0 0-4.9 6.6-2 10 0 0 13.4 1.1 17-29 0 0 0.3-16.9-8-28 0 0-9.7-8-13-10 0 0-4.6-2.3-3-5 0 0 10.5 0.6 17 5.6 0 0 20.5 15.7 25 33.1 0 0 4 4.9 7-0.7 0 0 0.2-13.6-11.2-25.5-11.6-12.1-17.5-13.4-23.8-17.5 0 0 17.5-0.2 27.6-11.5 0.1-0.2 0.3-0.3 0.4-0.5 4.3-9 6.1-22.4 6.1-22.4 0 0 0.6-21.3-3.1-15.6 0 0-1.5 10.9-4 18 0 0-5.2 14.7-12.1 18.7 0 0-8.7 8.2-14.9 8.3 0 0-7.7 0.9-10 0 0 0-1.9-0.1-2-2z"/>
                </g>
              </svg>
            </div>
        </div>
        <img class="w-full h-full " src='/src/assets/menuImages/rain_tree2.png'>
      </div>

      <div class="w-full h-36 fixed top-0 z-40 " >
        <Scene class="hidden"/>
        <CharacterEquipment/>
        <Inventory/>  
        <ProfileBars/>
        <div v-show="isSearchingGame" class="fixed w-80 h-full flex flex-col space-y-4 justify-center items-center right-0 bg-gradient-to-l  from-[#121212] to-[#1a1a1a]">

          <div class="w-full h-full flex flex-col space-y-6 justify-end px-4 ">
            <div class="w-72 h-auto bg-[#4c4c4c] flex flex-col  text-white font-bold tracking-wider ">
    


              <div class="w-full h-10 border-l-4  pl-4 text-start flex items-center">
                <span>RANKED</span>
              </div>  
              <div class="w-72 h-auto flex flex-col  space-y-1 pl-4 pt-2 pb-2 pr-4 overflow-y-auto font-light font-sans">
                  
                  <div class="space-x-4 w-full h-8 p-1 flex items-center hover:bg-[#333236]"> 
                    <input type="checkbox"  id="10min" name="10min">
                    <label for="10min">10 min</label>
                  </div>
                 
                  <div  class="space-x-4 w-full h-8  p-1 flex items-center hover:bg-[#333236]">
                    <input type="checkbox"  id="15min/10" name="15min/10">
                    <label for="15min/10">15/10</label>
                  </div>
                 
                  <div  class="space-x-4 w-full h-8   p-1 flex items-center hover:bg-[#333236]">
                    <input type="checkbox"  id="5min" name="5min">
                    <label for="5min">5 min</label>
                  </div>


                  <div  class="space-x-4 w-full h-8   p-1 flex items-center hover:bg-[#333236]">
                    <input type="checkbox"  id="3min" name="3min">
                    <label for="3min">3 min</label>
                  </div>

                  <div  class="space-x-4 w-full h-8   p-1 flex items-center hover:bg-[#333236]">
                    <input type="checkbox"  id="3/2" name="3/2">
                    <label for="3/2">3/2</label>
                  </div>

                  <div  class="space-x-4 w-full h-8   p-1 flex items-center hover:bg-[#333236]">
                    <input type="checkbox"  id="1/1" name="1/1">
                    <label for="1/1">1/1</label>
                  </div>

                  <div  class="space-x-4 w-full h-8   p-1 flex items-center hover:bg-[#333236]">
                    <input type="checkbox"  id="1min" name="1min">
                    <label for="1min">1 min</label>
                  </div>
              
              </div>

            
            </div>

              <div class="w-72 h-auto bg-[#4c4c4c] flex flex-col  text-white font-bold tracking-wider ">
    


                <div class="w-full h-10 border-l-4  pl-4 text-start flex items-center">
                  <span>UNRANKED</span>
                </div>  
                <div class="w-72 h-auto flex flex-col  space-y-1 pl-4 pt-2 pb-2 pr-4 overflow-y-auto font-light font-sans">
                    
                    <div class="space-x-4 w-full h-8 p-1 flex items-center hover:bg-[#333236]"> 
                      <input type="checkbox"  id="10min" name="10min">
                      <label for="10min">10 min</label>
                    </div>
                   
                    <div  class="space-x-4 w-full h-8  p-1 flex items-center hover:bg-[#333236]">
                      <input type="checkbox"  id="15min/10" name="15min/10">
                      <label for="15min/10">15/10</label>
                    </div>
                   
                    <div  class="space-x-4 w-full h-8   p-1 flex items-center hover:bg-[#333236]">
                      <input type="checkbox"  id="5min" name="5min">
                      <label for="5min">5 min</label>
                    </div>


                    <div  class="space-x-4 w-full h-8   p-1 flex items-center hover:bg-[#333236]">
                      <input type="checkbox"  id="3min" name="3min">
                      <label for="3min">3 min</label>
                    </div>

                    <div  class="space-x-4 w-full h-8   p-1 flex items-center hover:bg-[#333236]">
                      <input type="checkbox"  id="3/2" name="3/2">
                      <label for="3/2">3/2</label>
                    </div>

                    <div  class="space-x-4 w-full h-8   p-1 flex items-center hover:bg-[#333236]">
                      <input type="checkbox"  id="1/1" name="1/1">
                      <label for="1/1">1/1</label>
                    </div>

                    <div  class="space-x-4 w-full h-8   p-1 flex items-center hover:bg-[#333236]">
                      <input type="checkbox"  id="1min" name="1min">
                      <label for="1min">1 min</label>
                    </div>
                
                </div>

              
              </div>
          </div>
          <div class="w-full h-24 pl-4 pr-4">
              <button  @click="findGame" class="w-full h-14 hover:bg-gradient-to-r hover:from-[#745353] hover:to-[#b69494] bg-[#121212] text-white font-bold tracking-wider">FIND OPPONENT</button>
          </div>
        </div>

        <div class="w-80 h-[80%] fixed mt-24 ml-24 left-0">
            <div class="w-full h-72 bg-gradient-to-br from-[#282828] to-[#111111] space-y-4 flex flex-col relative">
                <div class="w-full h-8 bg-black/50 flex items-center px-2">
                  <span class="text-white/80 uppercase text-xs">My profile</span>
                </div>

                <div class="w-full h-16 px-4">
                  <div class="w-full h-full flex space-x-4 text-white items-center pl-4  bg-black/20">
                    <div class="w-12 h-12 rounded-full border">
                      <img class="rounded-full" src="/src/assets/menuImages/defaultAvatar2.png">
                    </div>
                    <span>THEFIRSTPLAYER</span>
                  </div>

                </div>

                <div class="w-full h-20 px-4 absolute bottom-0 pb-4 ">
                  <div class="w-full h-full flex space-x-4 text-white/70 justify-between px-10 items-center  text-sm   bg-gradient-to-br from-[#3e3e3e] to-[#1e1e1e]">
                    
                    <div class="flex flex-col text-center">
                      <span>WINS</span>
                      <span>217</span>
                    </div>

                    <div class="flex flex-col text-center">
                      <span>MATCHES</span>
                      <span>529</span>
                    </div>
                  </div>

                </div>
            </div>
        </div>

        <div v-show="!isSearchingGame" class="fixed w-60 h-12 z-50 bottom-0 right-0  mr-10 mb-10 text-white shadow-lg font-bold tracking-wider ">
          <button class="hover:bg-gradient-to-r hover:from-[#3e3d3d]  hover:to-[#111111] w-60 h-12 bg-gradient-to-r from-[#565e5d] to-[#1a1c1c]" @click="chooseBattle">PLAY</button>
        </div>
      </div>

     

    </div>



    <audio id="click-sound" src="/src/assets/music/souds/Click_2.wav"></audio>
    <audio id="background-home-music" src="/src/assets/music/Sci-Fi1Loop.mp3" loop autoplay></audio>
</template>

<script>
  // import Scene from '/src/components/Scene.vue'
  import ProfileBars from '/src/components/UI/ProfileBars.vue'

  import { mapGetters, mapActions  } from 'vuex';
  import Inventory from '/src/components/UI/Inventory.vue';
  import BlackScreen from '/src/components/BlackScreen.vue';
  import CharacterEquipment from '/src/components/UI/CharacterEquipment.vue';
  import Dashboard from '/src/components/UI/Dashboard.vue'
  
  export default {
    components: {
      ProfileBars,
      
      Inventory,
      BlackScreen,
      CharacterEquipment,
      Dashboard
    },
    data() {
      return {
          isSearchingGame: false,
          isFindingMatch: false
       }
    },
    computed: {
    ...mapGetters(['canChoose', 'provinces', 'characters', 'playerProfile', 'insertedElement', 'tutorialSkiped'])
    },
    methods: {
      findGame(){
          if(!this.isFindingMatch){
            this.isFindingMatch = true;
            this.isSearchingGame = false;

            setTimeout(() =>{
              this.$router.push('/scene');
            }, 5000)

          }
      },
      chooseBattle(){
        if(!this.isSearchingGame){
          this.isSearchingGame = true;
        }
      }

    },
    mounted(){
        document.getElementById('profile').classList.remove('hidden');

        const music = document.getElementById('background-home-music');

        function startMusic() {
          music.volume = 0.1;
          music.play();
        }


          function setupMusicTrigger() {
            document.addEventListener('click', startMusic, { once: true });
            document.addEventListener('keydown', startMusic, { once: true });
            document.addEventListener('mousemove', startMusic, { once: true });
          }

          window.addEventListener('load', setupMusicTrigger);

  
    }
}
</script>


<style>
* {
  cursor: url('/src/assets/GUI/pointer_scifi_b.svg'), auto;
}


</style>