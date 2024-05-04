import { createGlobalStyle } from "styled-components";

const GlobalStyles=createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-weight: 400;
    }

    body {
        font-family: 'Noto Sans KR', sans-serif;
    }

    html, body, #root {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default GlobalStyles;