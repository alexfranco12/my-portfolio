import React from "react";
import styled from "styled-components";
import { ProjectItem, Title } from "..";

export const Projects = () => {
  return ( 
    <ProjectsStyled>
      <Title title={"projects"} />
      <div className="projects">
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
          title={'Mise En Place'}
          date={'June 14, 2021'}
          image={'mise-en-place.png'}
          excerpt={"a recipe App that uses spoonacular's api which allows me to search through a number of recipes using advanced filtering."}
          repo={'https://github.com/alexfranco12/mise-en-place'}
          site={'https://compassionate-shirley-0ece4e.netlify.app/'}
        />
        <ProjectItem
          title={'Paint'}
          date={'November 23, 2021'}
          image={"paint.png"}
          excerpt={"an app that lets users express their creativity in a visual format."}
          repo={'https://github.com/alexfranco12/mintbean-hackathon-november-2021'}
          site={'https://hungry-lalande-f9b7b7.netlify.app/'}
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
`;