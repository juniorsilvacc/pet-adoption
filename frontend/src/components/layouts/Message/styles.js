import styled from "styled-components";

export const Div = styled.div`
  max-width: 25%;
  padding: 0.5em;
  border: 1px solid #000;
  margin: 1em auto;
  text-align: center;
  border-radius: 5px;
`;

export const success = styled.div`
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
`;

export const error = styled.div`
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
`;

// export const Type = styled.div`
//   color: ${(props) => (props.color ? "#155724" : "#721c24")};
//   background-color: #d4edda;
//   border-color: #c3e6cb;
// `;
