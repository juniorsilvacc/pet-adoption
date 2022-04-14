import React from "react";
import { useState } from "react";

import { Div, ImgPet } from "./styles.js";

// components
import Input from "../../form/Input";
import Button from "../../form/Button";

export default function FormPet({ handleSubmit, petData }) {
  const [pet, setPet] = useState(petData || {});
  const [preview, setPreview] = useState([]);

  function handleChange(e) {
    setPet({ ...pet, [e.target.name]: e.target.value });
  }

  function onFileChange(e) {
    setPreview(Array.from(e.target.files));
    setPet({ ...pet, images: [...e.target.files] });
  }

  function submit(e) {
    e.preventDefault();
    handleSubmit(pet);
  }

  return (
    <form onSubmit={submit}>
      <Div>
        {preview.length > 0
          ? preview.map((image, index) => (
              <ImgPet
                src={URL.createObjectURL(image)}
                alt={pet.name}
                key={`${pet.name}+${index}`}
              />
            ))
          : pet.images &&
            pet.images.map((image, index) => (
              <ImgPet
                src={`${process.env.REACT_APP_API}/images/pets/${image}`}
                alt={pet.name}
                key={`${pet.name}+${index}`}
              />
            ))}
      </Div>

      <Input
        text="Nome"
        type="text"
        name="name"
        handleOnChange={handleChange}
        value={pet.name || ""}
      />

      <Input
        text="Idade"
        type="number"
        name="age"
        handleOnChange={handleChange}
        value={pet.age || ""}
      />

      <Input
        text="Peso"
        type="number"
        name="weight"
        handleOnChange={handleChange}
        value={pet.weight || ""}
      />

      <Input
        text="Cor"
        type="text"
        name="color"
        handleOnChange={handleChange}
        value={pet.color || ""}
      />

      <Input
        text="Descrição"
        type="text"
        name="description"
        handleOnChange={handleChange}
        value={pet.description || ""}
      />

      <Input
        text="Imagens"
        type="file"
        name="images"
        handleOnChange={onFileChange}
        multiple={true}
      />

      <Button type="submit" value="Cadastrar" />
    </form>
  );
}
