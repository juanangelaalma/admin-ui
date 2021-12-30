import React from "react";
import styled from "styled-components"
import Navbar from "../Navbar/Navbar";
import { Title } from "../Text/Text";

const MainWrap = styled.main`
  flex: 7.75;
  height: 100%;
  background: #FFF:
`

const Main = () => {
    return (
        <MainWrap>
            <Navbar />
        </MainWrap>
    )
}

export default Main