import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Colors } from "../Colors/ColorComponent";
import { breakpoints } from "../FixedComponent/BreakPoints";
import SectionDiv from "../FixedComponent/SectionDiv";

const Faqs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const [selectedFaq, setSelectedFaq] = useState(null);

  const toggleFaq = (index) => {
    if (selectedFaq === index) {
      setSelectedFaq(null);
    } else {
      setSelectedFaq(index);
    }
  };

  const faqs = [
    {
      question:
        "What services does Cotter & Knuckle Engineering Limited provide?",
      answer:
        "We specialize in power generator sales, installation, repair, and service; ATS systems; switchgear and changeover panel solutions; electrical wiring; mechanical diagnostics; and advanced control panels such as Deep Sea Electronics and Power Wizard models.",
    },
    {
      question: "Do you handle both sales and servicing of power generators?",
      answer:
        "Yes, we provide complete solutions including sales, installation, routine maintenance, and repairs for power generators of various sizes and capacities.",
    },
    {
      question: "What are ATS systems, and why are they important?",
      answer:
        "ATS (Automatic Transfer Switch) systems automatically switch your power supply to a backup generator during an outage, ensuring uninterrupted power supply without manual intervention.",
    },
    {
      question: "Can you design and install switchgear and changeover panels?",
      answer:
        "Yes, our team provides custom switchgear and changeover panel solutions tailored to meet industrial, commercial, and residential power distribution needs.",
    },
    {
      question: "Do you provide electrical wiring and diagnostics?",
      answer:
        "Absolutely. We handle complete electrical wiring projects as well as fault diagnostics for both residential and commercial facilities.",
    },
    {
      question: "What are mechanical diagnostics in generators?",
      answer:
        "Mechanical diagnostics involve identifying faults in generator components such as the engine, cooling system, or fuel system, and ensuring they operate efficiently.",
    },
    {
      question: "Do you support Deep Sea Electronics (DSE) controllers?",
      answer:
        "Yes, we install, configure, and troubleshoot DSE models such as 7210, 6110, and many others.",
    },
    {
      question: "Do you also work with Power Wizard panels?",
      answer:
        "Yes, we handle Power Wizard models such as 1.0 and 1.1, offering configuration, maintenance, and troubleshooting services.",
    },
    {
      question: "What is the recommended maintenance schedule for a generator?",
      answer:
        "It is recommended to perform preventive maintenance every 250 hours of operation or quarterly, whichever comes first. Major servicing is usually carried out annually.",
    },
    {
      question: "Can you provide solutions outside Lagos and Nigeria?",
      answer:
        "Yes, while we are based in Lagos, we serve clients across Nigeria and beyond, delivering reliable energy solutions to corporate, governmental, and private clients.",
    },
  ];

  return (
    <>
      <SectionDiv>
        <Content>
          <Wrapper>
            <Label>Faqs</Label>

            {faqs.map((faq, index) => (
              <FaqItem key={index}>
                <Question onClick={() => toggleFaq(index)}>
                  {faq.question}
                  <IconWrapper>
                    {selectedFaq === index ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </IconWrapper>
                </Question>
                <Answer
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: selectedFaq === index ? "auto" : 0,
                    opacity: selectedFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{faq.answer}</p>
                </Answer>
              </FaqItem>
            ))}
          </Wrapper>
        </Content>
      </SectionDiv>
    </>
  );
};

export default Faqs;
const Content = styled.div`
  @media screen and (max-width: 320px) {
    padding: 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 1.3rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 1.5rem;
  }
`;
const FaqItem = styled.div`
  margin-bottom: 1rem;
`;

const Question = styled.div`
  padding: 1rem;

  color: black;
  font-weight: 500;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  background: ${Colors.lightGray};
  justify-content: space-between;
  text-align: left;
  @media screen and (max-width: 320px) {
    font-size: 0.9rem;
    padding: 0.8rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1rem;

    padding: 0.9rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 1rem;
    font-size: 1rem;
  }
`;

const Answer = styled(motion.div)`
  overflow: hidden;
  padding: 0 1rem;
  text-align: left;
  /* background: ${Colors.lightCream}; */
  border-radius: 4px;
  color: ${Colors.coolBlack};
  p {
    margin: 0;
    padding: 1rem 0;
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
`;

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
`;

const Wrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  /* height: 70vh; */
  h2 {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
    color: #555;
  }
`;
