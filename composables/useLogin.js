// useLogin.js
import {ref} from "vue";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useUserDataStore} from "../stores/userDataStore.js";
import router from "#app/plugins/router.js";

export default function useLogin() {
    const auth = getAuth();
    const email = ref("");
    const password = ref("");
    const error = ref(null);

    const userUserDataStore = useUserDataStore();

    const login = () => {
        console.log(email.value);
        return signInWithEmailAndPassword(auth, email.value, password.value)
            .then( async (userCredential) => {
                console.log("signed in", userCredential);
                error.value = null;
                //return userCredential.user.uid;
                navigateTo("/home");
            })
            .catch((e) => {
                console.log("not signed in", e);
                error.value = e.message;
            });
    };
    return { email, password, login, error };
}
