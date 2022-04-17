import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Logo from "../../../assets/img/Logo.jpg";

import { Container, Img, Div, Ul, Li, Button } from "./styles";

// Context
import { Context } from "../../../context/UserContext";

import api from "../../../utils/api";

export default function Navbar() {
  const [user, setUser] = useState({});
  const { authenticated, logout } = useContext(Context);

  const [token] = useState(localStorage.getItem("token") || "");
  useEffect(() => {
    api
      .get("/users/checkuser", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      });
  }, [token]);

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
            {/* <Li>{user.name}</Li> */}
            <Li>
              <Link to="/users/mypets">
                <Button>Meus Pets</Button>
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
