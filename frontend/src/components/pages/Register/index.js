import React from "react";
import Input from "../../form/Input";
import { Container, Title, Line, Button } from "./styles";

export default function Register() {
  function handleOnChange(e) {}

  return (
    <Container>
      <Title>Cadastre-se</Title>
      <Line></Line>
      <form action="">
        <Input
          text="Nome"
          type="text"
          name="name"
          handleOnChange={handleOnChange}
        />

        <Input
          text="E-mail"
          type="email"
          name="email"
          handleOnChange={handleOnChange}
        />

        <Input
          text="Telefone"
          type="text"
          name="phone"
          handleOnChange={handleOnChange}
        />

        <Input
          text="Senha"
          type="password"
          name="password"
          handleOnChange={handleOnChange}
        />

        <Input
          text="Confirmação de Senha"
          type="password"
          name="confirmpassword"
          handleOnChange={handleOnChange}
        />

        <Button type="submit" value="Cadastrar" />
      </form>
    </Container>
  );
}
