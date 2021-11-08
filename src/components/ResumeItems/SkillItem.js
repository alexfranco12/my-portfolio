import React from "react";
import styled from "styled-components";

export const SkillItem = ({ title, skills }) => {
  return ( 
    <SkillItemStyled>
      <h4>{title}</h4>
      <div className="skill-list">
        {skills.map(item => (
          <p className="skill">{item}.</p>
        ))}
      </div>
    </SkillItemStyled>
   );
};  

const SkillItemStyled = styled.div`
  width: 100%;
  & .skill-list {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    & .skill {
      margin: 0 0.5rem 0.5rem 0.5rem;
    }
  }
`;