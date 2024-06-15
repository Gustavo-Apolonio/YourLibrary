import { createApi } from '@reduxjs/toolkit/query/react'
import { BaseQueryWithRetryExceptions } from '../utils'
import { API_URL } from '../../constants';
import { Requests, Responses } from '../../models';

const baseUrl = `${API_URL}/login`;

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: BaseQueryWithRetryExceptions(baseUrl),
  tagTypes: [],
  endpoints: (builder) => ({
    userLogin: builder.mutation<Responses.IResponseUser, Requests.IRequestLogin>({
      query: (loginPayload) => ({
        url: '/',
        method: 'POST',
        body: loginPayload,
      }),
    }),
  }),
});

export const {
  endpoints: loginApiEndpoints,
  useUserLoginMutation,
} = loginApi
