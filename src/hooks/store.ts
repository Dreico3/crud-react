import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

/* 
esto es para que no tengamos que tipar el selector y el dispatch 
cada vez que lo usemos en la aplicacion
*/
