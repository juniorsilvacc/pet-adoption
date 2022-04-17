import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Div, Title } from "./styles";

// components
import FormPet from "../../form/FormPet";

// hooks
import useFlashMessage from "../../../hooks/useFlashMessage";

import api from "../../../utils/api";

export default function UpdatePet() {
  return (
    <Div>
      <Title>Editar Pet</Title>
      <FormPet />
    </Div>
  );
}
