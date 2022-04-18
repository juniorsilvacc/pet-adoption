import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Div, Title } from "./styles";

// components
import FormPet from "../../form/FormPet";

// hooks
import useFlashMessage from "../../../hooks/useFlashMessage";

import api from "../../../utils/api";

export default function UpdatePet() {
  const [pets, setPet] = useState({});
  const [token] = useState(localStorage.getItem("token") || "");
  const { id } = useParams();
  const { setFlashMessage } = useFlashMessage();

  useEffect(() => {
    api
      .get(`/pets/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setPet(response.data.pets);
      });
  }, [token, id]);

  async function updatePet(pet) {
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
      .patch(`pets/${pet._id}`, formData, {
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
  }

  return (
    <Div>
      <Title>Editar Pet</Title>

      {pets.name && <FormPet handleSubmit={updatePet} petData={pets} />}
    </Div>
  );
}
