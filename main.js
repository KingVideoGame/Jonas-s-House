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
    document.getElementById("livingRoom").focus();
  }
});

//Keypress for ethanSprite
document.getElementById("livingRoom").addEventListener("keydown", function(event) {
  last_button_pressed = (event.code === "ArrowUp" ||
                   event.code === "ArrowDown" ||
                   event.code === "ArrowLeft" ||
                   event.code === "ArrowRight");
  const videoSprites = document.querySelectorAll(".ethanSpriteVideo");
  if (event.code === "ArrowUp") {
    console.log("Up arrow pressed!");
    videoSprites.forEach(sprite => sprite.hidden = true);
    document.getElementById("ethanRunningBackward").hidden = false;
    last_button_pressed = "ArrowUp";
    button_pressed = true;
  } if (event.code === "ArrowDown") {
    console.log("Down arrow pressed!");
    videoSprites.forEach(sprite => sprite.hidden = true);
    document.getElementById("ethanRunningForward").hidden = false;
    button_pressed = true;
    last_button_pressed = "ArrowDown";
    button_pressed = true;
  } if (event.code === "ArrowLeft") {
    console.log("Left arrow pressed!");
    videoSprites.forEach(sprite => sprite.hidden = true);
    document.getElementById("ethanRunningLeft").hidden = false;
    last_button_pressed = "ArrowLeft";
    button_pressed = true;
  } if (event.code === "ArrowRight") {
    console.log("Right arrow pressed!");
    videoSprites.forEach(sprite => sprite.hidden = true);
    document.getElementById("ethanRunningRight").hidden = false;
    last_button_pressed = "ArrowRight";
    button_pressed = true;
  }
});
document.getElementById("livingRoom").addEventListener("keyup", function(event) {
    const imageSprites = document.querySelectorAll(".ethanSpriteImage"); 
    switch (event.code) {
      case "ArrowUp": 
    imageSprites.forEach(sprite => sprite.hidden = true);
      document.getElementById("ethanBackward").hidden = false;
    } switch (event.code) {
      case "ArrowDown":
        imageSprites.forEach(sprite => sprite.hidden = true);
        document.getElementById("ethanForward").hidden = false;
    } switch (event.code) {
      case "ArrowLeft":
        imageSprites.forEach(sprite => sprite.hidden = true);
        document.getElementById("ethanLeft").hidden = false;
    } switch (event.code) {
      case "ArrowRight":
        imageSprites.forEach(sprite => sprite.hidden = true);
        document.getElementById("ethanRight").hidden = false;
      }
    });
