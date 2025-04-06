import { createApp } from 'vue'
import './style.css'
import App from '/src/App.vue'
import store from '/src/store.js'; 
import router from '/src/router.js';

const app = createApp(App);


app.use(store);

app.use(router); 


app.mount('#app');