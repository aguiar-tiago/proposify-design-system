import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body {
    display: flex; // firefox
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.fonts.montserrat};
    background: ${props => props.theme.colors.global};
    min-height: 100%;
    min-height: -webkit-fill-available;
  }

  #root {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    min-height: -webkit-fill-available;
  }

  * {
    box-sizing: border-box;
  }

  input:focus, textarea:focus, select:focus {
    outline: none;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
