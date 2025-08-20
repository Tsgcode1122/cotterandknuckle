import React from "react";
import SwipeYComponent from "../Animation/SwipeYComponent";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import FooterNav from "./FooterNav";
import { breakpoints } from "../FixedComponent/BreakPoints";
import styled from "styled-components";
import EditDashboard from "./EditDashboard";
import Navbar from "./Navbar";
import EditDashboardSmall from "./EditDashboardSmall";

const EditPost = () => {
  return (
    <>
      <Navbar />
      <Layout style={{ minHeight: "" }}>
        <HideSmall>
          <Sidebar />
        </HideSmall>

        <>
          <HideSmall>
            <EditDashboard />
          </HideSmall>

          <HideBig>
            <EditDashboardSmall />
          </HideBig>
          <HideBig>
            <FooterNav />
          </HideBig>
        </>
        <></>
      </Layout>
    </>
  );
};

export default EditPost;
const HideBig = styled.div`
  @media (min-width: ${breakpoints.laptop}) {
    display: none;
  }
`;
const HideSmall = styled.div`
  display: none;

  @media (min-width: ${breakpoints.laptop}) {
    display: block;
  }
`;
