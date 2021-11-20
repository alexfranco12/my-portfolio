import React from "react";
import styled from "styled-components";

export const SkillItem = ({ title, skills }) => {
  return ( 
    <SkillItemStyled>
      <h4 className="title">{title}:</h4>
      <div className="skill-list">
        {skills.map((item, i) => (
          <p className="skill" key={i}>{item}.</p>
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
    margin-top: 0.5rem;
    & .skill {
      margin: 0 0.5rem 0.5rem 0.5rem;
    }
  }
`;