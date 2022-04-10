import React from "react";
import { ContainerStyled } from "../Container/styles";

export default function Container({ children }) {
  return <ContainerStyled>{children}</ContainerStyled>;
}
