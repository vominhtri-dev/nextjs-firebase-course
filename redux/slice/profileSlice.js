import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    profile: {},
    isLoading: true,
    trigger: false,
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        addProfile: (state, action) => {
            state.profile = action.payload
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
export const { addProfile, getTrigger, resetLoading } = profileSlice.actions

export default profileSlice.reducer
