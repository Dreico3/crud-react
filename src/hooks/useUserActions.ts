import { User, UserId, createUser, deleteUserById } from "../store/users/slice";
import { useAppDispatch } from "./store";

/* aqui es donde condensamos todas las llamadas a las acciones sin tener
que exportarl todas las dependencias que conlleva solo tendriamos que 
importar este custom hook y llamar a la accion */
export const useUserActions = () => {
  const dispatch = useAppDispatch();
  const removeUserById = (id: UserId) => {
    dispatch(deleteUserById(id));
  };
  const createNewUser = (user: User) => {
    dispatch(createUser(user));
  };
  return { removeUserById, createNewUser };
};
