import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #121212;
    color: #ffffff;
    font: 400 16px Roboto, sans-serif;
  }

  button{
    cursor: pointer;
  }
`;