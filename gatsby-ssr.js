import * as React from "react"
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from './src/styles'
import Theme from './src/themes/theme';
import { MainLayout } from "./src/Layouts";

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={Theme} >
      <GlobalStyles />
      <MainLayout>
        {element}
      </MainLayout>
    </ThemeProvider>
  )
};

