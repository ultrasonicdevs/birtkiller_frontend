import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query/react";
import {base} from "./baseQuery/base";
import {token} from "./users/token";
import tokenReducer from "./users/slice";

const rootReducer = combineReducers({
	[base.reducerPath]: base.reducer,
	[token.reducerPath]: token.reducer,
	tokenReducer
})


export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([base.middleware, token.middleware]),
})

setupListeners(store.dispatch)