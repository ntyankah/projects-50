const toggleBtn = document.querySelector('.toggle-btn')
const body = document.querySelector('body')
const minuteHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')
const secondHand = document.querySelector('.seconds-hand')
const timeLabel = document.querySelector('.current-time')
const dateLabel = document.querySelector('.current-date')

const daysOfWeek = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']
const monthOfYear = ['JANUARY', 'FABRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']

function main() {
    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark')
    })

    updateClockInfo()
    setInterval(updateClockInfo, 1000)
}

function updateClockInfo() {
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    const day = daysOfWeek[now.getDay()]
    const month = monthOfYear[now.getMonth()]
    const date = now.getDate()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const ampm = hours >= 12 ? 'PM': 'AM'


    hourHand.style.transform = `rotate(${mapRange(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteHand.style.transform = `rotate(${mapRange(minutes, 0, 59, 0, 360)}deg)`
    secondHand.style.transform = `rotate(${mapRange(seconds, 0, 59, 0, 360)}deg)`
    timeLabel.innerText = `${hoursForClock}:${minutes} ${ampm}`
    dateLabel.innerHTML = `${day}, ${month} <span class="current-day">${date}</span>`

}

function mapRange(value, inMin, inMax, outMin, outMax) {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
  

main()