import React from "react"
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  background: ${(props) => props.background || "none"};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  align-items: ${(props) => props.alignItems || "center"};
  justify-content: ${(props) => props.justifyContent || "space-between"};
  z-index: ${(props) => props.zIndex};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  box-sizing: border-box;
  flex-wrap: ${props => props.flexWrap};
`;

export default Wrap