import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-size: 10px;
    font-family: 'Hind', sans-serif;
    margin-top: 50px;
    background-color: rgb(27, 27, 27);
  }
`;

export default GlobalStyle;
