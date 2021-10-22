import * as React from "react"
import { About, Projects, Landing } from "../components"
import { MainLayout } from '../Layouts'
import { InnerLayout } from "../Layouts/InnerLayout"

const IndexPage = () => {
  return (
    <MainLayout>
      <InnerLayout>
        <Landing />
        <About />
        <Projects />
      </InnerLayout>
    </MainLayout>
  )
}

export default IndexPage
