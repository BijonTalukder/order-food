import { baseApi } from "../baseApi";

export const orderApi  = baseApi.injectEndpoints(
    {
        endpoints:(build)=>(
            {
                createOrder:build.mutation({
                    query:(data)=>({
                        url:'/order/create',
                        method:'POST',
                        data

                    })
                })
            }
        )
    }
)

export const {useCreateOrderMutation}  = orderApi