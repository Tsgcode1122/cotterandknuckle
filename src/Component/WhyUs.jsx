import React from "react";
import styled from "styled-components";

import { Colors } from "../Colors/ColorComponent";
import img1 from "../Images/icon1.png";
import img2 from "../Images/icon2.png";
import img3 from "../Images/icon3.png";
import SectionDiv from "../FixedComponent/SectionDiv";

const WhyUs = () => {
  return (
    <SectionDiv>
      <Wrapper>
        <Label>Why Cotter and Knuckly</Label>
        <MainHeading>
          Built to Deliver Light Comfort Where It’s Needed Most
        </MainHeading>
        <SubText>
          Cotter & Knuckle delivers end-to-end energy solutions from expert site
          assessment to trusted equipment, certified installation, and 24/7
          support. Our process is built for speed and durability
        </SubText>

        <CardGrid>
          <Card>
            <CardImage src={img1} alt="Reliable Engines" />
            <CardTitle>Certified Engineers</CardTitle>
            <CardDesc>
              All our installations and repairs are handled by licensed,
              experienced professionals who understand the terrain.
            </CardDesc>
          </Card>

          <Card>
            <CardImage src={img2} alt="Expert Team" />
            <CardTitle>Reliable Equipment & Parts</CardTitle>
            <CardDesc>
              We supply and install only trusted generator brands and original
              parts that last, so your power never falters.
            </CardDesc>
          </Card>

          <Card>
            <CardImage src={img3} alt="24/7 Support" />
            <CardTitle>24/7 Technical Support</CardTitle>
            <CardDesc>
              We’re always just a call away — for emergencies, routine checks,
              or spare parts delivery, day or night.
            </CardDesc>
          </Card>
        </CardGrid>
      </Wrapper>
    </SectionDiv>
  );
};

export default WhyUs;

const Wrapper = styled.div`
  text-align: center;
`;

const Label = styled.p`
  font-size: 0.9rem;
  color: purple;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
`;

const MainHeading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${Colors.deepBlue};
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const SubText = styled.p`
  max-width: 700px;
  margin: 0 auto 2rem auto;
  font-size: 1rem;
  color: ${Colors.gray};
`;

const CardGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 3rem;
`;

const Card = styled.div`
  width: 300px;
  padding: 1.5rem;
  background-color: ${Colors.white};
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  text-align: center;
`;

const CardImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: ${Colors.primaryBlue};
  margin-bottom: 0.5rem;
`;

const CardDesc = styled.p`
  font-size: 0.95rem;
  color: ${Colors.gray};
  line-height: 1.5;
`;
