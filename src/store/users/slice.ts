import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export  type UserId = string
export interface User {
  name: string;
  email: string;
  github: string;
}
export interface UserWithId extends User {
  id: UserId;
}
const initialState: UserWithId[] = [
  {
    id: "1",
    name: "pepe",
    email: "peep@hotmail.comn",
    github: "pepes",
  },
  {
    id: "2",
    name: "ramon",
    email: "ramon@hotmail.comn",
    github: "ramons",
  },
  {
    id: "3",
    name: "Erick",
    email: "drerick@hotmail.comn",
    github: "Dreico3",
  },
];

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    //PayloadAction es una forma de tipar la action o el payload 
    //que tiene dentro y asi evitarnos problemas a largo plazo
    deleteUserById:(state,action:PayloadAction<string>)=>{
        const id = action.payload
        return state.filter((user)=>user.id!==id)
    }
  },
});

export default userSlice.reducer
//esta es forma mas facil de exportar las acciones sin tener que hacer lo de antes
//"NOMBRE_DE_LA_ACTION" esto es lo anterior
export const {deleteUserById} = userSlice.actions 