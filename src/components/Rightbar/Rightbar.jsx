import React from "react";
import styled from "styled-components"

import { Title, Paragraph } from "../Text/Text"

const RightbarWrap = styled.aside`
  flex: 3.5;
  height: 100%;
  background-color: #F7F7FA;
  display: flex;
`

const Header = styled.div`
  display: flex;
  padding: 1.5em 3%;
`

const Wrap = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection || "row"};
`

const Righbar = () => {
    return (
        <RightbarWrap>
            <Header>
              <Wrap flexDirection="column">
                <Title>Cryptocurrency</Title>
                <Paragraph margin="1em 0 0 0" color="#F09F30">Increase your profile</Paragraph>
              </Wrap>
              <Wrap>
                
              </Wrap>
            </Header>
        </RightbarWrap>
    )
}

export default Righbar