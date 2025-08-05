import React from "react";
import styled from "styled-components";

import { Colors } from "../Colors/ColorComponent";

import img from "../Images/group.png";
import SectionDiv from "../FixedComponent/SectionDiv";

const How = () => {
  return (
    <SectionDiv>
      <Wrapper>
        <Label>HOW COTTER&KNUCKLE WORKS</Label>
        <MainHeading>
          Trusted Power Solutions Delivered in 4 Easy Steps
        </MainHeading>
        <SubText>
          From your request to final delivery, we ensure smooth, expert-driven
          execution every step of the way.
        </SubText>

        <CardGrid>
          <CardImage src={img} alt="24/7 Support" />
        </CardGrid>
      </Wrapper>
    </SectionDiv>
  );
};

export default How;

const Wrapper = styled.div`
  text-align: center;
`;

const Label = styled.p`
  font-size: 0.7rem;
  color: purple;
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
`;

const CardImage = styled.img`
  max-width: 100%;
  height: auto;
  width: 900px;
  object-fit: contain;
`;
