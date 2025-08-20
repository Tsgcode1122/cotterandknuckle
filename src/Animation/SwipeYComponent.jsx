import React from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

// Styled component for the container
const Container = styled.div`
  overflow: hidden;
`;

const SwipeYComponent = ({ direction, children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: {
      opacity: 0.8,
      y:
        direction === "bottom-to-top"
          ? 20
          : direction === "top-to-bottom"
          ? -50
          : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 12,
        duration: 0.8,
      },
    },
  };

  return (
    <Container
      as={motion.div}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </Container>
  );
};

export default SwipeYComponent;
