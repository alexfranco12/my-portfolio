import React from "react";
import styled from "styled-components";

export const NeonButton = ({ text }) => {
  return ( 
    <NeonButtonStyled>
      <p>{text}</p>
    </NeonButtonStyled>
   );
}

const NeonButtonStyled = styled.button`
  position: relative;
  font-family: ${props => props.theme.fonts.button};
  font-size: 1.25rem;
  background-color: inherit;
  display: inline-block;
  color: #B026FF;
  border: 0.125rem solid #B026FF;
  border-radius: 0.25em;
  padding: 0.25em 1.25em;
  cursor: pointer;
  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.5), 0 0 0.45em #B026FF;
  box-shadow: inset 0 0 0.5em #B026FF, 0 0 0.5em #B026FF;
  &::before {
    content: "";
    pointer-events: none;
    position: absolute;
    background: #B026FF;
    top: 110%;
    left: 0;
    width: 100%;
    height: 100%;
    transform: 
      perspective(1.75em) 
      rotateX(45deg)
      scale(1.1, 0.3);
    filter: blur(1em);
    opacity: 0.45;
  }
  &::after {
    content: "";
    position: absolute;
    text-shadow: 0 0 2em 0.5em #B026FF;
    opacity: 0;
  }
  &:hover,
  &:focus {
    background: #B026FF;
    color: whitesmoke;
    text-shadow: none;
    &::after{
      opacity: 1;
    }
  }
`;