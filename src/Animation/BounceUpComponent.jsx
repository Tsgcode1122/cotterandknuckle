import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import linePattern from "../Images/linnebg.png";
import { breakpoints } from "../FixedComponent/BreakPoints";

const Container = styled.div`
  background: url(${linePattern});
  display: grid;
  max-width: 800px;
  perspective: 1000px;
  gap: 20px;
  margin: 0 auto;
  padding: 80px 60px;

  @media screen and (max-width: 320px) {
    padding: 80px 0.8rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 80px 1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 80px 1.2rem;
  }

  justify-content: center;

  @media (min-width: ${breakpoints.sm}) {
    padding: 80px 60px;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }

  @media (min-width: ${breakpoints.m}) {
    grid-template-columns: 1fr 1fr;
    gap: 100px;
  }
`;

const BounceUpComponent = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [screenSize, setScreenSize] = useState(window.innerWidth);

  // Listen for screen size changes
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  // Dynamically adjust animation based on screen size
  const getChildVariants = () => {
    if (screenSize < 400) {
      return {
        hidden: { opacity: 1, y: 25, rotateZ: 3 },
        visible: {
          opacity: 1,
          y: 0,
          rotateZ: 0,
          transition: {
            type: "spring",
            stiffness: 20,
            damping: 10,
            duration: 1.2,
          },
        },
      };
    } else if (screenSize < 768) {
      return {
        hidden: { opacity: 1, y: 10, rotateZ: 6 },
        visible: {
          opacity: 1,
          y: 0,
          rotateZ: 0,
          transition: {
            type: "spring",
            stiffness: 25,
            damping: 6,
            duration: 1.5,
          },
        },
      };
    } else {
      return {
        hidden: { opacity: 1, y: 50, rotateZ: 2 },
        visible: {
          opacity: 1,
          y: 0,
          rotateZ: 0,
          transition: {
            type: "spring",
            stiffness: 50,
            damping: 10,
            duration: 0.8,
          },
        },
      };
    }
  };

  return (
    <Container
      as={motion.div}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={getChildVariants()}>
          {child}
        </motion.div>
      ))}
    </Container>
  );
};

export default BounceUpComponent;
