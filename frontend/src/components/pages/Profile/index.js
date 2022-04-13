import React from "react";
import { useState, useEffect } from "react";

import { Div, DivStyled, Title, TextImg, Form } from "./styles";

import Input from "../../form/Input";
import Button from "../../layouts/Button";
import ImageProfile from "../../layouts/ImageProfile";
import useFlashMessage from "../../../hooks/useFlashMessage";

import api from "../../../utils/api";

export default function Profile() {
  const [user, setUser] = useState({});
  const { setFlashMessage } = useFlashMessage();
  const [preview, setPreview] = useState();

  // Pegar usuário pelo token
  const [token] = useState(localStorage.getItem("token") || "");
  useEffect(() => {
    api
      .get("/users/checkuser", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      });
  }, [token]);

  function onFileChange(e) {
    setPreview(e.target.files[0]);
    setUser({ ...user, [e.target.name]: e.target.files[0] });
  }

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let mesagemType = "success";

    const formData = new FormData();

    await Object.keys(user).forEach((key) => {
      formData.append(key, user[key]);
    });

    const data = await api
      .patch(`/users/edit/${user._id}`, formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        mesagemType = "error";
        return err.response.data;
      });

    setFlashMessage(data.message, mesagemType);
  }

  return (
    <Div>
      <Title>Perfil</Title>
      <DivStyled>
        <TextImg>Foto Perfil</TextImg>

        {(user.image || preview) && (
          <ImageProfile
            src={
              preview
                ? URL.createObjectURL(preview)
                : `${process.env.REACT_APP_API}images/users/${user.image}`
            }
            alt={user.name}
          />
        )}
      </DivStyled>

      <Form onSubmit={handleSubmit}>
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
