import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 :root {


  --main-color-darkest: #279EFF;
  --main-color-dark: #40F8FF;
  --main-color-light: #D5FFD0;

  --second-color-dark: #BB2525;
  --second-color-light: #FF6969;

  --text-color-dark: #0C356A;
  --text-color-dark-translucent: #0C356A80;
  --text-color-light: #ADD8E6;

  --background-color-white : #fff;



  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
   

 
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Roboto",sans-serif;
    color: var(--text-color-dark);
   
   

  }

  *:disabled {
  cursor: not-allowed;
}
}
`;
export default GlobalStyles;
