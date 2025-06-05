//Welcome to the code for HOUSE. Please do not mess with it unless you are me. Okay bye
const element = document.getElementById("HOUSE");

function showMessage() {
  document.getElementById("titleMusic").play();
  alert("this game has no content yet. Blorg.");
}

document.body.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    console.log("Spacebar pressed!");
    document
      .getElementById("titleMusic")
      .play(
        "https://cvws.icloud-content.com/B/AcnBIxUQqlDfvRN9NdUqiTtxicoQAZpOlrdjFHTW8X_SNdzh-4npCEP1/HOUSE+Theme.m4a?o=AoewG_ZUhNCY1dYFR6dBoKK4jTRDakacejezw3qf2gGO&v=1&x=3&a=CAogMndU7R9jl3ziHnsZjc9GxTx8NmWNJLhd3wcooDpb8w8SbxDP7a_a8zIYz8qL3PMyIgEAUgRxicoQWgTpCEP1aidNIyYSFn4VHYUx0VyEKv3lHM4qHZ03WW2hYVDtCQxrLIQKlMBDe6xyJ3E5DUsRdDBHoS9NKkcdVIHz1rATaGMPdBd4eWeTGYcmewDmSHxbRA&e=1749050123&fl=&r=a8e151f0-add6-4f99-a7f9-80ea39d992a7-1&k=jm1geIxY62jSi2MXrYgiwA&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=148&s=FnEKa6imzCJrFl0293sxXmhy95c"
      );
  }
    if (event.code === "KeyP") {
        console.log("KeyP pressed!");
        document.getElementById("titleMusic");
        function pauseMusic() {
            audioElement.pause();
        }
    }
});
