import React from "react";
import styled from "styled-components";

export const Skill = ({ icon, text }) => {
  const Icon = icon;

  return ( 
    <SkillStyled>
      <Icon />
      <p>{text}</p>
    </SkillStyled>
   );
}

const SkillStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.25rem .75rem;
  & svg {
    font-size: 1.5rem;
    margin-bottom: .875rem;
  }
`;