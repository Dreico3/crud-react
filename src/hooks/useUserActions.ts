import { UserId, deleteUserById } from "../store/users/slice";
import { useAppDispatch } from "./store";

/* aqui es donde condensamos todas las llamadas a las acciones sin tener
que exportarl todas las dependencias que conlleva solo tendriamos que 
importar este custom hook y llamar a la accion */
export const useUserActions = () => {
  const dispatch = useAppDispatch();
  const removeUserById = (id: UserId) => {
    dispatch(deleteUserById(id));
  };
  return { removeUserById };
};
