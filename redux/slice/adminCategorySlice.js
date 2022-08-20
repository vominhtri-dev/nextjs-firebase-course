import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categorys: [],
    isLoading: true,
    trigger: false,
}

export const adminCategorySlice = createSlice({
    name: 'adminCategory',
    initialState,
    reducers: {
        addCategory: (state, action) => {
            state.categorys = action.payload
            state.isLoading = false
        },
        getTrigger: (state, action) => {
            state.trigger = !state.trigger
        },
        resetLoading: (state, action) => {
            state.isLoading = true
        },
    },
})

// Action creators are generated for each case reducer function
export const { addCategory, getTrigger, resetLoading } =
    adminCategorySlice.actions

export default adminCategorySlice.reducer
