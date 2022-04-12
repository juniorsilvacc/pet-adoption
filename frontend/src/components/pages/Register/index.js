import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Input from "../../form/Input";

import { Container, Title, Line, Button, Text } from "./styles";

//Context
import { Context } from "../../../context/UserContext";

export default function Register() {
  const [user, setUser] = useState({});
  const { register } = useContext(Context);

  // mudança dos campos
  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  // enviar
  function handleSubmit(e) {
    e.preventDefault();
    // enviar usuário para o banco
    register(user);
  }

  return (
    <Container>
      <Title>Cadastre-se</Title>
      <Line></Line>
      <form onSubmit={handleSubmit}>
        <Input
          text="Nome"
          type="text"
          name="name"
          handleOnChange={handleChange}
        />

        <Input
          text="E-mail"
          type="email"
          name="email"
          handleOnChange={handleChange}
        />

        <Input
          text="Telefone"
          type="text"
          name="phone"
          handleOnChange={handleChange}
        />

        <Input
          text="Senha"
          type="password"
          name="password"
          handleOnChange={handleChange}
        />

        <Input
          text="Confirmação de Senha"
          type="password"
          name="confirmpassword"
          handleOnChange={handleChange}
        />

        <Button type="submit" value="Cadastrar" />
      </form>

      <Text>
        Já tem cadastro?{" "}
        <Link to="/login" style={{ color: "#fb1", fontWeight: "bold" }}>
          Entrar
        </Link>{" "}
      </Text>
    </Container>
  );
}
