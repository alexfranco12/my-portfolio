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
  display: flex;
  & :not(:last-child) {
    margin-right: 2rem;
  }
`;