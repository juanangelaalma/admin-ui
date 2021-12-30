import React from "react";
import styled from "styled-components";

import Brand from "../Brand/Brand";
import InputField from "../InputField/InputField";
import Picture from "../Profile/Picture";
import { Button } from "../Button/Button";
import { Title } from "../Text/Text";
import Icon from "../Icon/Icon";

const Nav = styled.nav`
  width: 100%;
  display: flex;
  padding: 1.3em 3%;
  box-sizing: border-box;
`;

const Greeting = styled.div`
  display: flex;
  flex: 50%;
  align-items: center;
  justify-content: ${props => props.justifyContent || "left"}
`;

const Navbar = () => {
  return (
    <Nav>
      <Greeting>
        <Picture />
        <Title margin="0 0 0 0.7em">Good Evening Juan!</Title>
      </Greeting>
      <Greeting justifyContent="right">
          <InputField height="3em" width="50%" />
          <Button primary padding="0.5em 0.5em 0.4em">
            <Icon name="communication" color="#FFF"/>
          </Button>
      </Greeting>
    </Nav>
  );
};

export default Navbar;
