import React from 'react'
import styled from 'styled-components';

export const Landing = () => {
  return ( 
    <LandingStyled>
      <div className="title">
        <h1>Portfolio</h1>
        <div className="blink" />
      </div>
    </LandingStyled>
   );
}

const LandingStyled = styled.div`
  height: 85vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & .title {
    display: flex;
    & h1 {
      font-size: 8rem;
      text-transform: uppercase;
    }
    & .blink {
      background-color: #000;
      height: 9.5rem;
      width: 4rem;
      transform: translate(0, -15%);
      animation: blink 1.2s ease infinite;
    }
  }

  @media ${props => props.theme.breakpoints.tablet} {
    .title {
      & h1 {
        font-size: 6rem;
      }
      & .blink {
        height: 7.25rem;
        width: 3rem;
      }
    }
  }

  @media ${props => props.theme.breakpoints.mobile} {
    .title {
      & h1 {
        font-size: 2.5rem;
      }
      & .blink {
        height: 3.5rem;
        width: 1.625rem;
      }
    }
  }

  @keyframes blink {
    0%{opacity: 1;}
    50%{opacity: 0;}
    100%{opacity: 1;}
  }
`;