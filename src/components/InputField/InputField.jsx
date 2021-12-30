import React from "react";
import styled from "styled-components";

const InputField = styled.input.attrs((props) => ({
  type: props.type || "text",
}))`
font-size: ${(props) => props.fontSize || "1em"}
color: #000;
background: #F7F7FA;
width: ${(props) => props.width || "100%"};
height: ${(props) => props.height || "1em"};
border-radius: 10px; 
outline: none;
border: none;
padding: 0 10px;
box-sizing: border-box;
border: 1px solid #d9dfeb;
`;

export default InputField;
