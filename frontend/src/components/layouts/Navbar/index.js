import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Logo from "../../../assets/img/Logo.jpg";

import { Container, Img, Div, Ul, Li, Button } from "./styles";

// Context
import { Context } from "../../../context/UserContext";

export default function Navbar() {
  const { authenticated, logout } = useContext(Context);

  return (
    <Container>
      <Div>
        <Link to="/">
          <Img src={Logo} alt="Logo - Lar Feliz" />
        </Link>
      </Div>
      <Ul>
        <Li>
          <Link to="/">
            <Button>Adoções</Button>
          </Link>
        </Li>

        {authenticated ? (
          <>
            <Li>
              <Link to="/users/mypets">
                <Button>Meus Pets</Button>
              </Link>
            </Li>

            <Li>
              <Link to="/users/myadoptions">
                <Button>Minhas Adoções</Button>
              </Link>
            </Li>

            <Li>
              <Link to="/users/profile">
                <Button>Perfil</Button>
              </Link>
            </Li>

            <Li onClick={logout} style={{ cursor: "pointer" }}>
              <Button>Sair</Button>
            </Li>
          </>
        ) : (
          <>
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
          </>
        )}
      </Ul>
    </Container>
  );
}
