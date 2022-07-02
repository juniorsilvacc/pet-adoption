import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import {
  Div,
  Title,
  Section,
  Image,
  Details,
  Span,
  Button,
  DivContainer,
  DivInfo,
  Description,
  NotCount,
  LinkA,
} from "./styles";

import useFlashMessage from "../../../hooks/useFlashMessage";

import api from "../../../utils/api";

export default function PetDetails() {
  const [pet, setPet] = useState({});
  const { id } = useParams();
  const { setFlashMessage } = useFlashMessage();
  const [token] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    api.get(`/pets/${id}`).then((response) => {
      setPet(response.data.pets);
    });
  }, [id]);

  async function schedule() {
    let messageType = "success";

    const data = await api
      .patch(`pets/schedule/${pet._id}`, {
        Authorization: `Bearer ${JSON.parse(token)}`,
      })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        messageType = "error";
        return err.response.data;
      });

    setFlashMessage(data.message, messageType);
  }

  return (
    <>
      {pet.name && (
        <Section>
          <Div>
            <Title>Meu nome é {pet.name}</Title>
          </Div>

          <DivContainer>
            {pet.images.map((image, index) => (
              <Image
                src={`${process.env.REACT_APP_API}/images/pets/${image}`}
                alt={pet.name}
                key={index}
              />
            ))}

            <DivInfo>
              <Details>
                <Span>Peso: </Span> {pet.weight}
              </Details>

              <Details>
                <Span>Idade: </Span> {pet.age}
              </Details>
            </DivInfo>

            <Description>
              <Span>Descrição: </Span> {pet.description}
            </Description>
          </DivContainer>

          {token ? (
            <Button onClick={schedule}>Solicitar uma visita</Button>
          ) : (
            <NotCount>
              Você precisa criar uma conta para solicitar a visita
            </NotCount>
          )}
        </Section>
      )}
    </>
  );
}
