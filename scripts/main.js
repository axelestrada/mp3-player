if (!window.File && !window.FileReader && !window.FileList && !window.Blob) {
    document.getElementById("not-supported").classList.add("active");
}

//#region Icons
const pauseSvg = `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 47.607 47.607"
    >
        <g
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M17.991 40.976c0 
                3.662-2.969 6.631-6.631 6.631-3.662 0-6.631-2.969-6.631-6.631V6.631C4.729 2.969 7.698 0 11.36 
                0c3.662 0 6.631 2.969 6.631 6.631v34.345zM42.877 40.976c0 3.662-2.969 6.631-6.631 6.631-3.662 
                0-6.631-2.969-6.631-6.631V6.631C29.616 2.969 32.585 0 36.246 0c3.662 0 6.631 2.969 6.631 
                6.631v34.345z"
                fill="#bdced6"
                data-original="#000000"
            />
        </g>
</svg>`;

const playSvg = `<svg
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

const speakerSvg = `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 93.038 93.038"
    >
    <path
        d="M46.547 75.521c0 1.639-.947 3.128-2.429 3.823-.573.271-1.187.402-1.797.402-.966 0-1.923-.332-2.696-.973l-23.098-19.14H4.225C1.892 59.635 0 57.742 0 55.409V38.576c0-2.334 1.892-4.226 4.225-4.226h12.303l23.098-19.14c1.262-1.046 3.012-1.269 4.493-.569 1.481.695 2.429 2.185 2.429 3.823l-.001 57.057zm16.237-6.602c-.103.007-.202.011-.304.011-1.116 0-2.192-.441-2.987-1.237l-.565-.567c-1.482-1.479-1.656-3.822-.408-5.504 3.164-4.266 4.834-9.323 4.834-14.628 0-5.706-1.896-11.058-5.484-15.478-1.366-1.68-1.24-4.12.291-5.65l.564-.565c.844-.844 1.975-1.304 3.199-1.231 1.192.06 2.305.621 3.061 1.545 4.977 6.09 7.606 13.484 7.606 21.38 0 7.354-2.325 14.354-6.725 20.24-.735.981-1.859 1.597-3.082 1.684zm17.468 13.057c-.764.903-1.869 1.445-3.052 1.495-.058.002-.117.004-.177.004-1.119 0-2.193-.442-2.988-1.237l-.555-.555c-1.551-1.55-1.656-4.029-.246-5.707 6.814-8.104 10.568-18.396 10.568-28.982 0-11.011-4.019-21.611-11.314-29.847-1.479-1.672-1.404-4.203.17-5.783l.554-.555c.822-.826 1.89-1.281 3.115-1.242 1.163.033 2.263.547 3.036 1.417 8.818 9.928 13.675 22.718 13.675 36.01.002 12.789-4.539 25.213-12.786 34.982z"
        fill="#bdced6"
        data-original="#000000"
        xmlns="http://www.w3.org/2000/svg"
    />
</svg>`;

const speakerMutedSvg = `<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="20"
    height="20"
    >
    <path
        d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"
        fill="#bdced6"
        data-original="#000000"
    />
</svg>`;

const deleteSvg = `<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="20"
    height="20"
    style="pointer-events: none;"
    >
    <path
        d="M452.923 98.462h-98.462C354.462 44.081 310.38 0 256 0s-98.462 44.081-98.462 98.462H59.077c-13.598 0-24.615 11.018-24.615 24.615s11.018 24.615 24.615 24.615h9.846V448c.059 35.328 28.672 63.941 64 64h246.154c35.328-.059 63.941-28.672 64-64V147.692h9.846c13.598 0 24.615-11.018 24.615-24.615s-11.017-24.615-24.615-24.615zM256 49.231c27.185 0 49.231 22.046 49.231 49.231h-98.462c0-27.186 22.046-49.231 49.231-49.231zM393.846 448c0 8.153-6.617 14.769-14.769 14.769H132.923c-8.153 0-14.769-6.617-14.769-14.769V147.692h275.692V448z"
        fill="#ffffff90"
    />
    <g fill="#ffffff90">
        <path
            d="M201.846 379.077c-13.598 0-24.615-11.018-24.615-24.615V256c0-13.598 11.018-24.615 24.615-24.615s24.615 11.018 24.615 24.615v98.462c.001 13.597-11.017 24.615-24.615 24.615zM310.154 379.077c-13.598 0-24.615-11.018-24.615-24.615V256c0-13.598 11.018-24.615 24.615-24.615 13.598 0 24.615 11.018 24.615 24.615v98.462c0 13.597-11.018 24.615-24.615 24.615z"
        />
    </g>
</svg>`;
//#endregion

const dropUI = document.getElementById("dropUI");
const flipCard = document.querySelector(".flip-card");
const player = document.getElementById("player");
const trackName = document.getElementById("trackName");

const playList = document.getElementById("playList");
const inputFile = document.getElementById("files");
const volumeRange = document.getElementById("volumeRange");
const volumeIcon = document.querySelector(".volume .icon");

const randomIcon = document.getElementById("random-icon");
const playButton = document.getElementById("playButton");
const loopButton = document.getElementById("loop-button");

const progress = document.querySelector(".progress");
const progressIndicator = document.getElementById("progress-indicator");
const pointIndicator = document.getElementById("point-indicator");
const currentTime = document.getElementById("currentTime");

let loop = false;
let singleLoop = false;
let random = false;
let currentIndex = 0;
let oldVolume = 0.7;

let songs = [
    {
        id: "5f937ddb-83e7-4796-9888-faaadca175b7",
        index: 0,
        name: "Crazy - Patrick Patrikios",
        src: "music/Crazy - Patrick Patrikios.mp3",
    },
];

inputFile.addEventListener("change", (e) => {
    playFile(e.target.files[0]);
});

const playFile = (file) => {
    let fReader = new FileReader();

    fReader.onload = (e) => {
        let name = file.name.split(".")[0];
        const exist = songs.filter((item) => item.name == name);

        if (exist.length == 0) {
            const id = uuid.v4();

            const newSongs = [
                ...songs,
                {
                    id: id,
                    index: songs.length == 0 ? songs.length : songs.length,
                    name: name,
                    src: e.target.result,
                },
            ];

            songs = newSongs;
            createPlaylist();

            if (
                !document
                    .querySelector(".flip-card")
                    .classList.contains("show-list")

                    || window.innerWidth < 645
            ) {
                player.src = e.target.result;
                player.play();

                trackName.innerText = name;
                trackName.setAttribute("track-id", id);
                currentIndex = songs.length - 1;

                changePlayButtonIcon("play");
                updateProgress();
            }
        } else {
            player.src = exist[0].src;
            player.play();

            trackName.innerText = exist[0].name;
            trackName.setAttribute("track-id", exist[0].id);
            currentIndex = exist[0].index;

            changePlayButtonIcon("play");
            updateProgress();
        }
    };

    fReader.readAsDataURL(file);
};

const openFile = () => {
    inputFile.click();
}

const handleDragFileSelect = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files[0].type.split("/")[0] == "audio")
        playFile(e.dataTransfer.files[0]);

    dropUI.classList.remove("active");
    flipCard.style.pointerEvents = "all";
};

const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "copy";
};

window.ondragenter = () => {
    dropUI.classList.add("active");
    document.getElementById("flip-card").style.pointerEvents = "none";
};

window.ondragleave = () => {
    dropUI.classList.remove("active");
    document.getElementById("flip-card").style.pointerEvents = "all";
};

window.addEventListener("dragover", handleDragOver);
window.addEventListener("drop", handleDragFileSelect);

const updateVolumeRange = () => {
    const currentVolume = volumeRange.value;

    document.documentElement.style.setProperty(
        "--VOLUME-RANGE",
        `${currentVolume * 100}%`
    );

    if (currentVolume == 0) {
        volumeIcon.innerHTML = speakerMutedSvg;
    } else {
        volumeIcon.innerHTML = speakerSvg;
    }

    player.volume = currentVolume;
};

volumeRange.oninput = (e) => {
    updateVolumeRange();
};

updateVolumeRange();

const toggleMuted = () => {
    const currentVolume = volumeRange.value;

    if (currentVolume == 0) {
        volumeRange.value = oldVolume;
    } else {
        oldVolume = currentVolume;
        volumeRange.value = 0;
    }

    updateVolumeRange();
};

const showHideList = () => {
    flipCard.classList.toggle("show-list");
};

const createPlaylist = () => {
    playList.innerHTML = "";

    songs.map((song) => {
        playList.innerHTML += `<li id=${song.id} action="list-item">
            <span id="listIndex">${
                song.index < 9 ? "0" + (song.index + 1) : song.index + 1
            }</span>
            <span id="listItemName">
                ${song.name}
            </span>
            <button action="delete-btn">
                ${deleteSvg}
            </button>
        </li>`;
    });
};

createPlaylist();

playList.onclick = (e) => {
    const listItem = e.target;
    const action = listItem.getAttribute("action");

    switch (action) {
        case "list-item":
            removeListItemActive();
            listItem.classList.add("active");
            playMusic(listItem.id);
            updateProgress();
            showHideList();
            break;
        case "delete-btn":
            currentSong = songs.filter(
                (song) => song.id == trackName.getAttribute("track-id")
            );

            if (currentSong[0].id != listItem.parentElement.id)
                deleteListItem(listItem.parentElement.id);
            break;
        default:
            break;
    }
};

const removeListItemActive = () => {
    const listItems = document.querySelectorAll("#playList li");

    listItems.forEach((item) => {
        item.classList.remove("active");
    });
};

const deleteListItem = (songId) => {
    const newSongs = songs.filter((song) => song.id != songId);
    reapairSongsIndex(newSongs);
};

const reapairSongsIndex = (repairSongs) => {
    let newSongs = [];

    repairSongs.map((song, index) => {
        let i = {
            id: song.id,
            index: index,
            name: song.name,
            src: song.src,
        };

        newSongs.push(i);
    });

    songs = newSongs;
    createPlaylist();

    currentSong = songs.filter(
        (song) => song.id == trackName.getAttribute("track-id")
    );
    currentIndex = currentSong[0].index;
};

const changePlayButtonIcon = (state) => {
    if (state == "play") {
        playButton.innerHTML = pauseSvg;
        playButton.classList.add("play");
    } else if (state == "pause") {
        playButton.innerHTML = playSvg;
        playButton.classList.remove("play");
    }
};

const toggleIconPlay = () => {
    if (playButton.classList.contains("play")) {
        changePlayButtonIcon("pause");
        player.pause();
    } else {
        changePlayButtonIcon("play");
        player.play();
    }
};

const playMusic = (songId) => {
    const playSong = songs.filter((song) => song.id == songId)[0];

    trackName.innerText = playSong.name;
    trackName.setAttribute("track-id", playSong.id);
    currentIndex = playSong.index;
    player.src = playSong.src;
    player.play();

    changePlayButtonIcon("play");
    updateProgress();
};

player.src = songs[0].src;
trackName.innerText = songs[0].name;
trackName.setAttribute("track-id", songs[0].id);

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

    if (player.ended && singleLoop) {
        player.currentTime = 0;
        player.play();
    } else if (player.ended && currentIndex < songs.length - 1) {
        nextSong();
    } else if (player.ended && loop) {
        nextSong();
    } else if (player.ended) {
        changePlayButtonIcon("pause");
    }

    if (songs.length != 0) {
        removeListItemActive();
        playList.children[currentIndex].classList.add("active");
    }
};

const secondsToString = (seconds) => {
    if (!seconds.match(/^[0-9]+$/)) {
        return "00:00";
    } else {
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
    }
};

const overtake = (e) => {
    const scrubTime = (e.offsetX / progress.offsetWidth) * player.duration;

    player.currentTime = scrubTime;
    player.play();

    changePlayButtonIcon("play");
    updateProgress();
};

const nextSong = () => {
    if (songs.length == currentIndex + 1) {
        currentIndex = 0;
    } else {
        currentIndex += 1;
    }

    trackName.innerText = songs[currentIndex].name;
    trackName.setAttribute("track-id", songs[currentIndex].id);

    player.src = songs[currentIndex].src;
    player.play();

    changePlayButtonIcon("play");
    updateProgress();
};

const prevSong = () => {
    if (currentIndex == 0) {
        currentIndex = songs.length - 1;
    } else {
        currentIndex -= 1;
    }

    trackName.innerText = songs[currentIndex].name;
    trackName.setAttribute("track-id", songs[currentIndex].id);

    player.src = songs[currentIndex].src;
    player.play();

    changePlayButtonIcon("play");
    updateProgress();
};

const loopIconClick = () => {
    if (loopButton.classList.contains("active-loop")) {
        loopButton.classList.add("active-single-loop");
        loopButton.classList.remove("active-loop");
        loop = false;
        singleLoop = true;
    } else if (loopButton.classList.contains("active-single-loop")) {
        loopButton.classList.remove("active-single-loop");
        loopButton.classList.remove("active");
        singleLoop = false;
    } else {
        loopButton.classList.add("active-loop");
        loopButton.classList.add("active");
        loop = true;
    }
};

const listRandom = () => {
    randomIcon.classList.toggle("active");
    random = random == false ? true : false;

    if (random === true) {
        const randomSongs = songs.sort(() => Math.random() - 0.5);
        songs = randomSongs;
    } else {
        songs.sort(orderSongs);
    }

    reapairSongsIndex(songs);
};

function orderSongs(a, b) {
    const songA = a.name.toUpperCase();
    const songB = b.name.toUpperCase();

    let comparisson = 0;

    if (songA > songB) {
        comparisson = 1;
    } else if (songA < songB) {
        comparisson = -1;
    }

    return comparisson;
}

let canvas,
    source,
    context,
    analyser,
    fbcArray,
    bars,
    barX,
    barWidth,
    barHeight;

document.addEventListener("click", () => {
    context.resume().then(() => {
        console.log("Playback resumed successfully");
    });
});

const initMP3Player = () => {
    context = new AudioContext();

    context.resume().then(() => {
        console.log("Playback resumed successfully");
    });

    analyser = context.createAnalyser();

    canvas = document.getElementById("analyser-render");
    ctx = canvas.getContext("2d");

    source = context.createMediaElementSource(player);
    source.connect(analyser);
    analyser.connect(context.destination);

    frameLooper();
};

const frameLooper = () => {
    window.requestAnimationFrame(frameLooper);
    fbcArray = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(fbcArray);

    let gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0.3, "#f7721a");
    gradient.addColorStop(0.6, "#e0ea6c");
    gradient.addColorStop(1, "#32fb1b");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = gradient;

    if (!ctx.constructor.prototype.fillRoundedRect) {
        ctx.constructor.prototype.fillRoundedRect = function (
            xx,
            yy,
            ww,
            hh,
            rad,
            fill,
            stroke
        ) {
            if (typeof rad == "undefined") rad = 5;
            this.beginPath();
            this.moveTo(xx + rad, yy);
            this.arcTo(xx + ww, yy, xx + ww, yy + hh, 0);
            this.arcTo(xx + ww, yy + hh, xx, yy + hh, rad);
            this.arcTo(xx, yy + hh, xx, yy, rad);
            this.arcTo(xx, yy, xx + ww, yy, 0);
            if (stroke) this.stroke();
            if (fill || typeof fill == "undefined") this.fill();
        };
    }

    bars = 17;

    for (let i = 0; i < bars; i++) {
        barX = i * 17.85;
        barWidth = 14.5;
        barHeight = -(fbcArray[i] / 2);
        ctx.fillRoundedRect(barX, canvas.height, barWidth, barHeight, 5);
    }
};

window.addEventListener("load", initMP3Player);

function drawPolygon(ctx, pts, radius) {
    if (radius > 0) {
        pts = getRoundedPoints(pts, radius);
    }
    var i,
        pt,
        len = pts.length;
    ctx.beginPath();
    for (i = 0; i < len; i++) {
        pt = pts[i];
        if (i == 0) {
            ctx.moveTo(pt[0], pt[1]);
        } else {
            ctx.lineTo(pt[0], pt[1]);
        }
        if (radius > 0) {
            ctx.quadraticCurveTo(pt[2], pt[3], pt[4], pt[5]);
        }
    }
    ctx.closePath();
}

function getRoundedPoints(pts, radius) {
    var i1,
        i2,
        i3,
        p1,
        p2,
        p3,
        prevPt,
        nextPt,
        len = pts.length,
        res = new Array(len);
    for (i2 = 0; i2 < len; i2++) {
        i1 = i2 - 1;
        i3 = i2 + 1;
        if (i1 < 0) {
            i1 = len - 1;
        }
        if (i3 == len) {
            i3 = 0;
        }
        p1 = pts[i1];
        p2 = pts[i2];
        p3 = pts[i3];
        prevPt = getRoundedPoint(p1[0], p1[1], p2[0], p2[1], radius, false);
        nextPt = getRoundedPoint(p2[0], p2[1], p3[0], p3[1], radius, true);
        res[i2] = [prevPt[0], prevPt[1], p2[0], p2[1], nextPt[0], nextPt[1]];
    }
    return res;
}

function getRoundedPoint(x1, y1, x2, y2, radius, first) {
    var total = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)),
        idx = first ? radius / total : (total - radius) / total;
    return [x1 + idx * (x2 - x1), y1 + idx * (y2 - y1)];
}

progress.addEventListener("click", overtake);

setInterval(() => {
    updateProgress();
}, 1000);
