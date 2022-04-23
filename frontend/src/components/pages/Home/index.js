import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  DivContainer,
  Div,
  Title,
  Text,
  DivPet,
  DivCard,
  TextFalse,
  ImgPet,
  NamePet,
  TextDetails,
  TextPetAdoption,
  TextDisponible,
} from "./styles";

import api from "../../../utils/api";

export default function Home() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    api.get("/pets").then((response) => {
      setPets(response.data.pets);
    });
  }, []);

  return (
    <DivContainer>
      <Div>
        <Title>Adote um animal de estimação</Title>
        <Text>Veja os detalhes de cada um deles</Text>
      </Div>
      <DivPet>
        {pets.length > 0 &&
          pets.map((pet, key) => (
            <DivCard key={key}>
              <ImgPet
                style={{
                  backgroundImage: `url(${process.env.REACT_APP_API}/images/pets/${pet.images[0]})`,
                }}
              ></ImgPet>
              <NamePet>{pet.name}</NamePet>
              {pet.available ? (
                <>
                  <TextDisponible>
                    <p>Disponível para doação</p>
                  </TextDisponible>
                  <TextDetails>
                    <Link to={`pets/${pet._id}`} style={{}}>
                      Veja mais detalhes
                    </Link>
                  </TextDetails>
                </>
              ) : (
                <TextPetAdoption>{pet.name} foi adotado 😍</TextPetAdoption>
              )}
            </DivCard>
          ))}
        {pets.length === 0 && (
          <TextFalse>Não há pets disponivéis para adoção.</TextFalse>
        )}
      </DivPet>
    </DivContainer>
  );
}
