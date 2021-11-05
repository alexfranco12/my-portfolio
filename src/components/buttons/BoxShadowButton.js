import React from "react";
import styled from "styled-components";

export const BoxShadowButton = ({ text }) => {
  return ( 
    <BoxShadowButtonStyled>
      {text}
    </BoxShadowButtonStyled>
   );
};

const BoxShadowButtonStyled = styled.button`
  letter-spacing: .125rem;
  width: 120px;
	height: 40px;
	cursor: pointer;
	font-size: 1rem;
	font-weight: bold;
	color: ${props => props.theme.colors.dark1};
	background: ${props => props.theme.colors.light2};
	border: 2px solid ${props => props.theme.colors.accent1};
	box-shadow: 5px 5px 0 ${props => props.theme.colors.accent1},
	  -5px -5px 0 ${props => props.theme.colors.accent1},
	  -5px 5px 0 ${props => props.theme.colors.accent1},
		5px -5px 0 ${props => props.theme.colors.accent1};
	transition: 500ms ease-in-out;
  &:hover {
    box-shadow: 15px 5px 0 ${props => props.theme.colors.accent1}, 
      -15px -5px 0 ${props => props.theme.colors.accent1};
  }
  &:focus {
    outline: none;
  }
`;