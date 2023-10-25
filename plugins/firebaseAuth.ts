import { initializeApp } from 'firebase/app';
import { Plugin } from '@nuxt/types';

export default defineNuxtPlugin(nuxtApp => {
    // @ts-ignore
    const firebaseAuthPlugin = new Plugin({$config}, inject) => {
        const firebaseConfig = $config.firebaseConfig;
    }
    const app = initializeApp(firebaseConfig)
    console.log(app);
})