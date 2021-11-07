import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { VscGithub } from "react-icons/vsc"

import BackgroundImage from 'gatsby-background-image'

export const ProjectItem = ({ title, date, image, excerpt, repo}) => {
  const data = useStaticQuery(graphql`
    query getAllImages {
      allImageSharp {
        nodes {
          fluid {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const getImage = () => {
    const asArray = Object.entries(data.allImageSharp.nodes)
    const filtered = asArray.filter(node => node[1].fluid.originalName === image)
    return (filtered[0][1].fluid)
  }
  

  return ( 
    <ProjectItemStyled>
      <BackgroundImage
        Tag="section"
        className="card"
        fluid={getImage()}
        backgroundColor={`#040e18`}
      >
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-body">
            {excerpt}
          </p>
          <div className="button">
            <a 
              href={repo} 
              target="_blank" 
              rel="noopender noreferrer"
              > <VscGithub />
            </a>
          </div>
        </div>
      </BackgroundImage>
    </ProjectItemStyled>
   );
}
 
const ProjectItemStyled = styled.div`
  margin-bottom: 2rem;
  line-height: 1.5;
  & .card {
    color: ${props => props.theme.colors.light2};
    background-size: cover;
    background-position: bottom center;
    background-color: ${props => props.theme.colors.dark2};
    padding: 4rem 0 0;
    max-width: 42ch;
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
        cursor: pointer;
        width: 25%;
        text-decoration: none;
        background-color: ${props => props.theme.colors.accent1};
        padding: 0.25rem 1.25rem;
        border-radius: 0.25rem;
        & a {
          display: flex;
          justify-content: center;
          justify-items: center;
          margin: .175rem auto;
          & svg {
            color: ${props => props.theme.colors.light2};
          }
        }
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