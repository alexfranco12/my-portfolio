import React from "react";
import styled from "styled-components";

export const Button = ({ text }) => {
  return ( 
    <ButtonStyled>
      {text}
    </ButtonStyled>
   );
}
 
const ButtonStyled = styled.div`
  position: relative;
  font-family: ${props => props.theme.fonts.button};
  background-color: ${props => props.theme.colors.dark1};
  color: ${props => props.theme.colors.light2};
  border-radius: 30px;
  transition: transform 0.3s ease;
  padding: .5rem 1.5rem;
  cursor: pointer;
  &::before,
  &::after {
    content: "";
    position: absolute;
    opacity: 0.3;
    background: #000;
    border-radius: inherit;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: -1;
    transition: transform 0.3s ease;
  }
  &:hover {
    transform: translate(-12px, -12px);
    &::before {
      transform: translate(12px, 12px);
    }
    &::after {
      transform: translate(6px, 6px);
    }
  }
`;