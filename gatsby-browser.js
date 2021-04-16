import "./src/styles/global.css"

export const onClientEntry = () => {
  window.onload = () => {
    if (!("Notification" in window)) {
      console.log("🚀 ~ file: gatsby-browser.js ~ line 20 ~ onClientEntry ~ This browser does not support notifications")
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

    function handleVisibilityChange() {
      if (document.hidden) {
        console.log(
          "🚀 ~ file: gatsby-browser.js ~ line 11 ~ handleVisibilityChange ~ tabOut()"
        )
        document.getElementById("count-down-pause").click()
        document.getElementById("count-up-pause").click()
      } else {
        console.log(
          "🚀 ~ file: gatsby-browser.js ~ line 13 ~ handleVisibilityChange ~ tabIn()"
        )
        document.getElementById("count-down-resume").click()
        document.getElementById("count-up-start").click()
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange, false)
  }
}
