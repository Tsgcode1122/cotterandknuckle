import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import ResetPasswordPage from "./Admin/ResetPasswordPage";
import { Result, Button } from "antd";
import Layout from "./FixedComponent/Layout";
import HomePage from "./Pages/HomePage";
import GlobalStyle from "./FixedComponent/GlobalStyles";
import ContactForm from "./Contact/ContactForm";
import Inquiry from "./Contact/Inquiry";
import OurServices from "./Component/OurServices";
import AboutUs from "./Component/AboutUs";
import Products from "./Component/Products";
import BlogPage from "./Pages/BlogPage";
import ReadBlog from "./Pages/ReadBlog";
import RegisterLogin from "./Admin/RegisterLogin";
import ProtectedAdminDashboardPage from "./Admin/ProtectedAdminDashboardPage";
const StyledResult = styled(Result)`
  .ant-result-title {
    color: black !important;
  }
  .ant-result-subtitle {
    color: black !important;
  }
`;

// Component for handling invalid paths
const InvalidPath = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <StyledResult
      status="404"
      title="404 Not Found"
      subTitle="Oops! The page you are looking for does not exist."
      extra={
        <Button
          type="primary"
          onClick={handleBackHome}
          style={{ background: "black" }}
        >
          Back Home
        </Button>
      }
    />
  );
};

// Define your routes
const routes = [
  {
    element: (
      <>
        <Layout />
      </>
    ),
    children: [
      { index: true, path: "/", element: <HomePage /> },
      { path: "/contact-us", element: <ContactForm /> },
      { path: "/inquiry", element: <Inquiry /> },
      { path: "/services", element: <OurServices /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/products", element: <Products /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/blog/:blogId", element: <ReadBlog /> },
      // { path: "/projects/:imageId", element: <SingleProjectDetails /> },
      // {
      //   path: "/services",
      //   element: <ServicePage />,
      //   key: "service",
      // },
      // { path: "/project", element: <ProjectPage /> },

      // { path: "/service", element: <ServicePage />, key: "service" },
      // { path: "/contact", element: <ContactForm /> },
      { path: "/adminlogin", element: <RegisterLogin /> },

      { path: "/reset-password", element: <ResetPasswordPage /> },

      { path: "*", element: <InvalidPath /> },

      { path: "/admin/*", element: <ProtectedAdminDashboardPage /> },
    ],
  },
];

const router = createBrowserRouter(routes);

const App = () => (
  <>
    {/* <PageUnderConstruction /> */}
    <GlobalStyle />

    <RouterProvider router={router} />
  </>
);

export default App;
