import api from "../utils/api";
import useFlashMessage from "./useFlashMessage";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const { setFlashMessage } = useFlashMessage();
  const history = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }
  }, []);

  async function register(user) {
    let messageText = "Cadastro realizado com sucesso";
    let messageType = "success";

    try {
      const data = await api.post("/users/signup", user).then((response) => {
        return response.data;
      });

      await authUser(data);
    } catch (error) {
      messageText = error.response.data.message;
      messageType = "error";
    }

    setFlashMessage(messageText, messageType);
  }

  async function authUser(data) {
    setAuthenticated(true);
    localStorage.setItem("token", JSON.stringify(data.token));
    history("/");
  }

  function logout() {
    const messageText = "Você está deslogado";
    let messageType = "success";

    setAuthenticated(false);
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = undefined;
    history("/");

    setFlashMessage(messageText, messageType);
  }

  async function login(user) {
    let messageText = "Login realizado com sucesso";
    let messageType = "success";

    try {
      const data = await api.post("/users/signin", user).then((response) => {
        return response.data;
      });

      await authUser(data);
      history("/users/mypets");
    } catch (error) {
      messageText = error.response.data.message;
      messageType = "error";
    }

    setFlashMessage(messageText, messageType);
  }

  return { register, authenticated, logout, login };
}
