import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Colors } from "../Colors/ColorComponent";
import SectionDiv from "../FixedComponent/SectionDiv";
import { Spin } from "antd";
import { useNavigate } from "react-router-dom";
import { breakpoints } from "../FixedComponent/BreakPoints";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Ready from "../Component/Ready";
import BlogMainSmall from "../Component/BlogMainSmall";
import BlogMainBig from "../Component/BlogMainBig";
const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://cotterandknucklebackend.onrender.com/api/blogs/getBlogs"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = window.innerHeight * 0.2; // 20% from top

      setIsSticky(scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <HideBig>
        <BlogMainSmall />
      </HideBig>
      <HideSmall>
        <BlogMainBig />
      </HideSmall>
    </>
  );
};

export default BlogPage;
const Top = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  gap: 13rem;
  @media (max-width: ${breakpoints.mobileM}) {
    gap: 3rem;
  }
`;

const HideBig = styled.div`
  @media (min-width: ${breakpoints.laptop}) {
    display: none;
  }
`;
const HideSmall = styled.div`
  display: none;

  @media (min-width: ${breakpoints.laptop}) {
    display: block;
  }
`;
