import React from "react";
import styled from "styled-components";

export const EducationItem = ({ title, subTitle }) => {
  return ( 
    <EducationItemStyled>
      <h2>{title}</h2>
      <h4>{subTitle}</h4>
    </EducationItemStyled>
   );
};

const EducationItemStyled = styled.div`
  margin-bottom: 2rem;
`;