import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { UpOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import SectionDiv from "../FixedComponent/SectionDiv";
import { Colors } from "../Colors/ColorComponent";
import { HiArrowSmallRight, HiArrowSmallLeft } from "react-icons/hi2";
import img from "../Images/d1.png";
import img2 from "../Images/d2.png";
import img3 from "../Images/trans.png";
import img4 from "../Images/hero2.png";
import img5 from "../Images/d5.png";
import img6 from "../Images/d4.png";
import { breakpoints } from "../FixedComponent/BreakPoints";
import { Link } from "react-router-dom";
import SwipeYComponent from "../Animation/SwipeYComponent";

const Images = [
  {
    id: 1,
    img: img,
    title: "DSE Control Systems",
    desc: "Custom-built panels for safe switching, load distribution, and uninterrupted energy flow.",
  },
  {
    id: 2,
    img: img2,
    title: " Power Audit & Optimization",
    desc: "We analyze your energy usage and help reduce waste, cost, and overload risks.",
  },
  {
    id: 3,
    img: img3,
    title: "Transformer Sales/Installation",
    desc: "We supply and install high-performance transformers for homes, estates, offices, and industrial facilities. ",
  },
  {
    id: 4,
    img: img5,
    title: "Air Conditioning Installation",
    desc: "We supply and install high-performance air conditioning systems for homes, estates, offices, and industrial facilities.",
  },
  {
    id: 5,
    img: img4,
    title: "Spare Parts & Accessories",
    desc: "Supply of genuine genrator spare parts, batteries, filters, ATS switches, and more.",
  },
  {
    id: 6,
    img: img6,
    title: "All Power Generator Set Installations",
    desc: "We supply and install trusted genrator brands of all sizes and capacities -- for residential, commercial, and industrial use.",
  },
];

const Offer = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const scrollLeft = sliderRef.current.scrollLeft;
        const cardWidth = 320; // Approx width of one ImageCard (match styled component)
        const index = Math.round(scrollLeft / cardWidth);
        setCurrentIndex(index);
      }
    };

    const slider = sliderRef.current;
    slider?.addEventListener("scroll", handleScroll);
    return () => slider?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <SectionDiv>
        <Wrapper>
          <Label>WHAT COTTER & KNUCKLE OFFERS</Label>
          <MainHeading>End-to-End Power Services, No Interruptions</MainHeading>
          <SwipeYComponent direction="bottom-to-top">
            <SubText>
              Delivering dependable generators, control panels, and servicing —
              wherever energy matters most.
            </SubText>
          </SwipeYComponent>
        </Wrapper>
      </SectionDiv>

      <SliderContainer>
        <ImageSlider ref={sliderRef}>
          {Images.map((item, index) => (
            <ImageCard
              key={index}
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <TopRightIcon to="/products">
                <HiArrowSmallRight />
              </TopRightIcon>
              <BottomOverlay>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </BottomOverlay>
            </ImageCard>
          ))}
        </ImageSlider>
        <Buttom>
          <Line
            $progress={
              currentIndex >= Images.length - 1
                ? 100
                : ((currentIndex + 1) / Images.length) * 150
            }
          />
          <ControlButtons>
            <ArrowBtn onClick={scrollLeft} disabled={currentIndex === 0}>
              <HiArrowSmallLeft />
            </ArrowBtn>
            <ArrowBtn
              onClick={scrollRight}
              disabled={currentIndex >= Images.length - 1}
            >
              <HiArrowSmallRight />
            </ArrowBtn>
          </ControlButtons>
        </Buttom>
      </SliderContainer>
    </>
  );
};

export default Offer;

const Wrapper = styled.div`
  text-align: center;
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
  @media (max-width: ${breakpoints.mobileL}) {
    font-size: 1.4rem;
  }
`;

const SubText = styled.p`
  font-size: 0.9rem;
  color: ${Colors.gray};
  max-width: 400px;
  margin: 0 auto 2rem;
`;

const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  margin: 0 0 0 auto;
  @media (max-width: ${breakpoints.mobileM}) {
    margin-top: -2rem;
  }
`;

const ImageSlider = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 1rem;
  margin-left: 3rem;
  padding-bottom: 1rem;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: ${breakpoints.mobileL}) {
    margin-left: 1rem;
  }
`;

const ImageCard = styled.div`
  flex: 0 0 auto;
  width: 380px;
  height: 300px;

  background-size: cover;
  background-position: center;
  border-radius: 12px;
  position: relative;
  scroll-snap-align: start;
  transition: transform 0.3s ease-in-out;
  h &:hover {
    transform: scale(1.03);
  }

  @media (max-width: ${breakpoints.mobileM}) {
    width: 320px;

    height: 350px;
  }
`;

const TopRightIcon = styled(Link)`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 30px;
  width: 30px;
  background: ${Colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  svg {
    font-size: 18px;
    transform: rotate(-45deg);
    color: ${Colors.primaryBlue};
  }
`;

const BottomOverlay = styled.div`
  position: absolute;
  bottom: 0;
  //   left: 15px;
  background: rgba(255, 255, 255, 0);
  padding: 10px 12px;
  text-align: left;
  width: calc(100% - 30px);
  color: ${Colors.white};

  h2 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
  }

  p {
    margin: 5px 0 0 0;
    font-size: 14px;
    font-weight: 300;
  }
`;

const ArrowBtn = styled.button`
  background: ${Colors.softBlue};
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    font-size: 20px;
    color: ${Colors.black};
  }

  &:disabled {
    // opacity: 0.5;
    cursor: not-allowed;
    background: none;
  }
`;
const Buttom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem auto 0;
  // width: 100%;
  margin-left: 3rem;
  margin-right: 3rem;
  @media (max-width: ${breakpoints.mobileL}) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const Line = styled.div`
  flex: 1;
  height: 6px;
  background: ${Colors.gray};
  border-radius: 4px;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ $progress }) => $progress}%;
    background: ${Colors.primaryBlue};
    border-radius: 4px;
    transition: width 0.4s ease-in-out;
  }
`;

const ControlButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;
