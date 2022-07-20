import { useSelector } from "react-redux"
import { useRouter } from "next/router"
import { useEffect } from "react"

// Hoc will push user away if they login
const NotAllowAuth = (Component) => {
    const PrevPrivateRoute = (props) => {
        const { isLogin } = useSelector((st) => st.auth)
        const router = useRouter()

        useEffect(() => {
            const getAuth = () => {
                if (isLogin) {
                    router.replace("/")
                }
            }
            getAuth()
        }, [isLogin])

        return !isLogin && <Component {...props} />
    }

    return PrevPrivateRoute
}

export default NotAllowAuth
