import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
    total: 0,
    quantity: 0,
    isLoading: true,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        initCart: (state, action) => {
            const cartInLocalStogare = action.payload
            state.cart = cartInLocalStogare
            state.quantity = cartInLocalStogare.length
            state.total = cartInLocalStogare.reduce(
                (prev, curr) => (prev += curr.price.value),
                0
            )
        },

        addToCart: (state, action) => {
            const newItem = action.payload
            const cart = state.cart
            const found = cart.findIndex((item) => item._id === newItem._id)
            if (found === -1) {
                cart.push(newItem)
                state.quantity = cart.length
                state.total = cart.reduce(
                    (prev, curr) => (prev += curr.price.value),
                    0
                )
                localStorage.setItem('cart', JSON.stringify(cart))
            }
        },

        removeInCart: (state, action) => {
            const removeId = action.payload
            const newList = state.cart.filter((item) => item._id !== removeId)
            const total = newList.reduce(
                (prev, curr) => (prev += curr.price.value),
                0
            )
            localStorage.setItem('cart', JSON.stringify(newList))

            return {
                ...state,
                quantity: newList.length,
                cart: newList,
                total,
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { initCart, addToCart, removeInCart } = cartSlice.actions

export default cartSlice.reducer
