
function playclip() {
  if (document.all) {
      document.all.sound.src = "18227__andbur__mic-off.mp3";
  }
  else {
    var audio = document.getElementsByTagName("audio")[0];
    audio.play();
  }
}
