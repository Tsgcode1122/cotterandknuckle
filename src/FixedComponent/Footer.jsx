import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Colors } from "../Colors/ColorComponent";
import logo from "../Images/cotterlogo.png";
import SectionDiv from "./SectionDiv";
import { FaXTwitter } from "react-icons/fa6";
import { breakpoints } from "./BreakPoints";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <FooterContainer>
          {/* Group 1: Logo and Address */}
          <Group>
            <Logo src={logo} alt="Company Logo" />
            <Address>
              A6/A7,Lotto Plaza, Fara Park, Sangotedo, Lekki/Ajah Exp. Way,Lagos
              State, Nigeria
            </Address>
            <Socials className="desktop-socials">
              <a href="#" aria-label="X (formerly Twitter)">
                <FaXTwitter />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
            </Socials>
          </Group>
          <Grouper>
            {/* Group 2: Company */}
            <Group>
              <Heading>Company</Heading>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink href="#">Our Mission</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
            </Group>

            {/* Group 3: Help */}
            <Group>
              <Heading>Help</Heading>
              <FooterLink href="/faqs">FAQs</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">How it Works</FooterLink>
            </Group>

            {/* Group 4: Join Us */}
            <Group>
              <Heading>Join Us</Heading>
              <FooterLink href="">Submission</FooterLink>
              <FooterLink to="/contact-us">Contact Support</FooterLink>
            </Group>
          </Grouper>
          <Socials className="mobile-socials">
            <a href="#" aria-label="X (formerly Twitter)">
              <FaXTwitter />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </Socials>
        </FooterContainer>

        {/* Bottom Bar */}
        <BottomBar>
          <RightLinks>
            <FooterLink href="#">Terms & Conditions</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
          </RightLinks>
        </BottomBar>
      </FooterWrapper>
    </>
  );
};

export default Footer;
const FooterWrapper = styled.footer`
  background: ${Colors.white};
  color: ${Colors.black};
  padding: 4rem 1rem 1rem 1rem;
  /* border-top: 0.1px solid #edecec;
   */
  font-size: 0.95rem;

  /* margin: 0 auto; */
`;

const FooterContainer = styled.div`
  display: grid;
  max-width: 1400px;
  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: 4fr 6fr;
    // padding-left: 1rem;
  }
  @media (min-width: ${breakpoints.laptop}) {
    padding-left: 8rem;
  }
  margin: 0 auto;
  @media (max-width: ${breakpoints.mobileL}) {
    gap: 0.5rem;
  }
`;

const Grouper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
`;
const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  &:first-child {
    max-width: 300px;
  }
`;

const Logo = styled.img`
  width: 100%;
  height: auto;
  max-width: 100px;
  margin-bottom: 0rem;
`;

const Address = styled.p`
  font-size: 0.9rem;
  color: ${Colors.black};
  padding-bottom: 5px;
  margin: 0;
`;

const Socials = styled.div`
  display: flex;
  gap: 0.7rem;
  margin-top: 0.7rem;

  a {
    color: ${Colors.primaryBlue};
    padding: 0.4rem;
    border-radius: 5px;
    font-size: 1.2rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s;
  }

  &.desktop-socials {
    @media (max-width: 900px) {
      display: none;
    }
  }
  &.mobile-socials {
    display: none;
    @media (max-width: 900px) {
      display: flex;
      width: 100%;
      justify-content: flex-start;
    }
  }
`;

const Heading = styled.h4`
  font-size: 1rem;
  color: ${Colors.black};
  margin-bottom: 0.4rem;
  @media (max-width: ${breakpoints.mobileL}) {
    margin-bottom: 0.1rem;
  }
`;

const FooterLink = styled(Link)`
  color: ${Colors.black};
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    color: ${Colors.brightBlue};
  }
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 1rem;
`;

const RightLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    font-size: 0.85rem;
  }
`;
