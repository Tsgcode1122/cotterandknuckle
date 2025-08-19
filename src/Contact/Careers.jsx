import React from "react";
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
const Careers = () => {
  return (
    <SectionDiv>
      <Wrapper>
        <Label>Careers</Label>
        <MainHeading></MainHeading>

        <p>
          While we don’t have any open positions at the moment, we’re always
          excited to connect with talented professionals. If you’re passionate
          about engineering and would like to join our team in the future, we’d
          love to hear from you.
        </p>
        <CTA>
          Send your CV to{" "}
          <a href="mailto:careers@cotterandknuckleengineering.com">
            careers@cotterandknuckleengineering.com
          </a>
        </CTA>
      </Wrapper>
    </SectionDiv>
  );
};

export default Careers;
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
