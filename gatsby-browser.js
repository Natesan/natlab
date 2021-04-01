import "./src/styles/global.css"

export const onClientEntry = () => {
  window.onload = () => {
    function handleVisibilityChange() {
      if (document.hidden) {
        console.log(
          "🚀 ~ file: gatsby-browser.js ~ line 11 ~ handleVisibilityChange ~ tabOut()"
        );
        // pause();
        document.getElementById('pause').click();
      } else {
        console.log(
          "🚀 ~ file: gatsby-browser.js ~ line 13 ~ handleVisibilityChange ~ tabIn()"
        );
        // resume();
        document.getElementById('resume').click();
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange, false)
  }
}
