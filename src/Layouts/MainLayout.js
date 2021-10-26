import React from "react";
import styled from "styled-components";
import { InnerLayout } from ".";
import { Footer, NavBar, Seo } from '../components'

export const MainLayout = ({ children }) => {
  return ( 
    <MainLayoutStyled>
      <Seo />
      <NavBar />
      <InnerLayout>
        {children}
      </InnerLayout>
      <Footer />
    </MainLayoutStyled>
  );
}

const MainLayoutStyled = styled.div`
  background-color: ${props => props.theme.colors.light1};
  display: grid;
  grid-template-columns: 0 repeat(12, minmax(auto, 1fr)) 0;
  grid-template-rows: 4.8rem auto;
  gap: 0 2rem;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: 0 repeat(6, 1fr) 0 ;
    grid-gap: 0 1rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 0 repeat(6, 1fr) 0;
  }
`;