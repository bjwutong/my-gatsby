// Step 1: Import React
import * as React from "react"

import Layout from "../components/layout-main"

const pageTitle = "Index Page Title"

const pageStyles = {
  color: "#232129",
  padding: 96,
}



const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/getting-started/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
]

// Step 2: Define component
const IndexPage = () => {
  return (
    <Layout pageTitle={pageTitle}>
      <div>main</div>
    </Layout>
  )
}

// Step 3: Export component
export default IndexPage

export const Head = () => <title>{pageTitle}</title>
