const textElement = document.querySelector('.text-holder')
const stringToRender = textElement.innerText
const rateEl = document.querySelector('#rate')

const INTERVAL = 500;
let rate = 1
let sliceEnd = 1

function main() {
    let interval = setInterval(updateTime, INTERVAL / rate)

    rateEl.addEventListener('change', (e) => {
        rate = +e.target.value
        clearInterval(interval)
        interval = setInterval(updateTime, INTERVAL / rate)
    })
    
    
}

function updateTime() {
    if (sliceEnd > stringToRender.length) {
        sliceEnd = 1
    }
    textElement.innerText = stringToRender.slice(0, sliceEnd)
    sliceEnd += 1
}

main()