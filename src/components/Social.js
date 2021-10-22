import React from "react";
import styled from "styled-components";

export const Social = ({ icon, href }) => {
  const Icon = icon;

  return ( 
    <SocialStyled>
      <a href={href} target="_blank" rel="noopender noreferrer">
        <Icon />
      </a>
    </SocialStyled>
   );
}

const SocialStyled = styled.div`
  & a {
    & svg {
      font-size: 2.5rem;
      color: purple;
      &:hover, 
      &:focus {
        filter: brightness(50%)
      }
    }
  }
  
`;