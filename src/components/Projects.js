import React from "react";
import styled from "styled-components";

export const Projects = () => {
  return ( 
    <ProjectsStyled>
      <h1>PROJECTS</h1>
      <div>
        <h1>Dog Days</h1>
        <p>September 21, 2021</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate corporis laborum laboriosam deleniti id aliquam velit, esse quod cum.</p>
        <div>
          <ul>
            <li>live demo</li>
            <li>github repository</li>
          </ul>
        </div>
      </div>
      <div>
        <h1>Ninja Survival</h1>
        <p>June 14, 2021</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate corporis laborum laboriosam deleniti id aliquam velit, esse quod cum.</p>
        <ul>
            <li>live demo</li>
            <li>github repository</li>
          </ul>
      </div>
      <div>
        <h1>Lettuce Eat</h1>
        <p>June 14, 2021</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate corporis laborum laboriosam deleniti id aliquam velit, esse quod cum.</p>
        <ul>
            <li>live demo</li>
            <li>github repository</li>
          </ul>
      </div>
      <div>
        <h1>Travel Site</h1>
        <p>June 14, 2021</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate corporis laborum laboriosam deleniti id aliquam velit, esse quod cum.</p>
        <ul>
            <li>live demo</li>
            <li>github repository</li>
          </ul>
      </div>
      <div>
        <h1>Mise En Place</h1>
        <p>June 14, 2021</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate corporis laborum laboriosam deleniti id aliquam velit, esse quod cum.</p>
        <ul>
            <li>live demo</li>
            <li>github repository</li>
          </ul>
      </div>
      <div>
        <h1>Towers of Hanoi</h1>
        <p>June 14, 2021</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate corporis laborum laboriosam deleniti id aliquam velit, esse quod cum.</p>
        <ul>
            <li>live demo</li>
            <li>github repository</li>
          </ul>
      </div>
    </ProjectsStyled>
   );
}

const ProjectsStyled = styled.div`
  scroll-snap-align: start;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`;