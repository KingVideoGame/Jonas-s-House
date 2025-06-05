//Welcome to the code for HOUSE. Please do not mess with it unless you are me. Okay bye
const element = document.getElementById("HOUSE");

function showMessage() {
  alert("this game has no content yet. Blorg.");
}

document.body.addEventListener("keydown", function (event) {
  const audioElement = document.getElementById("titleMusic");
  if (event.code === "Space") {
    console.log("Spacebar pressed!");
    if (audioElement.paused) {
      audioElement.play();
    }
  }
  if (event.code === "KeyP") {
    console.log("KeyP pressed!");
    if (!audioElement.playing) {
      audioElement.pause();
    }
  }
});
