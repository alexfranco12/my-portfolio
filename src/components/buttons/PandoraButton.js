import React from "react";
import styled from "styled-components";

export const PandoraButton = ({ text }) => {
  return ( 
    <PandoraButtonStyled>
      <span>{text}</span>
    </PandoraButtonStyled>
   );
};

const PandoraButtonStyled = styled.button`
  pointer-events: auto;
	cursor: pointer;
	border: none;
  color: ${props => props.theme.colors.light2};
  background: ${props => props.theme.colors.dark1};
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  border-radius: 5px;
  & span {
    display: block;
    background: ${props => props.theme.colors.main2};
    padding: .5rem 2rem;
    border: 1px solid #000;
    border-radius: 5px;
    transform: translate3d(-4px, -4px, 0);
    transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
  }
  &:hover span {
    transform: translate3d(-8px, -8px, 0);
  }
`;