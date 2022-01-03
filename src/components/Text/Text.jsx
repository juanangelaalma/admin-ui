import React from "react";
import styled from "styled-components";

const Title = styled.h1`
   color: ${props => props.color || "#000"};
   font-size: 1.5em;
   margin: ${props => props.margin || "0"}
`

const Paragraph = styled.p`
  color: ${props => props.color || "#000"};
  font-size: ${props => props.fontSize || "1em"};
  margin: ${props => props.margin || "0"};
  font-family: "Roboto";
  font-weight: 300;
`

export { Title, Paragraph }