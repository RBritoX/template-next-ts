import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Ubuntu:wght@300;400;500;700&display=swap');

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
  }

  html,
  body,
  #root {
    width: 100vw;
    height: 100vh;
    text-rendering: optimizeLegibility;
    -webkit-overflow-scrolling: touch;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.backgroundPrimary};
    transition: 0.3s;
  }

  body,
  input,
  button {
    font: 1.6rem 'Ubuntu', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
  }

  a:link {
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`;
