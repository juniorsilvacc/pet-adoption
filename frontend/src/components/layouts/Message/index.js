import React from "react";
import { useState, useEffect } from "react";
import events from "../../../utils/events";

import { Div, success, error } from "./styles";

export default function Message(props) {
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
      }, 3000);
    });
  }, []);

  return visibility && <Div className={`${message} ${[type]}`}>{message}</Div>;
}
