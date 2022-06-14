import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: none;
    text-decoration: none;
    list-style: none;
    font-family: 'Poppins', sans-serif;
    outline: 0;
  }

  button {
    cursor: pointer;
  }
`;
export default GlobalStyle;
