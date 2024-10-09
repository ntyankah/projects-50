const button = document.querySelector('.btn')

function main() {
    button.addEventListener('click', (e) => {
        const x = e.clientX
        const y = e.clientY

        const buttonBox = e.target.getBoundingClientRect()
        const buttonTop = buttonBox.top
        const buttonLeft = buttonBox.left

        console.log(`mouseX: ${x}. mouseY: ${y}, buttonLeft: ${buttonLeft}, buttonTop: ${buttonTop}`)
        const centerX = x - buttonLeft
        const centerY = y - buttonTop
        console.log(`centerLeft: ${centerX}, centerTop: ${centerY}`)
        console.log('')
        
        const pulser = document.createElement('span')
        pulser.style.top = centerY + 'px'
        pulser.style.left = centerX + 'px'
        // pulser.style.transform = `translate(-50%, -50%)`
        pulser.classList.add('pulser')
        button.appendChild(pulser)
        setTimeout(() => pulser.remove(), 1000)
    })
}

main()