import styled from "styled-components";

export const Div = styled.div`
  max-width: 25%;
  padding: 0.5em;
  border: 1px solid #000;
  margin: 1em auto 0;
  text-align: center;
  border-radius: 5px;

  color: ${(props) => (props.type === "success" ? "#155724" : "#721c24")};
  background-color: ${(props) =>
    props.type === "success" ? "#d4edda" : "#f8d7da"};
  border-color: ${(props) =>
    props.type === "success" ? "#c3e6cb" : "#f5c6cb"};
`;
