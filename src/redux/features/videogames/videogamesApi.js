import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getBaseUrl from '../../../utils/baseURL'


const  baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/videogames`,
    credentials: 'include',
    prepareHeaders: (Headers) => {
        const token =  localStorage.getItem('token');
        if(token) {
            Headers.set('Authorization', `Bearer ${token}`);
        }
        return Headers;
    }
})

const videogamesApi = createApi({
    reducerPath: 'videogamesApi',
    baseQuery,
    tagTypes: ['Videogames'],
    endpoints: (builder) =>({
        fetchAllVideogames: builder.query({
            query: () => "/",
            providesTags: ["Videogames"]
        }),
        fetchVideogameById: builder.query({
            query: (id) => `/${id}`,
            providesTags: (result, error, id) => [{ type: "Videogames", id }],
        }),
        addVideogame: builder.mutation({
            query: (newVideogame) => ({
                url: `/create-videogame`,
                method: "POST",
                body: newVideogame
            }),
            invalidatesTags: ["Videogames"]
        }),
        updateVideogame: builder.mutation({
            query: ({id, ...rest}) => ({
                url: `/edit/${id}`,
                method: "PUT",
                body: rest,
                headers: {
                    'Content-Type': 'application/json'
                }
            }),
            invalidatesTags: ["Videogames"]
        }),
        deleteVideogame: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Videogames"]
        })
    })
})

export const {useFetchAllVideogamesQuery, useFetchVideogameByIdQuery, useAddVideogameMutation, useUpdateVideogameMutation, useDeleteVideogameMutation} = videogamesApi;
export default videogamesApi;