let videoscape = document.getElementById("pakistan");
let soundscape = document.getElementById("pakaudio");
let slower = document.getElementById("x05");
let faster = document.getElementById("x2");
let replay = document.getElementById("replay");
let popup = document.getElementById("adpopup");
let play = document.getElementById("videoplay");
let pause = document.getElementById("videopause");
let normal = document.getElementById("normal");

play.addEventListener("click", playvid);
pause.addEventListener("click", pausevid);
replay.addEventListener("click", replayaudio)
slower.addEventListener("click", slowaudio)
faster.addEventListener("click", speedaudio)
normal.addEventListener("click", normalaudio)

function playvid() {
    popup.style.opacity = 0;
    popup.style.zIndex = -1;
    videoscape.play();
}

function pausevid() {
    videoscape.pause();
    popup.style.opacity = 1;
    popup.style.zIndex = 1;
}

function replayaudio() {
    soundscape.currentTime = 0;
    soundscape.play();
}

function slowaudio() {
    soundscape.playbackRate = 0.5;
}

function speedaudio() {
    soundscape.playbackRate = 2;
}

function normalaudio() {
    soundscape.playbackRate = 1;
}
