import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    profile: {},
    isLoading: true,
    trigger: false,
    isCurrentUser: false,
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
        setIsCurrentUser: (state, action) => {
            state.isCurrentUser = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { addProfile, getTrigger, resetLoading, setIsCurrentUser } =
    profileSlice.actions

export default profileSlice.reducer
