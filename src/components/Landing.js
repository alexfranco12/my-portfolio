import React from 'react'
import styled from 'styled-components';
import { RiArrowDownSLine } from 'react-icons/ri'

export const Landing = () => {
  return ( 
    <LandingStyled>
      <div className="title">
        <h1>Portfolio</h1>
        <div className="blink" />
      </div>
      <div className="scroll-down">
        <p>scroll</p>
        <RiArrowDownSLine/>
      </div>
    </LandingStyled>
   );
}

const LandingStyled = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & .title {
    display: flex;
    transform: translateY(-45px);
    color: ${props => props.theme.colors.dark1};
    & h1 {
      font-size: 8rem;
      text-transform: uppercase;
    }
    & .blink {
      background-color: ${props => props.theme.colors.dark1};
      height: 9.5rem;
      width: 4rem;
      transform: translate(0, -15%);
      animation: blink 1.2s ease infinite;
    }
  }
  & .scroll-down {
    position: fixed;
    color: ${props => props.theme.colors.dark3};
    bottom: 0;
    transform: translateY(-20px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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