import { baseApi } from "../baseApi";

export const storeApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createStore: build.mutation({
            query: (data) => ({
                url: "/stores/create",
                method: "POST",
                data,
                contentType: "multipart/form-data"

            })
        }),

        getStore: build.query({
            query: ({ seachableFiled,priceRange, deliveryTime, category, cuisines,lat,lng }) => {
                // Build query parameters dynamically
                const params = new URLSearchParams();
                if (priceRange) params.append("priceRange", priceRange);
                if (deliveryTime) params.append("deliveryTime", deliveryTime);
                if (category) params.append("category", category);
                if(lat && lng)
                {
                    params.append("lat",lat);
                    params.append("lng",lng);
                }
                if (cuisines && cuisines.length > 0) {
                    console.log(cuisines);
                    
                    params.append("cuisines", cuisines);
                }
                if(seachableFiled)
                {
                    params.append("seachableFiled",seachableFiled)
                }

                return {
                    url: `/stores?${params.toString()}`, // Attach query parameters
                    method: "GET",
                };
            },
        }),

        getSingleStore: build.query({
            query: (id) => ({
                url: `/stores/${id}`,
                method: "GET"

            })

        })
    })
})
export const { useCreateStoreMutation, useGetStoreQuery, useGetSingleStoreQuery } = storeApi