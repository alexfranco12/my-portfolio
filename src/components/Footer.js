import React from "react";
import styled from "styled-components";
import { RiCopyleftLine } from 'react-icons/ri'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'

export const Footer = () => {
  return ( 
    <FooterStyled>
      <div className="hire-me">
        <p>Want to hire me?</p>
        <h3>CONTACT ME.</h3>
      </div>
      <div className="social">
        <h3>Connect With Me</h3>
        <div className="links">
          <a href="https://www.linkedin.com/in/alexander-franco" target="_blank" rel="noopender noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/alexfranco12" target="_blank" rel="noopender noreferrer">
            <FaGithubSquare />
          </a>
        </div>
      </div>
      <div className="copyright">
        <p>
          <RiCopyleftLine/> 2021 Alexander Franco
        </p>
      </div>
      
    </FooterStyled>
   );
}
 
const FooterStyled = styled.div`
  grid-column: 2 / span 12;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  min-height: 11.25rem;
  padding: 3rem 0;
  color: ${props => props.theme.colors.dark2};
  & .hire-me {
    grid-column: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }
  & .social {
    grid-column: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & a {
      margin: auto 1rem;
      & svg {
        font-size: 2rem;
        color: ${props => props.theme.colors.dark1};
      }
    }

  }
  & .copyright {
    grid-column: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`;