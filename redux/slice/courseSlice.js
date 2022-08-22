import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    courses: [],
    isLoading: true,
    isLoadingDetail: true,
    trigger: false,
    courseDetail: {},
}

export const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        addCourse: (state, action) => {
            state.courses = action.payload
            state.isLoading = false
        },
        getTrigger: (state) => {
            state.trigger = !state.trigger
        },
        addCourseDetail: (state, action) => {
            state.courseDetail = action.payload
            state.isLoadingDetail = false
        },
        resetLoadingDetail: (state) => {
            state.isLoadingDetail = true
        },
        resetLoading: (state) => {
            state.isLoading = true
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    addCourse,
    getTrigger,
    addCourseDetail,
    resetLoadingDetail,
    resetLoading,
} = courseSlice.actions

export default courseSlice.reducer
