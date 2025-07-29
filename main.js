//Welcome to the code for HOUSE. Please do not mess with it unless you are me. Okay bye
const element = document.getElementById("HOUSE");
//FOCUS ON THE MAIN ELEMENT
document.getElementById("main").focus();
//This is the play button. Ok bye again
document.getElementById("play-button").addEventListener("click", function () {
  document.getElementById("main").hidden = true;
  document.getElementById("title-background").pause();
  document.getElementById("title-music").pause();
  document.getElementById("entryScreen").hidden = false;
  document.getElementById("entryScreen").focus();
});

//Music controls!
document.getElementById("main").addEventListener("keydown", function (event) {
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
document.getElementById("entryScreen").addEventListener("keypress", function (event) {
  if (event.code === "KeyC") {
    console.log("KeyC pressed!");
    document.getElementById("entryScreen").hidden = true;
    document.getElementById("livingRoom").hidden = false;
    document.getElementById("livingRoom").focus();
  }
});

//stuff that makes me move around the living room

const room = document.getElementById("livingRoom");

const moveDelay = 15;
const moveIncrement = 0.5;
let moveTimeout = 0;
let spriteX = 0;
let spriteZ = 0;

function syncPosition() {
  clearTimeout(moveTimeout);
  moveTimeout = 0;
  room.style.setProperty("--sprite-x", `${spriteX}vw`);
  room.style.setProperty("--sprite-z", `${spriteZ}vw`);
  room.style.setProperty("--room-x", `${-spriteX}vw`);
  room.style.setProperty("--room-z", `${-spriteZ}vw`);
}

function moveLeft() {
  spriteX = Math.max(-45, spriteX - moveIncrement);
  syncPosition();
  moveTimeout = setTimeout(moveLeft, moveDelay);
}

function moveRight() {
  spriteX = Math.min(45, spriteX + moveIncrement);
  syncPosition();
  moveTimeout = setTimeout(moveRight, moveDelay);
}

function moveUp() {
  spriteZ = Math.max(-45, spriteZ - moveIncrement);
  syncPosition();
  moveTimeout = setTimeout(moveUp, moveDelay);
}

function moveDown() {
  spriteZ = Math.min(45, spriteZ + moveIncrement);
  syncPosition();
  moveTimeout = setTimeout(moveDown, moveDelay);
}

//Keypress for ethanSprite
room.addEventListener("keydown", function (event) {
  const videoSprites = document.querySelectorAll(".ethanSpriteVideo");
  const imageSprites = document.querySelectorAll(".ethanSpriteImage");
  if (event.code === "ArrowUp") {
    console.log("Up arrow pressed!");
    videoSprites.forEach(sprite => sprite.hidden = true);
    imageSprites.forEach(sprite => sprite.hidden = true);
    document.getElementById("ethanRunningBackward").hidden = false;
    if (!moveTimeout) moveUp();
  } if (event.code === "ArrowDown") {
    console.log("Down arrow pressed!");
    videoSprites.forEach(sprite => sprite.hidden = true);
    imageSprites.forEach(sprite => sprite.hidden = true);
    document.getElementById("ethanRunningForward").hidden = false;
    if (!moveTimeout) moveDown();
  } if (event.code === "ArrowLeft") {
    console.log("Left arrow pressed!");
    videoSprites.forEach(sprite => sprite.hidden = true);
    imageSprites.forEach(sprite => sprite.hidden = true);
    document.getElementById("ethanRunningLeft").hidden = false;
    if (!moveTimeout) moveLeft();
  } if (event.code === "ArrowRight") {
    console.log("Right arrow pressed!");
    videoSprites.forEach(sprite => sprite.hidden = true);
    imageSprites.forEach(sprite => sprite.hidden = true);
    document.getElementById("ethanRunningRight").hidden = false;
    if (!moveTimeout) moveRight();
  }
});

document.getElementById("livingRoom").addEventListener("keyup", function (event) {
  const imageSprites = document.querySelectorAll(".ethanSpriteImage");
  const videoSprites = document.querySelectorAll(".ethanSpriteVideo");
  if (event.code === "ArrowUp") {
    imageSprites.forEach(sprite => sprite.hidden = true);
    videoSprites.forEach(sprite => sprite.hidden = true);
    document.getElementById("ethanBackward").hidden = false;
    clearTimeout(moveTimeout);
    moveTimeout = 0;
  } if (event.code === "ArrowDown") {
    imageSprites.forEach(sprite => sprite.hidden = true);
    videoSprites.forEach(sprite => sprite.hidden = true);
    document.getElementById("ethanForward").hidden = false;
    clearTimeout(moveTimeout);
    moveTimeout = 0;
  } if (event.code === "ArrowLeft") {
    imageSprites.forEach(sprite => sprite.hidden = true);
    videoSprites.forEach(sprite => sprite.hidden = true);
    document.getElementById("ethanLeft").hidden = false;
    clearTimeout(moveTimeout);
    moveTimeout = 0;
  } if (event.code === "ArrowRight") {
    imageSprites.forEach(sprite => sprite.hidden = true);
    videoSprites.forEach(sprite => sprite.hidden = true);
    document.getElementById("ethanRight").hidden = false;
    clearTimeout(moveTimeout);
    moveTimeout = 0;
  }
});

//"A" Button!
if (spriteX <= -30 && spriteZ <= -30) {
  document.getElementById("a-button.png").hidden = false;
}