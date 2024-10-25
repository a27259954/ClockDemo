import './assets/main.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faTimes ,faPenToSquare} from '@fortawesome/free-solid-svg-icons';
library.add(faCheck, faTimes , faPenToSquare);

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');