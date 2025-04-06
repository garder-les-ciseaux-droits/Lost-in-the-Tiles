// store.js
import { createStore } from 'vuex';
import { auth, provider, signInWithPopup, db } from '/src/firebase.js'; 
import { doc, setDoc, getDoc } from 'firebase/firestore'; 

const store = createStore({
  state: {
    tutorialSkiped: false,
    canChoose: false,
    playerProfile: {
        username: 'Undefined',
        chessShards: 0,
        battleShards: 0,
        level: 1,
        characters: [{charName: 'Classic Pawn', charLvl: 1}]
    },
    skills:[
      {name: 'Продвинутая оценка способностей противника', description: ['Позволяет узнать скрытые способности противника уровня 14 и ниже.','Способность может быть заблокирована в зависимости от положительных эффектов противника.'], icon: '/src/assets/Skills/Bonuses/SearchEnemySkills/radar-sweep-svgrepo-com.svg'}
    ],
    characters: [
      {
          name: 'Classic Pawn', 
          rarity: 3, 
          type: 'B',  
          icon: '/src/assets/pieces/white/pawn.svg', 
          chibiIcon: '/src/assets/pieces/white/pawn.svg', 
          description: '— a hereditary hatter who runs a small shop. Unlike her relatives, Aellen was always drawn to magic and its unpredictable nature.', 
          skills: [
              {name: 'Remove enemy piece', description: 'Remove enemy piece', power: 1, skillImg: '/src/assets/Skills/burning-passion-svgrepo-com.svg'}, 
              {name: 'Rewards and experience increased by', description: 'Rewards and experience increased by 1%', power: 1}
          ]
      }
  ],
    insertedElement: null
    
  },
  mutations: {
    setCanChoose(state, value) {
      state.canChoose = value;
    },
    updateProvince(state, province) {
        state.playerProfile.province = province;
    },
    setInsertedElement(state, value){
        state.insertedElement = value;
    },
    setTutorialSkiped(state, value){
      state.tutorialSkiped = value;
    },
    setPlayerProfile(state, profile) {
      state.playerProfile = profile;
    },
    UPDATE_CHARACTER_TYPE(state, { name, newType }) {
      const character = state.characters.find(char => char.name === name);
      if (character) {
          character.type = newType; 
      }
  }
  },
  actions: {
    async loginWithGoogle({ commit }) {
      try {
        // Открываем Google popup для входа
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        // Получаем ссылку на документ пользователя в Firestore
        const userRef = doc(db, 'users', user.uid);
        
        // Получаем данные пользователя из Firestore
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          // Если данные пользователя существуют, загружаем их в Vuex
          const userData = userSnap.data();
          commit('setPlayerProfile', {
            username: userData.username,
            level: userData.level,
            province: userData.province,
            characters: userData.characters,
          });
          commit('setTutorialSkiped', userData.tutorialSkiped);
        } else {
          // Если данных пользователя нет, создаем новую запись в Firestore
          await setDoc(userRef, {
            username: user.displayName || 'Undefined',
            level: 1,
            province: null,
            characters: [],
            tutorialSkiped: false,
          });

          // Сохраняем данные пользователя в Vuex
          commit('setPlayerProfile', {
            username: user.displayName,
            level: 1,
            province: null,
            characters: [],
          });
          commit('setTutorialSkiped', false);
        }
      } catch (error) {
        console.error('Error during Google sign-in:', error);
      }
    },
    updateInsertedElement({commit}, value){
        commit('setInsertedElement', value);
    },
    updateCanChoose({ commit }, value) {
      commit('setCanChoose', value);
    },
    setProvince({ commit }, province) {
        commit('updateProvince', province);
    },
    skipTutorial({commit}, value){
      commit('setTutorialSkiped', value)
    }
  },
  getters: {
    canChoose: state => state.canChoose,
    province: (state) => state.playerProfile.province,
    provinces: state => state.provinces,
    characters: state => state.characters,
    insertedElement: state => state.insertedElement,
    playerProfile: state => state.playerProfile,
    skills: state => state.skills,
    tutorialSkiped: state => state.tutorialSkiped,
    chessShards: state => state.playerProfile.chessShards
  }
});

export default store;
