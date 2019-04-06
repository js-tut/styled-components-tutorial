import React from "react";
import "./Heading.css";
import { ButtonWrapper } from "./Button";
export default function Heading() {
  return (
    <div>
      <h1 className="third">i'm separate css file</h1>
      <ButtonWrapper color="green">I'm from heading</ButtonWrapper>
    </div>
  );
}
