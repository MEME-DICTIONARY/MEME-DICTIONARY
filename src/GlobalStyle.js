import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    body{
        font-family: "Noto Sans KR", sans-serif;
    }
    a{
        text-decoration: none;
        color:inherit;
    }
    button{
        cursor:pointer;
    }
    input{
        outline: none;
        &::placeholder{
            font-family: "Noto Sans KR", sans-serif;
        }
    }
    li{
        list-style: none;
    }
`;

export default GlobalStyles;
