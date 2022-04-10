import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
`;

export const Label = styled.label`
  margin-bottom: 0.3em;
  font-size: 1em;
  line-height: 1;
`;

export const InputStyled = styled.input`
  border: 1px solid #eee;
  display: block;
  width: 100%;
  font-size: 1em;
  padding: 0.8em;
  border-radius: 0.4em;
  background-color: #eee;
  cursor: pointer;
  transition: 300ms;

  &:hover,
  &:focus {
    outline: none;
    border-color: #fb1;
    background: #fff;
    box-shadow: 0 0 0 2px #fea;
  }
`;
