let timer;
let minutes = 10;
let seconds = 0;
let isRunning = false;

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (seconds === 0) {
        if (minutes === 0) {
            playAlarm();
            resetTimer();
        } else {
            minutes--;
            seconds = 59;
        }
    } else {
        seconds--;
    }

    document.getElementById('timer').textContent = formatTime(minutes, seconds);
}

function playAlarm() {
    let alarm = document.getElementById('alarm-sound');
    alarm.play();
}

function resetTimer() {
    minutes = 10;
    seconds = 0;
    document.getElementById('timer').textContent = formatTime(minutes, seconds);
    isRunning = false;
}

function formatTime(min, sec) {
    return (min < 10 ? '0' : '') + min + ':' + (sec < 10 ? '0' : '') + sec;
}
