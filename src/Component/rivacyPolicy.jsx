import React, { useEffect } from "react";
import SectionDiv from "../FixedComponent/SectionDiv";
import styled from "styled-components";
import { breakpoints } from "../FixedComponent/BreakPoints";
import { Colors } from "../Colors/ColorComponent";

const privacyData = [
  {
    title: "Information We Collect",
    content:
      "We may collect personal details such as your name, email address, phone number, and project information when you contact us, request a quote, or use our services.",
  },
  {
    title: "How We Use Your Information",
    content:
      "Your information is used to provide services, respond to inquiries, prepare quotations, and improve customer experience. We may also use your contact details for updates regarding ongoing projects or important notifications.",
  },
  {
    title: "Data Security",
    content:
      "We implement industry-standard measures to protect your information from unauthorized access, alteration, or disclosure. However, no method of electronic storage or transmission is 100% secure.",
  },
  {
    title: "Third-Party Sharing",
    content:
      "Cotter & Knuckle Engineering Limited does not sell or trade your personal information. We may share data only with trusted third parties (such as suppliers or subcontractors) when necessary to complete a project or comply with legal obligations.",
  },
  {
    title: "Cookies and Tracking",
    content:
      "Our website may use cookies and similar technologies to improve user experience and analyze traffic. You can choose to disable cookies in your browser settings, but some features may not function properly.",
  },
  {
    title: "Your Rights",
    content:
      "You have the right to request access to, correction of, or deletion of your personal data. To exercise these rights, please contact us directly.",
  },
  {
    title: "Changes to Privacy Policy",
    content:
      "We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements. We encourage you to review this page regularly.",
  },
];

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SectionDiv>
      <Wrapper>
        <Label>Privacy Policy</Label>

        {privacyData.map((policy, index) => (
          <TermSection key={index}>
            <h3>{policy.title}</h3>
            <p>{policy.content}</p>
          </TermSection>
        ))}
        <CTA>
          For privacy-related inquiries, please{" "}
          <a href="/contact-us">contact us</a>.
        </CTA>
      </Wrapper>
    </SectionDiv>
  );
};

export default PrivacyPolicy;

const Label = styled.p`
  font-size: 0.7rem;
  color: ${Colors.purple} !important;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  background: ${Colors.lightCream};
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 10px;
  margin-bottom: 2rem;
`;

const MainHeading = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: ${Colors.black};
  margin: 0 auto 2rem auto;
  word-break: break-word;
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
  @media (max-width: ${breakpoints.mobileL}) {
    font-size: 1.4rem;
  }
`;

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

const TermSection = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid ${Colors.lightGray};
  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    color: ${Colors.black};
    margin-bottom: 0.5rem;
  }

  p {
    color: #555;
    line-height: 1.6;
  }
`;

const CTA = styled.p`
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 2rem;

  a {
    color: ${Colors.brightBlue};
    text-decoration: underline;
  }
`;
