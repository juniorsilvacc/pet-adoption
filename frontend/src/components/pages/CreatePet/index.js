import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Div, Title } from "./styles";

// components
import FormPet from "../../form/FormPet";

// hooks
import useFlashMessage from "../../../hooks/useFlashMessage";

import api from "../../../utils/api";

export default function CreatePet() {
  const [token] = useState(localStorage.getItem("token") || "");
  const { setFlashMessage } = useFlashMessage();
  const history = useNavigate();

  async function registerPet(pet) {
    let messageType = "success";

    const formData = new FormData();

    await Object.keys(pet).forEach((key) => {
      if (key === "images") {
        for (let i = 0; i < pet[key].length; i++) {
          formData.append("images", pet[key][i]);
        }
      } else {
        formData.append(key, pet[key]);
      }
    });

    const data = await api
      .post("/pets/create", formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        messageType = "error";
        return err.response.data;
      });

    setFlashMessage(data.message, messageType);
    if (messageType !== "error") {
      history("/users/mypets");
    }
  }

  return (
    <Div>
      <Title>Cadastrar Pet</Title>
      <FormPet handleSubmit={registerPet} />
    </Div>
  );
}
