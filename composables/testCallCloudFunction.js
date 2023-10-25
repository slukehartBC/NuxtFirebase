// composables/useMyCloudFunction.js
import { inject } from "vue";
import { httpsCallable } from "firebase/functions";

export default function useMyCloudFunction() {
    const functions = inject("functions"); // Get the provided functions service

    const callFunction = async (data) => {
        const myFunction = httpsCallable(functions, "getAllConnectorTypes");
        try {
            const result = await myFunction(data);
            return result.data;
        } catch (error) {
            console.error("Error calling cloud function:", error);
            throw error;
        }
    };
    return { callFunction };
}
