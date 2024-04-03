import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { api } from './services/api'

export const store= configureStore({

   reducer:{
    // Add the generated reducer as a specific top-level slice
     //api.reducerpath is taken as key
    [api.reducerPath] : api.reducer,
   },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
     //contcat add defualt middleware to api middle ware
    
})

setupListeners(store.dispatch);