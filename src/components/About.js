import React from "react";
import styled from "styled-components";
import { StackedButton, IconItem } from ".";
import { 
  FaHtml5, 
  FaCss3, 
  FaReact,
  FaPython,
  FaNodeJs,
} from 'react-icons/fa'
import { 
  SiDjango, 
  SiGatsby,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiPostman,
  SiMaterialui,
  SiJavascript,
  SiBootstrap,
  SiGithubactions,
  SiHeroku,
  SiFigma,
  SiTypescript
} from 'react-icons/si'
import { Link } from "gatsby";

export const About = () => {
  return ( 
    <AboutStyled>

      

      <div className="s-1">
        <div className="s-1-header">
          <h1>hello! my name is <span>alex</span>,</h1>
          <Link to="/contact">
            <StackedButton text={"Let's Connect"} />
          </Link>
        </div>
        <p className="summary">I am a full-stack developer with a broad set of technical and personal skills applicable across various industries and roles; graduated with a BA in Mathematics Education and General Assembly’s SEI Immersive. Reliable, results-driven, user-focused philosophy, proactive problem solver, and cooperative team player.</p>
      </div>
      <div className="s-2">
        <div className="row-1">
          <IconItem icon={FaHtml5} text={"HTML5"} />
          <IconItem icon={FaCss3} text={"CSS3"} />
          <IconItem icon={SiJavascript} text={"JAVASCRIPT"} />
          <IconItem icon={SiTypescript} text={"TYPESCRIPT"} />
          <IconItem icon={FaPython} text={"PYTHON"} />
          <IconItem icon={FaNodeJs} text={"NODE"} />

        </div>
        <div className="row-2">
          <IconItem icon={SiExpress} text={"EXPRESS"} />
          <IconItem icon={FaReact} text={"REACT"} />
          <IconItem icon={SiGatsby} text={"GATSBY"} />
          <IconItem icon={SiDjango} text={"DJANGO"} />
          <IconItem icon={SiMongodb} text={"MONGODB"} />
          <IconItem icon={SiPostgresql} text={"POSTGRESQL"} />
        </div>
        <div className="row-3">
          <IconItem icon={SiFigma} text={"FIGMA"} />
          <IconItem icon={SiMaterialui} text={"MATERIALUI"} />
          <IconItem icon={SiBootstrap} text={"BOOTSTRAP"} />
          <IconItem icon={SiGithubactions} text={"GITHUB"} />
          <IconItem icon={SiHeroku} text={"HEROKU"} />
          <IconItem icon={SiPostman} text={"POSTMAN"} />
        </div>
      </div>
    </AboutStyled>
   );
}

const AboutStyled = styled.div`
  background-color: ${props => props.theme.colors.accent1};
  color: ${props => props.theme.colors.light3};
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5rem 2rem;
  & .s-1 {
    margin-bottom: 3rem;
    & .s-1-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      padding-right: 1.5rem;
      & h1 {
        font-size: 2rem;
        & span {
          color: ${props => props.theme.colors.light2};
        }
      }
    }
    & .summary {
      font-size: 1.1rem;
      line-height: 1.5rem;
    }
  }
  & .s-2 {
    margin: 1rem 0;
    overflow: hidden;
    & .row-1, .row-2, .row-3 {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      &:not(:last-child) {
        margin-bottom: 2.625rem;
      }
    }
  }

  

  @media ${props => props.theme.breakpoints.tablet} {
    padding: 3rem 1rem;
    & .s-1 {
      & .s-1-header {

      }
      & .summary {
        font-size: 1.1rem;
        line-height: 1.4rem;
      }
    }
    & .s-2 {
    }
  }

  @media ${props => props.theme.breakpoints.mobile} {
    padding: 1rem;
    & .s-1 {
      margin-bottom: 1.375rem;
      & .s-1-header {
        margin-bottom: 1rem;
        padding-right: 1rem;
        & h1 {
          font-size: 1rem;
        }
      }
      & .summary {
        font-size: 0.925rem;
        line-height: 1.2rem;
      }
    }
    & .s-2 {
    }
  }
`;