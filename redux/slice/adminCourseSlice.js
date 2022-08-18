import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    courses: [],
    courseDetail: {},
    isLoading: true,
    trigger: false,
}

export const adminCourseSlice = createSlice({
    name: "adminCourse",
    initialState,
    reducers: {
        addCourses: (state, action) => {
            state.courses = action.payload
            state.isLoading = false
        },
        addCourseDetail: (state, action) => {
            state.courseDetail = action.payload
            state.isLoading = false
        },
        getTrigger: (state, action) => {
            state.trigger = !state.trigger
        },
    },
})

// Action creators are generated for each case reducer function
export const { addCourses, addCourseDetail, getTrigger } =
    adminCourseSlice.actions

export default adminCourseSlice.reducer
