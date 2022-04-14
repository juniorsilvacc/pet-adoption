import React from "react";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// hooks
import useFlashMessage from "../../../hooks/useFlashMessage";

// components
import Input from "../../form/Input";
import Button from "../../form/Button";

import { Div, Title } from "./styles";

import api from "../../../utils/api";

export default function CreatePet() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {}

  function onFileChange(e) {}

  return (
    <Div>
      <Title>Cadastrar Pet</Title>

      <form onSubmit={handleSubmit}>
        <Input
          text="Nome"
          type="text"
          name="name"
          handleOnChange={handleChange}
        />

        <Input
          text="Idade"
          type="number"
          name="age"
          handleOnChange={handleChange}
        />

        <Input
          text="Peso"
          type="number"
          name="weight"
          handleOnChange={handleChange}
        />

        <Input
          text="Cor"
          type="text"
          name="color"
          handleOnChange={handleChange}
        />

        <Input
          text="Descrição"
          type="text"
          name="description"
          handleOnChange={handleChange}
        />

        <Input
          text="Imagens"
          type="file"
          name="image"
          handleOnChange={onFileChange}
          multiple={true}
        />

        <Button type="submit" value="Cadastrar" />
      </form>
    </Div>
  );
}
