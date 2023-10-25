//https://firebase.google.com/docs/auth/web/start
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";

export const createUser = async (email, password) => {
    const auth = getAuth();
    const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
    ).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
    return credentials
}

export const signInUser = async (email, password) => {
    const auth = getAuth();
    const credentials = await signInWithEmailAndPassword(
        auth,
        email.value,
        password.value
    ).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
    return credentials;
}

export const initUser = async () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            console.log(user)
            // ...
        } else {

        }
    })
}
