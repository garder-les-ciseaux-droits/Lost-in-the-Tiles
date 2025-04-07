import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '/src/components/UI/Login.vue'; 
import Game from '/src/components/BattleField.vue'; 
import App from '/src/App.vue';
import Home from '/src/components/Home.vue';
import Scene from '/src/components/Scene.vue';



export default createRouter ({
    history: createWebHashHistory(),
  routes: [
    {
        path: '/',
        component: Game
    },

    {
        path: '/home',
        component: Scene
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
