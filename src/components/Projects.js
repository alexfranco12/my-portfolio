import React from "react";
import styled from "styled-components";
import { ProjectItem, Title } from ".";
import dog_days from '../images/Dog-Days.png'
import ninja_game from '../images/ninja-game.png'
import hanoi from '../images/hanoi.jpg'
import mise from '../images/mise-en-place.png'
import lettuce from '../images/lettuce-eat.jpg'
import purlieu from '../images/purlieu.png'

export const Projects = () => {
  return ( 
    <ProjectsStyled>
      <Title id="projects" title={"projects"} span={"projects"} />
      <div className="projects">
        <ProjectItem
          title={'Dog Days'}
          date={'September 21, 2021'}
          image={dog_days}
          excerpt={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate corporis laborum laboriosam deleniti id aliquam velit, esse quod cum."}
          repo={''}
        />
        <ProjectItem
          title={'Ninja Survival'}
          date={'June 14, 2021'}
          image={ninja_game}
          excerpt={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate corporis laborum laboriosam deleniti id aliquam velit, esse quod cum."}
          repo={''}
        />
        <ProjectItem
          title={'Lettuce Eat'}
          date={'June 14, 2021'}
          image={lettuce}
          excerpt={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate corporis laborum laboriosam deleniti id aliquam velit, esse quod cum."}
          repo={''}
        />
        <ProjectItem
          title={'Purlieu'}
          date={'June 14, 2021'}
          image={purlieu}
          excerpt={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate corporis laborum laboriosam deleniti id aliquam velit, esse quod cum."}
          repo={''}
        />
        <ProjectItem
          title={'Mise En Place'}
          date={'June 14, 2021'}
          image={mise}
          excerpt={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate corporis laborum laboriosam deleniti id aliquam velit, esse quod cum."}
          repo={''}
        />
        <ProjectItem
          title={'Towers of Hanoi'}
          date={'June 14, 2021'}
          image={hanoi}
          excerpt={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate corporis laborum laboriosam deleniti id aliquam velit, esse quod cum."}
          repo={'https://github.com/alexfranco12/towers-of-hanoi'}
        />
      </div>
    </ProjectsStyled>
   );
}

const ProjectsStyled = styled.div`
  margin: 2rem auto;
  padding: 3rem 2rem;
  & .projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 4rem;
  }
`;