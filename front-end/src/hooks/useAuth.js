import api from "../components/utils/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && token !== "undefined") {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }
  }, []);

  async function register(user) {
    let msgText = "Cadastro realizado com sucesso!";
    let msgType = "success";
    try {
      const data = await api
        .post("/users/register", user)
        .then((response) => response.data);
      setTimeout(async () => authUser(data), 1000);
    } catch (error) {
      msgText = error.response.data.message;
      msgType = "error";
    }
  }

  function authUser(data) {
    setAuthenticated(true);

    localStorage.setItem("token", JSON.stringify(data.token));
    toast.success("Usuario logado com sucesso!");
    navigate("/");
  }

  async function login(user) {
    const data = await api
      .post("/users/login", user)
      .then((response) => authUser(response.data))
      .catch((error) => toast.error(error.response.data.message));
  }

  async function logout(user) {
    setAuthenticated(false);
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = undefined;
    toast.success("Logout realizado com sucesso!");
    navigate("/");
  }

  return { register, authenticated, logout, login };
}
