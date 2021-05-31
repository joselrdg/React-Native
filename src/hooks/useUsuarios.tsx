import { useState, useRef, useEffect } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResList, User } from "../interfaces/reqRes";

export const useUsuarios = () => {
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
    } else {
      paginaRef.current--;
      alert("No hay más registros");
    }
  };

  const paginaSiguiente = () => {
    paginaRef.current++;
    cargarUsuarios();
  };
  const paginaAnterior = () => {
    if (paginaRef.current > 1) {
      paginaRef.current--;
      cargarUsuarios();
    }
  };
  return {
    users,
    paginaSiguiente,
    paginaAnterior,
  };
};
