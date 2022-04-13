import React from "react";

import { Img } from "./styles";

export default function ImageProfile({ src, alt }) {
  return <Img src={src} alt={alt} />;
}
