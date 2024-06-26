import { api } from './api'

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getProducts: build.query({
      query: (params) => ({ 
        url: '/products', 
        params 
      }),
      providesTags:["Product"]
    }),
    getDetialProduct:build.query({
      query: (id) => ({ 
        url: `/products/${id}`, 
      }),
    }),
    getSorchProdact:build.query({
      query:(params) =>({
        url:`products/search`,
        params
      }),
      providesTags:["Product"]
    })
  }),
})

export const {
  useGetProductsQuery,
  useGetDetialProductQuery,
  useGetSorchProdactQuery
  
} = productApi