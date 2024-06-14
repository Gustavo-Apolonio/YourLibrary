import 'bootstrap/dist/css/bootstrap.css';
import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
  html, body {
    margin: 0px;
    padding: 0px;

    box-sizing: border-box;
    
    background-color: #f5f5f5;
    
    font-size: 14px;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0px;
    padding: 0px;
  }

  input {
    background-color: #f5f5f5;
  }

  button:focus-visible, a:focus-visible {
    outline-offset: 0px;
    outline: none;
  }

  * {
    font-family: "Lexend", sans-serif;
    font-optical-sizing: auto;
    font-weight: 100;
    font-style: normal;
  }

  *::-webkit-scrollbar {
    width: 0.8em;
  }

  *::-webkit-scrollbar-track {
    background-color: #bbb;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #f0f0f0;
  }
`;

export default globalStyle;