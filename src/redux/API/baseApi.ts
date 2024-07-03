import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1/' }),
    endpoints: (builder) => ({
      getProductType: builder.query({
        query: () => `/productType/`,
      }),
      getSingleProdutType:builder.query({
        query:(id)=>`/productType/${id}`

      })
    }),
  }) 
  export const {useGetProductTypeQuery,useGetSingleProdutTypeQuery} = baseApi