import { createApp } from 'vue'
import App from './App.vue'

import { initializeApp } from 'firebase-admin/app';
const app = createApp(App)
initializeApp();
app.mount('#app')