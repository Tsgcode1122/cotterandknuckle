import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { FaTools, FaSnowflake } from "react-icons/fa";
import { GiAutoRepair, GiGearStickPattern } from "react-icons/gi";
import generator from "../Images/generator.png";
import maintenance from "../Images/maintenance.png";
import transformer from "../Images/transformer.png";
import ac from "../Images/ac.png";
import spare from "../Images/spare.png";
import { Colors } from "../Colors/ColorComponent";
import SectionDiv from "../FixedComponent/SectionDiv";
import { FiArrowLeft } from "react-icons/fi";
import RequestService from "./RequestService";
import { breakpoints } from "../FixedComponent/BreakPoints";

const services = [
  {
    icon: generator,
    title: "Generator Sales & Rentals",
    description:
      "High-quality generators from brands like KOHLER SDMO, available for sale or hire—covering residential, corporate, and industrial needs.",
  },
  {
    icon: maintenance,
    title: "Maintenance & Repairs",
    description:
      "Preventive and corrective maintenance, diagnostics, engine overhauls, and troubleshooting across brands like John Deere, Volvo, Perkins, Cummins etc.",
  },
  {
    icon: spare,
    title: "Spare Parts Supply",
    description:
      "Genuine OEM spare parts, filters, batteries, belts, alternators, transformers and consumables to keep systems running at peak performance.",
  },
  {
    icon: transformer,
    title: "Transformer Supply & Service",
    description:
      "Supply, setup, and servicing of original transformers for reliable power distribution, especially in larger facilities and infrastructure projects.",
  },
  {
    icon: ac,
    title: "Air Conditioning Installation & Maintenance",
    description:
      "Keep your control rooms and offices cool and efficient. Reliable installation, maintenance, and repairs.",
  },
];

const OurServices = () => {
  const navigate = useNavigate();
  return (
    <>
      <SectionDiv>
        <Top>
          <BackArrow onClick={() => navigate(-1)}>
            <FiArrowLeft size={20} />
          </BackArrow>
          <Title>Our Services</Title>
          <div></div>
        </Top>
        <OurServicesContainer>
          <Grid>
            {services.map((service, index) => (
              <Card key={index}>
                <img
                  src={service.icon}
                  alt={service.title}
                  style={{
                    width: "80px",
                    height: "auto",
                    marginBottom: "1rem",
                  }}
                />

                <CardTitle>{service.title}</CardTitle>
                <Description>{service.description}</Description>
                <OrderButton size="middle">Order now</OrderButton>
              </Card>
            ))}
          </Grid>
        </OurServicesContainer>
      </SectionDiv>
      <RequestService />
    </>
  );
};

export default OurServices;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const BackArrow = styled.div`
  cursor: pointer;

  color: ${Colors.black};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const OurServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: ${Colors.black};
  @media (max-width: ${breakpoints.mobileM}) {
    font-size: 1.6rem;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
`;

const Card = styled.div`
  background: #f9fafc;
  padding: 1rem;
  border-radius: 12px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  flex: 1 1 calc(25.333% - 1rem); // For first 3 cards

  @media (max-width: 900px) {
    flex: 1 1 100%;
  }

  // Style last 2 cards
  &:nth-child(4),
  &:nth-child(5) {
    // flex: 1 1 calc(40% - 1rem);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: ${Colors.black};
  margin: 0;
  font-weight: 500;
  @media (max-width: ${breakpoints.mobileM}) {
    font-size: 1.15rem;
  }
`;

const Description = styled.p`
  color: ${Colors.gray};
  font-size: 0.95rem;
  @media (max-width: ${breakpoints.mobileM}) {
    font-size: 0.85rem;
  }
`;

const OrderButton = styled(Button)`
  background-color: ${Colors.primaryBlue};
  color: ${Colors.white};
  border: none;
  align-self: flex-start;
  &:hover {
    background-color: ${Colors.deepBlue};
    color: ${Colors.white};
  }
`;
