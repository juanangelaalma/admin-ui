import React from "react";
import styled from "styled-components"

import Brand from "../Brand/Brand";
import {Button, ButtonAbsolute} from "../Button/Button"
import MenuSidebar from "./MenuSidebar";

const SidebarWrap = styled.nav`
  flex: 0.75;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #FFF;
  align-items: center;
  max-width: 110px;
  border-right: 1px solid #d9dfeb;
`

const Wrap = styled.div`
  display: flex;
  flex: ${props => props.flex || 1};
  margin: ${props => props.margin || 0};
  padding: ${props => props.padding || 0};
`

const Sidebar = () => {
    return (
        <SidebarWrap>
            <Brand />
            <MenuSidebar />
            <Wrap flex="1">
                <Button primary fontSize={"2em"} borderRadius={"0 20px 20px 20px"} padding={"0.25em 0.5em"}> + </Button>
            </Wrap>
        </SidebarWrap>
    )
}

export default Sidebar