import * as React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Theme from './src/themes/theme';

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={Theme} >
      <GlobalStyles />
      {element}
    </ThemeProvider>
  )
}

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body, html {
    font-family: ${props => props.theme.fonts.main};
    height: 100%;
    width: 100%;
  }
`;