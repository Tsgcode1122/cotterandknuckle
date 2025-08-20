import React from "react";
import SwipeYComponent from "../Animation/SwipeYComponent";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import AllPostContent from "./AllPostContent";
import Navbar from "./Navbar";
import FooterNav from "./FooterNav";
import { breakpoints } from "../FixedComponent/BreakPoints";
import styled from "styled-components";

const AllPost = () => {
  return (
    <>
      <Navbar />
      <Layout style={{ minHeight: "" }}>
        <HideSmall>
          <Sidebar />
        </HideSmall>

        <>
          <AllPostContent />
          <HideBig>
            <FooterNav />
          </HideBig>
        </>
      </Layout>
    </>
  );
};

export default AllPost;
const HideBig = styled.div`
  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;
const HideSmall = styled.div`
  display: none;
  @media (min-width: ${breakpoints.tablet}) {
  }
  @media (min-width: ${breakpoints.tablet}) {
    display: block;
  }
`;
