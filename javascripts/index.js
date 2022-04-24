let playing = false;
let playingTrack = null;

function nextTrack(n) {
  document.getElementById(n).play();
  document.getElementById(n - 1).currentTime = 0;
}
function started(n) {
  if (playing) {
    if (playingTrack != document.getElementById(n)) {
      playingTrack.pause();
      playingTrack.currentTime = 0;
      playingTrack.style.backgroundColor = "rgba(255,255,255, 0.25)";
      playingTrack.style.width = "83%";
      playingTrack = document.getElementById(n);
    } else {
      playingTrack = document.getElementById(n);
    }
  } else {
    playing = true;
    playingTrack = document.getElementById(n);
  }
  playingTrack.style.backgroundColor = "rgba(255,255,255, 0.7)";
  playingTrack.style.width = "90%";
  playingTrack.volume = 0.5;
}

function ipaused() {}
