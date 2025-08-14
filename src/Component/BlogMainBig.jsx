import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Colors } from "../Colors/ColorComponent";
import SectionDiv from "../FixedComponent/SectionDiv";
import { Spin } from "antd"; // Import Ant Design spinner
import { breakpoints } from "../FixedComponent/BreakPoints";
import { Link } from "react-router-dom";

const BlogMainBig = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "http://localhost:5009/api/blogs/getBlogs"
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
      const triggerPoint = window.innerHeight * 0.2;

      setIsSticky(scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Major>
        {loading ? (
          <LoaderContainer>
            <Spin size="large" />
            <p>Loading blog posts...</p>
          </LoaderContainer>
        ) : posts.length > 0 ? (
          <Container>
            <Main>
              {posts.slice(0, 6).map((post, index) => (
                <MainFeature key={index} to={`/blog/${post.id}`}>
                  <ImageContainer>
                    <img src={post.imagesUrl} alt={post.imagesAlt} />
                  </ImageContainer>
                  <Content>
                    <span>
                      <Topic>
                        {post.title}: {post.metaDescription}
                      </Topic>
                      <Author>-{post.author}</Author>
                    </span>
                    <Date>{post.formattedDate}</Date>
                  </Content>
                </MainFeature>
              ))}
            </Main>
            <SideContent>
              <Intro>More News Updates</Intro>
              <Divider />
              {posts.slice(6).map((post, index) => (
                <React.Fragment key={index}>
                  <One key={index} to={`/blog/${post.id}`}>
                    <img src={post.imagesUrl} alt={post.imagesAlt} />
                    <OneSide>
                      <AuthorDate>
                        <span>{post.author}</span>
                        <span> -{post.formattedDate}</span>
                      </AuthorDate>
                      <TopicMini>
                        {post.title}: {post.metaDescription}
                      </TopicMini>
                    </OneSide>
                  </One>

                  {<Divider />}
                </React.Fragment>
              ))}
            </SideContent>
          </Container>
        ) : (
          <p
            style={{
              textAlign: "center",
              fontSize: "18px",
              marginTop: "20px",
            }}
          >
            No blog posts yet.
          </p>
        )}
      </Major>
    </>
  );
};

export default BlogMainBig;

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  p {
    margin-top: 10px;
    font-size: 16px;
    color: #666;
  }
`;

const Major = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Main = styled.div`
  overflow-y: auto;
  height: 100vh;
  display: flex;

  flex-direction: column;
  gap: 16px;
  &::-webkit-scrollbar {
    margin-left: 10px !important;
    width: 8px;
    position: absolute !important;
    border: 1px solid #f0f0f0;
    padding: 1.1px;
    border-radius: 5px;
    height: 70vh !important;
    background-color: white;
  }
  &::-webkit-scrollbar-thumb {
    background: #d5d5d5;
    margin-left: 10px !important;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    margin-left: 10px !important;
  }
`;
const Container = styled.div`
  /* align-items: center; */
  justify-content: center;
  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      transform: translateY(-5px);
    }
  }
  display: grid;
  gap: 20px;
  @media (min-width: ${breakpoints.mobileL}) {
    grid-template-columns: 70% 30%;
  }
`;
const ImageContainer = styled.div`
  max-height: 280px;

  min-width: 360px;

  img {
    max-width: 100%;
    min-width: 360px;
    max-width: 360px;
    height: 280px;
    object-fit: cover;
    border-radius: 10px;
  }
`;
const MainFeature = styled(Link)`
  a {
    text-decoration: none;
    color: inherit;
  }
  background: white;
  border: 2px solid #f0f0f0;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 0 40px 0 0;
  padding: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Topic = styled.h4`
  color: black;

  line-height: 1.4;
  max-width: 380px;
  font-weight: 500;
  margin: 0;
`;

const Author = styled.p`
  color: black;
`;
const Date = styled.p`
  color: ${Colors.ashBlack};
`;

const SideContent = styled.div`
  display: flex;
  overflow-y: auto;
  border: 1.5px solid #e7e6e6;
  flex-direction: column;
  gap: 10px;
  background: #f3f2f2;
  border-radius: 10px;
  padding: 10px;
  max-height: 60vh;
`;
const Intro = styled.p`
  font-size: 12px;
  margin: 0;
  padding: 0;
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: #aeaeae;
`;

const One = styled(Link)`
  a {
    text-decoration: none;
    color: inherit;
  }
  display: flex;
  width: 100%;
  gap: 10px;
  img {
    min-width: 90px;
    max-width: 90px;
    height: auto;
  }
`;

const AuthorDate = styled.p`
  color: black;
  margin: 0;
  display: grid;
  font-size: 14px;
  padding: 0;
  span {
    color: #8d8d8d !important;
  }
`;

const TopicMini = styled.p`
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
  padding: 8px 0 2px 0;
  flex-wrap: nowrap;
  font-size: 12px !important;
`;
const OneSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`;
