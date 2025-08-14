import React from "react";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

import Navbar from "./Navbar";
import FooterNav from "./FooterNav";
import { breakpoints } from "../FixedComponent/BreakPoints";
import styled from "styled-components";
import DashboardSmall from "./DashboardSmall";
const AdminDashboard = () => {
  return (
    <>
      <Navbar />

      <Layout>
        <HideSmall>
          <Sidebar />
        </HideSmall>
        <>
          {" "}
          <HideSmall>
            <Dashboard />
          </HideSmall>
        </>
      </Layout>
      <>
        <HideBig>
          <DashboardSmall />
        </HideBig>
      </>

      <HideBig>
        <FooterNav />
      </HideBig>
    </>
  );
};

export default AdminDashboard;

const HideBig = styled.div`
  @media (min-width: ${breakpoints.laptop}) {
    display: none;
  }
`;
const HideSmall = styled.div`
  display: none;
  @media (min-width: ${breakpoints.laptop}) {
  }
  @media (min-width: ${breakpoints.laptop}) {
    display: block;
  }
`;
