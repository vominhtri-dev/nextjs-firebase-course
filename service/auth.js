import { auth } from "../firebase.config"
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile,
    sendPasswordResetEmail,
} from "firebase/auth"

export const registerService = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

export const loginService = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

export const observerService = (cb) => {
    return onAuthStateChanged(auth, (user) => cb(user))
}

export const updateFullnameService = (fullname) => {
    return updateProfile(auth.currentUser, { displayName: fullname })
}
export const sendResetPassService = (email) => {
    return sendPasswordResetEmail(auth, email)
}

export const logoutService = () => {
    return signOut(auth)
}
