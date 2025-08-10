import React from "react";
import styled from "styled-components";
import { CheckOutlined } from "@ant-design/icons";

import Step1 from "../Images/how1.png";
import Step2 from "../Images/how2.png";
import Step3 from "../Images/how3.png";
import SectionDiv from "../FixedComponent/SectionDiv";
import { Colors, Shadows } from "../Colors/ColorComponent";
import { breakpoints } from "../FixedComponent/BreakPoints";

const Section = styled.section`
  //   background: ${Colors.lightCream};
  max-width: 1200px;
  @media (max-width: ${breakpoints.mobileM}) {
    margin-top: -3rem;
  }
`;

const Heading = styled.h3`
  font-size: 2rem;
  color: ${Colors.black};
  margin-bottom: 1rem;
  font-weight: 500;
  @media (max-width: ${breakpoints.mobileM}) {
    font-size: 1.6rem;
  }
`;

const Subheading = styled.p`
  color: ${Colors.black};
  font-size: 1rem;
  margin-bottom: 3rem;
  @media (max-width: ${breakpoints.mobileM}) {
    font-size: 0.9rem;
  }
`;

const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

const StepTop = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
  }
`;
const Step = styled.div`
  display: grid;
  grid-template-columns: 5.5fr 4.5fr;
  gap: 2rem;
  @media (max-width: ${breakpoints.mobileM}) {
    grid-template-columns: 1fr;
  }
`;

const StepContent = styled.div`
  margin-top: -1rem;
`;

const StepImage = styled.img`
  border-radius: 10px;
  width: 100%;
  max-width: 500px;
  max-height: 250px;
  object-fit: cover;
  @media (max-width: ${breakpoints.mobileM}) {
    margin-top: -2rem;
  }
`;

const StepNumber = styled.p`
  background: ${Colors.deepBlue};
  color: ${Colors.white};
  font-size: 1.2rem;
  font-weight: bold;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  text-align: center;
  line-height: 36px;
`;

const StepTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 400;
  color: ${Colors.black};
`;

const StepDescription = styled.p`
  font-size: 1rem;
  color: ${Colors.gray};
  margin-bottom: 1rem;
  margin-top: 0rem;
  @media (max-width: ${breakpoints.mobileM}) {
    margin-top: -0.2rem;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.75rem;
  color: ${Colors.black};
  @media (max-width: ${breakpoints.mobileM}) {
    margin-bottom: 1.25rem;
  }
  svg {
    color: ${Colors.yellow};
    // margin-top: 3px;
  }
`;

const RequestService = () => {
  return (
    <SectionDiv>
      <Section>
        <Heading>How CotterandKnuckle Works</Heading>
        <Subheading>
          At CotterandKnuckle Engineering Ltd, we’ve simplified the power
          solution process into three seamless steps to ensure clarity,
          confidence, and continuous support for every client. Here's how it
          works:
        </Subheading>

        <StepWrapper>
          {/* Step 1 */}
          <Step>
            <StepContent>
              <StepTop>
                <StepNumber>1</StepNumber>
                <StepTitle>Submit Your Request</StepTitle>
              </StepTop>
              <StepDescription>
                Whether you need a new generator, installation, maintenance, or
                repair, the process begins with you reaching out. Fill out our
                online service form or call our 24/7 helpline, and our support
                team will immediately respond.
              </StepDescription>
              <List>
                <ListItem>
                  <CheckOutlined /> Online Request Form
                </ListItem>
                <ListItem>
                  <CheckOutlined /> Call 24/7 Support
                </ListItem>
                <ListItem>
                  <CheckOutlined /> Quick Response Guarantee
                </ListItem>
              </List>
            </StepContent>
            <StepImage src={Step1} alt="Submit Request" />
          </Step>

          {/* Step 2 */}
          <Step>
            <StepContent>
              <StepTop>
                <StepNumber>2</StepNumber>
                <StepTitle>Expert Site Assessment</StepTitle>
              </StepTop>
              <StepDescription>
                After we receive your request, we dispatch a certified power
                engineer to your location for an on-site evaluation.
              </StepDescription>
              <List>
                <ListItem>
                  <CheckOutlined /> Understanding your power needs (load
                  calculations, environment)
                </ListItem>
                <ListItem>
                  <CheckOutlined /> Recommending the right equipment and setup
                </ListItem>
                <ListItem>
                  <CheckOutlined /> Planning cable layouts, ATS integration,
                  soundproofing, and security
                </ListItem>
              </List>
            </StepContent>
            <StepImage src={Step2} alt="Site Assessment" />
          </Step>

          {/* Step 3 */}
          <Step>
            <StepContent>
              <StepTop>
                <StepNumber>3</StepNumber>
                <StepTitle>Installation & Continuous Support</StepTitle>
              </StepTop>
              <StepDescription>
                Once you approve our recommendation, our technicians swing into
                action. We handle all aspects of setup:
              </StepDescription>
              <List>
                <ListItem>
                  <CheckOutlined /> On-time Equipment delivery
                </ListItem>
                <ListItem>
                  <CheckOutlined /> 24/7 emergency support
                </ListItem>
                <ListItem>
                  <CheckOutlined /> Remote monitoring (on request)
                </ListItem>
              </List>
            </StepContent>
            <StepImage src={Step3} alt="Installation Support" />
          </Step>
        </StepWrapper>
      </Section>
    </SectionDiv>
  );
};

export default RequestService;
