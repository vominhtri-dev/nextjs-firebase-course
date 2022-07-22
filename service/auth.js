import { auth, provider } from '../firebase.config'
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	updateProfile,
	sendPasswordResetEmail,
	signInWithPopup,
} from 'firebase/auth'

// Servive email & password
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

// Servive google
export const loginGGService = () => {
	return signInWithPopup(auth, provider)
}
