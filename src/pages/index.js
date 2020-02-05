import React from "react"
import Timer1 from "react-timer"

import Container from "../components/container"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Timer from "react-compound-timer"
import "bootstrap/dist/css/bootstrap.min.css"

import { IoIosPlay, IoIosPause, IoMdRefresh } from "react-icons/io"
import { MdStop } from "react-icons/md"
const OPTIONS = { prefix: "seconds elapsed!", delay: 100 }
const IndexPage = () => (
  <Container>
    <Layout>
      <SEO title="Utility" />
      <div class="container mb-3 text-center">
        <Timer1 options={OPTIONS} />
        {/* <Timer initialTime={0} startImmediately={false}>
          {({ start, resume, pause, stop, reset }) => (
            <React.Fragment>
              <div class="card d-flex flex-row flex-wrap justify-content-between mb-3">
                <div class="card-body">
                  <h5 class="card-title">
                    <Timer.Hours />
                  </h5>
                  <p class="card-text">Hours</p>
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    <Timer.Minutes />
                  </h5>
                  <p class="card-text">Minutes</p>
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    <Timer.Seconds />
                  </h5>
                  <p class="card-text">Seconds</p>
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    <Timer.Milliseconds />
                  </h5>
                  <p class="card-text">Milliseconds</p>
                </div>
              </div>
              <div class="d-flex flex-row flex-wrap justify-content-center mb-3">
                <IoIosPlay
                  // key={link.type}
                  onClick={start}
                  fontSize="60px"
                  className="cursor mx-2"
                />
                <IoIosPause
                  // key={link.type}
                  onClick={pause}
                  fontSize="60px"
                  className="cursor  mx-2"
                />
                <button onClick={resume}>Resume</button>
                <MdStop
                  // key={link.type}
                  onClick={stop}
                  fontSize="60px"
                  className="cursor mx-2"
                />
                <IoMdRefresh
                  // key={link.type}
                  onClick={reset}
                  fontSize="60px"
                  className="cursor mx-2"
                />
              </div>
            </React.Fragment>
          )}
        </Timer> */}
      </div>
    </Layout>
  </Container>
)

export default IndexPage
