import * as React from "react"
import { About, Projects, Landing } from "../components"
import { MainLayout } from '../Layouts'

const IndexPage = () => {
  return (
    <MainLayout>
      <Landing />
      <About />
      <Projects />
    </MainLayout>
  )
}

export default IndexPage
