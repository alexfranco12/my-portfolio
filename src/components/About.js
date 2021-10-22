import React from "react";
import styled from "styled-components";
import { Button, NeonButton, Skill } from ".";
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
} from 'react-icons/si'

export const About = () => {
  return ( 
    <AboutStyled>
      <div className="s-1">
        <div className="s-1-header">
          <h1>Hello! I'm <span>Alexander Franco</span></h1>
          <Button text={"Let's Connect!"} />
        </div>
        <h2>I'm a passionate full-stack web developer with a broad set of technical and personal skills applicable across various industries and roles. I am a reliable, result-driven, and cooperative team player with a user-focused philosophy.</h2>
      </div>
      <h1>SKILLS:</h1>
      <div className="s-2">
        <Skill icon={FaHtml5} text={"HTML5"} />
        <Skill icon={FaCss3} text={"CSS3"} />
        <Skill icon={SiJavascript} text={"JAVASCRIPT"} />
        <Skill icon={FaPython} text={"PYTHON"} />
        <Skill icon={FaNodeJs} text={"NODE"} />
        <Skill icon={SiExpress} text={"EXPRESS"} />
        <Skill icon={FaReact} text={"REACT"} />
        <Skill icon={SiGatsby} text={"GATSBY"} />
        <Skill icon={SiDjango} text={"DJANGO"} />
        <Skill icon={SiMongodb} text={"MONGODB"} />
        <Skill icon={SiPostgresql} text={"POSTGRESQL"} />
        <Skill icon={SiMaterialui} text={"MATERIALUI"} />
        <Skill icon={SiBootstrap} text={"BOOTSTRAP"} />
        <Skill icon={SiGithubactions} text={"GITHUB"} />
        <Skill icon={SiHeroku} text={"HEROKU"} />
        <Skill icon={SiPostman} text={"POSTMAN"} />
      </div>
    </AboutStyled>
   );
}

const AboutStyled = styled.div`
  grid-column: 2 / span 12;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  padding: 5rem;
  & .s-1 {
    margin-bottom: 3rem;
    & .s-1-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      padding-right: 1.5rem;
      & h1 {
        & span {
          color: purple;
        }
      }
    }
  }
  & .s-2 {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 1rem;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`;