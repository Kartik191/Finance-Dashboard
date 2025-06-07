import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// Set Store for redux 
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {api} from '@/state/api.ts'; // api module created



export const store = configureStore({
  reducer: {[api.reducerPath]: api.reducer}, // reducerpath: 'main'; Global Reducer Function, where slice reducers(modular reducers from api.ts in this case) are passed as an object 
  middleware: (getDefault) => getDefault().concat(api.middleware), // assigns redux default middleware, and combines with API middleware via default

})
setupListeners(store.dispatch); // needs dispatch to assign functions from store 

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
