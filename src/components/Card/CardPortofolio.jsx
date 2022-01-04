import React from "react";
import styled from "styled-components";
import { Button } from "../Button/Button";
import Icon from "../Icon/Icon";
import { Paragraph, Title } from "../Text/Text";

const Card = styled.div`
  display: flex;
  width: 100%;
  background-color: #0803ae;
  border-radius: 20px;
  padding: 2em 2em 2.5em;
  flex-wrap: wrap;
  position: relative;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  &:after {
    content: " ";
    width: 15em;
    height: 15em;
    background-color: #0D07CB;
    position: absolute;
    border-radius: 50%;
    top: 0;
    right: -6em;
    z-index: 1;
  }
`;

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
`;

const CardPortofolio = () => {
  return (
    <Wrap position="relative" width="100%" padding="1em">
      <Card>
        <Wrap width="100%" padding="0" zIndex="2">
          <Title color="#FFF" fontSize="1em" fontWeight="400">
            My Portofolio
          </Title>
          <Icon name="chart" color="#FFF"></Icon>
        </Wrap>
        <Wrap width="100%" padding="0.5em 0" zIndex="2">
          <Title color="#FFF" fontSize="2em" fontWeight="500">
            $45,100.00
          </Title>
          <Paragraph color="#FFF" alignFlex="flex-end">
            +2.04%
          </Paragraph>
        </Wrap>
      </Card>
      <Wrap position="absolute" zIndex="2" width="100%" bottom="-1.2em" left="0" alignItems="center" justifyContent="center" >
        <Button padding="0.6em 0.8em" display="flex" justifyContent="center" alignItems="center">
          <svg width="22" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M19 22H0V19.2813H19V22ZM9.5 16.5625L1.35714 8.40634L3.27071 6.48963L8.14286 11.3562V0H10.8571V11.3562L15.7293 6.48963L17.6429 8.40 634L9.5 16.5625Z"fill="#474748" />
          </svg>
          <Paragraph margin="0 0.6em">Deposit</Paragraph>
        </Button>
        <Button padding="0.6em 0.6em" display="flex" justifyContent="center" alignItems="center" >
          <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M0 0L19 0V2.71873L0 2.71873V0ZM9.5 5.43747L17.6429 13.5937L15.7293 15.5104L10.8571 10.6438L10.8571 22H8.14286L8.14286 10.6438L3.27072 15.5104L1.35715 13.5937L9.5 5.43747Z" fill="#474748" />
          </svg>
          <Paragraph margin="0 0.6em">Withdraw</Paragraph>
        </Button>
      </Wrap>
    </Wrap>
  );
};

export default CardPortofolio;
