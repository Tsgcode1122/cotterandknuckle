import React from "react";
import styled from "styled-components";

import { Colors } from "../Colors/ColorComponent";
import img1 from "../Images/icon1.png";
import img2 from "../Images/icon2.png";
import img3 from "../Images/icon3.png";
import SectionDiv from "../FixedComponent/SectionDiv";
import { breakpoints } from "../FixedComponent/BreakPoints";

const WhyUs = () => {
  return (
    <SectionDiv>
      <Wrapper>
        <Label>Why Cotter&Knuckly</Label>
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
            <Group>
              <CardTitle>Certified Engineers</CardTitle>
              <CardDesc>
                All our installations and repairs are handled by licensed,
                experienced professionals who understand the terrain.
              </CardDesc>
            </Group>
          </Card>

          <Card>
            <CardImage src={img2} alt="Expert Team" />
            <Group>
              <CardTitle>Reliable Equipment & Parts</CardTitle>

              <CardDesc>
                We supply and install only trusted generator brands and original
                parts that last, so your power never falters.
              </CardDesc>
            </Group>
          </Card>

          <Card>
            <CardImage src={img3} alt="24/7 Support" />
            <Group>
              <CardTitle>24/7 Technical Support</CardTitle>
              <CardDesc>
                We’re always just a call away — for emergencies, routine checks,
                or spare parts delivery, day or night.
              </CardDesc>
            </Group>
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
  max-width: 500px;
  margin: 0 auto 1rem auto;
  word-break: break-word;
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
  @media (max-width: ${breakpoints.mobileS}) {
    font-size: 1.4rem;
  }
`;

const SubText = styled.p`
  max-width: 500px;
  margin: 0 auto 2rem auto;
  font-size: 0.9rem;
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
  width: 350px;
  text-align: left;

  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  background-color: ${Colors.lightCream};
`;
const Group = styled.div`
  text-align: left;
  padding: 0.5rem;
  background-color: ${Colors.lightCream};
`;

const CardImage = styled.img`
  // width: 80px;
  max-width: 100%;
  height: auto;
  object-fit: contain;
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  color: ${Colors.black};
  margin: 0.5rem;
`;

const CardDesc = styled.p`
  font-size: 0.95rem;
  color: ${Colors.gray};
  line-height: 1.5;
  margin: 0.5rem;
`;
