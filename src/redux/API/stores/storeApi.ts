import { baseApi } from "../baseApi";

export const storeApi = baseApi.injectEndpoints({
    endpoints:(build)=>({
        createStore:build.mutation({
            query:(data)=>({
             url:"/stores/create",
             method:"POST",
             body: data   
            })
        })
    })
})
export const {useCreateStoreMutation} = storeApi