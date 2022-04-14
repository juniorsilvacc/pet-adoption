import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  Div,
  Title,
  DivStyled,
  Text,
  DivPet,
  TextName,
  DivAvailable,
  AvailableFalse,
  AvailableTrue,
} from "./styles";

// hooks
import useFlashMessage from "../../../hooks/useFlashMessage";

// components
import Button from "../../form/Button";
import Image from "../../layouts/ImagePet";

import api from "../../../utils/api";

export default function MyPets() {
  const [pets, setPets] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "");
  const { setFlashMessage } = useFlashMessage();

  useEffect(() => {
    api
      .get("/pets/mypets", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setPets(response.data.pets);
      });
  }, [token]);

  return (
    <Div>
      <Title>Meus Pets</Title>
      <Link to="/pet/create">
        <Button type="submit" value="Cadastro de Pet" />
      </Link>

      <DivStyled>
        {pets.length === 0 && <Text>Nenhum Pet Encontrado</Text>}
        {pets.length > 0 &&
          pets.map((pet) => (
            <DivPet key={pet._id}>
              <Image
                src={`${process.env.REACT_APP_API}/images/pets/${pet.images[0]}`}
                alt={pet.name}
              />
              <TextName>{pet.name}</TextName>
              <DivAvailable>
                {pet.available ? (
                  <AvailableTrue>Disponível para adoção</AvailableTrue>
                ) : (
                  <AvailableFalse>Não está disponível</AvailableFalse>
                )}
              </DivAvailable>
            </DivPet>
          ))}
      </DivStyled>
    </Div>
  );
}
