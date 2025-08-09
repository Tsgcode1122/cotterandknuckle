import React from "react";
import styled from "styled-components";
import SectionDiv from "../FixedComponent/SectionDiv";
import { Colors } from "../Colors/ColorComponent";
import img from "../Images/Readybg.png";
import { FaCheck } from "react-icons/fa6";
import { breakpoints } from "../FixedComponent/BreakPoints";

const Ready = () => {
  return (
    <Container>
      <SectionDiv>
        <Wrapper>
          {/* <Label>WHAT COTTER & KNUCKLE OFFERS</Label> */}
          <MainHeading>Ready to Power Up? Let’s Get You Started.</MainHeading>
          <SubText>
            <ul>
              <li>
                {" "}
                <FaCheck />
                Need help fast? Let’s get your power up and running.
              </li>
              <li>
                {" "}
                <FaCheck />
                We handle your power needs — anytime, anywhere
              </li>
            </ul>
          </SubText>
          <CTAWrapper>
            <PrimaryCTA>Request Service</PrimaryCTA>
            <SecondaryCTA>Call Us Now</SecondaryCTA>
          </CTAWrapper>
        </Wrapper>
      </SectionDiv>
    </Container>
  );
};

export default Ready;

const Container = styled.div`
  text-align: center;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  padding: 2rem 0;
  color: ${Colors.white};
  @media (max-width: ${breakpoints.mobileM}) {
    background-repeat: no-repeat;

    // background-position: center;
  }
`;
const Wrapper = styled.div`
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  padding: 1rem auto 0;
  width: 100%;
`;

const Label = styled.p`
  font-size: 0.7rem;
  color: ${Colors.purple};
  font-weight: 600;
  margin-bottom: 0.5rem;
  background: ${Colors.lightCream};
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 10px;
`;

const MainHeading = styled.h2`
  font-size: 3.5rem;
  font-weight: 500;
  color: ${Colors.white};
  margin: 0 auto 0.3rem;
  line-height: 1.2;
  max-width: 550px;
  padding: 0;
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
  @media (max-width: ${breakpoints.mobileM}) {
    font-size: 1.6rem;
    font-weight: 550;
    max-width: 250px;
    margin: 0;
  }
`;

const SubText = styled.p`
  font-size: 0.9rem;
  color: ${Colors.white};
  max-width: 400px;
  //   margin: 0 auto 2rem;
  ul {
    list-style: none;
    padding: 0;
    margin: 0.2rem 0;
    li {
      margin: 0.5rem 0;
      display: flex;
      align-items: center;
      color: ${Colors.white};

      font-weight: 500;
      @media (max-width: ${breakpoints.mobileM}) {
        margin: 0;
        align-items: left;
        text-align: left;
        gap: 5px;
      }
      svg {
        margin-right: 0.5rem;

        color: ${Colors.brightBlue};
        background: ${Colors.white};
        border-radius: 50%;
        padding: 0.2rem;
        border: 1px solid ${Colors.brightBlue};
      }
    }
  }
`;
const CTAWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const PrimaryCTA = styled.button`
  background: ${Colors.white};
  color: ${Colors.primaryBlue};
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s;

  &:hover {
    background: ${Colors.white};
    box-shadow: 0 4px 24px 0 rgba(0, 123, 255, 0.18);
    transform: scale(1.05);
  }
  @media (max-width: ${breakpoints.mobileM}) {
    font-weight: 500;
  }
`;

const SecondaryCTA = styled.button`
  background: transparent;
  color: ${Colors.white};
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border: 1.5px solid ${Colors.white};
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(1px);
  //   background: rgba(255, 255, 255, 0.1);
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    // color: ${Colors.primaryBlue};
    border-color: ${Colors.white};
    box-shadow: 0 2px 12px 0 rgba(0, 123, 255, 0.1);
    transform: scale(1.04);
  }
  @media (max-width: ${breakpoints.mobileM}) {
    font-weight: 500;
  }
`;
