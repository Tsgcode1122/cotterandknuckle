import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CheckOutlined } from "@ant-design/icons";
import { FiArrowLeft } from "react-icons/fi";
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
import AboutImg from "../Images/AboutImg.png";
import AboutSmall from "../Images/aboutsmall.png";
import { breakpoints } from "../FixedComponent/BreakPoints";
import SwipeYComponent from "../Animation/SwipeYComponent";

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const Circle = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 0;
  img {
    max-width: 100%;
    height: auto;
    flex-shrink: 0; /* Prevent shrinking */
    object-fit: cover;
  }
  .Small {
    display: none;
  }
  @media (max-width: ${breakpoints.mobileM}) {
    .Big {
      display: none;
    }
    .Small {
      display: block;
    }
    padding: 0rem 0;
    margin: 0;
  }
`;
const BigImg = styled.img`
  max-width: 100% !important;
  height: auto !important;
  flex-shrink: 0; /* Prevent shrinking */
  object-fit: cover;
`;
const SmallImg = styled.img`
  max-width: 100% !important;
  height: auto !important;
`;
const SectionLast = styled.div`
  background: ${Colors.deepBlue};
  img {
    max-width: 100%;
    height: auto;
  }
`;
const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: ${breakpoints.mobileM}) {
    margin-top: -2rem;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 12px;
  max-height: 630px;
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
  @media (max-width: ${breakpoints.mobileM}) {
    display: none;
  }
`;
const Label1 = styled.p`
  display: none;
  @media (max-width: ${breakpoints.mobileM}) {
    font-size: 0.7rem;
    display: flex;
    align-self: center;
    color: purple;
    font-weight: 600;
    margin-bottom: 0rem;
    text-transform: uppercase;
    background: ${Colors.lightCream};

    padding: 0.3rem 0.8rem;
    border-radius: 10px;
  }
`;

const Title1 = styled.h2`
  font-size: 2.2rem;
  color: ${Colors.black};
  margin: 1rem 0;
  font-weight: 500;
  @media (max-width: ${breakpoints.mobileM}) {
    font-size: 1.6rem;
  }
`;
const Title = styled.h2`
  font-size: 2.2rem;
  color: ${Colors.black};
  margin: 1rem 0;
  font-weight: 500;
  @media (max-width: ${breakpoints.mobileM}) {
    font-size: 1.6rem;
    margin-top: 0.2rem;
  }
`;

const Paragraph = styled.p`
  color: ${Colors.gray};
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  @media (max-width: ${breakpoints.mobileM}) {
    font-size: 0.9rem;
  }
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
  font-size: 1.2rem;
  color: ${Colors.black};
  font-weight: 300;
  padding: 0.1rem 0rem;
  border-radius: 8px;
  @media (max-width: ${breakpoints.mobileM}) {
    font-size: 1rem;
  }
  img {
    max-width: 100%;
    height: 40px;
    @media (max-width: ${breakpoints.mobileM}) {
      height: 30px;
    }
  }
`;

const AimList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  svg {
    color: ${Colors.yellow};
    font-weight: 600;
    font-size: 1.2rem;
    margin-right: 0.5rem;
    @media (max-width: ${breakpoints.mobileM}) {
      font-size: 1rem;
    }
  }
`;

const AimItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 1rem;
  font-weight: 300;
  font-size: 1.2rem;
  color: ${Colors.black};
  @media (max-width: ${breakpoints.mobileM}) {
    font-size: 1rem;
  }
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${breakpoints.mobileM}) {
    justify-content: left;
    gap: 4rem;
  }
`;
const BackArrow = styled.div`
  cursor: pointer;

  color: ${Colors.black};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const navigate = useNavigate();
  return (
    <>
      <SectionDiv>
        <Top>
          <BackArrow onClick={() => navigate(-1)}>
            <FiArrowLeft size={20} />
          </BackArrow>
          <Title1>About Us</Title1>
          <div></div>
        </Top>
        <AboutContainer>
          <Label1>Our Story</Label1>
          <Section>
            <Image src={About1} alt="Cotter & Knuckle Team" />
            <div>
              <Label>Our Story</Label>
              <Title>Powering Trust Since 2007</Title>
              <SwipeYComponent direction="bottom-to-top">
                <Paragraph>
                  Cotter & Knuckle Engineering Limited is a leading dealer of
                  power generation systems based in Lagos, Western Nigeria. We
                  deliver fast, reliable, and proven energy solutions to
                  corporate, private, governmental, and non-governmental clients
                  across Nigeria and beyond. Founded in January 2007, we
                  specialize in:
                </Paragraph>
              </SwipeYComponent>
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
                <SwipeYComponent direction="bottom-to-top">
                  <AimItem>
                    <CheckOutlined /> Rank among the top 10 Electrical &
                    Mechanical Engineering Companies in Nigeria
                  </AimItem>
                </SwipeYComponent>

                <AimItem>
                  <CheckOutlined /> Elevate engineering standards nationwide
                </AimItem>
                <SwipeYComponent direction="bottom-to-top">
                  <AimItem>
                    <CheckOutlined /> Improve energy access and reliability in
                    Nigeria and across Africa
                  </AimItem>
                </SwipeYComponent>

                <AimItem>
                  <CheckOutlined /> Provide solutions trusted by all
                  socioeconomic groups
                </AimItem>
                <SwipeYComponent direction="bottom-to-top">
                  <AimItem>
                    <CheckOutlined /> Bridge the gap between underserved and
                    affluent communities in energy access
                  </AimItem>
                </SwipeYComponent>
              </AimList>
            </div>
            <Image src={About2} alt="Cotter & Knuckle Client" />
          </Section>
        </AboutContainer>
      </SectionDiv>
      <SectionLast>
        <SectionDiv>
          <Circle>
            <BigImg
              src={AboutImg}
              alt="Cotter & Knuckle Team"
              className="Big"
            />
            <SmallImg
              src={AboutSmall}
              alt="Cotter & Knuckle Team"
              className="Small"
            />
          </Circle>
        </SectionDiv>
      </SectionLast>
    </>
  );
};

export default AboutUs;
