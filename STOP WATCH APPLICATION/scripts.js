let startTime = 0;
let elapsedTime = 0;
let stopwatchInterval;
let running = false;

const stopwatchDisplay = document.getElementById('stopwatch');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const lapsContainer = document.getElementById('laps');

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', recordLap);

function startStop() {
    if (!running) {
        startTime = Date.now() - elapsedTime;
        stopwatchInterval = setInterval(updateDisplay, 10);
        startStopBtn.textContent = 'Stop';
        startStopBtn.style.backgroundColor = '#dc3545';
        running = true;
    } else {
        clearInterval(stopwatchInterval);
        elapsedTime = Date.now() - startTime;
        startStopBtn.textContent = 'Start';
        startStopBtn.style.backgroundColor = '#28a745';
        running = false;
    }
}

function reset() {
    clearInterval(stopwatchInterval);
    startTime = 0;
    elapsedTime = 0;
    stopwatchDisplay.textContent = '00:00:00.00';
    startStopBtn.textContent = 'Start';
    startStopBtn.style.backgroundColor = '#28a745';
    running = false;
    lapsContainer.innerHTML = '';
}

function recordLap() {
    if (running) {
        const lapTime = document.createElement('div');
        lapTime.textContent = stopwatchDisplay.textContent;
        lapsContainer.appendChild(lapTime);
    }
}

function updateDisplay() {
    elapsedTime = Date.now() - startTime;
    const time = new Date(elapsedTime);

    const minutes = time.getUTCMinutes().toString().padStart(2, '0');
    const seconds = time.getUTCSeconds().toString().padStart(2, '0');
    const milliseconds = time.getUTCMilliseconds().toString().padStart(3, '0').slice(0, 2);

    stopwatchDisplay.textContent = `${minutes}:${seconds}.${milliseconds}`;
}
