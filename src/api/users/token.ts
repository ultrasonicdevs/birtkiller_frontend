import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IForm} from "../../App";
import {getToken} from "./slice";

type LoginToken = { access: string; refresh: string }

export const token = createApi({
	reducerPath: 'token',
	baseQuery: fetchBaseQuery({
		baseUrl: "http://127.0.0.1:8000/api/token/",
	}),
	
	endpoints: (builder) => ({
		// registerUser: builder.mutation({
		// 	query(data) {
		// 		return {
		// 			url: 'register',
		// 			method: 'POST',
		// 			body: data,
		// 		};
		// 	},
		// }),
		loginUser: builder.mutation<LoginToken, IForm>({
			query(data) {
				return {
					url: '/',
					method: 'POST',
					body: data,
					credentials: 'include'
				};
			},
			transformResponse: (result: LoginToken) =>
				result,
			async onQueryStarted(args, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					dispatch(getToken(data));
				} catch (error) {}
			},
		}),
		// logoutUser: builder.mutation<void, void>({
		// 	query() {
		// 		return {
		// 			url: 'logout',
		// 		};
		// 	},
		// }),
	}),
});

export const {
	useLoginUserMutation,
	// useRegisterUserMutation,
	// useLogoutUserMutation,
} = token;
