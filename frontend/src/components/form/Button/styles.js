import styled from "styled-components";

export const Input = styled.input`
  width: 200px;
  height: 50px;
  font-size: 1em;
  border-radius: 0.4em;
  border: none;
  background: linear-gradient(#ffbf00, #f2a50c);
  cursor: pointer;
  transition: 300ms;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }
`;
