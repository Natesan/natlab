import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../components/seo"
import CountDownTimer from "../components/count-down-timer"
import CountUpTimer from "../components/count-up-timer"

import "bootstrap/dist/css/bootstrap.min.css"

function IndexPage() {
  return (
    <Layout>
      <Container>
        <SEO title="Utility" />
        <h2>Timers</h2>
        <div className="container mb-3 text-center d-flex justify-content-center flex-wrap">
          <CountDownTimer></CountDownTimer>
          <CountUpTimer></CountUpTimer>
        </div>
      </Container>
      <Container>
        <div className="container mb-3 text-center">
          <h2>(Page Visibility API Prototype)</h2>
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage
