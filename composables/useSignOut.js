// useSignOut.js
import { getAuth, signOut } from "firebase/auth";

export default function useSignOut() {
    const auth = getAuth();
    const error = ref(null);

    const signOutUser = () => {
        signOut(auth)
            .then(() => {
                console.log("signed out successfully");
                error.value = null;
                navigateTo("/login");
            })
            .catch((e) => {
                console.log("error signing out", e);
                error.value = e.message;
            });
    };

    return { signOutUser, error };
}
