import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavItems } from "./NavItems";
import { RiMenu4Fill } from 'react-icons/ri'
import { Link } from "gatsby";

export const NavBar = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return ( 
    <NavBarStyled>
      <Link to="/">
        {width < 770 ? <h1>af</h1> : <h1>alexander franco</h1>}
      </Link>
      {width < 430 ? <RiMenu4Fill /> : <NavItems />}
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
    text-decoration: none;
    color: black;
    & h1 {
      margin-left: 1rem;
    }
  }
  

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`;