import React, { useState } from "react";
import styled from "styled-components";
import {
  PlusOutlined,
  MessageOutlined,
  PhoneOutlined,
  UserOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { breakpoints } from "../BreakPoints";
import { Colors } from "../../Colors/ColorComponent";
import Cotterlogo from "../../Images/cotterlogo.png";
import Kohler from "../../Images/Kohler.png";
import John from "../../Images/John.png";
import geniune from "../../Images/geniune.png";
import generator from "../../Images/generator.png";
import maintenance from "../../Images/maintenance.png";
import transformer from "../../Images/transformer.png";
import c1 from "../../Images/c1.png";
import c2 from "../../Images/c2.png";
import c3 from "../../Images/c3.png";
import { Link } from "react-router-dom";
import SectionDiv from "../SectionDiv";

const NavbarBig = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);

  return (
    <NavContainer>
      <NavGroupLeft>
        <img src={Cotterlogo} alt="Cotter Logo" />
      </NavGroupLeft>

      <NavGroupCenter>
        <NavLink href="#">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>

        <DropdownWrapper
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <NavLink href="#">Contact Us</NavLink>
          <DropdownMenu $visible={showDropdown}>
            <DropdownItem to="/inquiry">
              <img src={c1} alt="Engine" />
              <span>Inquiry</span>
            </DropdownItem>
            <DropdownItem to="/contact-us">
              <img src={c2} alt="Engine" />
              <span>Contact Us</span>
            </DropdownItem>
            <DropdownItem>
              <img src={c3} alt="Engine" />
              <span>Careers</span>
            </DropdownItem>
          </DropdownMenu>
        </DropdownWrapper>

        <DropdownWrapper
          onMouseEnter={() => setShowProductDropdown(true)}
          onMouseLeave={() => setShowProductDropdown(false)}
        >
          <NavLink to="/products">Products</NavLink>
          <ProductDropdownMenu $visible={showProductDropdown}>
            <ProductItem>
              <img src={Kohler} alt="Engine" />
              <div>
                <span>KOHLER SDMO Brand</span>
                <p>
                  Available in different sizes both opened and enclosed system
                </p>
              </div>
            </ProductItem>
            <ProductItem>
              <img src={John} alt="Brakes" />
              <div>
                <span>John Deere Diesel Engine</span>
                <p>
                  Available in different sizes both opened and enclosed system
                </p>
              </div>{" "}
            </ProductItem>
            <ProductItem>
              <img src={geniune} alt="Battery" />
              <div>
                <span>Genuine Spare Parts</span>
                <p>
                  Available in different sizes both opened and enclosed sytem
                </p>
              </div>{" "}
            </ProductItem>
            <ViewAllCTA href="#">
              View all our products{" "}
              <RightOutlined style={{ marginLeft: "3px", fontSize: "12px" }} />
            </ViewAllCTA>
          </ProductDropdownMenu>
        </DropdownWrapper>

        <DropdownWrapper
          onMouseEnter={() => setShowServiceDropdown(true)}
          onMouseLeave={() => setShowServiceDropdown(false)}
        >
          <NavLink>Services</NavLink>
          <ProductDropdownMenu $visible={showServiceDropdown}>
            <ServiceItem>
              <img src={generator} alt="Maintenance" />
              <div>
                <span>Generator Sales & Rentals</span>
                <p>Reliable gensets to buy or hire</p>
              </div>
            </ServiceItem>
            <ServiceItem>
              <img src={maintenance} alt="Repairs" />
              <div>
                <span> Maintenance & Repairs</span>
                <p>Fast fixes and scheduled servicing</p>
              </div>
            </ServiceItem>
            <ServiceItem>
              <img src={transformer} alt="Consulting" />
              <div>
                <span>Transformer Supply & Service</span>
                <p>Original transformers for smooth power</p>
              </div>
            </ServiceItem>
            <ViewAllCTA to="/services">
              View all our services{" "}
              <RightOutlined style={{ marginLeft: "3px", fontSize: "12px" }} />
            </ViewAllCTA>
          </ProductDropdownMenu>
        </DropdownWrapper>
      </NavGroupCenter>

      <NavGroupRight>
        <RequestButton>
          Request Service <PlusOutlined style={{ marginLeft: "5px" }} />
        </RequestButton>
      </NavGroupRight>
    </NavContainer>
  );
};

export default NavbarBig;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;

  background-color: ${Colors.white};
  //   border-bottom: 1px solid #e0e0e0;
  padding: 0 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const NavGroupLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  img {
    max-width: 100px;
    height: auto;
  }
`;

const NavGroupCenter = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const NavGroupRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavLink = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  color: ${Colors.black};
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${Colors.primaryBlue};
  }
`;

const RequestButton = styled.button`
  background-color: ${Colors.primaryBlue};
  color: ${Colors.white};
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 5px;
  font-size: 0.95rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${Colors.brightBlue};
  }
`;

const DropdownWrapper = styled.div`
  position: relative;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%; // changed from 40px to 100%
  left: 0;
  background-color: ${Colors.white};
  //   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 2rem 0.75rem 1.5rem 0.75rem;
  z-index: 10;
  width: 240px;
  min-width: 180px;
  display: ${({ $visible }) => ($visible ? "block" : "none")};
  transition: opacity 0.2s ease-in-out;
`;

const DropdownItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0.5rem 1rem;
  color: ${Colors.black};
  cursor: pointer;
  font-size: 0.85rem;
  transition: background 0.2s;

  &:hover {
    background-color: ${Colors.softBlue};
    border-radius: 4px;
  }

  img {
    width: 25px;
    height: auto;
    object-fit: contain;
    border-radius: 4px;
  }
`;
const ProductDropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${Colors.white};
  border-radius: 6px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  z-index: 10;
  width: 300px;

  display: ${({ $visible }) => ($visible ? "block" : "none")};
`;

const ProductItem = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 3fr 7fr;
  gap: 0.8rem;
  padding: 0.4rem;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: background 0.2s ease;
  color: ${Colors.black};

  &:hover {
    background-color: ${Colors.softBlue};
  }

  img {
    width: 80px;
    height: auto;
    object-fit: contain;
    border-radius: 4px;
  }

  span {
    font-size: 0.8rem;
    font-weight: 500;
  }
  p {
    margin: 0;
    font-size: 0.7rem;
    line-height: 1.2;
  }
  color: ${Colors.gray};
`;
const ServiceItem = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 7fr;
  gap: 0.6rem;
  padding: 0.4rem;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: background 0.2s ease;
  color: ${Colors.black};

  &:hover {
    background-color: ${Colors.softBlue};
  }

  img {
    width: 40px;
    height: auto;
    object-fit: contain;
    border-radius: 4px;
  }

  span {
    font-size: 0.8rem;
    font-weight: 500;
  }
  p {
    margin: 0;
    font-size: 0.7rem;
    line-height: 1.2;
  }
  color: ${Colors.gray};
`;

const ViewAllCTA = styled(Link)`
  display: block;
  text-align: left;

  font-size: 0.75rem;
  font-weight: 400;
  color: ${Colors.black};
  text-decoration: none;
  padding: 0.6rem 0.4rem;
  // border-top: 1px solid #eee;

  &:hover {
    text-decoration: underline;
  }
`;
