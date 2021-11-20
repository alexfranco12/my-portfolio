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
  grid-column: 8 / span 4;
  grid-row: 1;
  display: flex;
  justify-content: end;
  align-items: center;
  & :not(:last-child) {
    margin-right: 2rem;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 5 / span 1;
  }
`;