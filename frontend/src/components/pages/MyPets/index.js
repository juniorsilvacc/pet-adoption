import React from "react";
import { useState, UseEffect } from "react";

import { Div, Title, DivStyled, Text } from "./styles";

export default function MyPets() {
  const [pets, setPets] = useState([]);

  return (
    <Div>
      <Title>Meus Pets</Title>

      <DivStyled>
        {pets.length > 0 && <Text>Meus Pets Cadastrados</Text>}
        {pets.length === 0 && <Text>Nenhum Pet Cadastrado</Text>}
      </DivStyled>
    </Div>
  );
}
