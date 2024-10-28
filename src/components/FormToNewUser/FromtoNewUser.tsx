import React, { useState } from "react";
import { User } from "../../store/users/slice";
import { useUserActions } from "../../hooks/useUserActions";
import "./FromTonewUser.css";

export default function FormToNewUser() {
  const [user, setUser] = useState({ name: "", email: "", github: "" } as User);
  const [error, setError] = useState(false)
  const { createNewUser } = useUserActions();
  const hadleSubmint = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user.name === "" || user.email === "" || user.github === "") {
        setError(true)
        return;
    }
    createNewUser(user);
    setError(false)
    setUser({ name: "", email: "", github: "" })
  };
  return (
    <section className="contend-form">
      <h1 className="title-form">Do you want create a new user?</h1>
      <form className="form" action="" onSubmit={hadleSubmint}>
        <input
          type="text"
          placeholder="name ..."
          value={user.name}
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="user github ..."
          value={user.github}
          onChange={(e) => {
            setUser({ ...user, github: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="email ..."
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <button type="submit">send</button>
        <span className={error?'true':'error'}>you need complete all inputs</span>
      </form>
    </section>
  );
}
