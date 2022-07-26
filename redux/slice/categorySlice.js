import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categorys: [],
    isLoading: true,
    trigger: false,
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        addCategory: (state, action) => {
            state.categorys = action.payload
            state.isLoading = false
        },
        getTrigger: (state, action) => {
            state.trigger = !state.trigger
        },
        resetLoading: (state) => {
            state.isLoading = true
        },
    },
})

// Action creators are generated for each case reducer function
export const { addCategory, getTrigger, resetLoading } = categorySlice.actions

export default categorySlice.reducer
