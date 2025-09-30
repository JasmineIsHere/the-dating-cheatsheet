import { createGlobalStyle } from 'styled-components'
import softLavenderTheme from './utils/colors';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    color: ${softLavenderTheme.primary}; /* Default text color */
    background-color: ${softLavenderTheme.background}; 
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;