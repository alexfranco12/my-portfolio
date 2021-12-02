import React from "react";
import styled from "styled-components";
import { GiHazardSign } from "react-icons/gi"

export const PopUpButton = () => {
  return ( 
    <StyledPopUpButton>
      <a 
        target="_blank" 
        rel="noopender noreferrer"
        > <GiHazardSign />
        <span>site under construction</span>
      </a>
    </StyledPopUpButton>
   );
};

const StyledPopUpButton = styled.div`
  cursor: pointer;
  background-color: ${props => props.theme.colors.accent1};
  border-radius: 0.25rem;
  width: 20%;
  height: 30px;
  margin-right: 1rem;
  a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
    -o-transition:all .5s;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    transition: all .5s;
    -webkit-font-smoothing: antialiased;
    & svg {
      color: ${props => props.theme.colors.light2};
    }
    & span {
      position:absolute;
      background-color: #ead215;
      color: ${props => props.theme.colors.dark1};
      text-align: center;
      font-weight: 700;
      bottom:0;
      left:-25px;
      right:-25px;
      padding:5px 7px;
      z-index: 2;
      font-size:14px;
      border-radius:10px;
      visibility:hidden;
      opacity:0;
      -o-transition:all .5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      -webkit-transition: all .5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      -moz-transition: all .5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      transition: all .5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      &:before {
        content:'';
        width: 0; 
        height: 0; 
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid #ead215;
        position:absolute;
        bottom:-5px;
        left:60px;
      }
    }
    &:hover,
    &:focus {
      background-color: ${props => props.theme.colors.dark2};
    }
  }

  /* text pops up when icon is in hover state */
  a:hover span {
    bottom:50px;
    visibility:visible;
    opacity:1;
  }
`;