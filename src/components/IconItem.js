import React from "react";
import styled from "styled-components";

export const IconItem = ({ icon, text }) => {
  const Icon = icon;

  return ( 
    <IconItemStyled>
      <Icon />
      <p>{text}</p>
    </IconItemStyled>
   );
}

const IconItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  & p {
    text-transform: lowercase;
  }
  & svg {
    font-size: 2rem;
    margin-bottom: .615rem;
  }

  @media ${props => props.theme.breakpoints.tablet} {

  }

  @media ${props => props.theme.breakpoints.mobile} {  
    & p {
      font-size: .75rem;
    }
    & svg {
      font-size: 1.5rem;
      margin-bottom: .615rem;
    }
  }
`;