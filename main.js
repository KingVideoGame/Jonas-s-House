//Welcome to the code for HOUSE. Please do not mess with it unless you are me. Okay bye
const element = document.getElementById("HOUSE");
//FOCUS ON THE MAIN ELEMENT
document.getElementById("main").focus();
//This is the play button. Ok bye again
document.getElementById("play-button").addEventListener("click", function() {
  document.getElementById("main").hidden = true;
  document.getElementById("title-background").pause();
  document.getElementById("title-music").pause();
  document.getElementById("entryScreen").hidden = false;
  document.getElementById("entryScreen").focus();
});
//Music controls!
document.getElementById("main").addEventListener("keydown", function(event) {
  const audioElement = document.getElementById("title-music");
  if (event.code === "Space") {
    console.log("Spacebar pressed!");
    if (audioElement.pause) {
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
//Keypress for the entry screen
document.getElementById("entryScreen").addEventListener("keypress", function(event) {
  if (event.code === "KeyC") {
    console.log("KeyC pressed!");
    document.getElementById("entryScreen").hidden = true;
    document.getElementById("livingRoom").hidden = false;
  }
});
  
