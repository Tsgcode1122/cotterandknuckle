import React from "react";
import SwipeYComponent from "../Animation/SwipeYComponent";
import styled from "styled-components";
import { breakpoints } from "./BreakPoints";

const SectionContainer = styled.div`
  padding: 2rem 1.5rem;

  /* Leave these small sizes untouched */
  @media screen and (max-width: 320px) {
    padding: 2rem 0.8rem;
  }

  @media (min-width: 321px) and (max-width: 399px) {
    padding: 2rem 1rem;
  }

  @media (min-width: 400px) and (max-width: 479px) {
    padding: 2rem 1.2rem;
  }

  /* Start applying your breakpoints */
  @media (min-width: ${breakpoints.mobileS}) {
    padding: 2rem 1.5rem;
  }

  @media (min-width: ${breakpoints.mobileM}) {
    padding: 2rem 2rem;
  }

  @media (min-width: ${breakpoints.mobileL}) {
    padding: 10px 40px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: 2rem 2rem;

    margin: 0 auto;
  }

  @media (min-width: ${breakpoints.laptop}) {
    max-width: 1150px;
    padding: 2rem 4rem;

    margin: 0 auto;
  }

  @media (min-width: ${breakpoints.desktop}) {
    max-width: 1400px;
    padding: 2rem 0rem;
    margin: 0 auto;
  }

  @media (min-width: ${breakpoints.desktopXL}) {
    max-width: 1600px;
    padding: 2rem 0rem;
    margin: 0 auto;
  }
`;

const SectionDiv = ({ children }) => {
  return <SectionContainer>{children}</SectionContainer>;
};

export default SectionDiv;
