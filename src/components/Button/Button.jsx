import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: ${props => props.primary ? "#0803AE" : "#FFF" };
  color: ${props => props.primary ? "#FFF" : "#474748"};
  size: ${props => props.size + "em"};
  font-size: ${props => props.fontSize || "1em"};
  margin: ${props => props.margin || "1em"};
  padding: ${props => props.padding || "0.25em 1em"};
  border: none;
  border-radius: ${props => props.borderRadius || "10px"};
  cursor: pointer;
  width: ${props => props.width};
  height: ${props => props.height};
  display: ${props => props.display};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  position: ${props => props.position};
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
`

export { Button }