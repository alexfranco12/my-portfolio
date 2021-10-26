import React from 'react';
import styled from 'styled-components'

export const Title = ({ title, span }) => {
  return ( 
    <TitleStyled>
      <h1>
        {title}
        <span>
          {span}
        </span>
      </h1>
    </TitleStyled>
   );
}
 
const TitleStyled = styled.div`
  position: relative;
  h1 {
    color: ${props => props.theme.colors.main1};
    font-size: 3.1rem;
    font-weight: 700;
    text-transform: uppercase;
    position: relative;
    padding-bottom: .5rem;
    margin-bottom: 2rem;
    z-index: 10;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 9.4rem;
      height: .29rem;
      background-color: white;
      border-radius: 15px;
    }
    span {
      font-size: 4rem;
      font-weight: 400;
      color: ${props => props.theme.colors.dark2};
      opacity: .16;
      position: absolute;
      left: 1%;
      top: 10%;
    }
  }
`;