import {createSlice} from "@reduxjs/toolkit";

type TokenState = {
	access: string,
	refresh: string
}

const initialState = {
	access: '',
	refresh: ''
} as TokenState

const tokenSlice = createSlice({
	name: 'token',
	initialState,
	reducers: {
		getToken(state, action) {
			state = action.payload
		},
		updateToken(state, action) {
			state.access = action.payload
		}
		
	}
})

export const {getToken, updateToken} = tokenSlice.actions;
export default tokenSlice.reducer;
