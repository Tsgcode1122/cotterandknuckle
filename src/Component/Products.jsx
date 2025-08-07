import React, { useState } from "react";
import SectionDiv from "../FixedComponent/SectionDiv";
import styled from "styled-components";
import { Colors } from "../Colors/ColorComponent";
import { breakpoints } from "../FixedComponent/BreakPoints";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Button } from "antd";
import Img from "../Images/hero3.png";
const productsData = [
  {
    productCategory: "Generators",
    brands: [
      {
        image: Img,
        name: "Honda GX390",
        miniDescription: "6.5kVA petrol generator",
        shortWriteup: "Reliable power solution for home and small businesses.",
      },
      {
        image: Img,
        name: "Firman ECO10990ES",
        miniDescription: "8kVA key start generator",
        shortWriteup: "Durable generator with low fuel consumption.",
      },
      {
        image: Img,
        name: "Elemax SH7600EX",
        miniDescription: "7.6kVA silent generator",
        shortWriteup: "Great for residential and light commercial use.",
      },
      {
        image: Img,
        name: "Tiger TG950",
        miniDescription: "0.65kVA small generator",
        shortWriteup: "Affordable and ideal for light home usage.",
      },
    ],
  },
  {
    productCategory: "Spare Parts",
    brands: [
      {
        image: Img,
        name: "NGK Spark Plug",
        miniDescription: "High-performance spark plug",
        shortWriteup: "Ensures quick engine start and fuel efficiency.",
      },
      {
        image: Img,
        name: "Bosch Oil Filter",
        miniDescription: "Premium oil filtration",
        shortWriteup: "Extends engine life and improves performance.",
      },
      {
        image: Img,
        name: "Mikuni Fuel Filter",
        miniDescription: "Universal fuel filter",
        shortWriteup: "Keeps your engine safe from impurities.",
      },
      {
        image: Img,
        name: "K&N Air Filter",
        miniDescription: "Reusable high flow filter",
        shortWriteup: "Boosts engine horsepower and performance.",
      },
    ],
  },
  {
    productCategory: "Engine",
    brands: [
      {
        image: Img,
        name: "Schneider ATS",
        miniDescription: "100A automatic switch",
        shortWriteup: "Automatically switches between power sources.",
      },
      {
        image: Img,
        name: "ABB Transfer Switch",
        miniDescription: "Advanced transfer system",
        shortWriteup: "Reliable and fast power switching for homes.",
      },
      {
        image: Img,
        name: "L&T Panel",
        miniDescription: "Durable electrical panel",
        shortWriteup: "Customized panel for seamless load control.",
      },
      {
        image: Img,
        name: "Siemens Panel",
        miniDescription: "Compact ATS panel",
        shortWriteup: "Smart automation for uninterrupted power.",
      },
    ],
  },
  {
    productCategory: "Panels & Transformers",
    brands: [
      {
        image: Img,
        name: "ABB Transformer",
        miniDescription: "200kVA dry type transformer",
        shortWriteup: "Energy efficient for industrial applications.",
      },
      {
        image: Img,
        name: "Schneider Transformer",
        miniDescription: "Pad mounted transformer",
        shortWriteup: "Robust design for outdoor use.",
      },
      {
        image: Img,
        name: "Siemens Transformer",
        miniDescription: "Oil-immersed transformer",
        shortWriteup: "Stable voltage regulation and durability.",
      },
      {
        image: Img,
        name: "Mikano Transformer",
        miniDescription: "Low noise high efficiency",
        shortWriteup: "Ideal for commercial buildings and estates.",
        orderNowLink: "/order/transformers/mikano-transformer",
      },
    ],
  },
  {
    productCategory: "Air Conditioner",
    brands: [
      {
        image: Img,
        name: "Coleman Cable",
        miniDescription: "Flexible copper wire",
        shortWriteup: "Great for residential wiring projects.",
        orderNowLink: "/order/wiring/coleman-cable",
      },
      {
        image: Img,
        name: "Nigerchin Cable",
        miniDescription: "Heavy-duty PVC cable",
        shortWriteup: "Perfect for both indoor and outdoor use.",
        orderNowLink: "/order/wiring/nigerchin-cable",
      },
      {
        image: Img,
        name: "Cutix Cable",
        miniDescription: "High-conductivity wire",
        shortWriteup: "Ensures uninterrupted power supply.",
      },
      {
        image: Img,
        name: "Pirelli Wire",
        miniDescription: "Heat-resistant wire",
        shortWriteup: "Suitable for industrial environments.",
      },
    ],
  },
  {
    productCategory: "DSE Control",
    brands: [
      {
        image: Img,
        name: "LG Split Unit",
        miniDescription: "1.5HP inverter AC",
        shortWriteup: "Efficient and quiet cooling system.",
      },
      {
        image: Img,
        name: "Panasonic Inverter",
        miniDescription: "2HP wall AC",
        shortWriteup: "Smart AC with energy-saving mode.",
      },
      {
        image: Img,
        name: "Samsung WindFree",
        miniDescription: "No direct breeze AC",
        shortWriteup: "Comfort without cold air blast.",
      },
      {
        image: Img,
        name: "Daikin Floor Standing",
        miniDescription: "Commercial use air conditioner",
        shortWriteup: "Powerful cooling for larger spaces.",
      },
    ],
  },
];

const Products = () => {
  const navigate = useNavigate();
  const [activeProduct, setActiveProduct] = useState(productsData[0]);

  return (
    <SectionDiv>
      <Top>
        <BackArrow onClick={() => navigate(-1)}>
          <FiArrowLeft size={20} />
        </BackArrow>
        <Title>Our Products</Title>
      </Top>
      <ProductDisplay>
        <ProductListContainer>
          {productsData.map((product, index) => (
            <ProductItem
              key={index}
              onMouseEnter={() => setActiveProduct(product)}
              active={activeProduct.productCategory === product.productCategory}
            >
              {product.productCategory}
            </ProductItem>
          ))}
        </ProductListContainer>

        <BrandShowcase>
          <BrandGrid>
            {activeProduct.brands.map((brand, idx) => (
              <BrandCard key={idx}>
                <img src={brand.image} alt={brand.name} />
                <h4>{brand.name}</h4>
                <p>{brand.miniDescription}</p>
                <span>{brand.shortWriteup}</span>
                <OrderButton> Order now</OrderButton>
              </BrandCard>
            ))}
          </BrandGrid>
        </BrandShowcase>
      </ProductDisplay>
    </SectionDiv>
  );
};

export default Products;
const Top = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  gap: 13rem;
`;

const Title = styled.h4`
  font-size: 2rem;
  margin: 0rem;
  font-weight: 500;
  color: ${Colors.black};
`;
const ProductDisplay = styled.div`
  display: grid;
  gap: 4rem;
  grid-template-columns: 1fr 4fr;
  flex-wrap: wrap;
  width: 100%;
  //   margin: 0 auto;
`;

const ProductListContainer = styled.div`
  //   min-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const ProductItem = styled.div`
  font-size: 16px;
  font-weight: 300;
  color: ${Colors.black};
  cursor: pointer;
  position: relative;
  padding: 5px;
  border-radius: 8px;
  transition: color 0.3s ease-in-out;
  background: ${({ active }) => (active ? "#e6f0ff" : "none")};
  &:hover {
    background: ;
  }
`;

const BrandShowcase = styled.div`
  h3 {
    margin-bottom: 1rem;
  }
`;

const BrandGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
`;

const BrandCard = styled.div`
  background: ${Colors.lightGray};
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  text-align: left;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
  }

  h4 {
    margin: 0.5rem 0;
    font-size: 18px;
    font-weight: 500;
  }

  p {
    font-size: 15px;
    color: ${Colors.gray};
    margin: 0.2rem 0;
  }

  span {
    display: block;
    font-size: 13px;
    margin: 0.6rem 0;
    font-style: italic;
    font-weight: 300;
    color: ${Colors.gray};
  }
`;

const BackArrow = styled.div`
  cursor: pointer;

  color: ${Colors.black};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const OrderButton = styled.button`
  background-color: ${Colors.primaryBlue};
  color: ${Colors.white} !important;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  border: none;
  align-self: flex-start;
  &:hover {
    background-color: ${Colors.deepBlue};
    color: ${Colors.white};
  }
`;
