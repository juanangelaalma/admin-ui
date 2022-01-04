import React from "react";
import styled from "styled-components"
import { Button } from "../Button/Button";
import CardPortofolio from "../Card/CardPortofolio";
import Icon from "../Icon/Icon";

import { Title, Paragraph } from "../Text/Text"

const RightbarWrap = styled.aside`
  flex: 3.5;
  background-color: #F7F7FA;
  // display: flex;
`

const Header = styled.div`
  display: flex;
  padding: 1.5em 3%;
`

const Wrap = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  background: ${props => props.background || "none"};
  width: ${props => props.width};
  padding: ${props => props.padding};
`

const Righbar = () => {
    return (
        <RightbarWrap>
            <Header>
              <Wrap flexDirection="column"  width="50%" justifyContent="center">
                <Title>Cryptocurrency</Title>
                <Paragraph margin="1em 0 0 0" color="#F09F30">Increase your profile</Paragraph>
              </Wrap>
              <Wrap width="50%" justifyContent="flex-end">
                <Button padding="0.5em" margin="0.7em 0" borderRadius="50%" width="3em" height="3em">
                  <Icon name="bell" color="#000" />
                </Button>
                <Button padding="0.5em" margin="0.7em 0 0.7em 1em" borderRadius="50%" width="3em" height="3em">
                  <Icon name="card" color="#000"/>
                </Button>
              </Wrap>
            </Header>
            <Wrap padding="1em">
              <CardPortofolio></CardPortofolio>
            </Wrap>
        </RightbarWrap>
    )
}

export default Righbar