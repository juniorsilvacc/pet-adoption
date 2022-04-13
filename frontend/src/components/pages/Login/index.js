import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import Input from "../../form/Input";
import Button from "../../layouts/Button";

import { Container, Title, Line, Text } from "./styles";

//Context
import { Context } from "../../../context/UserContext";

export default function Login() {
  const [user, setUser] = useState({});
  const { login } = useContext(Context);

  // Objeto atual e substitui pelo os dados passados
  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  }

  // enviar
  function handleSubmit(e) {
    e.preventDefault();
    // enviar usuário para o banco
    login(user);
  }

  return (
    <Container>
      <Title>Entrar</Title>
      <Line></Line>
      <form onSubmit={handleSubmit}>
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
