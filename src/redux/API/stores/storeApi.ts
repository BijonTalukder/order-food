import { baseApi } from "../baseApi";

export const storeApi = baseApi.injectEndpoints({
    endpoints:(build)=>({
        createStore:build.mutation({
            query:(data)=>({
             url:"/stores/create",
             method:"POST",
             data  ,
             contentType:"multipart/form-data"
           
            })
        }),
       
        getStore:build.query({
            query: ()=>({
                url:"/stores/",
                method:"GET"

            })

        })
    })
})
export const {useCreateStoreMutation,useGetStoreQuery} = storeApi