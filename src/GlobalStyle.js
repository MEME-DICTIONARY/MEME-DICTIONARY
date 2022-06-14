import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  html,
  body {
    max-width: 100vw;
    min-height:100vh;
    margin: 0 auto;
    font-family: "Noto Sans KR", sans-serif;
  }
  
  * {
    box-sizing: border-box;
  }
  button {
    cursor: pointer;
    border: none;
    outline: none;
    -webkit-appearance: none;
    border-radius: 0;
    padding: 0;
  }
  input {
    &::placeholder{
            font-family: "Noto Sans KR", sans-serif;
        }
  }
  input:focus {
    outline: none;
  }
  textarea {
    box-sizing: border-box;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
  textarea:focus {
    outline: none;
  }
  a {
    text-decoration:none;
    color: inherit;
    &:hover{
      color:inherit;
    }
  }
  input[disabled] {
    background-color: white;
  }
`;

export default GlobalStyle;
