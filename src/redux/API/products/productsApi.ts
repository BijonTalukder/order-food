import { baseApi } from "../baseApi";

export const productsApi= baseApi.injectEndpoints({
    endpoints:(build)=>( {
        createProduct:build.mutation({
           query :(data)=>({
                url:"/product/create",
                method:"POST",
                data  ,
                contentType:"multipart/form-data"
              
               })
        })
    })
})
export const {useCreateProductMutation} = productsApi;