import React from "react"
import { useTimer } from "react-timer-hook"

function CountDownTimer() {
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
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: time,
    onExpire: () => console.warn("onExpire called"),
  })

  return (
    <div className="text-center my-3">
      <h4>Count Down Timer</h4>
      <div style={{ fontSize: "100px", width: "430px" }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      {/* <p>{isRunning ? "Running" : "Not running"}</p> */}
      <button onClick={start}>Start</button>
      <button id="count-down-pause" onClick={pause}>
        Pause
      </button>
      <button id="count-down-resume" onClick={resume}>
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
  )
}

export default CountDownTimer
