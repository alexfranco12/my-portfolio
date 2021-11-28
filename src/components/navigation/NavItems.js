import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export const NavItems = () => {
  return (
    <NavItemsStyled>
      <Link to="/#projects">projects.</Link>
      <Link to="/resume">resume.</Link>
      <Link to="/contact">contact.</Link>
    </NavItemsStyled>
   );
}
 
const NavItemsStyled = styled.div`
  & a {
    position: relative;
    color: ${props => props.theme.colors.dark1};
    z-index: 5;
    & :not(:last-child) {
      margin-right: 2rem;
    }
    &::before {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 0;
      background-color: ${props => props.theme.colors.main1};
      transition: All 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
      opacity: 0.45;
    }
    &:hover::before{
      height: 25%;
    }  
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 5 / span 1;
  }
`;