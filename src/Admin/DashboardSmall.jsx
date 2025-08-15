import React, { useState, useEffect } from "react";
import {
  Layout,
  Button,
  Input,
  Select,
  Upload,
  Form,
  notification,
  message,
  Spin,
} from "antd";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Colors } from "../Colors/ColorComponent";
import { PlusOutlined } from "@ant-design/icons";
import { LuImageUp } from "react-icons/lu";
import { IoIosLink } from "react-icons/io";
import { CiUser, CiIndent } from "react-icons/ci";
import { useBlogContext } from "../context/BlogContext";
import axios from "axios";
const { TextArea } = Input;
const authors = [
  "Select author",
  "Bamidele Ajanaku, CEO, CotterandKnuckles Company Limited",
  "Chioma Okoye",
  "Miller V",
];
import ImageUpload from "./ImageUpload";
const DashboardSmall = () => {
  const [loading, setLoading] = useState(false);
  const [quillText, setQuillText] = useState(""); // Separate state for Quill
  const [text, setText] = useState(""); // Separate state for TextArea
  const [imagesUrl, setImagesUrl] = useState(null);
  const { createBlog } = useBlogContext();

  // Function to count words in Quill editor
  const countWords = (content) => {
    return content
      .replace(/<[^>]+>/g, " ") // Remove HTML tags
      .trim()
      .split(/\s+/)
      .filter(Boolean).length; // Filter empty spaces
  };

  const [form] = Form.useForm();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const onFinish = async (values) => {
    console.log("Form Values before modification:", values);

    setLoading(true);

    try {
      const blogData = { ...values, description: quillText, imagesUrl };
      await axios.post(
        "https://cotterandknucklebackend.onrender.com/api/blogs/postBlogs",
        blogData
      );

      message.success({
        content: "Your message has been sent successfully.",
        style: {
          textAlign: "center",
          marginTop: "20px",
        },
      });

      // Reset form fields
      form.resetFields();
      setQuillText("");
      setImagesUrl(null);
      setText("");
    } catch (error) {
      console.error("Error submitting form:", error);
      notification.error({
        message: "Error",
        description: "Failed to send your message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <DashboardContainer form={form} onFinish={onFinish} noStyle>
      <TypeCard>
        <StyledFormItem label="Description" name="description" noStyle>
          <StyledWrapper>
            <StyledQuill
              theme="snow"
              value={quillText}
              onChange={setQuillText}
            />
            <span className="word-counter">({countWords(quillText)}/800)</span>
          </StyledWrapper>
        </StyledFormItem>
        <StyledFormItem noStyle>
          <CustomButtons style={{ textAlign: "right", marginTop: "10px" }}>
            <Butt type="primary" htmlType="submit" loading={loading}>
              Publish
            </Butt>
          </CustomButtons>
        </StyledFormItem>
      </TypeCard>

      <SecondPart>
        {/* URL & Author */}
        <div
          style={{
            background: "white",
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
        >
          <p style={{ margin: "0", paddingBottom: "5px" }}>URL & Author</p>
          <Split1>
            <StyledFormItem
              label="Title"
              name="title"
              noStyle
              rules={[
                {
                  required: true,

                  message: "Please enter Title",
                },
              ]}
            >
              <Wrapper>
                <TextArea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="URL Friendly Title"
                  // maxLength={500}
                  prefix={
                    <IoIosLink style={{ color: "#000000", fontSize: "18px" }} />
                  }
                  style={{
                    marginTop: "10px",
                    height: "100px",
                    paddingBottom: "24px",
                  }} // Extra padding for counter
                />
                {/* <span className="counter">({text.length}/100)</span> */}
              </Wrapper>
            </StyledFormItem>
            {/* <StyledFormItem name="title" noStyle>
              <Input
                placeholder="URL Friendly Title"
                prefix={
                  <IoIosLink style={{ color: "#000000", fontSize: "18px" }} />
                }
              />
            </StyledFormItem> */}
            <StyledFormItem
              name="author"
              noStyle
              rules={[
                {
                  required: true,

                  message: "Please select author",
                },
              ]}
            >
              <Select
                placeholder="Author"
                style={{ marginTop: "10px", width: "100%" }}
                prefix={
                  <CiUser style={{ color: "#000000", fontSize: "18px" }} />
                }
              >
                {authors.map((service, index) => (
                  <Option key={index} value={service}>
                    {service}
                  </Option>
                ))}
              </Select>
            </StyledFormItem>
          </Split1>
        </div>

        {/* Cover Image & Meta Description */}
        <div
          style={{
            background: "white",
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            flex: 1,
          }}
        >
          <p style={{ margin: "0", paddingBottom: "5px" }}>Cover Image</p>

          <ImageUpload setImagesUrl={setImagesUrl} imagesUrl={imagesUrl} />
          <p
            style={{
              textAlign: "right",
              margin: "0",
              color: "#ccc",
              paddingBottom: "10px",
            }}
          >
            Replace Image
          </p>
          <StyledFormItem
            name="imagesAlt"
            label="ImageAlt"
            noStyle
            rules={[
              {
                required: true,

                message: "enter image alt",
              },
            ]}
          >
            <Input
              placeholder="Image Alt Text"
              style={{ marginTop: "10px" }}
              prefix={
                <CiIndent style={{ color: "#000000", fontSize: "18px" }} />
              }
            />
          </StyledFormItem>

          {/* Meta Description */}
        </div>
      </SecondPart>
    </DashboardContainer>
  );
};

export default DashboardSmall;

const StyledFormItem = styled(Form.Item)`
  width: 100%;
`;

const Split1 = styled.div`
  width: 100%;
`;

const CustomButtons = styled.div`
  background: transparent !important;
  border: none !important;
  margin: 0;
`;
const DashboardContainer = styled(Form)`
  padding-bottom: 8rem !important;
  margin: 2rem 1rem;
  padding: 1rem;
  /* background: #f5f5f5; */
  border-radius: 10px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  gap: 20px;
  .ant-form-item {
    width: 100%;
  }
  @media screen and (max-width: 320px) {
    padding: 0.5rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 0.5rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 0.5rem;
  }
`;

const SecondPart = styled.div`
  flex-direction: column;

  display: flex;
  gap: 20px;
  width: 90%;
  @media screen and (max-width: 320px) {
    width: 100%;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    width: 100%;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    width: 100%;
  }
`;

const TypeCard = styled.div`
  background: white;
  width: 90%;
  padding: 20px;
  border-radius: 10px;

  border: 1px solid #ccc;
  @media screen and (max-width: 320px) {
    width: 100%;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    width: 100%;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    width: 100%;
  }
`;

const Butt = styled(Button)`
  background: transparent !important;
  color: ${Colors.deepBlue} !important;
  border: 1px solid ${Colors.deepBlue} !important;
`;

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;

  .word-counter {
    position: absolute;
    bottom: 8px;
    left: 10px;
    font-size: 12px;
    color: #999;
  }
`;

const StyledQuill = styled(ReactQuill)`
  .ql-container {
    width: 100%;
    height: 50vh !important;
  }
  .ql-editor {
    min-height: 150px;
    padding-bottom: 30px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;

  .counter {
    position: absolute;
    bottom: 8px;
    left: 10px;
    font-size: 12px;
    color: #999;
  }
`;
