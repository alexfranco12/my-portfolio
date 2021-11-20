import React from "react";
import styled from "styled-components";
import { ProjectItem, Title } from "..";

export const Projects = () => {
  return ( 
    <ProjectsStyled>
      <div className="curve">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" className="shape-fill"></path>
        </svg>
      </div>

      <Title title={"projects"} />
      <div className="projects">
        <ProjectItem
          title={'Paint'}
          date={'November 23, 2021'}
          image={"paint.png"}
          excerpt={"An app that lets users express their creativity in a visual format."}
          repo={'https://github.com/alexfranco12/mintbean-hackathon-november-2021'}
          site={'https://hungry-lalande-f9b7b7.netlify.app/'}
        />
        <ProjectItem
          title={'Dog Days'}
          date={'September 21, 2021'}
          image={"dog-days.png"}
          excerpt={"an online service to help connect people looking to adopt a dog with available dogs in their area."}
          repo={'https://github.com/alexfranco12/hackathon-group2-sep2021-frontend'}
          site={null}
        />
        <ProjectItem
          title={'Ninja Survival'}
          date={'June 14, 2021'}
          image={'ninja-game.png'}
          excerpt={"a lone green ninja tries to survive in a world full of monsters."}
          repo={'https://github.com/alexfranco12/survival-ninja-game'}
          site={'https://alexfranco12.github.io/survival-ninja-game/game.html'}
        />
        <ProjectItem
          title={'Lettuce Eat'}
          date={'June 14, 2021'}
          image={'lettuce-eat.jpg'}
          excerpt={"a platform for the vegan community"}
          repo={'https://github.com/alexfranco12/lettuce_eat_frontend'}
          site={null}
        />
        <ProjectItem
          title={'Purlieu'}
          date={'June 14, 2021'}
          image={'purlieu.png'}
          excerpt={"a local search and discovery app that provides recommendations of places to go nearby."}
          repo={'https://github.com/alexfranco12/Project3-Frontend'}
          site={null}
        />
        <ProjectItem
          title={'Mise En Place'}
          date={'June 14, 2021'}
          image={'mise-en-place.png'}
          excerpt={"a Recipe App that uses SPOONACULAR's API which allows me to search through a number of recipes using advanced filtering."}
          repo={'https://github.com/alexfranco12/mise-en-place'}
          site={'https://compassionate-shirley-0ece4e.netlify.app/'}
        />
        <ProjectItem
          title={'Towers of Hanoi'}
          date={'June 14, 2021'}
          image={'hanoi.jpg'}
          excerpt={"a puzzle which consists of three rods and a number of disks of different diameters, which can slide onto any rod."}
          repo={'https://github.com/alexfranco12/towers-of-hanoi'}
          site={'https://alexfranco12.github.io/towers-of-hanoi/'}
        />
      </div>
    </ProjectsStyled>
   );
}

const ProjectsStyled = styled.div`
  position: relative;
  padding: 3rem 2rem;
  & h1 {
    font-family: ${props => props.theme.fonts.title};
  }
  & .projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 4rem;
  }
  & .curve {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
    & svg {
      position: relative;
      display: block;
      width: calc(140% + 1.3px);
      height: 113px;
    }
    & .shape-fill {
      fill: ${props => props.theme.colors.accent1};
    }
  }


  
`;