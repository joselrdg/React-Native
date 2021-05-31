import React from "react";
import { useEffect, useState, useRef } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResList, User } from "../interfaces/reqRes";

export const Usuarios = () => {
  const [users, setUsuarios] = useState<User[]>([]);
  const paginaRef = useRef(1);

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    const resp = await reqResApi.get<ReqResList>("/users", {
      params: {
        page: paginaRef.current,
      },
    });
    if (resp.data.data.length > 0) {
      setUsuarios(resp.data.data);
      paginaRef.current++;
    } else {
      alert("No hay más registros");
    }
  };

  const renderItem = ({ id, first_name, last_name, email, avatar }: User) => {
    return (
      <tr key={id.toString()}>
        <td>
          {
            <img
              src={avatar}
              alt={first_name}
              style={{
                width: 50,
                borderRadius: 100,
              }}
            />
          }
        </td>
        <td>
          {first_name} {last_name}
        </td>
        <td>{email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuarios:</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{users.map(renderItem)}</tbody>
      </table>

      <button className="btn btn-primary" onClick={cargarUsuarios}>
        Siguientes
      </button>
    </>
  );
};
