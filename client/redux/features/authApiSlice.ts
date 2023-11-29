import { apiSlice } from "../services/apiSlice";

const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        retrieveUser: builder.query({ // query when we've to GET the request
            query: () => '/user/me/'
        }),
        socialAuthentication: builder.mutation({ //mutation when we've to POST the request
            query: ({ provider, state, code }) => ({
                url: `/o/${provider}/?state=${encodeURIComponent(state)}&code=${encodeURIComponent(code)}`,
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/x-www-form-urlencoded',
                },
            }),
        }),
    }),
});


export const {retrieveUser,socialAuthentication} = authApiSlice.endpoints;




