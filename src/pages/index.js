import * as React from "react"
import styled from "styled-components"
import { About, Projects, Landing } from "../components"
import { InnerLayout } from '../Layouts'

const IndexPage = () => {
  return (
    <InnerLayout>
      <IndexPageStyled>
        <Landing />
        <div className="curve top-curve">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
        <About />
        <div className="curve bottom-curve">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" className="shape-fill"></path>
          </svg>
        </div>
        <Projects />
      </IndexPageStyled>
    </InnerLayout>
  )
}

export default IndexPage

const IndexPageStyled = styled.div`
  & .top-curve {
    margin-bottom: -5px;
  }
  & .bottom-curve {
    margin-top: -5px;
  }
  & .curve {
    position: relative;
    width: calc(100% - .5px);
    overflow: hidden;
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
