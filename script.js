var currentTrackIndex = 0;
var musicFiles = [
    // List the filenames of your music files here
    "music1.mp3",
    "music2.mp3",
    "music3.mp3"
];

function playNext() {
    currentTrackIndex = (currentTrackIndex + 1) % musicFiles.length;
    var musicPlayer = document.getElementById("musicPlayer");
    musicPlayer.src = musicFiles[currentTrackIndex];
    musicPlayer.play();
    updateTrackInfo();
}

function updateTrackInfo() {
    var musicPlayer = document.getElementById("musicPlayer");
    var trackName = document.getElementById("trackName");
    var trackDuration = document.getElementById("trackDuration");

    trackName.textContent = "Track: " + musicFiles[currentTrackIndex];
    
    musicPlayer.addEventListener("loadedmetadata", function() {
        trackDuration.textContent = "Duration: " + formatTime(musicPlayer.duration);
    });
}

function formatTime(seconds) {
    if (!isNaN(seconds)) {
        var minutes = Math.floor(seconds / 60);
        var remainingSeconds = Math.floor(seconds % 60);
        return minutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds;
    } else {
        return "00:00"; // If duration is not available, return default value
    }
}

window.onload = function() {
    var musicPlayer = document.getElementById("musicPlayer");
    musicPlayer.src = musicFiles[currentTrackIndex];
    musicPlayer.addEventListener("loadedmetadata", function() {
        updateTrackInfo();
    });
};
