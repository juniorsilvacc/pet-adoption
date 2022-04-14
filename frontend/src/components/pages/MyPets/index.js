import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { Div, Title, DivStyled, Text } from "./styles";

// hooks
import useFlashMessage from "../../../hooks/useFlashMessage";

// components
import Button from "../../form/Button";

import api from "../../../utils/api";

export default function MyPets() {
  const [pets, setPets] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "");
  const { setFlashMessage } = useFlashMessage();

  useEffect(() => {
    api
      .get("/pets/mypets", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setPets(response.data.pets);
      });
  }, [token]);

  return (
    <Div>
      <Title>Meus Pets</Title>
      <Link to="/pet/create">
        <Button type="submit" value="Cadastro de Pet" />
      </Link>

      <DivStyled>
        {pets.length === 0 && <Text>Nenhum Pet Encontrado</Text>}
        {pets.length > 0 && <Text>Meus Pets Cadastrados</Text>}
      </DivStyled>
    </Div>
  );
}
