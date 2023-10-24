export default defineNuxtConfig({
    // Having SSR allows us to use `nuxt generate`, turn it off if you don't care
    ssr: true,
    devtools: {
        enabled: true,
        timeline: {
            enabled: true,

        },
    },


    nitro: {
        // for the upcoming preset
        preset: './preset',
        firebase: {
            region: "us-east1"
        }
    },
    modules: ['nuxt-vuefire', '@vueuse/nuxt'],
    vuefire: {
        auth: true,
        config: {
            apiKey: "AIzaSyBZeu1dM8k892i_jCdH_LI1hbUFUQ-BO1o",
            authDomain: "nuxt3workingexample.firebaseapp.com",
            projectId: "nuxt3workingexample",
            storageBucket: "nuxt3workingexample.appspot.com",
            messagingSenderId: "659448654143",
            appId: "1:659448654143:web:5de44dec3b5152f6e90b8a",
            measurementId: "G-PT4QC442ZR"
        },
    },

    experimental: {
        payloadExtraction: false,
    },

    // Customize this to your needs and try to server side render only what is needed
    // https://nuxt.com/docs/guide/concepts/rendering#hybrid-rendering
    routeRules: {
        // Make some pages client only (since we have an SPA)
        // useful for authenticated pages that require the user to be logged in to be
        // displayed
        // '/admin': { ssr: false },
        // '/login': { ssr: false },
        // '/analytics': { ssr: false },
        // you don't need to add ssr: true to any route, it's the default
        // '/users': { ssr: true },
        // '/posts/new': { ssr: true },
        // '/emoji-panel': { swr: true },
    },
})