<template>
    <div class="w-full bg-[url('/src/assets/menuImages/login-background-transformed.webp')] bg-center bg-cover h-screen flex justify-center items-center overflow-hidden relative">

        <div class="w-[25rem] h-[12rem] bg-white flex justify-center rounded-xl absolute z-50">
            <div class="w-[23rem] h-full flex flex-col pt-2  px-2 space-y-2">
                <div class="w-full h-16 font-semibold text-2xl flex items-center justify-center text-[#1e1e1e]">
                    <span>Sign In</span>
                </div>
                <div class="w-full h-16 border border-[#b6b6b6] bg-white hover:bg-[#dedede] active:bg-[#1e1e1e] active:text-white rounded-lg">
                    <button class="w-full h-full flex items-center justify-between px-4" @click="signInWithGoogle">
                        <svg class="w-8 h-8" viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></g></svg>
                        <p class="w-full flex justify-end pr-16 ">Continue with Google</p>
                        
                    </button>
                </div>
            </div>
        </div>

        <div class="w-full h-full flex justify-center items-center">
            <div id="background-board" class="background-board"></div>
        </div>

    </div>
    <div class="fixed top-0 left-0">
        <img class="w-48 h-48 logo-name" src='/src/assets/menuImages/logo-seraphium.svg'>
    </div>

    <audio id="backgroundMusic" autoplay loop>
        <source src="/src/assets/music/Sci-Fi1Loop.mp3" type="audio/mpeg">
     
     </audio>

</template>
  
  <script>
  export default {
    data(){
        return{
            timerId: null,
            blackTile: 'linear-gradient(46deg, rgba(15,15,15,1) 0%, rgba(15,15,15,1) 100%)',
            whiteTile: "url('/src/assets/menuImages/redMarble.jpg')",
        }
    },
    methods: {
      async signInWithGoogle() {
        try {
          await this.$store.dispatch('loginWithGoogle');
          this.$router.push('/app');
          console.log('User signed in successfully');
        } catch (error) {
          console.error('Error during Google sign-in:', error);
        }
      },
      logPlayerProfile() {
        const playerProfile = this.$store.state.playerProfile;
        console.log('Player Profile:', playerProfile);
      },
      animateTiles() {
            
            const tiles = document.querySelectorAll('.b-tile');
            const min = 0;
            const max = tiles.length - 1;

      
            const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

      
            const getRandomIndices = (count, min, max) => {
                const indices = new Set();
                while (indices.size < count) {
                    indices.add(getRandomInt(min, max)); 
                }
                return Array.from(indices);
            };


            const randomIndices = getRandomIndices(10, min, max);


            const firstGroup = randomIndices.slice(0, 5);
            const secondGroup = randomIndices.slice(5, 10);

       
            tiles.forEach((tile, index) => {
                if (firstGroup.includes(index)) {
                    tile.style.animation = 'translateTile 6s ease-in-out';
                } else if (secondGroup.includes(index)) {
                    tile.style.animation = 'translateDownTile 6s ease-in-out';
                    }


                });


                this.timerId = setTimeout(() => {
                    this.animateTiles();
                }, 6500);


        }
        


  

    },
    mounted() {
        const music = document.getElementById('backgroundMusic');
        music.volume = 0.1;
        const chessboard = document.getElementById('background-board')
        for (let row = 0; row < 7; row++) {
            for (let col = 0; col < 14; col++) {
                const tile = document.createElement('div');
                tile.classList.add('b-tile');

                const faces = ['b-front', 'b-back', 'b-left', 'b-right', 'b-top', 'b-bottom'];
                faces.forEach(face => {
                const faceDiv = document.createElement('div');
                faceDiv.classList.add('b-face', face);

            
              
                // Применяем цвета непосредственно через style.backgroundColor
                if ((row + col) % 2 === 1) {

                        faceDiv.style.background = this.whiteTile
                       
                      
                    
                } else {

                        faceDiv.style.background = this.blackTile; // Чёрный цвет
                        
                }

                tile.appendChild(faceDiv);
                });

                chessboard.appendChild(tile);
            }

        }
        this.animateTiles()
    },
    beforeUnmount() {

        if (this.timerId) {
        clearTimeout(this.timerId);
        }
    
    },
  };
  </script>
  
<style >
body{
    overflow: hidden;
}

/* Стиль для шахматной доски */
.background-board {
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 100%; /* Фиксированный размер шахматной доски */
    height: 660px;
    gap: 12px;
    display: grid;

    grid-template-columns: repeat(14, 80px);
    grid-template-rows: repeat(7, 80px);

    perspective: 1000px;
    transform-style: preserve-3d;
    transform: rotateX(0deg) rotateZ(0deg) scale(1.2);
    margin-top: 2rem;
  }
  
  /* Общий стиль для плиток */
  .b-tile {
    position: relative;
    width: 80px;
    height: 80px;
    transform-style: preserve-3d;
    transition: transform 0.3s ease;
    transform: translate3d(0, 0, 0);
    will-change: transform;
 
   

   
  }


  .tile-animation{
    animation: translateTile 6s ease-in-out; 
  }

  @keyframes translateTile {
    0% {
        transform: translateZ(0px) rotateY(0deg);
    
    }
    40% {
        transform: translateZ(70px) rotateY(0deg);
    }
    60% {
        transform: translateZ(70px) rotateY(90deg); 
    }
    100% {
        transform: translateZ(0px) rotateY(90deg);
    }
}
  

.tile-second-animation{
    animation: translateDownTile 6s ease-in-out; 
  }

  @keyframes translateDownTile {
    0% {
        transform: translateZ(0px) rotateX(0deg);
    }
    40% {
        transform: translateZ(-100px) rotateX(0deg);
    }
    60% {
        transform: translateZ(-100px) rotateX(90deg); 
    }

    100% {
        transform: translateZ(0px) rotateX(90deg);
    }
}
  /* Общий стиль для каждой грани плитки */
  .b-face {
    position: absolute;
    width: 80px;
    height: 80px;
    border: 1px solid white;
  
}


  
  .b-front {
    transform: translateZ(40px);
   
  
    
  }
  
  .b-back {
    transform: rotateY(180deg) translateZ(40px);
  }
  
  .b-left {
    transform: rotateY(-90deg) translateZ(40px);

  }
  
  .b-right {
    transform: rotateY(90deg) translateZ(40px);
  }
  
  .b-top {
    transform: rotateX(90deg) translateZ(40px);
    
}
  
.b-bottom {
    transform: rotateX(-90deg) translateZ(40px); 
}

.logo-name{
    filter: drop-shadow(0px 0px 20px black)
}
</style>