// useLogin.js
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useUserDataStore } from "../stores/userDataStore.js";

export default function useLogin() {
    const auth = getAuth();
    const email = ref("");
    const password = ref("");
    const error = ref(null);

    const userUserDataStore = useUserDataStore();

    const login = () => {
        signInWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                console.log("signed in", userCredential);
                error.value = null;
                userStore.setUserData(userData);
                /*        useUserDataStore()DataStore.setUid(userCredential.user.uid);*/
                navigateTo("/home");
            })
            .catch((e) => {
                console.log("not signed in", e);
                error.value = e.message;
            });
    };

    return { email, password, login, error };
}
