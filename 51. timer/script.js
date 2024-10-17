const timeText = document.querySelector('#timeText')
const playBtn = document.querySelector('#playBtn')
const pauseBtn = document.querySelector('#pauseBtn')
const resetBtn = document.querySelector('#resetBtn')

let startTime = 0
let accumulatedTimeBeforePause = 0
let animationFame = null


playBtn.addEventListener('click', startTimer)
pauseBtn.addEventListener('click', pauseTimer)
resetBtn.addEventListener('click', resetTimer)

function startTimer() {
    playBtn.disabled = true
    resetBtn.disabled = true
    pauseBtn.disabled = false
    startTime = Date.now()
    updateTimer()
}

function updateTimer() {
    const milliseconds = Date.now() - startTime + accumulatedTimeBeforePause
    const seconds = Math.floor(milliseconds / 1000)
    const minutes = Math.floor(seconds / 60)

    const millisecondsText = formatNumber(milliseconds, 3)
    const secondsText = formatNumber((seconds % 60), 2)
    const minutesText = formatNumber(minutes, 2)
    timeText.innerText = `${minutesText}:${secondsText}:${millisecondsText}`
    animationFame = requestAnimationFrame(updateTimer)
}

function formatNumber(number, digitsCount) {
    number = String(number)
    if(number.length >= digitsCount) {
        return number.slice(0, digitsCount)
    }
    return number.padStart(digitsCount, '0')
}

function pauseTimer() {
    playBtn.disabled = false;
    pauseBtn.disabled = true;
    resetBtn.disabled = false

    accumulatedTimeBeforePause += Date.now() - startTime
    cancelAnimationFrame(animationFame)
}

function resetTimer() {
    playBtn.disabled = false;
    pauseBtn.disabled = true;
    resetBtn.disabled = true

    startTime = 0
    accumulatedTimeBeforePause = 0
    timeText.innerText = '00:00:000'
}