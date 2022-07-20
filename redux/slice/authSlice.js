import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    currentUser: {},
    isLogin: false,
    isLoading: true,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginAction: (state, action) => {
            state.currentUser = action.payload
            state.isLogin = true
            state.isLoading = false
        },
        logoutAction: (state, action) => {
            state.currentUser = {}
            state.isLogin = false
        },
        setLoadingAction: (state, { payload }) => {
            state.isLoading = payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { loginAction, logoutAction, setLoadingAction } = authSlice.actions

export default authSlice.reducer
