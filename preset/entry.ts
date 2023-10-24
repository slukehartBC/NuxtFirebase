import '#internal/nitro/virtual/polyfill'
import { onRequest } from 'firebase-functions/v1/https'
import functions from 'firebase-functions'
const nitroApp = useNitroApp()
const config = useRuntimeConfig()
import admin from 'firebase-admin';
admin.initializeApp(functions.config().firebase);
export const server = onRequest(
   (request, response) => {
        toNodeListener(nitroApp.h3App)
        response.json("hello world")
    },

);

export const helloWorld = functions.region('us-east1').https.onRequest(
    (request, response) => {
        toNodeListener(nitroApp.h3App)
        response.json("hello world")
    },

);
// export const server = onRequest(
//     {
//         region: "us-east1"
//         // You can set the region and other options here
//     },
//     toNodeListener(nitroApp.h3App)
// );