import React from "react";
import { Div, Label, InputStyled } from "./styles.js";

export default function Input({
  type,
  text,
  name,
  placeholder,
  handleOnChange,
  value,
  multiple,
}) {
  return (
    <Div>
      <Label htmlFor={name}>{text}:</Label>
      <InputStyled
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        {...(multiple ? { multiple } : "")}
      />
    </Div>
  );
}
