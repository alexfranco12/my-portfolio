import React from "react";
import styled from "styled-components";

export const HackathonItem = ({ title, date, description }) => {
  return ( 
    <HackathonItemStyled>
      <h4>{title} | {date}</h4>
      <p>{description}</p>
    </HackathonItemStyled>
   );
};

const HackathonItemStyled = styled.div`
  margin: 1rem auto;
`;