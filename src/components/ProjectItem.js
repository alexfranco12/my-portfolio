import React from "react";
import styled from "styled-components";
import { VscGithub } from "react-icons/vsc"

export const ProjectItem = ({ title, date, image, excerpt, repo}) => {
  return ( 
    <ProjectItemStyled>
      <div 
        className="card"
        style={{backgroundImage: `url(${image}`}}
      >
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-body">
            {excerpt}
          </p>
          <a href={repo} className="button" target="_blank" rel="noopender noreferrer">
            <VscGithub />
          </a>
        </div>
      </div>
    </ProjectItemStyled>
   );
}
 
const ProjectItemStyled = styled.div`
  margin-bottom: 2rem;
  line-height: 1.5;
  & .card {
    color: ${props => props.theme.colors.light1};
    background-size: cover;
    background-color: ${props => props.theme.colors.dark2};
    padding: 4rem 0 0;
    max-width: 36ch;
    overflow: hidden;
    border-radius: 0.5rem;
    & .card-content {
      --padding: 1.5rem;
      padding: var(--padding);
      background: linear-gradient( 
        hsl(0 0% 0% / 0),
        hsl(0 0% 0% / .6) 20%,
        hsl(0 0% 0% / 1)
      );
      & .card-title {
        position: relative;
        width: max-content;
        &::after {
          content: "";
          position: absolute;
          height: 4px;
          width: calc(100% + var(--padding));
          left: calc(var(--padding)*-1);
          bottom: -2px;
          background: ${props => props.theme.colors.accent1};
        }
      }
      & .card-body {
        margin: 1rem auto;
      }
      & .button {
        display: flex;
        justify-content: center;
        justify-items: center;
        cursor: pointer;
        display: inline;
        text-decoration: none;
        color: ${props => props.theme.colors.light1};
        background-color: ${props => props.theme.colors.accent1};
        padding: 0.25rem 1.25rem;
        border-radius: 0.25rem;
        &:hover,
        &:focus {
          background-color: ${props => props.theme.colors.main3};
        }
      }
    }

  }

  @media (hover) {
    & .card {
      transition: transform 500ms ease;
      & .card-content {
        transform: translateY(65%);
        transition: transform 400ms ease;
        & .card-title::after {
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 500ms ease;
          transition-delay: 500ms;
        }
        & *:not(.card-title) {
          opacity: 0;
          transition: opacity 500ms linear;
        }
      }
      &:hover,
      &:focus-within {
        transform: scale(1.05);
      }
    }

    .card:focus-within .card-content {
      transition-duration: 0s;
    }

    .card:hover .card-content,
    .card:focus-within .card-content {
      transform: translateY(0);
      transition-delay: 200ms;
      .card-title::after {
        transform: scaleX(1);
      }
      & *:not(.card-title) {
        opacity: 1;
        transition-delay: 600ms;
      }
    }
  }

  @media ${props => props.theme.breakpoints.tablet} {
    line-height: 1.2rem;
    & .card {
      padding: 6rem 0 0;
      max-width: 28ch;
      & .card-content {
        & .card-title::after {
          bottom: -10px;
        }
      }
    }
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
      transition-delay: 0.01ms !important;
    }
  }
`;