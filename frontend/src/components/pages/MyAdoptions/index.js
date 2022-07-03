import React, { useEffect, useState } from "react";

import {
  Section,
  DivContainer,
  Title,
  Div,
  NotPet,
  DivPet,
  Image,
  TextName,
  DivAvailable,
  AdoptionSuccess,
  AdoptionProcess,
  DivInfoUser,
  DivNameUser,
  DivPhoneUser,
  Strong,
} from "./styles";

import useFlashMessage from "../../../hooks/useFlashMessage";

import api from "../../../utils/api";

export default function MyAdoptions() {
  const [pets, setPets] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "");
  const { setFlashMessage } = useFlashMessage();

  useEffect(() => {
    api
      .get("/pets/myadoptions", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setPets(response.data.pets);
      });
  }, [token]);

  return (
    <Section>
      <DivContainer>
        <Title>Minhas adoções</Title>
      </DivContainer>

      <Div>
        {pets.length > 0 &&
          pets.map((pet) => (
            <DivPet key={pet._id}>
              <Image
                src={`${process.env.REACT_APP_API}/images/pets/${pet.images[0]}`}
                alt={pet.name}
              />
              <TextName>
                <Strong>Nome: </Strong> {pet.name}
              </TextName>
              <DivInfoUser>
                <DivNameUser>
                  <Strong>Proprietário</Strong> {pet.user.name}
                </DivNameUser>
                <DivPhoneUser>
                  <Strong>Ligar para</Strong> {pet.user.phone}
                </DivPhoneUser>
              </DivInfoUser>
              <DivAvailable>
                {pet.available ? (
                  <>
                    <AdoptionProcess>Adoção em processo</AdoptionProcess>
                  </>
                ) : (
                  <AdoptionSuccess>
                    Parabéns por concluir a adoção
                  </AdoptionSuccess>
                )}
              </DivAvailable>
            </DivPet>
          ))}

        {pets.length === 0 && (
          <NotPet>Você ainda não tem adoções de pets</NotPet>
        )}
      </Div>
    </Section>
  );
}
