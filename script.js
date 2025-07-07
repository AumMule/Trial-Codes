let totalSeconds = 1500;
let timer = document.querySelector(".pomodoro-timer h1");
let startBtn = document.querySelector(".start-timer");
let pauseBtn = document.querySelector(".pause-timer");
let resetBtn = document.querySelector(".reset-timer");

let isOn = false;
let timerId; // store the interval ID here

function updateTime() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    timer.innerHTML = `${minutes}:${seconds}`;
}

startBtn.addEventListener("click", () => {
    if (!isOn) {
        timerId = setInterval(() => {
            totalSeconds--;
            updateTime();

            if (totalSeconds <= 0) {
                clearInterval(timerId);
                isOn = false;
            }
        }, 1000);
        isOn = true;
    }
});

pauseBtn.addEventListener("click", () => {
    if (isOn) {
        clearInterval(timerId);
        isOn = false;
    }
});


resetBtn.addEventListener("click",()=>{
    if(!isOn){
        clearInterval(timerId);
        totalSeconds=1500;
        updateTime();
    }
});