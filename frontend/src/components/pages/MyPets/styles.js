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
  display: flex;
  justify-content: space-between;
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

export const AvailableFalse = styled.p`
  color: #721c24;
  background-color: #f8d7da;
  padding: 0.5em;
  width: 200px;
  border-radius: 0.5em;
  font-size: 0.9em;
  margin: 0.5em 0 0.8em 0;
`;

export const AvailableTrue = styled.p`
  color: #155724;
  background-color: #d4edda;
  padding: 0.5em;
  width: 200px;
  border-radius: 0.5em;
  font-size: 0.9em;
  margin: 0.5em 0 0.8em 0;
`;

export const DivButtons = styled.div`
  display: flex;
  width: 300px;
`;

export const ButtonConclude = styled.button``;

export const ButtonEdit = styled.button`
  height: 35px;
  flex: 1;
  border: none;
  background: #f7cd67;
  border-radius: 5px;
  margin-right: 10px;
  text-transform: uppercase;
  color: #fff;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ButtonRemove = styled.button`
  height: 35px;
  flex: 1;
  border: none;
  background: #fb6a3d;
  border-radius: 5px;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
