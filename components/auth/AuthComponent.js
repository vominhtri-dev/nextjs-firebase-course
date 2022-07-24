import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { loginAction, setLoadingAction } from '../../redux/slice/authSlice'
import { observerService } from '../../service/auth'
import Loading from '../layouts/Loading'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase.config'

const AuthComponent = ({ children }) => {
	const { isLoading } = useSelector((st) => st.auth)
	const dispatch = useDispatch()

	// to check firebase auth state
	useEffect(() => {
		const unsubscribe = observerService(async (user) => {
			if (user) {
				const { email, accessToken, uid, displayName } = user
				let isAdmin = false
				const usersRef = collection(db, 'users')
				const q = query(
					usersRef,
					where('isAdmin', '==', true),
					where('uid', '==', uid)
				)
				const querySnapshot = await getDocs(q)
				if (!querySnapshot.empty) isAdmin = true

				dispatch(
					loginAction({
						email,
						accessToken,
						displayName,
						uid,
						isAdmin,
					})
				)
			} else {
				dispatch(setLoadingAction(false))
			}
		})
		return () => unsubscribe()
	}, [dispatch])

	if (isLoading) {
		return <Loading />
	}

	return <>{children}</>
}

export default AuthComponent
