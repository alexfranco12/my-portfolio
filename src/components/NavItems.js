import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export const NavItems = () => {
  return (
    <NavItemsStyled>
      <Link to="/about">about.</Link>
      <Link to="/#projects">projects.</Link>
      <Link to="/resume">resume.</Link>
      <p>contact.</p>
    </NavItemsStyled>
   );
}
 
const NavItemsStyled = styled.div`
  display: flex;
  & :not(:last-child) {
    margin-right: 2rem;
  }
`;