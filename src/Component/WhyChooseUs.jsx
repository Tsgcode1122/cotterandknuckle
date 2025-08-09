import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import CountUp from "react-countup";

import { breakpoints } from "../FixedComponent/BreakPoints";
import { Colors } from "../Colors/ColorComponent";
import SectionDiv from "../FixedComponent/SectionDiv";
import img1 from "../Images/w1.png";
import img2 from "../Images/w2.png";
import img3 from "../Images/w3.png";
import img4 from "../Images/w4.png";
const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Container ref={sectionRef}>
      <SectionDiv>
        <StatsGrid>
          <StatCard>
            <IconImage src={img1} />
            <Number>
              {isVisible && (
                <CountUp start={0} end={2.5} duration={12} decimals={1} />
              )}
              k
            </Number>

            <Label>Satisfied Customers</Label>
          </StatCard>
          <StatCard>
            <IconImage src={img2} />
            <Number>
              {isVisible && <CountUp start={0} end={100} duration={10} />}+
            </Number>
            <Label>Pro Advantages</Label>
          </StatCard>
          <StatCard>
            <IconImage src={img3} />
            <Number>
              {isVisible && <CountUp start={0} end={10} duration={20} />}k
            </Number>
            <Label>Diesel Generator Sold</Label>
          </StatCard>
          <StatCard>
            <IconImage src={img4} />
            <Number>
              {isVisible && (
                <CountUp start={0} end={99.9} duration={10} decimals={1} />
              )}
              %
            </Number>
            <Label>Successful Delivery</Label>
          </StatCard>
        </StatsGrid>
      </SectionDiv>
    </Container>
  );
};

export default WhyChooseUs;

const Container = styled.div`
  text-align: center;
  background: ${Colors.lightBlue};
  width: 100%;
  margin-bottom: 2rem;
`;
const IconImage = styled.img`
  width: 60px;
  height: 60px;

  object-fit: cover;
  margin-bottom: 0.6rem;
`;
const StatsGrid = styled.div`
  @media screen and (max-width: 320px) {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
  border-radius: 20px;
  justify-content: center;
  gap: 20px;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding: 10px 0;
  justify-content: center;
  align-items: center;
  @media (min-width: ${breakpoints.x}) {
  }
  @media (min-width: ${breakpoints.m}) {
  }

  @media (min-width: ${breakpoints.lg}) {
    gap: 30px;
  }
`;

const StatCard = styled.div`
  padding: 2px;

  @media (min-width: ${breakpoints.lg}) {
    padding: 10px;
  }
  text-align: center;
`;

const Number = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: ${Colors.blue};
  margin: 0;
  @media (min-width: ${breakpoints.md}) {
    font-size: 30px;
  }

  @media (min-width: ${breakpoints.lg}) {
    font-size: 36px;
  }
`;

const Label = styled.p`
  font-size: 14px;
  margin: 5px 0 0 0;
  font-weight: 300;
  color: ${Colors.gray};
  @media (min-width: ${breakpoints.md}) {
    font-size: 16px;
  }

  @media (min-width: ${breakpoints.lg}) {
    font-size: 18px;
  }
`;
