import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 2.5em;
  border-bottom: 1px solid #fff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
`;

export const Div = styled.div``;

export const Img = styled.img`
  width: 75px;
  margin-right: 1em;
  padding: 0.5rem 0;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const Li = styled.li``;

export const Button = styled.a`
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  padding: 0.5em 0.8em;
  transition: color 500ms;
  &:hover {
    color: #545454;
  }
`;
