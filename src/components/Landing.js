import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { RiArrowDownSLine } from 'react-icons/ri'

export const Landing = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);
  const words = ['Welcome!', 'portfolio']

  // typeWriter
  useEffect(() => {
    if (index === words.length) return;
    if (subIndex === words[index].length + 1 && 
        index !== words.length - 1 && !reverse ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 :
                150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return ( 
    <LandingStyled>
      <div className='title'>
        <h1>{`${words[index].substring(0, subIndex)}`}</h1>
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
      font-family: ${props => props.theme.fonts.main};
      font-size: 8rem;
      text-transform: uppercase;
    }
    & .blink {
      background-color: ${props => props.theme.colors.dark1};
      height: 9.5rem;
      width: 3.75rem;
      transform: translate(0, -15%);
      animation: blink 600ms step-start infinite;
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
    50%{opacity: 0;}
  }
`;