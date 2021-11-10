import React from "react";
import styled from "styled-components";

export const SoftwareItem = ({ title, subTitle, description, projects }) => {
  return ( 
    <SoftwareItemStyled>
      <h2>{title}</h2>
      <h4>{subTitle}</h4>
      <p className="description">{description}</p>
      <h4>Developed Projects</h4>
      <div className="project-list">
        {projects.map((project, i) => (
          <p className="project" key={i}>- {project}</p>
        ))}
      </div>
      
    </SoftwareItemStyled>
   );
};

const SoftwareItemStyled = styled.div`
  & .description {
    margin-bottom: 1rem;
  }
  & .project-list {
    padding: 0 1rem;
    & .project {
      line-height: 1.25rem;
      margin-bottom: 1rem;
    }
  }
`;