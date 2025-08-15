import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

// Replace with your real image imports
import Img1 from "../Images/hero1.png";
import Img2 from "../Images/hero2.png";
import Img3 from "../Images/hero3.png";
import { Colors } from "../Colors/ColorComponent";
import { breakpoints } from "../FixedComponent/BreakPoints";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    image: Img1,
    text: "Nigeria's Trusted Experts in Power Solutions",
  },
  {
    id: 2,
    image: Img2,
    text: "Reliable, Durable, and Trusted Brands",
  },
  {
    id: 3,
    image: Img3,
    text: "Engineered Power you can Trust",
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <HeroWrapper>
      <AnimatePresence mode="wait">
        <SlideImage
          key={slides[index].id}
          $background={slides[index].image}
          initial={{ opacity: 0.9 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 0.2,

            type: "tween",
            stiffness: 120,
            opacity: { duration: 1, ease: "easeInOut" },
          }}
        >
          <Overlay>
            <Text
              key={slides[index].text}
              initial={{ opacity: 0, scale: 1.15 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{
                type: "tween",
                stiffness: 120,
                opacity: { duration: 0.5 },
                scale: { duration: 0.5 },
              }}
            >
              {slides[index].text}
            </Text>
            <CTAWrapper>
              <PrimaryCTA to="/inquiry">Request Service</PrimaryCTA>
              <SecondaryCTA to="/services">Explore Services</SecondaryCTA>
            </CTAWrapper>
          </Overlay>
        </SlideImage>
      </AnimatePresence>
    </HeroWrapper>
  );
};

export default HeroSection;

// ---------------- STYLING ----------------

const HeroWrapper = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;
  overflow: hidden;
  @media (max-width: ${breakpoints.mobileS}) {
    height: 70vh;
  }

  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`;

const SlideImage = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${(props) => props.$background});
  background-size: cover;
  background-position: center;
  @media (max-width: ${breakpoints.mobileS}) {
    // background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 70vh;
  }

  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background: rgba(255, 255, 255, 0.3);
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  @media (max-width: ${breakpoints.mobileS}) {
    height: 70vh;
  }

  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`;

const Text = styled.h1`
  font-size: 3.8rem;
  color: ${Colors.white};
  max-width: 800px;
  line-height: 1.3;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: ${breakpoints.mobileS}) {
    font-size: 2.2rem;
    max-width: 600px;
    padding: 0 2rem;
  }
`;

const CTAWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  @media (max-width: ${breakpoints.mobileS}) {
    gap: 0.6rem;
  }
`;

const PrimaryCTA = styled(Link)`
  display: inline-block;
  background: ${Colors.primaryBlue};
  color: ${Colors.white};
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s;

  &:hover {
    background-color: ${Colors.deepBlue};
    box-shadow: 0 4px 24px 0 rgba(0, 123, 255, 0.18);
    transform: scale(1.05);
  }
  @media (max-width: ${breakpoints.mobileS}) {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 500;
  }
`;

const SecondaryCTA = styled(Link)`
  display: inline-block;
  background: transparent;
  color: ${Colors.white};
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border: 1.5px solid ${Colors.primaryBlue};
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(1px);
  background: rgba(0, 0, 0, 0.2);
  @media (max-width: ${breakpoints.mobileS}) {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    border: 1.5px solid ${Colors.white};
  }
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    // color: ${Colors.primaryBlue};
    border-color: ${Colors.brightBlue};
    box-shadow: 0 2px 12px 0 rgba(0, 123, 255, 0.1);
    transform: scale(1.04);
  }
`;
