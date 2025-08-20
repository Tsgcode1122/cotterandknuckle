import React, { useEffect } from "react";
import SectionDiv from "../FixedComponent/SectionDiv";
import styled from "styled-components";
import { Colors } from "../Colors/ColorComponent";
import { breakpoints } from "../FixedComponent/BreakPoints";

const JoinUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SectionDiv>
      <Wrapper>
        <Label>Join Our Team</Label>
        <MainHeading>
          Shape the Future with Cotter & Knuckle Engineering
        </MainHeading>
        <Intro>
          At <strong>Cotter & Knuckle Engineering</strong>, we’re always eager
          to connect with passionate individuals who are ready to make an impact
          in mechanical, electrical, and civil engineering projects. Even if
          there are no open positions at the moment, we want to hear from you.
        </Intro>

        <SubHeading>How to Apply</SubHeading>
        <Text>
          Please send your updated <strong>resume/CV</strong> along with a short
          cover letter highlighting your area of expertise and interest in
          joining our team. Make sure to include:
        </Text>
        <List>
          <li>✔ Full Name</li>
          <li>✔ Contact Information (Phone & Email)</li>
          <li>✔ Area of Expertise (Mechanical, Electrical, Civil, etc.)</li>
          <li>✔ Relevant Experience or Projects</li>
          <li>✔ Updated Resume/CV (PDF preferred)</li>
        </List>

        <SubHeading>Where to Send</SubHeading>
        <Email>
          📩 Please email your application to:{" "}
          <a href="mailto:careers@cotterandknuckleengineering.com">
            careers@cotterandknuckleengineering.com
          </a>
        </Email>

        <Closing>
          We’ll review your application and keep it on file for upcoming roles.
          Thank you for considering a career with us — we look forward to
          hearing from you!
        </Closing>
      </Wrapper>
    </SectionDiv>
  );
};

export default JoinUs;

// Styled Components
const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Label = styled.p`
  font-size: 0.75rem;
  color: ${Colors.purple};
  font-weight: 600;
  text-transform: uppercase;
  background: ${Colors.lightCream};
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const MainHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${Colors.black};
  text-align: left;
  margin-bottom: 1rem;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.2rem;
  }
`;

const SubHeading = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  text-align: left;
  color: ${Colors.black};
  margin: 1.5rem 0 0.8rem;
`;

const Intro = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
  text-align: left;
  line-height: 1.6;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #444;
  margin-bottom: 1rem;
  text-align: left;
`;

const List = styled.ul`
  /* margin-left: 0.5rem; */
  text-align: left;
  margin: 0;
  text-decoration: none;
  list-style: none;
  li {
    margin-bottom: 0.5rem;
    color: #333;
    margin: 0;
  }
`;

const Email = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  text-align: left;
  a {
    color: ${Colors.brightBlue};
    font-weight: bold;
    text-decoration: underline;
  }
`;

const Closing = styled.p`
  font-size: 1rem;
  text-align: left;
  color: #555;
  line-height: 1.6;
`;
