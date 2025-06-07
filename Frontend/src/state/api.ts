// docx referred https://redux-toolkit.js.org/rtk-query/api/createApi

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_BASE_URL}), // Base URL + 
    reducerPath: "main",
    tagTypes: ["Kpis"],
    endpoints: (build) => ({
        getKpis: build.query<void, void>({ // Need to change Void, Void to other desired arguments
            query: () => "kpi/kpis/",  
            providesTags: ["Kpis"]
        }),
        // add more API Calls here
    })


});


//HOOK:  createApi: adds a suffix Query, Prefix use, first letter gets capitalized: in this case 'g' from getKpis
export const { useGetKpisQuery } = api;

