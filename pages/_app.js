import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/Layout'
import '../styles/globals.css'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import AuthComponent from '../components/auth/AuthComponent'

function MyApp({ Component, pageProps }) {
	function defaultLayout(page) {
		return <Layout>{page}</Layout>
	}

	const getLayout = Component.getLayout || defaultLayout

	return (
		<Provider store={store}>
			<ChakraProvider>
				<AuthComponent>
					{getLayout(<Component {...pageProps} />)}
				</AuthComponent>
			</ChakraProvider>
		</Provider>
	)
}

export default MyApp
