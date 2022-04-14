import styled from "styled-components";

export const Div = styled.div``;

export const Title = styled.h1`
  text-align: center;
  font-family: var(--type-second);
  line-height: 1;
  font-size: 3em;
  margin: 0.5em 0 0.8em 0;
`;

export const DivStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

export const Text = styled.p`
  font-size: 1.2em;
  margin: 2em 0 1em 0;
`;

export const DivPet = styled.div``;

export const TextName = styled.span`
  font-size: 1.3em;
  font-weight: bold;
`;

export const DivAvailable = styled.div``;

export const AvailableFalse = styled.p``;

export const AvailableTrue = styled.p`
  color: #155724;
  background-color: #d4edda;
  padding: 0.5em;
  width: 200px;
  border-radius: 0.5em;
  font-size: 0.9em;
  margin-top: 0.5em;
`;
