import React from "react";
import styled from "styled-components";
import { NavBar, Seo } from '../components'

export const MainLayout = ({ children }) => {
  return ( 
    <MainLayoutStyled>
      <Seo />
      <NavBar />
      {children}
    </MainLayoutStyled>
  );
}

const MainLayoutStyled = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
  grid-template-rows: 7.8rem auto;
  gap: 0 2rem;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: 2rem repeat(6, 1fr) 2rem ;
    grid-gap: 0 1rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem ;
  }
`;