import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Loading from './Loading'

const NotAllowIfAuthLayout = ({ children }) => {
	const { isLogin } = useSelector((st) => st.auth)
	const router = useRouter()

	if (isLogin) {
		router.push('/')
		return <Loading />
	}

	return <div>{children}</div>
}

export default NotAllowIfAuthLayout
