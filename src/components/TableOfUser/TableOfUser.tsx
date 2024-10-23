import list from "../../moks/moks.json";
import { Delete, Edit } from "../icons";
import "./tableOfUser.css";
export default function TableOfUser() {
  return (
    //here i need to do tests
    <>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>Aciones</th>
          </tr>
        </thead>
        <tbody>
          {list.map((user, i) => (
            <tr key={i}>
              <td> {i + 1}</td>
              <td>
                <img
                  alt={user.name}
                  src={`https://unavatar.io/github/${user.github}`}
                />
                <div>{user.name}</div>
              </td>
              <td>{user.email}</td>
              <td>
                <button>
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
    </>
  );
}
