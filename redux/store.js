import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slice/authSlice'
import categorySlice from './slice/categorySlice'

export const store = configureStore({
	reducer: {
		auth: authSlice,
		category: categorySlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
})
