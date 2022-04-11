import React from "react";
import { useState, useEffect } from "react";
import events from "../../../utils/events";

import { Div } from "./styles";

export default function Message() {
  const [visibility, setVisibility] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    events.addListener("flash", ({ message, type }) => {
      setVisibility(true);
      setMessage(message);
      setType(type);

      setTimeout(() => {
        setVisibility(false);
      }, 4000);
    });
  }, []);

  return visibility && <Div type={type}>{message}</Div>;
}
