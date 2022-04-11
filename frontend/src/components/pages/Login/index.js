import React from "react";
import { Link } from "react-router-dom";
import Input from "../../form/Input";
import { Container, Title, Line, Button, Text } from "./styles";

export default function Login() {
  function handleChange(e) {}

  return (
    <Container>
      <Title>Entrar</Title>
      <Line></Line>
      <form action="">
        <Input
          text="E-mail"
          type="email"
          name="email"
          handleOnChange={handleChange}
        />

        <Input
          text="Senha"
          type="password"
          name="password"
          handleOnChange={handleChange}
        />

        <Button type="submit" value="Entrar" />
      </form>

      <Text>
        Ainda não tem cadastro?{" "}
        <Link to="/register" style={{ color: "#fb1", fontWeight: "bold" }}>
          Cadastre-se
        </Link>{" "}
      </Text>
    </Container>
  );
}
