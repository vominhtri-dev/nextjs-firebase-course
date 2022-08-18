import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./slice/authSlice"
import categorySlice from "./slice/categorySlice"
import courseSlice from "./slice/courseSlice"
import adminCategorySlice from "./slice/adminCategorySlice"
import adminCourseSlice from "./slice/adminCourseSlice"

export const store = configureStore({
    reducer: {
        auth: authSlice,
        category: categorySlice,
        adminCategory: adminCategorySlice,
        course: courseSlice,
        adminCourse: adminCourseSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
