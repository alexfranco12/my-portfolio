import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HamburgerMenu, NavItems } from "..";

import { Link } from "gatsby";

export const NavBar = () => {
  const isBrowser = typeof window !== 'undefined'
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0)

  useEffect(() => {
    if (!isBrowser) return false
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[isBrowser]);

  return ( 
    <NavBarStyled>
      <Link to="/">
        { width > 770 
          ? <h1>alexander franco</h1>
          : <h1>af</h1> 
        }
      </Link>
      { width > 600 
        ? <NavItems />
        : <HamburgerMenu />
      }
    </NavBarStyled>
   );
}

const NavBarStyled = styled.div`
  grid-column: 2 / span 12;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & a {
    color: ${props => props.theme.colors.dark1};
    & h1 {
      margin-left: 1rem;
    }
  }
  

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
    padding-right: 1.5rem;
  }
`;