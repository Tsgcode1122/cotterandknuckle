import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Input, Button, Form, Select, message } from "antd";
import { FiPhone, FiMail, FiMapPin, FiArrowLeft } from "react-icons/fi";
import { DownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Colors, Shadows } from "../Colors/ColorComponent";
import axios from "axios";
import SectionDiv from "../FixedComponent/SectionDiv";
import countryCodesData from "../Component/CountryCodes.json";
import { GoInfo } from "react-icons/go";
import { breakpoints } from "../FixedComponent/BreakPoints";

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${breakpoints.mobileM}) {
    justify-content: left;
    gap: 4rem;
  }
`;
const Title = styled.h2`
  font-size: 2.2rem;
  color: ${Colors.black};
  margin: 1.4rem 0;
  font-weight: 500;
  @media (max-width: ${breakpoints.mobileM}) {
    font-size: 1.6rem;
    margin: 1rem 0;
  }
`;
const Container = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
  max-width: 1100px;
  margin: 0 auto;
  gap: 3rem;
  /* align-items: center; */
  background-color: ${Colors.white};
`;

const LeftSection = styled.div`
  margin-bottom: 2rem;
`;

const RightSection = styled.div`
  max-width: 400px;
  padding: 1rem;

  background: ${Colors.white};
  border: 20px solid ${Colors.lightBlue};
  border-radius: 12px;
  @media (max-width: ${breakpoints.tablet}) {
    margin: -3rem -1rem -1rem -1rem;
    border-radius: 0px;
    border: 30px solid ${Colors.lightBlue};
    padding: 2rem;
    max-width: 600px;
  }
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  color: ${Colors.black};
  margin: 0;
  font-size: 1.7rem;
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 2.4rem;
  }
  @media (min-width: ${breakpoints.laptop}) {
    font-size: 2.7rem;
  }
`;

const Sub = styled.p`
  color: ${Colors.black};
  font-size: 1.2rem;
  @media (max-width: ${breakpoints.mobileM}) {
    font-weight: 500;
  }
`;
const SubText = styled.p`
  color: ${Colors.gray};
  font-size: 0.9rem;
  margin: 1rem 0;
`;

const InfoBox = styled.p`
  background: ${Colors.lightBlue};
  padding: 0.5rem;
  //   display: inline-block;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  max-width: 290px;
  line-height: 1.4;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${Colors.black};
  //   font-weight: 400;
  svg {
    color: ${Colors.primaryBlue};
    font-size: 2.2rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: column;

  margin: 2rem 0;
  @media (max-width: ${breakpoints.mobileM}) {
    margin: 1.5rem 0;
  }
  gap: 0.75rem;
  color: ${Colors.deepBlue};
  p {
    margin: 0;
    // max-width: 350px;
    font-size: 1rem;
  }
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    svg {
      color: ${Colors.primaryBlue};
    }
  }
`;

const BackArrow = styled.div`
  cursor: pointer;

  color: ${Colors.black};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ContactForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const [countryCodes, setCountryCodes] = useState([]);
  const [selectedCode, setSelectedCode] = useState("+234");
  const navigate = useNavigate();
  const [form] = Form.useForm();
  useEffect(() => {
    const codes = countryCodesData.map((country) => ({
      label: country.dial_code, // Only show the dial code
      value: `${country.code}-${country.dial_code}`, // Unique value
    }));
    setCountryCodes(codes);

    // Set default to Nigeria if present
    const nigeria = codes.find((c) => c.value === "NG-+234");
    if (nigeria) setSelectedCode("NG-+234");
    else if (codes.length > 0) setSelectedCode(codes[0].value);
  }, []);

  const onFinish = async (values) => {
    const dialCode = selectedCode.split("-")[1];
    const payload = {
      ...values,
      number: `${dialCode}${values.phone}`,
    };
    try {
      // POST request
      const response = await axios.post(
        "http://localhost:5009/api/email/formSubmission",
        payload,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      // Show success notification
      message.success({
        content: "Your message has been sent successfully.",
        style: {
          textAlign: "center",
          marginTop: "20px",
        },
      });

      // Reset form fields
      form.resetFields();
      console.log("Form submitted successfully", response.data);

      // Example PUT request (uncomment and use as needed)
      // await axios.put("https://your-api-endpoint.com/contact/123", payload);
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };

  return (
    <SectionDiv>
      <Top>
        <BackArrow onClick={() => navigate(-1)}>
          <FiArrowLeft size={20} />
        </BackArrow>
        <Title>Contact Us</Title>
        <div></div>
      </Top>
      <Container>
        <LeftSection>
          <Heading>
            Have Questions? <br />
            Talk to Our Team
          </Heading>
          <SubText>
            Get in touch quickly—via form, call, or chat. We respond within
            24–48 hours
          </SubText>

          <InfoBox>
            <GoInfo />{" "}
            <span>
              The fastest way to reach our team is to{" "}
              <a
                href="tel:+2348032148519"
                style={{ color: Colors.primaryBlue }}
              >
                Call Us Now
              </a>
            </span>
          </InfoBox>
          <Sub>Contact Details:</Sub>
          <div>
            <ContactItem>
              <span>
                <FiPhone size={15} /> Telephone:
              </span>
              <p>+234-803-214-8519</p>
            </ContactItem>
            <ContactItem>
              <span>
                <FiMail size={15} /> Email:
              </span>
              <p>Lifechat@cotterandknuckleengineering.com</p>
            </ContactItem>
            <ContactItem>
              <span>
                <FiMapPin size={15} /> Office Address:
              </span>
              <p>
                A6/A7, Lotto Plaza, Fara Park, <br />
                Sangotedo, Lekki/Ajah Exp. Way, Lagos State, Nigeria.
              </p>
            </ContactItem>
          </div>
        </LeftSection>

        <RightSection>
          <Form
            layout="vertical"
            form={form}
            onFinish={onFinish}
            requiredMark={false}
          >
            <Form.Item
              label={
                <>
                  Name
                  <span style={{ color: "red", marginLeft: 4 }}>*</span>
                </>
              }
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              label={
                <>
                  Email
                  <span style={{ color: "red", marginLeft: 4 }}>*</span>
                </>
              }
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter a valid email!",
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              label={
                <>
                  Phone number
                  <span style={{ color: "red", marginLeft: 4 }}>*</span>
                </>
              }
              required
            >
              <Input.Group
                compact
                style={{ display: "flex", gap: "0.1rem", width: "100%" }}
              >
                <Select
                  value={selectedCode}
                  onChange={(value) => setSelectedCode(value)}
                  size="large"
                  style={{
                    flex: "0 0 80px",
                    borderRadius: "8px",
                  }}
                  options={countryCodes}
                  suffixIcon={<DownOutlined />}
                />
                <Form.Item
                  name="phone"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input size="large" style={{ flex: 1 }} />
                </Form.Item>
              </Input.Group>
            </Form.Item>

            <Form.Item
              label={
                <>
                  How can we be of help please?
                  <span style={{ color: "red", marginLeft: 4 }}>*</span>
                </>
              }
              name="message"
              rules={[
                { required: true, message: "Please enter your message!" },
              ]}
            >
              <Input.TextArea rows={6} />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: Colors.primaryBlue,
                  //   boxShadow: Shadows.blueShadow,
                  width: "100%",
                }}
              >
                Submit Request
              </Button>
            </Form.Item>
          </Form>
        </RightSection>
      </Container>
    </SectionDiv>
  );
};

export default ContactForm;
