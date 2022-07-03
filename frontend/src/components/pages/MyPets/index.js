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
  ButtonConclude,
  ButtonEdit,
  ButtonRemove,
  DivButtons,
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

  async function removePet(id) {
    let messageType = "success";

    const data = await api
      .delete(`/pets/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setPets(pets.filter((pet) => pet._id !== id));
        return response.data;
      })
      .catch((err) => {
        messageType = "error";
        return err.response.data;
      });

    setFlashMessage(data.message, messageType);
  }

  async function handleConclude(id) {
    let messageType = "success";

    const data = await api
      .patch(`/pets/conclude/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        messageType = "error";
        return err.response.data;
      });

    setFlashMessage(data.message, messageType);
    setTimeout(() => {
      window.location.reload(false);
    }, 500);
  }

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
                  <>
                    {pet.adopter && (
                      <ButtonConclude
                        onClick={() => {
                          handleConclude(pet._id);
                        }}
                      >
                        Concluir Adoção
                      </ButtonConclude>
                    )}
                    <DivButtons>
                      <ButtonEdit>
                        <Link
                          to={`/pet/update/${pet._id}`}
                          style={{ color: "#FFF" }}
                        >
                          Editar
                        </Link>
                      </ButtonEdit>
                      <ButtonRemove onClick={() => removePet(pet._id)}>
                        Excluir
                      </ButtonRemove>
                    </DivButtons>
                  </>
                ) : (
                  <AvailableFalse>Adoção concluída</AvailableFalse>
                )}
              </DivAvailable>
            </DivPet>
          ))}
      </DivStyled>
    </Div>
  );
}
