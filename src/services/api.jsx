import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const api=createApi({
    //reducerPath is Slice name where api state will be stored
    reducerPath:'api',
    //for api request to fetch data 
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:3000/'
    }),
    endpoints:(builder)=>({
        getApiByName:builder.query({
            query:()=> '/posts',
        }),
        createPost:builder.mutation({
            //pasing object in query
            query:(newPost)=>({
                    url:'./posts',
                    method:'POST',
                    body:newPost,
            }),
        }),
        deletePost:builder.mutation({
            query:(id)=>({
                 url:`/posts/${id}`,
                 method:'DELETE',
            }),
        }),
        updatePost:builder.mutation({
            //... save old data and take new data
            query:({id,...updatePost})=>({
                url:`posts/${id}`,
                method:"PUT",
                body:updatePost,
            }),
        }),
    }),
});

//useGetApiNameQuery is hook
export const {
    useGetApiByNameQuery,
    useCreatePostMutation,
    useDeletePostMutation,
    useUpdatePostMutation,}=api;