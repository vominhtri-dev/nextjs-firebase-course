import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    courses: [],
    isLoading: true,
    trigger: false,
}

export const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
        addCourse: (state, action) => {
            state.courses = action.payload
            state.isLoading = false
        },
        getTrigger: (state, action) => {
            state.trigger = !state.trigger
        },
    },
})

// Action creators are generated for each case reducer function
export const { addCourse, getTrigger } = courseSlice.actions

export default courseSlice.reducer
