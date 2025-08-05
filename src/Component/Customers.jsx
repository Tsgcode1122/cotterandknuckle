import React, { useState } from "react";
import styled from "styled-components";
import img1 from "../Images/d1.png";
import img2 from "../Images/customer.png";
import img3 from "../Images/d4.png";
import { Colors } from "../Colors/ColorComponent";
import SectionDiv from "../FixedComponent/SectionDiv";

const customerData = [
  {
    id: 1,
    name: "Mrs. Ijeoma N.",
    company: "Estate Head Manager",
    image: img1,
    testimonial:
      "Cotter & Knuckle installed our backup generator in just 3 days, and it’s been running smoothly ever since. Their team is reliable and very professional. No regrets!",
  },
  {
    id: 2,
    name: "John Smith",
    company: "PowerGrid Co.",
    image: img2,
    testimonial:
      "Cotter & Knuckle installed our backup generator in just 3 days, and it’s been running smoothly ever since. Their team is reliable and very professional. No regrets!",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    company: "EcoEnergy Inc.",
    image: img3,
    testimonial:
      "Cotter & Knuckle installed our backup generator in just 3 days, and it’s been running smoothly ever since. Their team is reliable and very professional. No regrets!",
  },
];

const Customers = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Middle one is active by default

  return (
    <SectionDiv>
      <Wrapper>
        <Wrapper>
          <Label>CUSTOMERS</Label>
          <MainHeading>Proof That We Deliver</MainHeading>
        </Wrapper>
        <CardContainer>
          {customerData.map((customer, index) => (
            <Card
              key={customer.id}
              onMouseEnter={() => setActiveIndex(index)}
              isActive={activeIndex === index}
            >
              {activeIndex === index && (
                <CustomerImage src={customer.image} alt={customer.name} />
              )}
              <Content>
                <Testimonial isActive={activeIndex === index}>
                  "{customer.testimonial}"
                </Testimonial>
                <Name>{customer.name}</Name>
                <Company>{customer.company}</Company>
              </Content>
            </Card>
          ))}
        </CardContainer>
      </Wrapper>
    </SectionDiv>
  );
};

export default Customers;
const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Label = styled.p`
  font-size: 0.7rem;
  color: ${Colors.purple};
  font-weight: 600;
  margin-bottom: 0.5rem;
  background: ${Colors.lightCream};
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 10px;
`;

const MainHeading = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: ${Colors.black};
  margin: 0 auto 0.3rem;
  max-width: 450px;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;

  flex-wrap: wrap;
`;

const Card = styled.div`
  background: ${({ isActive }) =>
    isActive ? ` ${Colors.primaryBlue}` : `${Colors.lightCream}`};
  border-radius: 10px;
  color: ${({ isActive }) =>
    isActive ? ` ${Colors.white}` : `${Colors.black}`} !important;
  border-radius: 10px;
  box-shadow: ${({ isActive }) =>
    isActive ? "0 8px 20px rgba(0,0,0,0.1)" : "none"};
  transition: all 0.3s ease;
  padding: 1rem;
  overflow: hidden;
  width: 280px;
  min-height: 250px;
  max-height: ${({ isActive }) => (isActive ? ` 800px` : `500px`)};
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover {
    border-color: ${Colors.primaryBlue};
  }
`;

const CustomerImage = styled.img`
  width: 100%;
  height: 130px;
  border-radius: 5px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const Content = styled.div`
  text-align: left;
`;

const Testimonial = styled.p`
  font-style: italic;

  font-size: 0.95rem;
  margin-bottom: ${({ isActive }) => (isActive ? ` 1rem` : `2rem`)};
`;

const Name = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 0.5rem 0 0.2rem;
`;

const Company = styled.p`
  font-size: 0.85rem;

  margin: 0;
`;
