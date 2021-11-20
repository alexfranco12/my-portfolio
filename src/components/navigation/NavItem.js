import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export const NavItem = ({ href, text }) => {
  return ( 
    <NavItemStyled>
      <Link 
        to={href}
      >
        <span>{text}</span>
      </Link>
    </NavItemStyled>
   );
};

const NavItemStyled = styled.div`
  
`;