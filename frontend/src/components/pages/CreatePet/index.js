import React from "react";

import { Div, Title } from "./styles";
import FormPet from "../../form/FormPet";

export default function CreatePet() {
  async function registerPet(pet) {}

  return (
    <Div>
      <Title>Cadastrar Pet</Title>

      <FormPet handleSubmit={registerPet} />
    </Div>
  );
}
