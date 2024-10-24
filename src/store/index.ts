import { configureStore, Middleware } from "@reduxjs/toolkit";
import userReducer from "./users/slice";

const persistanceLocalStorageMiddleware:Middleware = (store) => (next) => (action) => {
  console.log(store.getState()); //esta es la estore antes de que la accion se ejecute
  console.log(action); //esta es la action que se va a ejecutar
  next(action); //aqui es donde se ejecuta la accion
  console.log(store.getState()); //aqui esta la store despues de que la accion se ejecuto
  localStorage.setItem('__redux__state__',JSON.stringify(store.getState()))
};

export const store = configureStore({
  reducer: {
    //here don't forget that this is the name with you call of the store in this case its name is user
    userEjemplo: userReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(persistanceLocalStorageMiddleware);
  },
});
//estas dos lineas son para tipar la store y los dispatch y no nos molete con el tipado typescrip
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
