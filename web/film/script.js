const video = document.getElementById('video_player');
const videoList = [
    "C:/Users/thisi/Videos/2024-09-21 18-52-02.mkv",
    '"C:/Users/thisi/Videos/2024-09-21 18-51-24.mkv"',
];
let currentVideoIndex = 0;

function playNextVideo() {
    video.src = videoList[currentVideoIndex];
    video.play();
    //currentVideoIndex++;
    if (currentVideoIndex >= videoList.length) {
        currentVideoIndex = 0;
    }
}

video.addEventListener('ended', playNextVideo);
playNextVideo();