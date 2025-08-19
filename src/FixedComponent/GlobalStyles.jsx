import { createGlobalStyle } from "styled-components";
import { breakpoints } from "./BreakPoints";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0 !important;
    padding: 0 !important;
    font-family: 'Inter', sans-serif;
    font-optical-sizing: auto;
    min-height: 100%;
  }

  body.modal-open {
    overflow: hidden;
  }

  #root {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;

    @media (max-width: ${breakpoints.mobileL}) {
      font-size: 2rem;
    }

    @media (min-width: ${breakpoints.tablet}) {
      font-size: 2.8rem;
    }

    @media (min-width: ${breakpoints.desktop}) {
      font-size: 3rem;
    }
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;

    @media (max-width: ${breakpoints.mobileL}) {
      font-size: 1.5rem;
    }

    @media (min-width: ${breakpoints.tablet}) {
      font-size: 2.4rem;
      line-height: 1.3;
    }

    @media (min-width: ${breakpoints.desktop}) {
      font-size: 2.6rem;
      line-height: 1.4;
    }
  }

  h3, h4, h5 {
    font-weight: 600;

    @media (max-width: ${breakpoints.mobileL}) {
      font-size: 1rem;
    }

    @media (min-width: ${breakpoints.tablet}) {
      font-size: 1.1rem;
    }

    @media (min-width: ${breakpoints.desktop}) {
      font-size: 1.25rem;
    }
  }

  p {
    font-size: 1.125rem;
    line-height: 1.6;
    font-weight: 300;

    @media (max-width: ${breakpoints.mobileL}) {
      font-size: 0.9rem;
    }

    @media (min-width: ${breakpoints.tablet}) {
      font-size: 1rem;
    }

    @media (min-width: ${breakpoints.desktop}) {
      font-size: 1.15rem;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  article {
    font-size: 1rem;
    line-height: 1.8;
    text-align: justify;
  }

  small {
    font-size: 0.875rem;
  }

  strong {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  blockquote {
    font-size: 1.2rem;
    font-style: italic;
    border-left: 4px solid #ccc;
    padding-left: 1rem;
    margin: 1rem 0;
  }

  span {
    /* Optional base styling for spans if needed */
  }
`;

export default GlobalStyle;
