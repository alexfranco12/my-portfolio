import * as React from "react"
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from './src/styles'
import Theme from './src/themes/theme';

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={Theme} >
      <GlobalStyles />
      {element}
    </ThemeProvider>
  )
};

