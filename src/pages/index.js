import React from "react"
import Timer from "react-timer"

import Container from "../components/container"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"

const OPTIONS = { prefix: "seconds elapsed!", delay: 100 }
const IndexPage = () => (
  <Container>
    <Layout>
      <SEO title="Utility" />
      <div class="container mb-3 text-center">
        <Timer options={OPTIONS} />
      </div>
    </Layout>
  </Container>
)

export default IndexPage
