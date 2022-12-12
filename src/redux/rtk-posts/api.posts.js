import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
  reducerPath: 'rtk-posts',
  tagTypes: ['Posts'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://70.34.201.18:8080' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: params => ({ url: 'posts', params: { ...params, limit: 6 } }),
      providesTags: (result) => {
        console.log(result);
        return result?.data
          ? [...result?.data?.map(({ id }) => ({ type: 'Posts', id })), { type: 'Posts', id: 'LIST' }]
          : [{ type: 'Posts', id: 'LIST' }]
      }
    }),
    deletePost: builder.mutation({
      query: postId => ({ url: `posts/${postId}`, method: 'DELETE' }),
      invalidatesTags: (result, error, id) => [{type: 'Posts', id}]
    })
  })
})

export const { useGetPostsQuery, useLazyGetPostsQuery, useDeletePostMutation } = postsApi