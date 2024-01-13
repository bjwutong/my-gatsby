// Step 1: Import React
import * as React from "react"

import Layout from "../components/layout-main"
import { StaticImage } from 'gatsby-plugin-image'

const pageTitle = "Index Page Title"

// Step 2: Define component
const IndexPage = () => {
  return (
    <Layout pageTitle={pageTitle}>
      <div>main</div>
      <StaticImage
        alt="test"
        src="../images/icon.png"
      />
    </Layout>
  )
}

// Step 3: Export component
export default IndexPage

export const Head = () => <title>{pageTitle}</title>
