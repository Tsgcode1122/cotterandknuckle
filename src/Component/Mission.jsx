import React, { useEffect } from "react";
import SectionDiv from "../FixedComponent/SectionDiv";
import styled from "styled-components";
import { breakpoints } from "../FixedComponent/BreakPoints";
import { Colors } from "../Colors/ColorComponent";

const MainHeading = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: ${Colors.black};
  margin-bottom: 1rem;
  max-width: 400px;
  margin: 0 auto 1rem auto;
  word-break: break-word;
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
  @media (max-width: ${breakpoints.mobileL}) {
    font-size: 1.4rem;
  }
`;
const Mission = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <SectionDiv>
      <Wrapper>
        <Label>Mission</Label>
        <MainHeading></MainHeading>

        <p>
          At Cotter & Knuckle Engineering, our mission is to deliver innovative,
          reliable, and sustainable engineering solutions that empower
          communities and industries to thrive. We are committed to excellence,
          integrity, and continuous improvement in every project we undertake.
        </p>
      </Wrapper>
    </SectionDiv>
  );
};

export default Mission;
const Label = styled.p`
  font-size: 0.7rem;
  color: ${Colors.purple} !important;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  background: ${Colors.lightCream};
  display: inline-block;
  padding: 0.3rem 0.8rem;

  border-radius: 10px;
`;

const Wrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  height: 70vh;
  h2 {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
    color: #555;
  }
`;

const CTA = styled.p`
  font-weight: bold;
  font-size: 1.1rem;

  a {
    color: ${Colors.brightBlue};
    text-decoration: underline;
  }
`;
