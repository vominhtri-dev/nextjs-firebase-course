import { useDispatch, useSelector } from "react-redux"
import React, { useEffect } from "react"
import { loginAction, setLoadingAction } from "../../redux/slice/authSlice"
import { observerService } from "../../service/auth"
import Loading from "../layouts/Loading"

const AuthComponent = ({ children }) => {
    const { isLoading } = useSelector((st) => st.auth)
    const dispatch = useDispatch()
    // to check firebase auth state
    useEffect(() => {
        const unsubscribe = observerService((user) => {
            if (user) {
                const { email, accessToken, uid, displayName } = user
                dispatch(loginAction({ email, accessToken, displayName, uid }))
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
