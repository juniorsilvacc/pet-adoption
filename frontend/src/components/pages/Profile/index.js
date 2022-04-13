import React from "react";
import { useState, useEffect } from "react";

import { Div, Title, TextImg, Form, Button } from "./styles";

import formStyles from "../../form/Input/styles";
import Input from "../../form/Input";

export default function Profile() {
  const [user, setUser] = useState({});

  function onFileChange(e) {}

  function handleChange(e) {}

  return (
    <Div>
      <Title>Perfil</Title>
      <TextImg>Foto Perfil</TextImg>

      <Form>
        <Input
          text="Nome"
          type="text"
          name="name"
          handleOnChange={handleChange}
          value={user.name || ""}
        />

        <Input
          text="E-mail"
          type="email"
          name="email"
          handleOnChange={handleChange}
          value={user.email || ""}
        />

        <Input
          text="Telefone"
          type="text"
          name="phone"
          handleOnChange={handleChange}
          value={user.phone || ""}
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

        <Input
          text="Imagem"
          type="file"
          name="image"
          handleOnChange={onFileChange}
        />

        <Button type="submit" value="Atualizar Dados" />
      </Form>
    </Div>
  );
}
