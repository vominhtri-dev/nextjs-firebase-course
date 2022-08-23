import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/Layout'
import '../styles/globals.css'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import AuthProvider from '../components/provider/AuthProvider'
import CartProvider from '../components/provider/CartProvider'

function MyApp({ Component, pageProps }) {
    function defaultLayout(page) {
        return <Layout>{page}</Layout>
    }

    const getLayout = Component.getLayout || defaultLayout

    return (
        <Provider store={store}>
            <ChakraProvider>
                <CartProvider>
                    {/* // cart provider use to init cart in localstogare */}
                    <AuthProvider>
                        {/* // auth provider use to init current user */}
                        {getLayout(<Component {...pageProps} />)}
                    </AuthProvider>
                </CartProvider>
            </ChakraProvider>
        </Provider>
    )
}

export default MyApp
