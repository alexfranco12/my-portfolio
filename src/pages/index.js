import * as React from "react"
import styled from "styled-components"
import { About, Projects, Landing } from "../components"
import { InnerLayout } from '../Layouts'

const IndexPage = () => {
  return (
    <InnerLayout>
      <IndexPageStyled>
        <Landing />
        <About />
        <Projects />
      </IndexPageStyled>
    </InnerLayout>
  )
}

export default IndexPage

const IndexPageStyled = styled.div`

`;
