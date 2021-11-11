import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { InnerLayout } from ".";
import { Footer, NavBar, Seo } from '../components'
import { lightTheme, darkTheme } from '../themes/colors'
import { MdOutlineLightMode } from 'react-icons/md'

export const MainLayout = ({ children }) => {
  const [ darkMode, setDarkMode ] = useState(false)

  return ( 
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme} >
      <MainLayoutStyled>
          <Seo />
          <NavBar />
          <div 
            className="light-dark-mode"
            role="button"
            onClick={() => setDarkMode(!darkMode)}
            onKeyDown={() => setDarkMode(!darkMode)}
            tabIndex="0"
          > 
            <div className="icon"><MdOutlineLightMode /></div> 
          </div>
          
          <InnerLayout>
            {children}
          </InnerLayout>
          
          <Footer />
        </MainLayoutStyled> 
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
  & .light-dark-mode {
    grid-column: 6 / span 3;
    grid-row: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    & .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      & svg {
        font-size: 1.375rem;
        color: ${props => props.theme.colors.dark1};
      }
    }
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: 0 repeat(6, 1fr) 0 ;
    grid-gap: 0 1rem;
    & .light-dark-mode {
      grid-column: 3 / span 2;
    }
  }

  @media ${props => props.theme.breakpoints.mobile} {
    & .light-dark-mode {
      grid-column: 3 / span 4;
    }
  }
`;