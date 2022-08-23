import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initCart } from '../../redux/slice/cartSlice'

const CartProvider = ({ children }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const cart = JSON.parse(localStorage.getItem('cart'))
            if (cart !== null) {
                // have some thing
                dispatch(initCart(cart))
            }
        }
    }, [])
    return children
}

export default CartProvider
