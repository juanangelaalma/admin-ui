import React from "react";
import styled from "styled-components";

const Title = styled.h1`
   color: ${props => props.color || "#000"};
   font-size: 1.5em;
   margin: ${props => props.margin || "0"}
`

export { Title }