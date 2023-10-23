import '#internal/nitro/virtual/polyfill'
import { onRequest } from 'firebase-functions/v2/https'

const nitroApp = useNitroApp()
const config = useRuntimeConfig()
import * as admin from 'firebase-admin'



// you might need to name this function differently
// if you have other functions deployed
admin.initializeApp()
export const server = onRequest(
    {
        region: "us-east1"
        // You can set the region and other options here
    },(request, response) => {
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