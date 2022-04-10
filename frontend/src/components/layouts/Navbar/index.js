import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../../assets/img/Logo.jpg";

import { Container, Img, Div, Ul, Li, Button } from "./styles";

export default function Navbar() {
  return (
    <Container>
      <Div>
        <Img src={Logo} alt="Logo - Lar Feliz" />
      </Div>
      <Ul>
        <Li>
          <Link to="/">
            <Button>Adoção</Button>
          </Link>
        </Li>

        <Li>
          <Link to="/login">
            <Button>Entrar</Button>
          </Link>
        </Li>

        <Li>
          <Link to="/register">
            <Button>Cadastre-se</Button>
          </Link>
        </Li>
      </Ul>
    </Container>
  );
}
