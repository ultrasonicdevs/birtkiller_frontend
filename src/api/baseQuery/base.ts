import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ButtonProps} from "../../ui";


export const base = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://127.0.0.1:8000/api/",
	}),
	endpoints: (build) => ({
		getElement: build.query({
			query: (url) => `${url}`,
		}),
		deleteElement: build.mutation({
			query: (url) => ({url: url, method: "DELETE"}),
		}),
		mutateElement: build.mutation({
			query: ({url, method, data}: {url: string, method: string, data: ButtonProps}) => ({url: url, method: method, body: data}),
		}),
	}),
});

export const {
	useGetElementQuery,
	useDeleteElementMutation,
	useMutateElementMutation
} = base;