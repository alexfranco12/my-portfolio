import React, { useState } from "react";
import styled from "styled-components";
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri'
import { NavItem } from "./NavItem";

export const HamburgerMenu = () => {
  const [ isOpen, setIsOpen ] = useState(false)

  return ( 
    <HamburgerMenuStyled>
      <div 
        className="hamburger-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        { isOpen
        ? <RiCloseFill />
        : <RiMenu4Fill />
        }
      </div>
      
      { isOpen 
        ? <div className="menu">
            <NavItem href={"/#projects"} text={"projects."} />
            <NavItem href={"/resume"} text={"resume."} />
            <NavItem href={"/contact"} text={"contact."} />
          </div>
        : <></>
      }
      
    </HamburgerMenuStyled>
   );
};

const HamburgerMenuStyled = styled.div`
  position: relative;
  z-index: 10;
  & .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    padding: 1rem 0;
    background-color: ${props => props.theme.colors.light1};
    border: 2px solid ${props => props.theme.colors.accent1};
    border-radius: 0 0px 10px 10px;
    right: -20px;
    top: 3.5rem;
    min-width: 25vw;
    height: 30vh;
    & :not(:last-child) {
      margin-bottom: 1rem;
    }
  }
  & svg {
    font-size: 1.25rem;
  }
`;