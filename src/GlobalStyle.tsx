import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing:border-box;
        background-color:lavender;
    }

    body {
        width: 700px;
        height:100vh;
        margin:auto;
    }
`;

export default GlobalStyle;
