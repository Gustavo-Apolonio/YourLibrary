import { createApi } from '@reduxjs/toolkit/query/react'
import { BaseQueryWithRetryExceptions } from '../utils'
import { API_URL } from '../../constants';
import { Requests, Responses } from '../../models';

const baseUrl = `${API_URL}/user`;

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: BaseQueryWithRetryExceptions(baseUrl),
  tagTypes: [],
  endpoints: (builder) => ({
    postUser: builder.mutation<Responses.IPostUser, Requests.IPostUser>({
      query: (userPayload) => ({
        url: '/',
        method: 'POST',
        body: userPayload,
      }),
    }),
    putUser: builder.mutation<Responses.IPostUser, Requests.IPostUser>({
      query: (userPayload) => ({
        url: '/',
        method: 'PUT',
        body: userPayload,
      }),
    }),
    deleteUser: builder.mutation<void, number>({
      query: (userId) => ({
        url: `/${userId}`,
        method: 'DELETE',
      }),
    })
  }),
});

export const {
  endpoints,
  usePostUserMutation,
  usePutUserMutation,
  useDeleteUserMutation,
} = userApi
