const welder = document.getElementById('welder')
const countBox = document.getElementById('count-box')


function main() {
    let counter = 1
    let blur = 30
    let opacity = 1
    const interval = setInterval(() => {
        counter += 1
        if (counter == 101) {
            welder.style.filter = `blur(0px)`
            countBox.style.opacity = '0'
            return clearInterval(interval)
        }
        blur -= 0.3
        opacity -= 0.01
        welder.style.filter = `blur(${blur}px)`
        countBox.innerHTML = `${counter}%`
        countBox.style.opacity = `${opacity}`
    }, 30)
}

main()