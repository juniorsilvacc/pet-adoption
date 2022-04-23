import styled from "styled-components";

export const DivContainer = styled.section``;

export const Div = styled.div``;

export const Title = styled.h1`
  text-align: center;
  font-family: var(--type-second);
  line-height: 1;
  font-size: 1.6em;
  margin: 0.5em 0 0.3em 0;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 1em;
  margin-bottom: 1em;
`;

export const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  margin: 2%;
`;

export const DivPet = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ImgPet = styled.div`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 225px;
  border-radius: 0.3em;
`;

export const NamePet = styled.p`
  font-size: 1.1em;
  font-weight: bold;
  margin: 0.4em 0;
  text-align: center;
`;

export const TextDetails = styled.div`
  text-align: center;
  font-size: 0.7em;
  border: none;
  padding: 0.4em;
  border-radius: 0.3em;
  background-color: #fff1ce;
  transition: background-color 0.4s;
  transition: transform 0.4s ease-in-out;
  cursor: pointer;
  &&:hover {
    background-color: #ffe7aa;
    transform: scale(1.1);
  }
`;

export const TextDisponible = styled.p`
  color: #155724;
  background-color: #d4edda;
  padding: 0.5em;
  width: 100%;
  border-radius: 0.3em;
  font-size: 0.8em;
  margin: 0.5em 0;
  text-align: center;
`;

export const TextPetAdoption = styled.p`
  color: #721c24;
  background-color: #f8d7da;
  padding: 0.5em;
  width: 100%;
  border-radius: 0.3em;
  font-size: 0.8em;
  margin: 0.5em 0;
  text-align: center;
`;

export const TextFalse = styled.p`
  font-size: 1.2em;
  margin: 2em 0 1em 0;
`;
