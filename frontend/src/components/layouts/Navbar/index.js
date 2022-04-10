import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../../assets/img/Logo.jpg";

import { Container, LogoImg, DivLogo, NavUl, NavLi, Button } from "./styles";

export default function Navbar() {
  return (
    <Container>
      <DivLogo>
        <LogoImg src={Logo} alt="Logo - Lar Feliz" />
      </DivLogo>
      <NavUl>
        <NavLi>
          <Link to="/">
            <Button>Adoção</Button>
          </Link>
        </NavLi>

        <NavLi>
          <Link to="/login">
            <Button>Entrar</Button>
          </Link>
        </NavLi>

        <NavLi>
          <Link to="/register">
            <Button>Cadastre-se</Button>
          </Link>
        </NavLi>
      </NavUl>
    </Container>
  );
}
