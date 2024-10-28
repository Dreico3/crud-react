//import list from "../../moks/moks.json";
import { Delete, Edit } from "../icons";
import "./tableOfUser.css";
import { useAppSelector } from "../../hooks/store";
import { useUserActions } from "../../hooks/useUserActions";
export default function TableOfUser() {
  //aqui es un ejemplo de que ya no es necesario tipar el selector
  const users = useAppSelector((state) => state.userEjemplo);
  //aqui es donde estamos usando el custom hook de las acciones
  const { removeUserById } = useUserActions();
  return (
    //here i need to do tests
    <div className="content-table">
      <table className="table">
        <thead>
          <tr>
            <th>Nro</th>
            <th>name</th>
            <th>email</th>
            <th>Aciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,index) => (
            <tr key={user.id}>
              <td> {index + 1}</td>
              <td>
                <img
                  alt={user.name}
                  src={`https://unavatar.io/github/${user.github}`}
                />
                <div>{user.name}</div>
              </td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => removeUserById(user.id)}>
                  <Delete></Delete>
                </button>
                <button>
                  <Edit></Edit>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
