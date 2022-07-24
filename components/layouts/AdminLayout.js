import { Box } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Loading from './Loading'

const AdminLayout = ({ children }) => {
	const { currentUser } = useSelector((st) => st.auth)
	const router = useRouter()

	if (!currentUser.isAdmin) {
		router.push('/')
		return <Loading />
	}

	return (
		<Box>
			<Box bg='red.100'>navbar</Box>
			<Box bg='blue.100'>sidebar</Box>
			<Box bg='green.100'>{children}</Box>
		</Box>
	)
}

export default AdminLayout
