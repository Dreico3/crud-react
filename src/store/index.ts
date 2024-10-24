import { configureStore } from "@reduxjs/toolkit";
import userReducer from './users/slice'
export const store = configureStore({
    reducer:{
        //here don't forget that this is the name with you call of the store in this case its name is user
        userEjemplo:userReducer
    }
})
//estas dos lineas son para tipar la store y los dispatch y no nos molete con el tipado typescrip
export type RootState= ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch