import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    a{
        text-decoration: none;
        color:inherit
    }
    body,*{
        font-family: "Noto Sans KR", sans-serif;
    }
    button{
        cursor:pointer;
    }
    input{
        outline: none;
    }
    li{
        list-style: none;
    }
`;

export default GlobalStyles;