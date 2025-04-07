import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '/src/components/UI/Login.vue'; 
import Game from '/src/components/BattleField.vue'; 
import App from '/src/App.vue';
import Home from '/src/components/Home.vue';
import Scene from '/src/components/Scene.vue';
import Battle from '/src/assets/public/Battle.vue'


export default createRouter ({
    history: createWebHashHistory(),
  routes: [
    {
        path: '/',
        component: Battle
    },

    {
        path: '/home',
        component: Home
    },
    { 
        path: '/game', 
        component: App
      },
      {
        path: '/scene',
        component: Game
      }
]


})
