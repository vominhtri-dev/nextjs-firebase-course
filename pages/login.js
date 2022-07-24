import Head from 'next/head'
import LoginForm from '../components/pages/auth/LoginForm'
import LayoutAuth from '../components/layouts/LayoutAuth'
import NotAllowIfAuthLayout from '../components/layouts/NotAllowIfAuthLayout'

function login() {
	return (
		<>
			<Head>
				<title>
					Đăng nhập | Tridev.io - Học lập trình miễn phí | Học lập
					trình cho người mới
				</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<link rel='icon' type='image/png' href='/code.png' />
			</Head>
			<LayoutAuth>
				<LoginForm />
			</LayoutAuth>
		</>
	)
}

login.getLayout = function getLayout(page) {
	return <NotAllowIfAuthLayout>{page}</NotAllowIfAuthLayout>
}

export default login
