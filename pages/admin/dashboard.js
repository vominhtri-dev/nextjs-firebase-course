import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import AdminLayout from '../../components/layouts/admin/AdminLayout'

const dashboard = () => {
	return (
		<Box>
			<Head>
				<title>
					Quản trị - Học lập trình miễn phí | Học lập trình Javascript
					| Học lập trình cho người mới
				</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<link rel='icon' type='image/png' href='/code.png' />
			</Head>
			<p>dashboard</p>
		</Box>
	)
}

dashboard.getLayout = function getLayout(page) {
	return <AdminLayout>{page}</AdminLayout>
}
export default dashboard
