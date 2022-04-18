import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Div } from "./styles";

import api from "../../../utils/api";

export default function Home() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    api.get("/pets").then((response) => {
      setPets(response.data.pets);
    });
  }, []);

  return (
    <Div>
      <h1>Página para doações de pets</h1>
    </Div>
  );
}
