import React, { useEffect } from "react";
import SectionDiv from "../FixedComponent/SectionDiv";
import styled from "styled-components";
import { breakpoints } from "../FixedComponent/BreakPoints";
import { Colors } from "../Colors/ColorComponent";

const termsData = [
  {
    title: "Website Use",
    content:
      "By accessing and using our website, you agree to comply with all applicable laws and regulations. Unauthorized use of the site, including but not limited to hacking or distributing malicious software, is strictly prohibited.",
  },
  {
    title: "Services Provided",
    content:
      "Cotter & Knuckle Engineering Limited provides power generation solutions, installations, repairs, electrical wiring, and related engineering services. We reserve the right to update, modify, or discontinue services at our discretion.",
  },
  {
    title: "Pricing and Payment",
    content:
      "All pricing is provided in accordance with project requirements and may vary depending on specifications. Payments must be made through the approved channels stated in your invoice or agreement. Failure to make payments on time may lead to suspension of services.",
  },
  {
    title: "Quotations and Estimates",
    content:
      "All quotations are valid for a limited period, as stated in the quotation. Any changes to project scope or requirements may affect pricing and timelines.",
  },
  {
    title: "Liability",
    content:
      "While we ensure professional standards in all our services, Cotter & Knuckle Engineering Limited is not liable for indirect damages, delays caused by third-party suppliers, or circumstances beyond our control.",
  },
  {
    title: "Intellectual Property",
    content:
      "All content on this website, including logos, text, images, and designs, remain the property of Cotter & Knuckle Engineering Limited and may not be used without prior written consent.",
  },
  {
    title: "Changes to Terms",
    content:
      "We reserve the right to update these terms and conditions at any time. It is your responsibility to review this page periodically to stay informed of any changes.",
  },
];

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SectionDiv>
      <Wrapper>
        <Label>Terms & Conditions</Label>

        {termsData.map((term, index) => (
          <TermSection key={index}>
            <h3>{term.title}</h3>
            <p>{term.content}</p>
          </TermSection>
        ))}
        <CTA>
          For further inquiries, please <a href="/contact-us">contact us</a>.
        </CTA>
      </Wrapper>
    </SectionDiv>
  );
};

export default Terms;

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
  /* padding: 2rem 1rem; */
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
