import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        width: 700px;
        height: 100vh;
        margin: auto;
    }
`;

export default GlobalStyle;
