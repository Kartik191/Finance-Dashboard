// docx referred https://redux-toolkit.js.org/rtk-query/api/createApi

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetProductResponse } from './types';


export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_SERVER_URL}), // Base URL + 
    reducerPath: "main",
    tagTypes: ["Kpis", "Products"],
    endpoints: (build) => ({
        getKpis: build.query<void, void>({ // Need to change Void, Void to other desired arguments
            query: () => "kpi/kpis/",  
            providesTags: ["Kpis"]
        }),
        // add more API Calls here
        getProducts: build.query<Array<GetProductResponse>, void>({ // Need to change Void, Void to other desired arguments
            query: () => "product/products/",  
            providesTags: ["Products"]
        }),
    })


});


//HOOK:  createApi: adds a suffix Query, Prefix use, first letter gets capitalized: in this case 'g' from getKpis
export const { useGetKpisQuery, useGetProductsQuery } = api;

