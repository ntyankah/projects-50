const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive += 1
    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    updateDom()
})

prev.addEventListener('click', () => {
    currentActive -= 1
    if (currentActive < 1) {
        currentActive = 1
    }

    updateDom()
})


function updateDom() {
    for (let i = 0; i < circles.length; i++) {
        const circle = circles[i]
        if (i < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    }

    const actives = document.querySelectorAll('.active')
    const progressWidth = ((actives.length - 1) / (circles.length - 1)) * 100
    progress.style.width = `${progressWidth}%`
    if (currentActive == 1) {
        prev.disabled = true
    } else if (currentActive == circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}