import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Input, Button, Form, Select } from "antd";
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
  display: none;

  @media (max-width: ${breakpoints.mobileM}) {
    font-size: 1.7rem;
    display: block;

    color: ${Colors.black};

    margin: 1rem 0;
    font-weight: 600;
  }
`;
const Container = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;
  @media (max-width: ${breakpoints.mobileM}) {
    grid-template-columns: 1fr;
  }
  max-width: 1100px;
  margin: 0 auto;
  gap: 3rem;
  align-items: center;
  background-color: ${Colors.white};
`;

const Group = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
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
  @media (max-width: ${breakpoints.mobileM}) {
    margin: -3rem -1rem -1rem -1rem;
    border-radius: 0px;
    border: 20px solid ${Colors.lightBlue};
    padding: 1rem;
  }
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  color: ${Colors.black};
  @media (max-width: ${breakpoints.mobileM}) {
    font-size: 1.7rem;
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
  font-size: 0.9rem;
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
    font-size: 0.9rem;
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
//

const serviceOptions = [
  {
    label: "Generator Sales and Installation",
    value: "generator_sales_installation",
  },
  { label: "Repairs & Maintenance", value: "repairs_maintenance" },
  { label: "Rentals", value: "rentals" },
  {
    label: "Transformer Installation / Repairs",
    value: "transformer_installation_repairs",
  },
  { label: "ATS/ Panels", value: "ats_panels" },
  { label: "Spare Parts Order", value: "spare_parts_order" },
  { label: "Electrical Wiring", value: "electrical_wiring" },
  { label: "Conditioning", value: "conditioning" },
  { label: "Others", value: "others" },
];

const Inquiry = () => {
  const [countryCodes, setCountryCodes] = useState([]);
  const [selectedCode, setSelectedCode] = useState("+234");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    axios.get("https://nigerian-states-and-lga.vercel.app/").then((res) => {
      setStates(
        res.data.map((state) => ({
          label: state.name,
          value: state.name,
        }))
      );
    });
  }, []);

  // Fetch LGAs when a state is selected
  const handleStateChange = async (value) => {
    setSelectedState(value);
    setCities([]); // reset cities while loading
    try {
      const res = await axios.get(
        `https://nigerian-states-and-lga.vercel.app/state/?name=${encodeURIComponent(
          value
        )}`
      );
      setCities(
        res.data.lgas.map((lga) => ({
          label: lga,
          value: lga,
        }))
      );
    } catch (err) {
      setCities([]);
    }
    // Optionally reset the city field in the form
    form.setFieldsValue({ city: undefined });
  };
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
      phone: `${dialCode}${values.phone}`,
    };
    try {
      // POST request
      const response = await axios.post(
        "https://your-api-endpoint.com/contact",
        payload,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
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
        <Title>Inquiry</Title>
        <div></div>
      </Top>
      <Container>
        <LeftSection>
          <Heading>
            Got Requests? <br />
            Inquire here
          </Heading>
          <SubText>
            Fill out the form or contact us to get a personalized quote fast.
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
                <FiMapPin size={15} /> Office Address:
              </span>
              <p>
                A6/A7, Lotto Plaza, Fara Park, <br />
                Sangotedo, Lekki/Ajah Exp. Way, Lagos State, Nigeria.
              </p>
            </ContactItem>

            <ContactItem>
              <span>
                <FiMail size={15} /> Email:
              </span>
              <p>Lifechat@cotterandknuckleengineering.com</p>
            </ContactItem>
            <ContactItem>
              <span>
                <FiPhone size={15} /> Telephone:
              </span>
              <p>+234-803-214-8519</p>
            </ContactItem>
          </div>
        </LeftSection>

        <RightSection>
          <Form layout="vertical" onFinish={onFinish} requiredMark={false}>
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
                  Company Business Name{" "}
                  <span style={{ color: "gray", marginLeft: "5px" }}>
                    {" "}
                    {`[Optional]`}
                  </span>
                </>
              }
              name="companyName"
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              label={
                <>
                  Street Address{" "}
                  <span style={{ color: "red", marginLeft: 4 }}>*</span>
                </>
              }
              name="streetAddress"
              rules={[
                { required: true, message: "Please input your address!" },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <Group>
              <Form.Item
                label={
                  <>
                    State <span style={{ color: "red", marginLeft: 4 }}>*</span>
                  </>
                }
                name="state"
                rules={[{ required: true, message: "State is required" }]}
                style={{
                  // flex: "0 0 150px",
                  borderRadius: "8px",
                }}
              >
                <Select
                  placeholder="Select State"
                  size="large"
                  options={states}
                  onChange={handleStateChange}
                  value={selectedState}
                  // style={{ width: 140 }}
                  loading={states.length === 0}
                />
              </Form.Item>
              <Form.Item
                label={
                  <>
                    LGA <span style={{ color: "red", marginLeft: 4 }}>*</span>
                  </>
                }
                name="city"
                rules={[{ required: true, message: "City is required" }]}
                // style={{ flex: 1 }}
              >
                <Select
                  placeholder="Select LGA"
                  size="large"
                  // style={{ width: 180 }}
                  options={cities}
                  disabled={!selectedState}
                  loading={selectedState && cities.length === 0}
                />
              </Form.Item>
            </Group>
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
                  Engine Serial Number{" "}
                  <span style={{ color: "gray", marginLeft: "5px" }}>
                    {" "}
                    {`[Optional]`}
                  </span>
                </>
              }
              name="engineSerialNumber"
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              label="Choose Services"
              name="services"
              rules={[{ required: true, message: "Please select a service" }]}
            >
              <Select
                placeholder="Select Services"
                size="large"
                mode="multiple"
                options={serviceOptions}
              />
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

export default Inquiry;
