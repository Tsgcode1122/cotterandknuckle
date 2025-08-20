import React from "react";
import SwipeYComponent from "../Animation/SwipeYComponent";
import styled from "styled-components";

import { Colors } from "../Colors/ColorComponent";

import img from "../Images/group.png";
import SectionDiv from "../FixedComponent/SectionDiv";
import { breakpoints } from "../FixedComponent/BreakPoints";

const How = () => {
  return (
    <>
      <SectionDiv>
        <Wrapper>
          <Label>HOW COTTER&KNUCKLE WORKS</Label>
          <MainHeading>
            Trusted Power Solutions Delivered in 4 Easy Steps
          </MainHeading>
          <SwipeYComponent direction="bottom-to-top">
            <SubText>
              From your request to final delivery, we ensure smooth,
              expert-driven execution every step of the way.
            </SubText>
          </SwipeYComponent>
          <CardGrid>
            <CardImage src={img} alt="24/7 Support" />
          </CardGrid>
        </Wrapper>
      </SectionDiv>
      <Big>
        <CardSmall>
          <Group>
            <span>1</span>
            <div>
              <h4>Submit Your Request</h4>
              <p>Reach out via our service form or 24/7 helpline.</p>
            </div>
          </Group>
          <Group>
            <span>2</span>
            <div>
              <h4>Site Assessment</h4>
              <p>Certified technicians evaluate your power needs.</p>
            </div>
          </Group>
          <Group>
            <span>3</span>
            <div>
              <h4>Installation & Delivery</h4>
              <p>We install, connect, and power up your system.</p>
            </div>
          </Group>
          <Group>
            <span>4</span>
            <div>
              <h4> Support & Maintenance</h4>
              <p>You get ongoing service and spare parts anytime.</p>
            </div>
          </Group>
        </CardSmall>
      </Big>
    </>
  );
};

export default How;
const Big = styled.div`
  margin-top: -2rem;
  background: #99aac4;
  padding: 1.5rem;
  @media (max-width: ${breakpoints.mobileM}) {
    padding: 0.5rem;
  }
  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;
const CardSmall = styled.div`
  background: white;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media (max-width: ${breakpoints.mobileM}) {
    background: white;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const Group = styled.div`
  text-align: left;
  display: grid;
  grid-template-columns: 2fr 8fr;

  gap: 10px;
  h4 {
    margin: 0;
  }
  span {
    background: ${Colors.deepBlue};
    height: 50px;
    width: 50px;
    color: white;
    font-size: 20px;
    font-weight: bold;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    margin: 5px 0;
    font-size: 16px;
  }
  @media (max-width: ${breakpoints.mobileM}) {
    text-align: left;
    display: grid;
    grid-template-columns: 2fr 8fr;

    gap: 5px;
    h4 {
      margin: 0;
    }
    span {
      background: ${Colors.deepBlue};
      height: 30px;
      width: 30px;
      color: white;
      font-size: 18px;
      font-weight: bold;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    p {
      margin: 5px 0;
      font-size: 14px;
    }
  }
  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;
const Wrapper = styled.div`
  text-align: center;
`;

const Label = styled.p`
  font-size: 0.7rem;
  color: ${Colors.purple};
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  background: ${Colors.lightCream};
  display: inline-block;
  padding: 0.3rem 0.8rem;

  border-radius: 10px;
`;

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

const SubText = styled.p`
  max-width: 400px;
  margin: 0 auto 2rem auto;
  font-size: 0.9rem;

  color: ${Colors.gray};
`;

const CardGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 1rem;
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const CardImage = styled.img`
  max-width: 100%;
  height: auto;
  width: 900px;
  object-fit: contain;
`;
