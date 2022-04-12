import styled from "styled-components";

export const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-family: var(--type-second);
  line-height: 1;
  font-size: 3em;
  margin-top: 1em;
`;

export const Line = styled.div`
  content: " ";
  width: 120px;
  height: 5px;
  background: #fb1;
  margin-bottom: 2.5em;
`;

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

export const Text = styled.p`
  font-size: 1em;
  margin-top: 1.5em;
`;
