import styled from "styled-components";

export const Div = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  text-align: center;
  font-family: var(--type-second);
  line-height: 1;
  font-size: 3em;
  margin-top: 0.5em;
`;

export const TextImg = styled.p`
  text-align: center;
  margin: 2.5em 0 1em 0;
`;

export const Form = styled.form``;

export const Button = styled.input`
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
