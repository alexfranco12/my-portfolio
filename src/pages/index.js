import * as React from "react"
import styled from "styled-components"
import { About, Projects, Landing } from "../components"
import { MainLayout } from '../Layouts'

const IndexPage = () => {
  return (
    <MainLayout>
      <IndexPageStyled>
        <Landing />
        <About />
        <Projects />
      </IndexPageStyled>
    </MainLayout>
  )
}

export default IndexPage

const IndexPageStyled = styled.div`

`;
