import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { RiArrowDownSLine } from 'react-icons/ri'

const words = ['portfolio']

export const Landing = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(1)

  // typewriter
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

    // timing for each letter.
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 :
                150, (parseInt(Math.random() * 350) + 100)));
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        let maxScroll = document.body.scrollHeight - window.innerHeight;
        if (currentScrollPos >= 0 && currentScrollPos+200 < maxScroll) {
          setScrollOpacity(1)
        } else {
          setScrollOpacity(0)
        }
      }
    }
  })

  return ( 
    <LandingStyled>
      <div className='title'>
        <h1>{`${words[index].substring(0, subIndex)}`}</h1>
        <span className="blink" />
      </div>
      <div 
        className="scroll-down"
        style={{ opacity: `${scrollOpacity}` }}
      > <p>scroll</p>
        <RiArrowDownSLine/>
      </div>

      <div className="curve">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>

    </LandingStyled>
  );
}

const LandingStyled = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 5;
  & .title {
    display: flex;
    transform: translateY(-45px);
    color: ${props => props.theme.colors.dark1};
    & h1 {
      font-family: ${props => props.theme.fonts.main};
      font-size: 7rem;
      text-transform: uppercase;
    }
    & .blink {
      background-color: ${props => props.theme.colors.dark1};
      height: 8rem;
      width: 3.5rem;
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

  & .curve {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
    & svg {
      position: relative;
      display: block;
      width: calc(130% + 1.3px);
      height: 59px;
    }
    & .shape-fill {
      fill: ${props => props.theme.colors.accent1};
    }
  }

  @media ${props => props.theme.breakpoints.tablet} {
    & .title {
      & h1 {
        font-size: 4rem;
      }
      & .blink {
        height: 4.25rem;
        width: 2rem;
        transform: translate(0, -5%);
      }
    }
  }

  @media ${props => props.theme.breakpoints.mobile} {
    & .title {
      & h1 {
        font-size: 2.5rem;
      }
      & .blink {
        height: 2.5rem;
        width: 1.2rem;
        transform: translate(0, -5%);
      }
    }
  }

  @keyframes blink {
    50%{opacity: 0;}
  }
`;