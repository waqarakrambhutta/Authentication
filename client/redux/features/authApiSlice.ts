import { url } from "inspector";
import { apiSlice } from "../services/apiSlice";
import { METHODS } from "http";

interface User {
    first_name: string,
    last_name: string,
    email: string
}

interface SocialAuthArgs {
    provider: string,
    state: string,
    code: string
}

interface CreateUserResponse {
    success: boolean,
    user: User
}

const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        retrieveUser: builder.query<User, void>({ // query when we've to GET the request
            query: () => '/user/me/'
        }),
        socialAuthentication: builder.mutation<CreateUserResponse, SocialAuthArgs>({ //mutation when we've to POST the request
            query: ({ provider, state, code }) => ({
                url: `/o/${provider}/?state=${encodeURIComponent(state)}&code=${encodeURIComponent(code)}`,
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/x-www-form-urlencoded',
                },
            }),
        }),
        login: builder.mutation({
            query: ({ gmail, password }) => ({
                url: '/jwt/create/',
                method: "POST",
                body: { gmail, password }
            }),
        }),
        register: builder.mutation({
            query: ({ first_name, last_name, gmail, password, re_passowrd }) => ({
                url: '/users/',
                method: "POST",
                body: { first_name, last_name, gmail, password, re_passowrd }
            }),
        }),
        verify: builder.mutation({
            query: () => ({
                url: '/jwt/verify/',
                method: "POST"
            }),
        }),
    }),
});


export const { retrieveUser, socialAuthentication, login, register, verify } = authApiSlice.endpoints;




