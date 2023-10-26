import { createApp } from 'vue'
import { VueFire, VueFireAuth } from 'vuefire'
import { createPinia } from 'pinia';
// @ts-ignore
import App from './App.vue'
// the file we created above with `database`, `firestore` and other exports
const pinia = createPinia();
const app = createApp(App)
app.use(VueFire, {
    // imported above but could also just be created here
    modules: [
        // we will see other modules later on
        VueFireAuth(),
    ],
})
app.use(pinia);

app.mount('#app')