import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slice/authSlice'
import categorySlice from './slice/categorySlice'
import courseSlice from './slice/courseSlice'
import adminCategorySlice from './slice/adminCategorySlice'
import adminCourseSlice from './slice/adminCourseSlice'
import cartSlice from './slice/cartSlice'
import profileSlice from './slice/profileSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        profile: profileSlice,
        cart: cartSlice,
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
