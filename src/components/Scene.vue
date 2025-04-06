<template>
  <div class="visual-novel w-full h-screen flex flex-col justify-center items-center relative bg-black">

    <div v-if="currentEpisodeIndex === 0 && currentSceneIndex === 0 && currentLineIndex === 0" class="fixed top-0 mt-10 w-64 h-24 text-white z-50 font-mono animate-pulse">Press "Space" to continue</div>
    <!-- Фоновые изображения -->
    <div v-if="!isTransitioning" id="bg1" class="background" :style="backgroundStyle1" :class="{ 'active': bgActive1 }"></div>
    <div id="bg2" class="background" :style="backgroundStyle2" :class="{ 'active': bgActive2 }"></div>

    <!-- Эффекты перехода -->
    <div v-if="isTransitioning" class="transition-overlay">
      <p class="transition-text font-serif text-center text-xl">{{ transitionData.text }}</p>
    </div>

    <!-- Отображение персонажей и реплик, если нет перехода -->
    <template v-else>
      <div v-if="currentCharacter.image" :class="['character', currentCharacter.position]">
        <img :src="currentCharacter.image" alt="Character Image" />
      </div>
      <div class="replies w-full h-36 font-serif bg-gradient-to-t flex-col space-y-2 from-black via-black/80 to-transparent text-xl absolute bottom-0 flex text-white justify-center items-center ">
        <span class="text-lg">{{currentCharacter.name}}</span>
        <p>{{ currentLine.text }}</p>
      </div>

      <!-- Выборы -->
      <div v-if="showChoices" class="choices flex  w-full h-full">
        <button
          v-for="(choice, index) in currentScene.choices"
          :key="index"
          @click="makeChoice(choice.nextEpisodeIndex, choice.nextSceneIndex, choice.afterSceneIndex)"
          class="choice-button bg-gradient-to-b from-[#121212] to-transparent  text-white w-1/2 hover:bg-[#121212]/70"
        >
          {{ choice.text }}
        </button>
      </div>
    </template>

    <!-- Аудио элементы -->
    <audio ref="backgroundMusic" loop></audio>
    <audio ref="effectSound"></audio>
    <audio ref="voiceLine"></audio>
    <audio ref="transitionMusic" loop></audio>
    <audio ref="transitionEffect"></audio>
  </div>
</template>


<script>
import episodesData from '/src/assets/Plot/episodes.json';

export default {
  data() {
    return {
      currentEpisodeIndex: 0,
      currentSceneIndex: 0,
      currentCharacterIndex: 0,
      currentLineIndex: 0,
      bgActive1: true,
      bgActive2: false,
      backgroundStyle1: {},
      backgroundStyle2: {},
      showChoices: false,
      afterSceneIndex: null,
      isTransitioning: false,
      transitionData: {
        text: '',
        music: '',
        effect: '',
        duration: 4000
      },
      transitionTimeout: null
    };
  },
  computed: {
    currentEpisode() {
      return episodesData.episodes[this.currentEpisodeIndex];
    },
    currentScene() {
      return this.currentEpisode.scenes[this.currentSceneIndex];
    },
    currentCharacter() {
      return this.currentScene.characters[this.currentCharacterIndex];
    },
    currentLine() {
      return {
        text: this.currentCharacter.lines[this.currentLineIndex],
      };
    },
    currentVoice() {
      return this.currentCharacter.voices[this.currentLineIndex] || "";
    },
  },
  watch: {
    'currentScene.background': function(newVal, oldVal) {
      this.transitionBackground(newVal);
    }
  },
  methods: {
    startTransition() {
  // Hide scene content during the transition
  this.isTransitioning = true;

  // Get transition data from the current scene
  const transition = this.currentScene.transition;
  this.transitionData = {
    text: transition.text || '',
    music: transition.music || '',
    effect: transition.effect || '',
    duration: transition.duration || 4000
  };

  // Pause current music and effects
  this.$refs.backgroundMusic.pause();
  this.$refs.effectSound.pause();

  // Play transition music and effects
  if (this.transitionData.music) {
    this.$refs.transitionMusic.src = this.transitionData.music;
    this.$refs.transitionMusic.load();
    this.$refs.transitionMusic.play();
  }

  if (this.transitionData.effect) {
    this.$refs.transitionEffect.src = this.transitionData.effect;
    this.$refs.transitionEffect.load();
    this.$refs.transitionEffect.play();
  }

  // Get the next scene's background for a smooth transition
  let nextBackground = '';
  if (this.currentSceneIndex < this.currentEpisode.scenes.length - 1) {
    nextBackground = this.currentEpisode.scenes[this.currentSceneIndex + 1].background;
  } else {
    nextBackground = ''; // Default or fallback background
  }

  // Start the background transition
  this.transitionBackground(nextBackground);

  // Start the transition timer
  this.transitionTimeout = setTimeout(() => {
    this.isTransitioning = false;
    this.$refs.transitionMusic.pause();
    this.$refs.transitionEffect.pause();

    // Increment the scene index after the transition
    if (this.currentSceneIndex < this.currentEpisode.scenes.length - 1) {
      this.currentSceneIndex++;
      this.currentCharacterIndex = 0;
      this.currentLineIndex = 0;
    } else {
      console.log('End of episode.');
      try {
  this.$router.push('/scene');
} catch (error) {
  console.error('Ошибка маршрутизации:', error);
}
      return;
    }

    
    // Play new scene's audio and effects
    this.playSceneEffects();
    this.playSceneAudio(true);
    this.handleEffectType();
  }, this.transitionData.duration);
},


    makeChoice(nextEpisodeIndex, nextSceneIndex, afterSceneIndex) {
      // Обновляем индексы на основе выбора
      this.currentEpisodeIndex = nextEpisodeIndex;
      this.currentSceneIndex = nextSceneIndex;
      this.currentCharacterIndex = 0;
      this.currentLineIndex = 0;
      this.showChoices = false; // Скрываем выборы после выбора
      this.afterSceneIndex = afterSceneIndex;

      // Вызываем плавный переход фона
      this.transitionBackground(this.currentScene.background);
      this.playVoice();
      this.playSceneAudio(false);
      this.playSceneEffects();
      this.handleEffectType();
    },
    handleEffectType() {
      // Удаляем существующие эффекты
      const existingCanvas = document.querySelector('.canvas');
      if (existingCanvas) {
        existingCanvas.remove();
      }

      // Создаём новый эффект, если необходимо
      if (this.currentScene.effectType === "snowstorm") {
        this.createSnowStorm();
      }
    },
    getBackgroundStyle(bg) {
      if (bg === 'black' || bg === 'white' || bg === 'red') {
        return { backgroundColor: bg };
      } else {
        return { backgroundImage: `url(${bg})` };
      }
    },
    transitionBackground(newBackground) {
  if (this.bgActive1) {
    // Затемняем первый фон
    this.bgActive1 = false;

    // Задержка для затемнения, затем меняем фон и проявляем второй
    setTimeout(() => {
      this.backgroundStyle2 = this.getBackgroundStyle(newBackground);
      this.bgActive2 = true; // Проявляем второй фон
    }, 500); // Задержка в 500 мс для плавного затемнения
  } else {
    // Затемняем второй фон
    this.bgActive2 = false;

    // Задержка для затемнения, затем меняем фон и проявляем первый
    setTimeout(() => {
      this.backgroundStyle1 = this.getBackgroundStyle(newBackground);
      this.bgActive1 = true; // Проявляем первый фон
    }, 500); // Задержка в 500 мс для плавного затемнения
  }
},
nextLine() {
  const currentCharacter = this.currentCharacter;
  if (this.currentLineIndex < currentCharacter.lines.length - 1) {
    this.currentLineIndex++;
    this.playVoice();
  } else if (this.currentCharacterIndex < this.currentScene.characters.length - 1) {
    this.currentCharacterIndex++;
    this.currentLineIndex = 0;
    this.playVoice();
  } else {
    // Проверяем, есть ли переход после этой сцены
    if (this.currentScene.transition) {
      this.startTransition();
    } else if (this.currentScene.choices && this.currentScene.choices.length > 0) {
      this.showChoices = true;
    } else if (this.afterSceneIndex !== null) {
      this.currentSceneIndex = this.afterSceneIndex;
      this.currentSceneIndex++;
      this.currentCharacterIndex = 0;
      this.currentLineIndex = 0;
      this.afterSceneIndex = null;
      this.playVoice();
      this.playSceneEffects();
      this.playSceneAudio(false); // Изменено на true
      this.handleEffectType();
    } else {
      if (this.currentSceneIndex < this.currentEpisode.scenes.length - 1) {
        this.currentSceneIndex++;
        this.currentCharacterIndex = 0;
        this.currentLineIndex = 0;
        this.playVoice();
        this.playSceneEffects();
        this.playSceneAudio(false); // Изменено на true
        this.handleEffectType();
      } else {
       
        this.$router.push('/scene');
      }
    }
  }
},


    playSceneAudio(isFirstTime) {
      const backgroundMusic = this.$refs.backgroundMusic;

      if (this.currentScene.music) {
        if (!isFirstTime) {
          const currentSrc = backgroundMusic.src.split('/').pop();
          const newSrc = this.currentScene.music.split('/').pop();

          if (currentSrc === newSrc) return;
        }
        backgroundMusic.pause();
        backgroundMusic.src = ""; // Сбрасываем источник
        backgroundMusic.src = this.currentScene.music; // Устанавливаем новый источник
        backgroundMusic.volume = 0.3;
        backgroundMusic.load();

        // Задержка перед воспроизведением
        setTimeout(() => {
          backgroundMusic.play().catch(error => {
            console.error('Ошибка при воспроизведении музыки:', error);
          });
        }, 100); // Задержка в миллисекундах
      } else {
        backgroundMusic.pause();
      }
    },
    playSceneEffects() {
      const effectSound = this.$refs.effectSound;

      if (this.currentScene.effects) {
        effectSound.pause();
        effectSound.src = ""; // Сбрасываем источник
        effectSound.src = this.currentScene.effects; // Устанавливаем новый источник
        effectSound.volume = 0.5
        effectSound.load();
        effectSound.play().catch(error => {
          console.error('Ошибка при воспроизведении эффектов:', error);
        });
      } else {
        effectSound.pause();
      }
    },
    playVoice() {
      const voiceLine = this.$refs.voiceLine;

      if (this.currentVoice) {
        voiceLine.pause();
        voiceLine.src = ""; // Сбрасываем источник
        voiceLine.src = this.currentVoice; // Устанавливаем новый источник
        voiceLine.load();

        // Задержка перед воспроизведением
        setTimeout(() => {
          voiceLine.play().catch(error => {
            console.error('Ошибка при воспроизведении голоса:', error);
          });
        }, 100); // Задержка в миллисекундах
      } else {
        voiceLine.pause();
      }
    },
createSnowStorm() {
  if (this.currentScene.effectType === "snowstorm") {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1000';
    canvas.style.opacity = '0'; // Изначально прозрачный
    canvas.style.transition = 'opacity 1.5s ease-in-out'; // Плавный переход для opacity

    canvas.classList.add('canvas');
    document.body.appendChild(canvas);

    // Плавное проявление снежной бури
    requestAnimationFrame(() => {
      canvas.style.opacity = '1'; // Увеличиваем opacity для плавного проявления
    });

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const numFlakes = 200;
    const flakes = [];

    // Создание снежинок
    for (let i = 0; i < numFlakes; i++) {
      flakes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        speed: Math.random() * 5 + 3, // Увеличена скорость
        length: Math.random() * 15 + 5, // Удлиненные снежинки
        wind: Math.random() * 3 - 1.5,
        angle: 45 * (Math.PI / 180), // Угол 45 градусов в радианах
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      flakes.forEach(flake => {
        flake.y += flake.speed * Math.sin(flake.angle);
        flake.x += flake.speed * Math.cos(flake.angle) + flake.wind;

        if (flake.y > height) flake.y = 0;
        if (flake.x > width) flake.x = 0;
        if (flake.x < 0) flake.x = width;

        // Рисование длинных снежинок
        ctx.beginPath();
        ctx.moveTo(flake.x, flake.y);
        ctx.lineTo(
          flake.x - flake.length * Math.cos(flake.angle),
          flake.y - flake.length * Math.sin(flake.angle)
        );
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Обработка изменения размера окна
    window.addEventListener('resize', () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });
  }
}

  },
  mounted() {
    this.backgroundStyle1 = this.getBackgroundStyle(this.currentScene.background);
    this.playVoice();
    this.playSceneEffects();
    this.playSceneAudio(true);
    this.createSnowStorm();
    this.keydownListener = (e) => {
      if (e.code === 'Space' && !this.showChoices) {
        this.nextLine();
      }
    };
    window.addEventListener('keydown', this.keydownListener);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.keydownListener);
  }
};
</script>


  
<style scoped>
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
}

.background.active {
  opacity: 1;
}

.character {
  position: absolute;
  bottom: 10%;
  transform: translateY(0);
  transition: transform 0.5s ease-in-out;
}

.character.left {
  left: 0%;
}

.character.center {
  left: 50%;
  transform: translateX(-50%);
}

.character.right {
  right: 0%;
}

.dialogue-box {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 20px;
  font-size: 1.5rem;
}

.visual-novel {
  position: relative;
  width: 100%;
  height: 100vh;
}

.canvas{
  transition: opacity 0.5s ease-in-out;
  opacity: 0;
}

.replies{
  z-index: 10000;
}

.choices {
  position: absolute;

  display: flex;
  z-index: 9000;
}

.choice-button {

  transition: background-color 0.3s;
}



.transition-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.transition-text {
  color: white;

}

</style>
