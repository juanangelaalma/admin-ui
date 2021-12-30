import React, { useState } from "react";
import styled from "styled-components";
import Icon from "../Icon/Icon";

const Menu = styled.div`
  flex: 10;
`;

const Ul = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Li = styled.li`
  list-style: none;
  margin: 2em 0 0;
  cursor: pointer;
`;

const MenuSidebar = () => {
  const [selected, setSelected] = useState("user")

  return (
    <Menu>
      <Ul>
        <Li onClick={() => setSelected("home")}>
          <Icon name="home" color={selected === "home" ? "#574CCB" : ""}></Icon>
        </Li>
        <Li onClick={() => setSelected("user")}>
          <Icon name="user" color={selected === "user" ? "#574CCB" : ""}></Icon>
        </Li>
        <Li onClick={() => setSelected("chat")}>
          <Icon name="chat" color={selected === "chat" ? "#574CCB" : ""}></Icon>
        </Li>
        <Li onClick={() => setSelected("gear")}>
          <Icon name="gear" color={selected === "gear" ? "#574CCB" : ""}></Icon>
        </Li>
        <Li onClick={() => setSelected("love")}>
          <Icon name="love" color={selected === "love" ? "#574CCB" : ""}></Icon>
        </Li>
      </Ul>
    </Menu>
  );
};

export default MenuSidebar;
