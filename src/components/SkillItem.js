import React from "react";
import styled from "styled-components";

export const SkillItem = ({ icon, text }) => {
  const Icon = icon;

  return ( 
    <SkillItemStyled>
      <Icon />
      <p>{text}</p>
    </SkillItemStyled>
   );
}

const SkillItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & p {
    font-family: ${props => props.theme.fonts.button};
    text-transform: lowercase;
  }
  & svg {
    font-size: 2.25rem;
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