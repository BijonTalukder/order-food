import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/productType",
  }),
  endpoints: (builder) => ({
    getProductType: builder.query({
      query: () => `/`,
    }),
    getSingleProdutType: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
    }),
    updateProductType: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});
export const {
  useGetProductTypeQuery,
  useGetSingleProdutTypeQuery,
  useUpdateProductTypeMutation,
} = baseApi;