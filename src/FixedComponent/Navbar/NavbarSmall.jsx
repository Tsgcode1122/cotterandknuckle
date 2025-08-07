import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import Cotterlogo from "../../Images/cotterlogo.png";
import { Colors } from "../../Colors/ColorComponent";
import { RightOutlined } from "@ant-design/icons";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
const NavbarSmall = () => {
  const [isOpen, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const sidebarRef = useRef();
  const overlayRef = useRef(null);
  const toggleSidebar = () => {
    setOpen(!isOpen);
  };
  // Close sidebar when clicking outside
  //   useEffect(() => {
  //     const handleClickOutside = (e) => {
  //       if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
  //         setOpen(false);
  //       }
  //     };
  //     if (isOpen) {
  //       document.addEventListener("mousedown", handleClickOutside);
  //     }
  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, [isOpen]);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const closeSidebar = () => {
    setOpen(false);
    setOpenDropdown(null);
  };

  return (
    <NavWrapper>
      <TopBar>
        <HeadSpace>
          <Link to="/">
            <Logo src={Cotterlogo} alt="Cotter Logo" />
          </Link>
          <MenuToggle onClick={toggleSidebar}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </MenuToggle>
        </HeadSpace>
      </TopBar>
      <NavHeight></NavHeight>
      <Sidebar isOpen={isOpen} ref={sidebarRef}>
        <SidebarLink to="/" onClick={closeSidebar}>
          Home <IoIosArrowForward />
        </SidebarLink>
        <SidebarLink to="/about" onClick={closeSidebar}>
          About Us <IoIosArrowForward />
        </SidebarLink>

        <Dropdown>
          <DropdownTitle onClick={() => toggleDropdown(0)}>
            Contact Us <IoIosArrowDown />
          </DropdownTitle>
          <DropdownContent isOpen={openDropdown === 0}>
            <DropdownItem to="/inquiry" onClick={closeSidebar}>
              Inquiry <IoIosArrowForward />
            </DropdownItem>
            <DropdownItem to="/contact-us" onClick={closeSidebar}>
              Contact Us <IoIosArrowForward />
            </DropdownItem>
            <DropdownItem to="/careers" onClick={closeSidebar}>
              Careers <IoIosArrowForward />
            </DropdownItem>
          </DropdownContent>
        </Dropdown>

        <Dropdown>
          <DropdownTitle onClick={() => toggleDropdown(1)}>
            Products <IoIosArrowDown />
          </DropdownTitle>
          <DropdownContent isOpen={openDropdown === 1}>
            <DropdownItem to="/products" onClick={closeSidebar}>
              KOHLER SDMO Brand <IoIosArrowForward />
            </DropdownItem>
            <DropdownItem to="/products" onClick={closeSidebar}>
              John Deere Diesel Engine <IoIosArrowForward />
            </DropdownItem>
            <DropdownItem to="/products" onClick={closeSidebar}>
              Genuine Spare Parts <IoIosArrowForward />
            </DropdownItem>
            <DropdownItem to="/products" onClick={closeSidebar}>
              View all products <RightOutlined style={{ fontSize: "12px" }} />
            </DropdownItem>
          </DropdownContent>
        </Dropdown>

        <Dropdown>
          <DropdownTitle onClick={() => toggleDropdown(2)}>
            Services <IoIosArrowDown />
          </DropdownTitle>
          <DropdownContent isOpen={openDropdown === 2}>
            <DropdownItem to="/services" onClick={closeSidebar}>
              Generator Sales & Rentals <IoIosArrowForward />
            </DropdownItem>
            <DropdownItem to="/services" onClick={closeSidebar}>
              Maintenance & Repairs <IoIosArrowForward />
            </DropdownItem>
            <DropdownItem to="/services" onClick={closeSidebar}>
              Transformer Supply & Service <IoIosArrowForward />
            </DropdownItem>
            <DropdownItem to="/services" onClick={closeSidebar}>
              View all services <IoIosArrowForward />
            </DropdownItem>
          </DropdownContent>
        </Dropdown>

        <RequestButton onClick={closeSidebar}>Request Service</RequestButton>
      </Sidebar>
      {isOpen && <Overlay ref={overlayRef} onClick={closeSidebar} />}
    </NavWrapper>
  );
};

export default NavbarSmall;
const NavHeight = styled.div`
  height: 1.2rem;
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1;
`;
const MenuToggle = styled.div`
  margin: 0;
  cursor: pointer;
`;
const NavWrapper = styled.div`
  display: none;
  background: ${Colors.white};
  padding: 0.75rem 1rem;
  position: relative;
  z-index: 1000;

  @media (max-width: 1000px) {
    display: block;
  }
`;

const TopBar = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999 !important;
  background: ${Colors.white};
  //   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  left: 0;
  border-bottom: 1px solid #e0e0e0;
  img {
    max-width: 100%;
    height: 20px;
  }
  @media screen and (min-width: 1000px) {
    display: none;
  }
`;

const HeadSpace = styled.div`
  top: 0 !important;
  align-items: center;
  display: flex;
  margin: 0px 20px;
  top: 0 !important;
  justify-content: space-between;
  img {
    height: 25px;
    margin: 0;
    padding: 0;
  }
`;
const Logo = styled.img`
  height: 40px;
`;

const Sidebar = styled.div`
  position: fixed;
  top: 48px;
  right: 0;
  width: 80%;
  height: 100vh;
  background: ${Colors.white};
  padding: 1rem;
  //   box-shadow: -4px 0 10px rgba(0, 0, 0, 0.05);
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0%)" : "translateX(100%)"};
  transition: transform 0.4s ease-in-out;
  z-index: 1001;
`;

const SidebarLink = styled(Link)`
  display: block;
  padding: 0.75rem 0;
  color: ${Colors.black};
  text-decoration: none;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${Colors.lightGray};
  &:first-child {
    border-top: none;
  }
`;

const Dropdown = styled.div`
  //   margin-top: 1rem;
`;

const DropdownTitle = styled.div`
  //   margin-bottom: 0.5rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${Colors.black};
  font-size: 1rem;

  padding: 0.75rem 0;
  border-top: 1px solid ${Colors.lightGray};
`;

const DropdownContent = styled.div`
  padding-left: 1rem;
  max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.4s ease-in-out;
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 0.4rem 0;
  font-size: 0.9rem;
  color: ${Colors.black};
  text-decoration: none;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  &:hover {
    color: ${Colors.primaryBlue};
  }
`;

const RequestButton = styled.button`
  margin-top: 1.5rem;
  background: ${Colors.primaryBlue};
  color: ${Colors.white};
  padding: 0.75rem 1.2rem;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
`;
