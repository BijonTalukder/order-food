import { baseApi } from "../baseApi";

export const cartsApi = baseApi.injectEndpoints({
    endpoints:(build)=>(
        {
            createCart:build.mutation({
                query:(data)=>({
                    url:`/cart/create`,
                    method:'POST',
                    data

                })
            })
        }
    )
})

export const {useCreateCartMutation} = cartsApi