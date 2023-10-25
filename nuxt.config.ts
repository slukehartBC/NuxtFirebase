
export default defineNuxtConfig({
    // Having SSR allows us to use `nuxt generate`, turn it off if you don't care
    // @ts-ignore
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
    plugins: [
        '~/plugins/useBootstrap.client.ts',
    ],
    css: [
        'primevue/resources/themes/bootstrap4-light-blue/theme.css',
        `~/assets/scss/main.scss`,
    ],
    modules: [
        'nuxt-vuefire',
        '@vueuse/nuxt',
        'nuxt-primevue',
        '@pinia/nuxt',
    ],
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
    primevue: {
        usePrimeVue: true,
        options: {},
        components: {
            prefix: '',
            name: undefined,
            include: ['DataTable', 'SubmitButton', 'Message', 'InputText', 'Button', 'Card'],
            exclude: undefined
        },
        directives: {
            prefix: '',
            name: undefined,
            include: undefined,
            exclude: undefined
        },
        composables: {
            prefix: '',
            name: undefined,
            include: undefined,
            exclude: undefined
        }
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