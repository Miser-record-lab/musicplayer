let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');
let songTitle = document.getElementById('song-title');
let songArtist = document.getElementById('song-artist');
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');

const songs = [
    {
        title: '1999',
        artist: 'Sleepy Hallow',
        src: 'media/Sleepy Hallow - 1999 (Lyric Video).mp3'
    },
    {
        title: '2055',
        artist: 'Sleepy Hallow',
        src: 'media/Sleepy Hallow - 2055 (Official Video).mp3'
    },
    {
        title: 'Drum Dummy',
        artist: 'Sheff G',
        src: 'media/Sheff G - Drum Dummy (Audio).mp3'
    }
];

let currentSongIndex = 0;

function loadSong(songIndex) {
    song.src = songs[songIndex].src;
    songTitle.textContent = songs[songIndex].title;
    songArtist.textContent = songs[songIndex].artist;
    song.load();
    playSong();
}

function playSong() {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}

function pauseSong() {
    song.pause();
    ctrlIcon.classList.add("fa-play");
    ctrlIcon.classList.remove("fa-pause");
}

function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        pauseSong();
    } else {
        playSong();
    }
}

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

song.ontimeupdate = function () {
    progress.value = song.currentTime;
}

progress.onchange = function () {
    song.currentTime = progress.value;
    playSong();
}

prevButton.onclick = function () {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
}

nextButton.onclick = function () {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
}

loadSong(currentSongIndex);
