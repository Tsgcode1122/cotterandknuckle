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
import Cotterlogo from "../../Images/cotlogo.png";
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
    <>
      {" "}
      <StyledNavbar>
        <SectionContainer>
          <NavContainer>
            <NavGroupLeft to="/">
              <img src={Cotterlogo} alt="Cotter Logo" />
            </NavGroupLeft>

            <NavGroupCenter>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About Us</NavLink>

              <DropdownWrapper
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <NavLink2>Contact Us</NavLink2>
                <DropdownMenu $visible={showDropdown}>
                  <DropdownItem to="/inquiry">
                    <img src={c1} alt="Engine" />
                    <span>Inquiry</span>
                  </DropdownItem>
                  <DropdownItem to="/contact-us">
                    <img src={c2} alt="Engine" />
                    <span>Contact Us</span>
                  </DropdownItem>
                  <DropdownItem to="/career">
                    <img src={c3} alt="Engine" />
                    <span>Careers</span>
                  </DropdownItem>
                </DropdownMenu>
              </DropdownWrapper>

              <DropdownWrapper
                onMouseEnter={() => setShowProductDropdown(true)}
                onMouseLeave={() => setShowProductDropdown(false)}
              >
                <NavLink2>Products</NavLink2>
                <ProductDropdownMenu $visible={showProductDropdown}>
                  <ProductItem to="/products">
                    <img src={Kohler} alt="Engine" />
                    <div>
                      <span>KOHLER SDMO Brand</span>
                      <p>
                        Available in different sizes both opened and enclosed
                        system
                      </p>
                    </div>
                  </ProductItem>
                  <ProductItem to="/products">
                    <img src={John} alt="Brakes" />
                    <div>
                      <span>John Deere Diesel Engine</span>
                      <p>
                        Available in different sizes both opened and enclosed
                        system
                      </p>
                    </div>{" "}
                  </ProductItem>
                  <ProductItem to="/products">
                    <img src={geniune} alt="Battery" />
                    <div>
                      <span>Genuine Spare Parts</span>
                      <p>
                        Available in different sizes both opened and enclosed
                        sytem
                      </p>
                    </div>{" "}
                  </ProductItem>
                  <ViewAllCTA to="/products">
                    View all our products{" "}
                    <RightOutlined
                      style={{ marginLeft: "3px", fontSize: "12px" }}
                    />
                  </ViewAllCTA>
                </ProductDropdownMenu>
              </DropdownWrapper>

              <DropdownWrapper
                onMouseEnter={() => setShowServiceDropdown(true)}
                onMouseLeave={() => setShowServiceDropdown(false)}
              >
                <NavLink2>Services</NavLink2>
                <ProductDropdownMenu $visible={showServiceDropdown}>
                  <ServiceItem to="/services">
                    <img src={generator} alt="Maintenance" />
                    <div>
                      <span>Generator Sales & Rentals</span>
                      <p>Reliable gensets to buy or hire</p>
                    </div>
                  </ServiceItem>
                  <ServiceItem to="/services">
                    <img src={maintenance} alt="Repairs" />
                    <div>
                      <span> Maintenance & Repairs</span>
                      <p>Fast fixes and scheduled servicing</p>
                    </div>
                  </ServiceItem>
                  <ServiceItem to="/services">
                    <img src={transformer} alt="Consulting" />
                    <div>
                      <span>Transformer Supply & Service</span>
                      <p>Original transformers for smooth power</p>
                    </div>
                  </ServiceItem>
                  <ViewAllCTA to="/services">
                    View all our services{" "}
                    <RightOutlined
                      style={{ marginLeft: "3px", fontSize: "12px" }}
                    />
                  </ViewAllCTA>
                </ProductDropdownMenu>
              </DropdownWrapper>
              <NavLink to="/blog">Blogs</NavLink>
            </NavGroupCenter>

            <NavGroupRight>
              <RequestButton to="/inquiry">
                Request Service <PlusOutlined style={{ marginLeft: "5px" }} />
              </RequestButton>
            </NavGroupRight>
          </NavContainer>
        </SectionContainer>
      </StyledNavbar>
      <NavHeight />
    </>
  );
};

export default NavbarBig;
const StyledNavbar = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999 !important;
  background: ${Colors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  img {
    max-width: 100%;
    height: 20px;
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const SectionContainer = styled.div`
  padding: 2rem 1.5rem;

  /* Leave these small sizes untouched */
  @media screen and (max-width: 320px) {
    padding: 2rem 0.8rem;
  }

  @media (min-width: 321px) and (max-width: 399px) {
    padding: 2rem 1rem;
  }

  @media (min-width: 400px) and (max-width: 479px) {
    padding: 2rem 1.2rem;
  }

  /* Start applying your breakpoints */
  @media (min-width: ${breakpoints.mobileS}) {
    padding: 2rem 1.5rem;
  }

  @media (min-width: ${breakpoints.mobileM}) {
    padding: 0rem 2rem;
  }

  @media (min-width: ${breakpoints.mobileL}) {
    padding: 10px 40px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: 0rem 0rem;

    margin: 0 auto;
  }

  @media (min-width: ${breakpoints.laptop}) {
    max-width: 1150px;
    padding: 0rem 0rem;

    margin: 0 auto;
  }

  @media (min-width: ${breakpoints.desktop}) {
    max-width: 1400px;
    padding: 0rem 0rem;
    margin: 0 auto;
  }

  @media (min-width: ${breakpoints.desktopXL}) {
    max-width: 1600px;
    padding: 0rem 0rem;
    margin: 0 auto;
  }
`;
const NavHeight = styled.div`
  height: 4.2rem;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;

  /* padding: 0 2rem; */
  z-index: 999;
  max-width: 1;
`;

const NavGroupLeft = styled(Link)`
  flex: 1;
  display: flex;
  align-items: center;

  img {
    max-width: 150px;
    height: auto;
    @media (min-width: ${breakpoints.desktop}) {
      max-width: 160px;
    }
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

const NavLink2 = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: ${Colors.black};
  text-decoration: none;
  transition: color 0.3s;
  white-space: nowrap;
  &:hover {
    color: ${Colors.primaryBlue};
  }
`;
const NavLink = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  color: ${Colors.black};
  text-decoration: none;
  transition: color 0.3s;
  white-space: nowrap;
  &:hover {
    color: ${Colors.primaryBlue};
  }
`;

const RequestButton = styled(Link)`
  background-color: ${Colors.primaryBlue};
  color: ${Colors.white};
  padding: 0.6rem 1.2rem;
  display: inline-block;
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
  box-shadow: 0 1px 1px 0.3px rgba(0, 0, 0, 0.08);
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
  box-shadow: 0 1px 1px 0.3px rgba(0, 0, 0, 0.08);
  padding: 2rem 0.75rem 1.5rem 0.75rem;

  z-index: 10;
  width: 300px;

  display: ${({ $visible }) => ($visible ? "block" : "none")};
`;

const ProductItem = styled(Link)`
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
const ServiceItem = styled(Link)`
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
