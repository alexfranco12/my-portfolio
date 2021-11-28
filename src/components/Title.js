import React from 'react';
import styled from 'styled-components'

export const Title = ({ title }) => {
  return ( 
    <TitleStyled id={title}>
      <h1>
        {title}.
        <span>
          {title}.
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
    margin-bottom: 1rem;
    z-index: 10;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 10rem;
      height: .4rem;
      background-color: ${props => props.theme.colors.accent1};
      border-radius: 15px;
    }
    span {
      font-size: 1em;
      font-weight: 700;
      color: ${props => props.theme.colors.dark2};
      opacity: .1;
      position: absolute;
      left: 1%;
      top: 8%;
    }
  }

  @media ${props => props.theme.breakpoints.tablet} {
  
  }

  @media ${props => props.theme.breakpoints.mobile} {
    h1 {
      font-size: 2.1rem;
      span {
        font-size: 2.8rem;
      }
    }
  }
`;