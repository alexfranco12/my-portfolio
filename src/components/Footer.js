import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { RiCopyleftLine } from 'react-icons/ri'
import { SiGmail } from 'react-icons/si'
import { 
  FaLinkedin, 
  FaGithubSquare 
} from 'react-icons/fa'

export const Footer = () => {
  return ( 
    <FooterStyled>
      <div className="social">
        <h3>connect with me.</h3>
        <div className="links">
          <a href="https://www.linkedin.com/in/alexander-franco" target="_blank" rel="noopender noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/alexfranco12" target="_blank" rel="noopender noreferrer">
            <FaGithubSquare />
          </a>
          <Link to="/contact">
            <SiGmail />
        </Link>
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
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  min-height: 11.25rem;
  padding: 3rem 0;
  color: ${props => props.theme.colors.dark2};
  & .social {
    grid-column: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & h3 {
      margin-bottom: .5rem;
    }
    & a {
      margin: auto 1rem;
      & svg {
        font-size: 2rem;
        color: ${props => props.theme.colors.dark1};
      }
    }

  }
  & .copyright {
    grid-column: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.dark3};
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`;