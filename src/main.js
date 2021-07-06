import { createApp } from 'vue';
import  store  from './store/index.js';
import router from './router/index.js';

import App from './App.vue';

// styles
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";


const app = createApp(App)

app.use(store);
app.use(router);




app.mount('#app');




