import React from "react";
import styled from "styled-components";

import { FaCheckCircle } from "react-icons/fa";

import SectionDiv from "../FixedComponent/SectionDiv";
import { Colors } from "../Colors/ColorComponent";
import About1 from "../Images/about1.png";
import About2 from "../Images/about2.png";
import Icon1 from "../Images/f1.png";
import Icon2 from "../Images/f2.png";
import Icon3 from "../Images/f3.png";
import Icon4 from "../Images/f4.png";
import Icon5 from "../Images/f5.png";
import Icon6 from "../Images/f6.png";
const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 12px;
`;

const Label = styled.p`
  font-weight: 600;
  color: ${Colors.purple};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  color: ${Colors.black};
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  color: ${Colors.gray};
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ServiceItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: ${Colors.black};
  background: ${Colors.lightBlue};
  padding: 0.75rem 1rem;
  border-radius: 8px;
`;

const AimList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AimItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 1rem;
  color: ${Colors.black};
`;

const AboutUs = () => {
  return (
    <SectionDiv>
      <AboutContainer>
        <Section>
          <Image src={About1} alt="Cotter & Knuckle Team" />
          <div>
            <Label>Our Story</Label>
            <Title>Powering Trust Since 2007</Title>
            <Paragraph>
              Cotter & Knuckle Engineering Limited is a leading dealer of power
              generation systems based in Lagos, Western Nigeria. We deliver
              fast, reliable, and proven energy solutions to corporate, private,
              governmental, and non-governmental clients across Nigeria and
              beyond. Founded in January 2007, we specialize in:
            </Paragraph>
            <ServiceList>
              <ServiceItem>
                <img src={Icon1} alt="Power Generator Icon" />
                Power generator sales, installation, repair, and service
              </ServiceItem>
              <ServiceItem>
                <img src={Icon2} alt="Power Generator Icon" /> ATS systems
                (sales, installation, troubleshooting)
              </ServiceItem>
              <ServiceItem>
                <img src={Icon3} alt="Power Generator Icon" /> Switchgear and
                changeover panel solutions
              </ServiceItem>
              <ServiceItem>
                <img src={Icon4} alt="Power Generator Icon" />
                Electrical wiring, and mechanical diagnostics
              </ServiceItem>
              <ServiceItem>
                <img src={Icon5} alt="Power Generator Icon" /> Deep Sea
                Electronics models: 7210, 6110, e.t.c
              </ServiceItem>
              <ServiceItem>
                <img src={Icon6} alt="Power Generator Icon" /> Power Wizard
                panels such as 1.0, 1.1, etc.
              </ServiceItem>
            </ServiceList>
          </div>
        </Section>

        <Section>
          <div>
            <Label>Our Aims</Label>
            <Title>What Drives Us Forward</Title>
            <AimList>
              <AimItem>
                <FaCheckCircle color={Colors.yellow} /> Rank among the top 10
                Electrical & Mechanical Engineering Companies in Nigeria
              </AimItem>
              <AimItem>
                <FaCheckCircle color={Colors.yellow} /> Elevate engineering
                standards nationwide
              </AimItem>
              <AimItem>
                <FaCheckCircle color={Colors.yellow} /> Improve energy access
                and reliability in Nigeria and across Africa
              </AimItem>
              <AimItem>
                <FaCheckCircle color={Colors.yellow} /> Provide solutions
                trusted by all socioeconomic groups
              </AimItem>
              <AimItem>
                <FaCheckCircle color={Colors.yellow} /> Bridge the gap between
                underserved and affluent communities in energy access
              </AimItem>
            </AimList>
          </div>
          <Image src={About2} alt="Cotter & Knuckle Client" />
        </Section>
      </AboutContainer>
    </SectionDiv>
  );
};

export default AboutUs;
