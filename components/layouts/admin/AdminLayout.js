import { Box } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Loading from '../Loading'
import AdminSidebar from './AdminSidebar'
import AdminNavbar from './AdminNavbar'

const AdminLayout = ({ children }) => {
	const { currentUser } = useSelector((st) => st.auth)
	const router = useRouter()

	if (!currentUser.isAdmin) {
		router.push('/')
		return <Loading />
	}

	return (
		<Box>
			{/* Side bar  */}
			<AdminSidebar />

			{/* Container */}
			<Box
				pos='absolute'
				top='0'
				right='0'
				bg='white'
				w={['full', 'full', 'calc(100% - 300px)']}
				p='4'
				mt='16'
			>
				{/* Navbar */}
				<AdminNavbar />
				{children}
			</Box>
		</Box>
	)
}

export default AdminLayout
