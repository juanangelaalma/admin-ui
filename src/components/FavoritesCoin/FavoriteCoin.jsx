import React from 'react'
import styled from 'styled-components'
import CoinLogo from '../Logo/CoinLogo'
import { Paragraph, Title } from '../Text/Text'
import Wrap from "../Wrap/Wrap"

const Link = styled.a`
  text-decoration: none;
  color: #0803AE;
  font-size: 1em;
`

const Card = styled.div`
  background-color: #FFF;
  width: ${props => props.width};
  border-radius: ${props => props.borderRadius};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
`

const FavoriteCoin = () => {
  return (
    <Wrap padding="2em 1.3em" flexWrap="wrap">
      <Wrap width="100%" justifyContent="space-between">
        <Title>Favorites</Title>
        <Link>See All</Link>
      </Wrap>
      <Wrap width="100%" padding="1em 0">
        <Card width="50%" borderRadius="20px" padding="0.6em" margin="0 0.5em 0 0">
          <Wrap width="100%">
            <CoinLogo name="bitcoin" />
            <Wrap width="70%" flexWrap="wrap" padding="0 0 0 0.5em">
              <Title fontSize="1.2em" width="100%">BTC</Title>
              <Paragraph width="100%" fontSize="0.8em" margin="2px 0 0">Bitcoin</Paragraph>
            </Wrap>
          </Wrap>
        </Card>
        <Card width="50%" borderRadius="20px" padding="0.6em" margin="0 0 0 0.5em">
          <Wrap width="100%">
            <CoinLogo name="etherium" />
            <Wrap width="70%" flexWrap="wrap" padding="0 0 0 0.5em">
              <Title fontSize="1.2em" width="100%">BTC</Title>
              <Paragraph width="100%" fontSize="0.8em" margin="2px 0 0">Bitcoin</Paragraph>
            </Wrap>
          </Wrap>
        </Card>
      </Wrap>
    </Wrap>  
  )
}

export default FavoriteCoin
