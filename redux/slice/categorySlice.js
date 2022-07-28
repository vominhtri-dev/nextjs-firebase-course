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
	},
})

// Action creators are generated for each case reducer function
export const { addCategory, getTrigger } = categorySlice.actions

export default categorySlice.reducer
