import React from "react"
import { useTimer, useStopwatch } from "react-timer-hook"

import Container from "../components/container"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"

function IndexPage() {

  const time = new Date()
  time.setSeconds(time.getSeconds() + 300) 

  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: time,
    onExpire: () => console.warn("onExpire called"),
  })

  return (
    <Layout>
      <Container>
        <SEO title="Utility" />
        <h2>Timers</h2>
        <div className="container mb-3 text-center d-flex justify-content-center flex-wrap ">
          <div className="text-center my-3">
            <h4>Count Down Timer</h4>
            <div style={{ fontSize: "100px", width: "400px" }} className="">
              <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
              <span>{seconds}</span>
            </div>
            {/* <p>{isRunning ? "Running" : "Not running"}</p> */}
            <button onClick={start}>Start</button>
            <button id="pause" onClick={pause}>
              Pause
            </button>
            <button id="resume" onClick={resume}>
              Resume
            </button>
            <button
              onClick={() => {
                // Restarts to 5 minutes timer
                const time = new Date()
                time.setSeconds(time.getSeconds() + 300)
                restart(time)
              }}
            >
              Restart
            </button>
          </div>

          <div className="text-center my-3">
            <h4>Count Up Timer</h4>
            <div style={{ fontSize: "100px", width: "400px" }} className="">
              <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
              <span>{seconds}</span>
            </div>
            {/* <p>{isRunning ? "Running" : "Not running"}</p> */}
            <button onClick={start}>Start</button>
            <button id="pause" onClick={pause}>
              Pause
            </button>
            <button id="resume" onClick={resume}>
              Resume
            </button>
            <button
              onClick={() => {
                // Restarts to 5 minutes timer
                const time = new Date()
                time.setSeconds(time.getSeconds() + 300)
                restart(time)
              }}
            >
              Restart
            </button>
          </div>
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
