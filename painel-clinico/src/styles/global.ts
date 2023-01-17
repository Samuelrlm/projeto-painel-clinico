import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        overflow: none;
        font-family: 'Noto Sans', sans-serif;
        background: #e0e0e0;
    }
`