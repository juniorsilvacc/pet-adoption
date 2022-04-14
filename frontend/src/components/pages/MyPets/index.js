import React from "react";
import { Link } from "react-router-dom";

import { useState, UseEffect } from "react";
import Button from "../../form/Button";

import { Div, Title, DivStyled, Text } from "./styles";

export default function MyPets() {
  const [pets, setPets] = useState([]);

  return (
    <Div>
      <Title>Meus Pets</Title>
      <Link to="/pet/create">
        <Button type="submit" value="Cadastro de Pet" />
      </Link>

      <DivStyled>
        {pets.length > 0 && <Text>Meus Pets Cadastrados</Text>}
        {pets.length === 0 && <Text>Nenhum Pet Encontrado</Text>}
      </DivStyled>
    </Div>
  );
}
