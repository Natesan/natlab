import React from "react"
import { useStopwatch } from "react-timer-hook"

function CountUpTimer() {
  const time = new Date()
  time.setSeconds(time.getSeconds() + 1500)

  const {
    seconds,
    minutes,
    hours,
    days,
    // isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true })

  return (
    <div className="text-center my-3">
      <h4>Count Up Timer</h4>
      <div style={{ fontSize: "100px", width: "430px" }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      {/* <p>{isRunning ? "Running" : "Not running"}</p> */}
      <button id="count-up-start" onClick={start}>
        Start
      </button>
      <button id="count-up-pause" onClick={pause}>
        Pause
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CountUpTimer
