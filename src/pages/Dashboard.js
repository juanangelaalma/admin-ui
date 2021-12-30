import React from "react";
import styled from "styled-components"

import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Main from "../components/Main/Main";
import Righbar from "../components/Rightbar/Rightbar";

const DashboardWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  height: 100vh;
`

const Dashboard = () => {
    return (
        <DashboardWrap>
            <Sidebar />
            <Main />
            <Righbar />
        </DashboardWrap>
    )
}

export default Dashboard