import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { InnerLayout } from ".";
import { Footer, NavBar, Seo } from '../components'
import { Light, Dark } from '../themes/colors'

export const MainLayout = ({ children }) => {
  const [ darkMode, setDarkMode ] = useState(false)
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    setTimeout(setIsLoading(false), 500)
  }, [])

  return ( 
    <ThemeProvider theme={darkMode ? Dark : Light} >
      { !isLoading && 
        <MainLayoutStyled>
          <Seo />
          <NavBar setDarkMode={setDarkMode} />
          <InnerLayout>
            {children}
          </InnerLayout>
          <Footer />
        </MainLayoutStyled> 
      }
    </ThemeProvider>
  );
}

const MainLayoutStyled = styled.div`
  background-color: ${props => props.theme.colors.light1};
  display: grid;
  grid-template-columns: 0 repeat(12, minmax(auto, 1fr)) 0;
  grid-template-rows: 4.8rem auto;
  gap: 0 2rem;
  min-width: 320px;
  

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: 0 repeat(6, 1fr) 0 ;
    grid-gap: 0 1rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
  }
`;