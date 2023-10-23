import functions from "firebase-functions/v1";

export const helloWorld = functions.https.onCall(
    async (data) => {
        return {
            message: `hello @ ${new Date().toISOString()}`,
        };
    });