// docx referred https://redux-toolkit.js.org/rtk-query/api/createApi

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetProductResponse } from './types';
import { GetKpisResponse } from './types';
import { getTransactionsResponse } from './types';


export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_SERVER_URL}), // Base URL + 
    reducerPath: "main",
    tagTypes: ["Kpis", "Products", "Transactions"],
    endpoints: (build) => ({
        getKpis: build.query<Array<GetKpisResponse>, void>({ // Need to change Void, Void to other desired arguments
            query: () => "kpi/kpis/",  
            providesTags: ["Kpis"]
        }),
        // add more API Calls here
        getProducts: build.query<Array<GetProductResponse>, void>({ // Need to change Void, Void to other desired arguments
            query: () => "product/products/",  
            providesTags: ["Products"]
        }),
        getTransactions: build.query<Array<getTransactionsResponse>, void>({ // Need to change Void, Void to other desired arguments
            query: () => "transaction/transactions/",  
            providesTags: ["Transactions"]
        }),
    })


});


//HOOK:  createApi: adds a suffix Query, Prefix use, first letter gets capitalized: in this case 'g' from getKpis
export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery} = api;

