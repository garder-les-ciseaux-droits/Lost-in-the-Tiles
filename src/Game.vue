

<template>
  <div id="mapContainer" class="relative w-full h-screen overflow-y-hidden">
    
    <ProvinceInformation v-if="!isProvinceSet && showProvinceInfo && !tutorialSkiped" :provinceToShow="clickedProvince" @update-translate-x="handleTranslateX" @update-translate-y="handleTranslateY" @update-scale="handleScale"/>
    <Inventory/>
    <Menu/>
    <Profile/>
    <ProfileTab/>
    <BlackScreen/>

    <div id="svg-container" class="relative flex justify-center items-center z-40 w-full h-screen overflow-hidden">
                
      <WelcomeMessage/>

      <object class="absolute flex w-full h-full  " type="image/svg+xml" data="/src/assets/Map/Mouvilery9.svg" id="mapObject"></object>
    </div>


      <div class="zoom-controls hidden mb-10">
          <button class="w-12 h-12" id="zoomInBtn">
              <svg class="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 20L14.9497 14.9498M14.9497 14.9498C16.2165 13.683 17 11.933 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.933 17 13.683 16.2165 14.9497 14.9498ZM7 10H13M10 7V13" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></button>
          <button class="w-12 h-12" id="zoomOutBtn">
              <svg class="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 20L14.9497 14.9498M14.9497 14.9498C16.2165 13.683 17 11.933 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.933 17 13.683 16.2165 14.9497 14.9498ZM7 10H13" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </button>
      </div>

  </div>


</template>

<script>

  import ProvinceInformation from '/src/components/UI/ProvinceInformation.vue'
  import Inventory from '/src/components/UI/Inventory.vue'
  import Menu from '/src/components/UI/Menu.vue'
  import Profile from '/src/components/UI/Profile.vue'
  import ProfileTab from '/src/components/ProfileTab.vue'
  import BlackScreen from '/src/components/BlackScreen.vue'
  import WelcomeMessage from '/src/components/WelcomeMessage.vue'
  import { mapGetters, mapActions  } from 'vuex';

  export default {
    components: {
      Profile,
      WelcomeMessage,
      BlackScreen,
      ProfileTab,
      Menu,
      Inventory,
      ProvinceInformation,

    },
    data() {
      return {
        isProvinceSet: false,
        clickedProvince: '',
        showProvinceInfo: false,
        translateX: 0,
        translateY: 0,
        scale: 1,
        isClicked: false
       }
    },
    computed: {
    ...mapGetters(['canChoose', 'provinces', 'characters', 'playerProfile', 'insertedElement', 'tutorialSkiped'])
    },
    methods: {
  ...mapActions(['setProvince', 'updateInsertedElement']),
    limitTranslation() {
      const svgDoc = mapObject.contentDocument;
      const svg = svgDoc.querySelector('svg');
      const box = svgDoc.querySelector('#viewbox');

      const svgRect = svg.getBoundingClientRect();
      const containerRect = document.body.getBoundingClientRect();

      const scaledWidth = svgRect.width * this.scale;
      const scaledHeight = svgRect.height * this.scale;

      const movementLimitFactor = 0.08 / this.scale;

      const minTranslateX = (containerRect.width - scaledWidth) * movementLimitFactor;
      const maxTranslateX = Math.abs(minTranslateX);
      const minTranslateY = (containerRect.height - scaledHeight) * movementLimitFactor;
      const maxTranslateY = Math.abs(minTranslateY);

      this.translateX = Math.max(minTranslateX, Math.min(this.translateX, maxTranslateX));
      this.translateY = Math.max(minTranslateY, Math.min(this.translateY, maxTranslateY));

      if (this.scale === 1.12) {
        this.translateX = 0;
        this.translateY = 0;
      }
    },
    updateTransform() {
      const svgDoc = mapObject.contentDocument;
      const svg = svgDoc.querySelector('svg');


      svg.style.transform = `scale(${this.scale}) translate(${this.translateX}px, ${this.translateY}px)`;
      svg.style.transformOrigin = 'center';
    },
    mapObjectBasicInteraction() {
    const zoomInBtn = document.getElementById('zoomInBtn');
    const zoomOutBtn = document.getElementById('zoomOutBtn');
    const chooseProvince = document.getElementById('choose-province');
    const mapObject = document.getElementById('mapObject');


  
    let isDragging = false;
    let startX, startY;

    const svgDoc = mapObject.contentDocument;
    const svg = svgDoc.querySelector('svg');
    const box = svgDoc.querySelector('#viewbox');

    const provinces = svgDoc.querySelectorAll('path[id^="province"]:not([id*="gap"])');
    const states = svgDoc.querySelectorAll('path[id^="state1"]');
    const stateLabels = svgDoc.querySelectorAll('text, textPath');

      this.scale = 1.12
      this.limitTranslation()
      this.updateTransform()
 
    // Обработчики событий для провинций и штатов
    states.forEach(state => {
      state.style.pointerEvents = 'all';
      const originalFill = state.getAttribute('fill');

      state.addEventListener('mouseover', function() {
        state.style.fill = '#FFFFFF';
      });

      state.addEventListener('mouseout', function() {
        state.style.fill = originalFill;
      });
    });


    provinces.forEach(province => {
      if(this.clickedProvince === ''){
        this.clickedProvince = this.playerProfile.province
      }
      province.style.pointerEvents = 'all';
      const originalFill = province.getAttribute('fill');
      const provinceId = province.getAttribute('id');

      const provinceGap = svgDoc.querySelector(`path[id="province-gap${provinceId.replace('province', '')}"]`);
      const originalStroke = provinceGap ? provinceGap.getAttribute('stroke') : null;

      if (this.tutorialSkiped && province.id === this.playerProfile.province) {

        province.style.fill = '#FFFFFF';
        if (provinceGap) {
          provinceGap.style.stroke = '#FFFFFF';
        }
        this.generateProfileTab();
        document.querySelector('.zoom-controls').classList.remove('hidden');
        document.querySelector('.zoom-controls').classList.add('z-40');
      }


      province.addEventListener('mouseover', () => {
        if(this.clickedProvince){
          console.log('a')
          if (province.id !== this.clickedProvince) {
            province.style.fill = '#FFFFFF';
            province.style.cursor = 'pointer';
            if (provinceGap) {
              provinceGap.style.stroke = '#FFFFFF';
            }
          }
        }
        else{
         
          province.style.fill = '#FFFFFF';
            province.style.cursor = 'pointer';
            if (provinceGap) {
              provinceGap.style.stroke = '#FFFFFF';
          }
        }
    });

    province.addEventListener('mouseout', () => {
      if (province.id !== this.clickedProvince) {
        province.style.fill = originalFill;
        province.style.cursor = 'none';
        if (provinceGap) {
          provinceGap.style.stroke = originalStroke;
        }
      }
    });

  province.addEventListener('click', () => {
    if (!this.isProvinceSet && this.canChoose && province.id === 'province24' && !this.tutorialSkiped) {
      this.showProvinceInfo = true;

    
      province.style.fill = '#FFFFFF';
      if (provinceGap) {
        provinceGap.style.stroke = '#FFFFFF';
      }


      this.clickedProvince = province.id;

      chooseProvince.style.display = 'none';
    }
   });

    });


    // Добавление событий для перемещения карты
    svg.addEventListener('mousedown',  (event) => {
      if (this.scale > 1.12) {
        isDragging = true;
        box.style.cursor = 'pointer';
        stateLabels.forEach(label => {
                label.style.pointerEvents = 'none';
          
        }) 
            
        startX = event.clientX - this.translateX;
        startY = event.clientY - this.translateY;
      }
    });

    svg.addEventListener('mousemove', (event) => {
      if (isDragging) {
        this.translateX = event.clientX - startX;
        this.translateY = event.clientY - startY;
        this.limitTranslation();
        this.updateTransform();
      }
    });

    svg.addEventListener('mouseup', () => {
      box.style.cursor = 'default';
      stateLabels.forEach(label => {
            label.style.pointerEvents = 'all';
      
        }) 
        
      isDragging = false;
    });

    svg.addEventListener('mouseleave',  () => {
      isDragging = false;
    });

   
    zoomInBtn.addEventListener('click', () => {
      if (this.scale <= 2.2) {
        this.scale += 2;
        this.limitTranslation();
        this.updateTransform();
      }
    });

    zoomOutBtn.addEventListener('click', () => {
      if (this.scale > 1.12) {
        this.scale = Math.max(1, this.scale - 2);
        this.limitTranslation();
        this.updateTransform();
      }
    });
  },
  handleTranslateX(newTranslateX){
    this.translateX = newTranslateX;
  },
  handleTranslateY(newTranslateY){
    this.translateY = newTranslateY;
  },
  handleScale(newScale){
    this.scale = newScale;  
  },
  generateProfileTab(){

    const profileTab = document.getElementById('profile');

    profileTab.style.display = 'flex';

  },
},
    mounted(){
  //     const mapObject = document.getElementById('mapObject');

  //     mapObject.addEventListener('load', this.mapObjectBasicInteraction);
  //   },
  //   beforeRouteEnter (to, from, next) {
  // console.log('Navigating to route with WelcomeMessage');
  // next();
}

  }
</script>


<style scoped>

.zoom-controls {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  gap: 10px;
}

/* Кнопки */
.zoom-button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.zoom-button:hover {
  background-color: #45a049;
}

svg {
  transition: transform 0.5s ease-out; /* Длительность перехода 0.5 секунды */
  will-change: transform;
  
}

object {
  display: block;
  width: 100%;
  height: 100%;
  


}


.zoom-controls {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

/* Кнопки */
.zoom-button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.zoom-button:hover {
  background-color: #45a049;
}
</style>
