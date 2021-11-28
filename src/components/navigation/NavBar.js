import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HamburgerMenu, NavItems } from "..";
import { MdOutlineLightMode } from 'react-icons/md'
import { Link } from "gatsby";

export const NavBar = ({ setDarkMode }) => {
  return ( 
    <NavBarStyled>
      <Link to="/" className="name">
        <h1 className="long-name">alexander franco</h1>
        <h1 className="short-name">af</h1> 
      </Link>

      <div
        className="light-dark-mode"
        role="button"
        onClick={() => setDarkMode(prev => !prev)}
        onKeyDown={() => setDarkMode(prev => !prev)}
        tabIndex="0"
      > <MdOutlineLightMode />
      </div>

      <div className="nav-items"><NavItems /></div>
      <div className="hamburger"><HamburgerMenu /></div> 
    </NavBarStyled>
   );
}

const NavBarStyled = styled.div`
  display: grid;
  grid-column: 2 / span 12;
  grid-row: 1 / 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  & .name {
    color: ${props => props.theme.colors.dark1};
    position: relative;
    & h1 {
      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0;
        background-color: ${props => props.theme.colors.main1};
        transition: All 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        opacity: 0.45;
      }
      &:hover::before{
        height: 15%;
      }
    }
  }
  & .light-dark-mode {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    & svg {
      font-size: 1.375rem;
      color: ${props => props.theme.colors.dark1};
    }
  }


  // ---- MEDIA RULES ----
  @media only screen and (min-width: 600px) {
    .short-name, .hamburger {
      display: none;
    }
  }

  @media only screen and (max-width: 600px) {
    .long-name, .nav-items {
      display: none;
    }
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    
  }
`;