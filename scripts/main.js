if (!window.File && !window.FileReader && !window.FileList && !window.Blob) {
    document.getElementById("not-supported").classList.add("active");
}

const player = document.getElementById("player");
const playList = document.getElementById("playList");

/*
const handleFileSelect = (e) => {
    const files = e.target.files;

    playFile(files[0]);
}
*/

const playFile = (file) => {
    let fReader = new FileReader();

    fReader.onload = (e) => {
        player.src = e.target.result;
        player.play();

        let name =
            file.name.split(".")[1] == "mp3"
                ? file.name.split(".")[0]
                : file.name;

        let id = uuid.v4();

        let newSongs = [
            ...songs,
            {
                id: id,
                name: name,
                src: e.target.result,
            },
        ];

        songs = newSongs;
        createPlaylist();

        trackName.innerText = file.name.split(".")[1] == "mp3" ? file.name.split(".")[0] : file.name;
        currentIndex = songs.length - 1;

        playButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" 
        viewBox="0 0 47.607 47.607"><g xmlns="http://www.w3.org/2000/svg"><path d="M17.991 40.976c0 
        3.662-2.969 6.631-6.631 6.631-3.662 0-6.631-2.969-6.631-6.631V6.631C4.729 2.969 7.698 0 11.36 
        0c3.662 0 6.631 2.969 6.631 6.631v34.345zM42.877 40.976c0 3.662-2.969 6.631-6.631 6.631-3.662 
        0-6.631-2.969-6.631-6.631V6.631C29.616 2.969 32.585 0 36.246 0c3.662 0 6.631 2.969 6.631 
        6.631v34.345z" fill="#bdced6" data-original="#000000"/></g></svg>`;

        playButton.classList.add("play");

        updateProgress();
    };

    fReader.readAsDataURL(file);
};

const handleDragFileSelect = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;

    playFile(files[0]);

    dropUI.classList.remove("active");
};

const playButton = document.getElementById("playButton");

const toggleIconPlay = () => {
    if (!playButton.classList.contains("play")) {
        playButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" 
        viewBox="0 0 47.607 47.607"><g xmlns="http://www.w3.org/2000/svg"><path d="M17.991 40.976c0 
        3.662-2.969 6.631-6.631 6.631-3.662 0-6.631-2.969-6.631-6.631V6.631C4.729 2.969 7.698 0 11.36 
        0c3.662 0 6.631 2.969 6.631 6.631v34.345zM42.877 40.976c0 3.662-2.969 6.631-6.631 6.631-3.662 
        0-6.631-2.969-6.631-6.631V6.631C29.616 2.969 32.585 0 36.246 0c3.662 0 6.631 2.969 6.631 
        6.631v34.345z" fill="#bdced6" data-original="#000000"/></g></svg>`;

        player.play();
    } else {
        playButton.innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 163.861 163.861"
        >
        <path
            d="M34.857 3.613C20.084-4.861 8.107 2.081 8.107 19.106v125.637c0 17.042 11.977 23.975 26.75 15.509L144.67 97.275c14.778-8.477 14.778-22.211 0-30.686L34.857 3.613z"
            fill="#bdced6"
            data-original="#000000"
            xmlns="http://www.w3.org/2000/svg"
        />
        </svg>`;

        player.pause();
    }

    playButton.classList.toggle("play");
};

const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "copy";

    dropUI.classList.add("active");
};

setInterval(() => {
    dropUI.classList.remove("active");
}, 1000);

//document.getElementById("files").addEventListener("change", handleFileSelect);

const dropUI = document.getElementById("dropUI");
window.addEventListener("dragover", handleDragOver);
window.addEventListener("drop", handleDragFileSelect);

// Volume Range
const volumeRange = document.getElementById("volumeRange");
const doc = document.documentElement;

const updateVolumeRange = () => {
    const range = volumeRange.value * 100;
    doc.style.setProperty("--VOLUME-RANGE", `${range}%`);
};

volumeRange.oninput = (e) => {
    const volume = e.target.value;
    player.volume = volume;

    updateVolumeRange();
};

updateVolumeRange();

//Lista de canciones
let songs = [
    {
        id: "5f937ddb-83e7-4796-9888-faaadca175b7",
        name: "Crazy - Patrick Patrikios",
        src: "music/Crazy - Patrick Patrikios.mp3",
    },
];

let currentIndex = 0;

const showHideList = () => {
    document.querySelector(".flip-card").classList.toggle("show-list");
};

//Create PlayList
const createPlaylist = () => {
    playList.innerHTML = "";

    songs.map((song, index) => {
        playList.innerHTML += `<li id=${song.id}>
            <span id="listIndex">${
                index < 9 ? "0" + (index + 1) : index + 1
            }</span>
            <span id="listItemName">
                ${song.name}
            </span>
        </li>`;
    });
};

createPlaylist();

playList.onclick = (e) => {
    const listItem = e.target;
    removeListItemActive();
    listItem.classList.add("active");
    showHideList();
    currentIndex = parseInt(listItem.children[0].innerText);

    playMusic(listItem.id);
};

const removeListItemActive = () => {
    const listItems = document.querySelectorAll("#playList li");

    listItems.forEach((listItem) => {
        listItem.classList.remove("active");
    });
};

const trackName = document.getElementById("trackName");

const playMusic = (songId) => {
    const playSong = songs.filter((song) => song.id == songId);

    trackName.innerText = playSong[0].name;
    player.src = playSong[0].src;
    player.play();
};

player.src = songs[0].src;
trackName.innerText = songs[0].name;
currentIndex = 0;

const progress = document.querySelector(".progress");
const progressIndicator = document.getElementById("progress-indicator");
const pointIndicator = document.getElementById("point-indicator");
const currentTime = document.getElementById("currentTime");

const updateProgress = () => {
    progressIndicator.style.width = `${
        (player.currentTime / player.duration) * 100
    }%`;
    pointIndicator.style.left = `${
        (player.currentTime / player.duration) * 100 - 1
    }%`;

    totalDuration = secondsToString(player.duration.toFixed(0));
    currentTimeString = secondsToString(player.currentTime.toFixed(0));

    currentTime.innerHTML = `<span>
            ${currentTimeString}
        </span>
        <span>
            ${totalDuration}
        </span>`;

    if (player.ended) {
        nextSong();
    }
};

const secondsToString = (seconds) => {
    let hour = "";
    if (seconds > 3600) {
        hour = Math.floor(seconds / 3600);
        hour = hour < 10 ? "0" + hour : hour;
        hour += ":";
    }

    let minute = Math.floor((seconds / 60) % 60);
    minute = minute < 10 ? "0" + minute : minute;

    let second = seconds % 60;
    second = second < 10 ? "0" + second : second;

    return hour + minute + ":" + second;
};

const overtake = (e) => {
    const scrubTime = (e.offsetX / progress.offsetWidth) * player.duration;
    player.currentTime = scrubTime;

    updateProgress();
};

progress.addEventListener("click", overtake);

setInterval(() => {
    updateProgress();
}, 1000);

const nextSong = () => {
    if (songs.length == (currentIndex + 1)) {
        currentIndex = 0;
    }else{
        currentIndex += 1;
    }

    player.src = songs[currentIndex].src;
    trackName.innerText = songs[currentIndex].name;
    player.play();

    updateProgress();
}