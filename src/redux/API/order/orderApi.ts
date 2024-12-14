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
                }),
                getOrderByStore:build.query({
                    query:(id)=>({
                        url:`/order/store/${id}`,
                        method:"GET"
                    })
                })
            }
        )
    }
)

export const {useCreateOrderMutation,useGetOrderByStoreQuery}  = orderApi