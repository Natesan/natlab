import "./src/styles/global.css"

export const onClientEntry = () => {
  window.onload = () => {
    if (!("Notification" in window)) {
      console.log(
        "🚀 ~ file: gatsby-browser.js ~ line 07 ~ onClientEntry ~ This browser does not support notifications"
      )
    } else {
      let promise = Notification.requestPermission()
      promise.then(handleNotification)
    }
    function handleNotification(result) {
      console.log(
        "🚀 ~ file: gatsby-browser.js ~ line 9 ~ handleNotification ",
        result
      )
    }

    window.handleCountDownExpiration = () => {
      console.log(
        "🚀 ~ file: gatsby-browser.js ~ line 21 ~ handleCountDownExpiration ~ expired"
      )
      var text = "Hey! Your Count Down Timer has Expired"
      new Notification("Count Down Timer", { body: text })
    }

    function handleVisibilityChange() {
      if (document.hidden) {
        console.log(
          "🚀 ~ file: gatsby-browser.js ~ line 31 ~ handleVisibilityChange ~ tabOut()"
        )
        document.getElementById("count-down-pause").click()
        document.getElementById("count-up-pause").click()
      } else {
        console.log(
          "🚀 ~ file: gatsby-browser.js ~ line 37 ~ handleVisibilityChange ~ tabIn()"
        )
        document.getElementById("count-down-resume").click()
        document.getElementById("count-up-start").click()
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange, false)
  }
}
