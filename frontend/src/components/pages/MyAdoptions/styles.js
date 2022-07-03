import styled from "styled-components";

export const Section = styled.section``;

export const DivContainer = styled.div``;

export const Title = styled.h1`
  text-align: center;
  font-family: var(--type-second);
  line-height: 1;
  font-size: 3em;
  margin: 0.5em 0 0.8em 0;
`;

export const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const DivPet = styled.div``;

export const NotPet = styled.p``;

export const Image = styled.img`
  width: 500px;
  height: 350px;
  border-radius: 0.3rem;
`;

export const TextName = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 0.5rem;
`;

export const DivInfoUser = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const DivNameUser = styled.p``;

export const DivPhoneUser = styled.p``;

export const DivAvailable = styled.div``;

export const AvailableFalse = styled.p``;

export const Strong = styled.strong``;

export const AdoptionProcess = styled.p`
  text-align: center;
  font-size: 0.8em;
  border: none;
  padding: 0.6em;
  border-radius: 0.3em;
  background-color: #fff1ce;
  transition: background-color 0.4s;
  transition: transform 0.4s ease-in-out;
  margin-top: 1rem;
  font-weight: bold;
`;

export const AdoptionSuccess = styled.p`
  text-align: center;
  font-size: 0.8em;
  border: none;
  padding: 0.6em;
  border-radius: 0.3em;
  background-color: #d4edda;
  transition: background-color 0.4s;
  transition: transform 0.4s ease-in-out;
  margin-top: 1rem;
  font-weight: bold;
`;
