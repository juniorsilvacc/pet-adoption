import api from "../utils/api";

import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useFlashMessage from "./useFlashMessage";

export default function useAuth() {
  const { setFlashMessage } = useFlashMessage();

  async function register(user) {
    let msgText = "Cadastro realizado com sucesso";

    try {
      const data = await api.post("/users/signup", user).then((response) => {
        return response.data;
      });
      console.log(data);
      setFlashMessage(msgText, "success");
    } catch (error) {
      msgText = error.response.data.message;
      setFlashMessage(msgText, "error");
    }
  }

  return { register };
}
